jest.mock('./members')

var requester = require('../requester/index')
var common = require('../common/index')
var queues = require('./queues')
var members = require('./members/index')
var { Response } = require('node-fetch')

describe('queues', function () {
  var accountId = 'accountId'
  var authToken = 'authToken'
  var queueId = 'QU543253452934582304582340958234096823495'
  describe('queues#get', function () {
    it('should call requester#get with the path', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      expect.assertions(1)
      return queues(accountId, authToken).get(queueId).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Queues/' + queueId, {})
      })
    })
    describe('on success', function () {
      it('should return the response payload', function () {
        var expectedPayload = {mock: 'queue'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return queues().get().then(function (result) {
          expect(result).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 999
        var statusText = 'Failure Reason'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return queues().get(queueId).catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve queue ' + queueId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('queues#update', function () {
    it('should call requester#post with the path and body', function () {
      var postMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.POST = postMock

      var options = {alias: 'queue alias', maxSize: 444}
      expect.assertions(1)
      return queues(accountId, authToken).update(queueId, options).then(function () {
        expect(postMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Queues/' + queueId, options)
      })
    })
    describe('on success', function () {
      it('should return the response payload', function () {
        var expectedPayload = {mock: 'queue'}
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return queues().update().then(function (result) {
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
        var statusText = 'Failure Reason'
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return queues().update(queueId).catch(function (error) {
          expect(error).toEqual(Error('Could not update queue ' + queueId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('queues#getList', function () {
    it('should call requester#get with the path and query parameters', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      var filters = {alias: 'Alias'}
      expect.assertions(1)
      return queues(accountId, authToken).getList(filters).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Queues', filters)
      })
    })
    describe('on success', function () {
      it('should return the response payload', function () {
        var expectedPayload = {mock: 'queue list'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return queues().getList().then(function (result) {
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
        var statusText = 'Failure Reason'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return queues().getList().catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve queue list (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('queues#getNextPage', function () {
    var nextPageUri = '/Accounts/AC212341235123412354/Queues?cursor=32412351342135245'
    var errorMsg = 'Could not retrieve queue list'
    it('should call commonGetBuilder with the credentials, nextPageUri, query, and errorMsg', function () {
      var innerMock = jest.fn().mockReturnValue(Promise.resolve({}))
      var getMock = jest.fn().mockReturnValue(innerMock)
      common.commonGetBuilder = getMock

      expect.assertions(2)
      return queues(accountId, authToken).getNextPage(nextPageUri).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken)
        expect(innerMock).toHaveBeenCalledWith(nextPageUri, null, errorMsg)
      })
    })
  })
  describe('queues#create', function () {
    it('should call requester#post with the path and body parameters', function () {
      var postMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.POST = postMock

      var options = {alias: 'New Queue', maxSize: 10}
      expect.assertions(1)
      return queues(accountId, authToken).create(options).then(function () {
        expect(postMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Queues', options)
      })
    })
    describe('on success', function () {
      it('should return the response payload', function () {
        var expectedPayload = {mock: 'created queue'}
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return queues().create().then(function (result) {
          expect(result).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 488
        var statusText = 'Failure Reason'
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return queues().create().catch(function (error) {
          expect(error).toEqual(Error('Could not create queue (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('queues#members', function () {
    it('should call the member factory with the accountId, authToken, and queueId', function () {
      queues(accountId, authToken).members(queueId)
      expect(members).toHaveBeenCalledWith(accountId, authToken, queueId)
    })
  })
})
