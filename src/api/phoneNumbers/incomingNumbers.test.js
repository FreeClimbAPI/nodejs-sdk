jest.mock('../requester')
var incomingNumbers = require('./incomingNumbers')
var requester = require('../requester/index')
var common = require('../common/index')
var { Response } = require('node-fetch')

describe('incomingNumbers', function () {
  var accountId = 'mock_account_id'
  var authToken = 'mock_account_token'
  var incomingNumberId = 'mock_application_id'
  var phoneNumber = '+13234323534'
  describe('incomingNumbers#get', function () {
    it('should call requester#get with the authentication, path, and no query', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      expect.assertions(1)
      return incomingNumbers(accountId, authToken).get(incomingNumberId).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/IncomingPhoneNumbers/' + incomingNumberId, {})
      })
    })
    describe('on success', function () {
      it('should return the matching incoming number', function () {
        var expectedResponse = {mock: 'incoming_number'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedResponse)))

        expect.assertions(1)
        return incomingNumbers().get().then(function (number) {
          expect(number).toEqual(expectedResponse)
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
        var incomingNumberId = 'mock_id'

        expect.assertions(1)
        return incomingNumbers().get(incomingNumberId).catch(function (resp) {
          expect(resp).toEqual(Error('Could not retrieve incoming number ' + incomingNumberId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(message)))
        })
      })
    })
  })
  describe('incomingNumbers#update', function () {
    it('should call fetch post with the path to a specific incoming number and the body', function () {
      var postMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.POST = postMock
      var options = {applicationId: 'AP12312323', alias: 'some alias'}

      expect.assertions(1)
      return incomingNumbers(accountId, authToken).update(incomingNumberId, options).then(function (incomingNumber) {
        expect(postMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/IncomingPhoneNumbers/' + incomingNumberId, options)
      })
    })
    describe('on success', function () {
      it('should return the json payload', function () {
        var expectedPayload = {mock: 'mock payload'}
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return incomingNumbers().update().then(function (result) {
          expect(result).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          status: '400',
          message: 'Could not update incoming number'
        }
        var status = 400
        var statusText = 'Test Error'
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))
        
        expect.assertions(1)
        return incomingNumbers().update(incomingNumberId).catch(function (error) {
          expect(error).toEqual(Error('Could not update incoming number ' + incomingNumberId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('incomingNumbers#getList', function () {
    it('should call requester get with the path to get the list of incoming numbers and the query params', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      var filter = {phoneNumber: '^\\+1[0-9]{3}3243$', alias: '(123) 324-5843'}

      expect.assertions(1)
      return incomingNumbers(accountId, authToken).getList(filter).then(function (list) {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/IncomingPhoneNumbers', filter)
      })
    })
    describe('on success', function () {
      it('should return the json payload', function () {
        var expectedPayload = {mock: 'mock_payload'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return incomingNumbers().getList().then(function (payload) {
          expect(payload).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          status: 'status',
          message: 'message'
        }
        var status = 392
        var statusText = 'Mock Error'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return incomingNumbers().getList().catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve incoming number list (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('incomingNumbers#getNextPage', function () {
    var nextPageUri = '/Accounts/AC32141235124325/IncomingPhoneNumbers?cursor=12341235213421353241'
    var errorMsg = 'Could not retrieve incoming number list'
    it('should call commonGetBuilder with the credentials, nextPageUri, query, and errorMsg', function () {
      var innerMock = jest.fn().mockReturnValue(Promise.resolve({}))
      var getMock = jest.fn().mockReturnValue(innerMock)
      common.commonGetBuilder = getMock

      expect.assertions(2)
      return incomingNumbers(accountId, authToken).getNextPage(nextPageUri).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken)
        expect(innerMock).toHaveBeenCalledWith(nextPageUri, null, errorMsg)
      })
    })
  })
  describe('incomingNumbers#purchase', function () {
    it('should call requester post with the path and body params', function () {
      var postMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.POST = postMock
      var options = {alias: '1 (323) 432 3534', applicationId: 'AP123413231231234a23513453523523452345'}
      var combinedBody = {phoneNumber: phoneNumber, alias: options.alias, applicationId: options.applicationId}

      expect.assertions(1)
      return incomingNumbers(accountId, authToken).purchase(phoneNumber, options).then(function (incomingNumber) {
        expect(postMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/IncomingPhoneNumbers', combinedBody)
      })
    })
    describe('on success', function () {
      it('should return the json payload', function () {
        var expectedPayload = {mock: 'expectedPayload'}
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return incomingNumbers().purchase(phoneNumber).then(function (payload) {
          expect(payload).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          error: 'this is the error body from fc'
        }
        var status = 943
        var statusText = 'mock error text'
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return incomingNumbers().purchase(phoneNumber).catch(function (error) {
          expect(error).toEqual(Error('Could not purchase incoming number ' + phoneNumber + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('incomingNumbers#delete', function () {
    it('should call requester#delete with the path', function () {
      var deleteMock = jest.fn().mockResolvedValue(new Response())
      requester.DELETE = deleteMock

      expect.assertions(1)
      return incomingNumbers(accountId, authToken).delete(incomingNumberId).then(function (res) {
        expect(deleteMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/IncomingPhoneNumbers/' + incomingNumberId)
      })
    })
    describe('on success', function () {
      it('should return null', function () {
        requester.DELETE = jest.fn().mockResolvedValue(new Response())

        expect.assertions(1)
        return incomingNumbers().delete().then(function (result) {
          expect(result).toBeNull()
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'this is the message from fc'
        }
        var status = 500
        var statusText = 'MOCK_ERROR'
        requester.DELETE = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))
        
        expect.assertions(1)
        return incomingNumbers().delete(incomingNumberId).catch(function (error) {
          expect(error).toEqual(Error('Could not delete incoming number ' + incomingNumberId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
})
