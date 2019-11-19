var requester = require('../requester/index')
var common = require('../common/index')
var callingNumbers = require('./callingNumbers')
var { Response } = require('node-fetch')

describe('callingNumbers', function () {
  var accountId = 'AccountId'
  var authToken = 'AuthToken'
  var callingNumberId = 'PN1412351235'
  describe('callingNumbers#get', function () {
    it('should call requester#get with the path', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      expect.assertions(1)
      return callingNumbers(accountId, authToken).get(callingNumberId).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/CallingNumbers/' + callingNumberId, {})
      })
    })
    describe('on success', function () {
      it('should return the payload', function () {
        var expectedPayload = {mock: 'payload'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return callingNumbers().get().then(function (resp) {
          expect(resp).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 313
        var statusText = 'Message'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return callingNumbers().get(callingNumberId).catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve calling number ' + callingNumberId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('callingNumbers#update', function () {
    it('should call requester#post with the path to the calling number and the body', function () {
      var options = {alias: 'new calling number alias'}
      var postMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.POST = postMock

      expect.assertions(1)
      return callingNumbers(accountId, authToken).update(callingNumberId, options).then(function (result) {
        expect(postMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/CallingNumbers/' + callingNumberId, options)
      })
    })
    describe('on success', function () {
      it('returns the payload', function () {
        var expectedPayload = {mock: 'payload'}
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return callingNumbers().update().then(function (result) {
          expect(result).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 423
        var statusText = 'mock status'
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))
          
        expect.assertions(1)
        return callingNumbers().update(callingNumberId).catch(function (error) {
          expect(error).toEqual(Error('Could not update calling number ' + callingNumberId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('callingNumbers#getList', function () {
    it('should call requester#get with the path and query parameters', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      var options = {phoneNumber: '+13242342345', alias: '(434) 245-5466'}
      expect.assertions(1)
      return callingNumbers(accountId, authToken).getList(options).then(function (list) {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/CallingNumbers', options)
      })
    })
    describe('on success', function () {
      it('should return the json payload', function () {
        var expectedPayload = {mock: 'payload'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return callingNumbers().getList().then(function (result) {
          expect(result).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'some message'
        }
        var status = 502
        var statusText = 'Bad Gateway'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))
        
        expect.assertions(1)
        return callingNumbers().getList().catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve calling number list (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('callingNumbers#getNextPage', function () {
    var nextPageUri = '/Accounts/AC2312451234123/CallingNumbers?cursor=234123512351234'
    var errorMsg = 'Could not retrieve calling number list'
    it('should call commonGetBuilder with the credentials, nextPageUri, query, and errorMsg', function () {
      var innerMock = jest.fn().mockReturnValue(Promise.resolve({}))
      var getMock = jest.fn().mockReturnValue(innerMock)
      common.commonGetBuilder = getMock

      expect.assertions(2)
      return callingNumbers(accountId, authToken).getNextPage(nextPageUri).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken)
        expect(innerMock).toHaveBeenCalledWith(nextPageUri, null, errorMsg)
      })
    })
  })
  describe('callingNumbers#create', function () {
    it('should call requester#post with the path and body', function () {
      var postMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.POST = postMock

      var phoneNumber = '+12341234423'
      var options = {alias: 'New alias'}
      var combinedBody = {phoneNumber: phoneNumber, alias: options.alias}
      expect.assertions(1)
      return callingNumbers(accountId, authToken).create(phoneNumber, options).then(function (resp) {
        expect(postMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/CallingNumbers', combinedBody)
      })
    })
    describe('on success', function () {
      it('should return the payload', function () {
        var expectedPayload = {mock: 'payload'}
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return callingNumbers().create().then(function (response) {
          expect(response).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'from fc'
        }
        var status = 424
        var statusText = 'Bad Request'
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        var phoneNumber = '+132345436'
        expect.assertions(1)
        return callingNumbers().create(phoneNumber).catch(function (error) {
          expect(error).toEqual(Error('Could not add calling number ' + phoneNumber + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('callingNumbers#delete', function () {
    it('should call requester#delete with the path', function () {
      var deleteMock = jest.fn().mockResolvedValue(new Response())
      requester.DELETE = deleteMock

      expect.assertions(1)
      return callingNumbers(accountId, authToken).delete(callingNumberId).then(function () {
        expect(deleteMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/CallingNumbers/' + callingNumberId)
      })
    })
    describe('on success', function () {
      it('should return null', function () {
        requester.DELETE = jest.fn().mockResolvedValue(new Response())

        expect.assertions(1)
        return callingNumbers().delete().then(function (result) {
          expect(result).toBe(null)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 433
        var statusText = 'Bad Request'
        requester.DELETE = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return callingNumbers().delete(callingNumberId).catch(function (error) {
          expect(error).toEqual(Error('Could not delete calling number ' + callingNumberId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
})
