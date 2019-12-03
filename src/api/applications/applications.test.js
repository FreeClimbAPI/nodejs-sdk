jest.mock('../requester')

var applications = require('./applications')
var requester = require('../requester/index')
var { Response } = require('node-fetch')

describe('applications', function () {
  var accountId = 'mock_account_id'
  var authToken = 'mock_auth_token'
  var applicationId = 'mock_application_id'

  describe('applications#get', function () {
    it('should call fetch get with the path to a specific application', function () {
      var getMock = jest.fn().mockResolvedValue(Promise.resolve(new Response('{}')))
      requester.GET = getMock

      expect.assertions(1)
      return applications(accountId, authToken).get(applicationId).then(function (application) {
        expect(getMock).toBeCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Applications/' + applicationId, {})
      })
    })
    describe('on success', function () {
      it('should return the application with the matching application ID', function () {
        var expectedResponse = {mock: 'application_id'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedResponse)))

        expect.assertions(1)
        return applications().get().then(function (application) {
          expect(application).toEqual(expectedResponse)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error message', function () {
        var message = {
          status: '400',
          message: 'could not parse your request'
        }
        var status = 400
        var statusText = 'Bad Request'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(message), {status, statusText}))
       
        expect.assertions(1)
        return applications().get(applicationId).catch(function (resp) {
          expect(resp).toEqual(Error('Could not retrieve application ' + applicationId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(message)))
        })
      })
    })
  })
  describe('applications#update', function () {
    it('should call fetch post with the path to a specific application and the body', function () {
      var postMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.POST = postMock
      var body = {alias: 'application Alias', voiceUrl: 'http://something'}

      expect.assertions(1)
      return applications(accountId, authToken).update(applicationId, body).then(function (application) {
        expect(postMock).toBeCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Applications/' + applicationId, body)
      })
    })
    describe('on success', function () {
      it('should return the application with the updated fields', function () {
        var expectedResponse = {updateApplication: 'mockResponse'}
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedResponse)))

        expect.assertions(1)
        return applications().update().then(function (response) {
          expect(response).toEqual(expectedResponse)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          status: '305',
          message: 'some message about a redirect I guess?'
        }
        var status = 305
        var statusText = 'Use Proxy'
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))
         
        expect.assertions(1)
        return applications().update(applicationId).catch(function (error) {
          expect(error).toEqual(Error('Could not update application ' + applicationId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('applications#getList', function () {
    it('should call requester#get with the path to the list of applications and the given options', function () {
      var getMock = jest.fn().mockResolvedValue(Promise.resolve(new Response('{}')))
      requester.GET = getMock
      var options = {alias: 'this alias'}

      expect.assertions(1)
      return applications(accountId, authToken).getList(options).then(function (response) {
        expect(getMock).toBeCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Applications', options)
      })
    })
    describe('on success', function () {
      it('should return the result of calling .json() on the response', function () {
        var expectedResult = 'MOCK_APPLICATION_LIST'
        requester.GET = jest.fn().mockResolvedValue(new Response(expectedResult))

        expect.assertions(1)
        return applications('', '').getList().then(function (result) {
          expect(result).toEqual(expectedResult)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error message', function () {
        var body = {
          status: '312',
          message: 'something'
        }
        var status = 312
        var statusText = 'Permanent Redirect'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))
         
        expect.assertions(1)
        return applications().getList().catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve application list (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('applications#getNextPage', function () {
    var mockNextPageUri = '/Accounts/accountId/Applications?cursor=524532452352345235345'
    it('should call requester#get with the given url', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      expect.assertions(1)
      return applications(accountId, authToken).getNextPage(mockNextPageUri).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, mockNextPageUri, null)
      })
    })
    describe('on success', function () {
      it('should return the next page', function () {
        var expectedPage = {page: 1, numPages: 2}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPage)))

        expect.assertions(1)
        return applications().getNextPage().then(function (response) {
          expect(response).toEqual(expectedPage)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'no 2nd page'
        }
        var status = 434
        var statusText = 'Bad Pagination'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return applications().getNextPage().catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve application list (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('applications#create', function () {
    it('should call requester#post with the correct path and the given options', function () {
      var postMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.POST = postMock
      var options = {
        alias: 'Test Application',
        voiceUrl: 'http://www.test.url',
        voiceFallbackUrl: 'http://www.fallback.url',
        callConnectUrl: 'http://www.call.connect',
        statusCallbackUrl: 'http://www.status.url'
      }

      expect.assertions(1)
      return applications(accountId, authToken).create(options).then(function (application) {
        expect(postMock).toBeCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Applications', options)
      })
    })
    describe('on success', function () {
      it('should call .json() on the response', function () {
        var expectedPayload = {mock: 'Application'}
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return applications().create().then(function (response) {
          expect(response).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error message', function () {
        var body = {
          status: 200,
          message: 'it is fine'
        }
        var status = 300
        var statusText = 'Multiple Choices'
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))
        
        expect.assertions(1)
        return applications().create().catch(function (error) {
          expect(error).toEqual(Error('Could not create application (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('applications#delete', function () {
    it('should call requester#delete with the correct path', function () {
      var deleteMock = jest.fn().mockResolvedValue(new Response())
      requester.DELETE = deleteMock

      expect.assertions(1)
      return applications(accountId, authToken).delete(applicationId).then(function (response) {
        expect(deleteMock).toBeCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Applications/' + applicationId)
      })
    })
    describe('on success', function () {
      it('should return null', function () {
        requester.DELETE = jest.fn().mockResolvedValue(new Response())
        expect.assertions(1)
        return applications().delete().then(function (response) {
          expect(response).toBe(null)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error message', function () {
        var body = {
          status: 233,
          message: 'something else'
        }
        var status = 451
        var statusText = 'Unavailable For Legal Reasons'
        requester.DELETE = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return applications().delete(applicationId).catch(function (error) {
          expect(error).toEqual(Error('Could not delete application ' + applicationId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
})
