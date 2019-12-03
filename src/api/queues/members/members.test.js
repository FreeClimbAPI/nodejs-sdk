var requester = require('../../requester/index')
var common = require('../../common/index')
var members = require('./members')
var { Response } = require('node-fetch')

describe('members', function () {
  var accountId = 'accountId'
  var authToken = 'authToken'
  var queueId = 'QU2345234523496023468230495845'
  var memberId = 'CA234123597123495832745352345'
  describe('members#get', function () {
    it('should call requester#get with the path', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      expect.assertions(1)
      return members(accountId, authToken, queueId).get(memberId).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Queues/' + queueId + '/Members/' + memberId, {})
      })
    })
    describe('on success', function () {
      it('should return the response payload', function () {
        var expectedPayload = {mock: 'payload'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return members().get().then(function (result) {
          expect(result).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 455
        var statusText = 'some error'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return members().get(memberId).catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve member ' + memberId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('members#getFront', function () {
    it('should call requester#get with the path', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      expect.assertions(1)
      return members(accountId, authToken, queueId).getFront().then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Queues/' + queueId + '/Members/Front', {})
      })
    })
    describe('on success', function () {
      it('should return the response payload', function () {
        var expectedPayload = {mock: 'queue member'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return members().getFront().then(function (result) {
          expect(result).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 888
        var statusText = 'Failure'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return members().getFront().catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve front member (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('members#getList', function () {
    it('should call requester#get with the path', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      expect.assertions(1)
      return members(accountId, authToken, queueId).getList().then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Queues/' + queueId + '/Members', {})
      })
    })
    describe('on success', function () {
      it('should return the response payload', function () {
        var expectedPayload = {mock: 'member list'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return members().getList().then(function (result) {
          expect(result).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 444
        var statusText = 'Bad Request'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return members().getList().catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve member list (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('members#getNextPage', function () {
    var nextPageUri = '/Accounts/AC3412351234235/Queues/QU124351234123524/Participants?cursor=4123512341235214235'
    var errorMsg = 'Could not retrieve member list'
    it('should call commonGetBuilder with the credentials, nextPageUri, query, and errorMsg', function () {
      var innerMock = jest.fn().mockReturnValue(Promise.resolve({}))
      var getMock = jest.fn().mockReturnValue(innerMock)
      common.commonGetBuilder = getMock

      expect.assertions(2)
      return members(accountId, authToken, queueId).getNextPage(nextPageUri).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken)
        expect(innerMock).toHaveBeenCalledWith(nextPageUri, null, errorMsg)
      })
    })
  })
  describe('members#dequeue', function () {
    it('should call requester#post with the path', function () {
      var postMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.POST = postMock

      expect.assertions(1)
      return members(accountId, authToken, queueId).dequeue(memberId).then(function () {
        expect(postMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Queues/' + queueId + '/Members/' + memberId, {})
      })
    })
    describe('on success', function () {
      it('should return the response payload', function () {
        var expectedPayload = {mock: 'member'}
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return members().dequeue().then(function (result) {
          expect(result).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 424
        var statusText = 'Error Happened'
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return members().dequeue(memberId).catch(function (error) {
          expect(error).toEqual(Error('Could not dequeue member ' + memberId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('members#dequeueFront', function () {
    it('should call requester#post with the path', function () {
      var postMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.POST = postMock

      expect.assertions(1)
      return members(accountId, authToken, queueId).dequeueFront().then(function () {
        expect(postMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Queues/' + queueId + '/Members/Front', {})
      })
    })
    describe('on success', function () {
      it('should return the response payload', function () {
        var expectedPayload = {mock: 'dequeued member'}
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return members().dequeueFront().then(function (result) {
          expect(result).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 444
        var statusText = 'Failure'
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return members().dequeueFront().catch(function (error) {
          expect(error).toEqual(Error('Could not dequeue front member (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
})
