var requester = require('../requester/index')
var calls = require('./calls')
var common = require('../common/index')
var { Response } = require('node-fetch')

describe('calls', function () {
  var accountId = 'accountId'
  var authToken = 'authToken'
  var callId = 'CA34252345234623462346234623463253246234532453245324'
  describe('calls#get', function () {
    it('should call requester#get with the path to a specific call', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      expect.assertions(1)
      return calls(accountId, authToken).get(callId).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Calls/' + callId, {})
      })
    })
    describe('on success', function () {
      it('should return the call payload', function () {
        var expectedPayload = {mock: 'call'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return calls().get().then(function (response) {
          expect(response).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 400
        var statusText = 'Bad Request'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return calls().get(callId).catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve call ' + callId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('calls#update', function () {
    it('should call requester#post with the path and the status', function () {
      var postMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.POST = postMock

      var status = 'completed'
      expect.assertions(1)
      return calls(accountId, authToken).update(callId, status).then(function () {
        expect(postMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Calls/' + callId, {status: status})
      })
    })
    describe('on success', function () {
      it('should return null', function () {
        requester.POST = jest.fn().mockResolvedValue(new Response())

        expect.assertions(1)
        return calls().update().then(function (result) {
          expect(result).toBeNull()
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 495
        var statusText = 'Bad Something'
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return calls().update(callId).catch(function (error) {
          expect(error).toEqual(Error('Could not update call ' + callId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('calls#getList', function () {
    it('should call requester#get with the correct path and parameters', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      var filters = {to: '+14344534645', status: 'noAnswer'}
      expect.assertions(1)
      return calls(accountId, authToken).getList(filters).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Calls', filters)
      })
    })
    describe('on success', function () {
      it('should return the payload', function () {
        var expectedPayload = {mock: 'call_list'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return calls().getList().then(function (result) {
          expect(result).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 499
        var statusText = 'Something'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return calls().getList().catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve call list (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('calls#getNextPage', function () {
    var nextPageUri = '/Accounts/AC231423513521/Calls?cursor=412934123418235123421341234'
    var errorMsg = 'Could not retrieve call list'
    it('should call commonGetBuilder with the credentials, nextPageUri, query, and errorMsg', function () {
      var innerMock = jest.fn().mockReturnValue(Promise.resolve({}))
      var getMock = jest.fn().mockReturnValue(innerMock)
      common.commonGetBuilder = getMock

      expect.assertions(2)
      return calls(accountId, authToken).getNextPage(nextPageUri).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken)
        expect(innerMock).toHaveBeenCalledWith(nextPageUri, null, errorMsg)
      })
    })
  })
  describe('calls#create', function () {
    it('should call requester#post with the path and body', function () {
      var postMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.POST = postMock

      var to = '+14534534345'
      var from = '+143453464345'
      var applicationId = 'AP2341353452345234523452345234623452346'
      var options = {sendDigits: '1234#', ifMachine: 'redirect', ifMachineUrl: 'http://example.com/ifMachine', timeout: 45, privacyMode: true, callConnectUrl: 'http://example.com/callConnect'}
      var expectedBody = {to: to, from: from, applicationId: applicationId, sendDigits: options.sendDigits, ifMachine: options.ifMachine, ifMachineUrl: options.ifMachineUrl, timeout: options.timeout, privacyMode: options.privacyMode, callConnectUrl: options.callConnectUrl}

      expect.assertions(1)
      return calls(accountId, authToken).create(to, from, applicationId, options).then(function () {
        expect(postMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Calls', expectedBody)
      })
    })
    describe('on success', function () {
      it('should return the response payload', function () {
        var expectedPayload = {mock: 'call'}
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return calls().create().then(function (response) {
          expect(response).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 493
        var statusText = 'Failure Cause'
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return calls().create().catch(function (error) {
          expect(error).toEqual(Error('Could not create call (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
})
