var requester = require('../requester/index')
var common = require('../common/index')
var messages = require('./messages')
var { Response } = require('node-fetch')

describe('messages', function () {
  var accountId = 'accountId'
  var authToken = 'authToken'
  var messageId = 'SM1313513513512351234123523463456345634573476435734745367'
  describe('messages#get', function () {
    it('should call requester#get with the path', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      expect.assertions(1)
      return messages(accountId, authToken).get(messageId).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Messages/' + messageId, {})
      })
    })
    describe('on success', function () {
      it('should return the response payload', function () {
        var expectedPayload = {mock: 'message'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return messages().get().then(function (response) {
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
        var statusText = 'Bad Id'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return messages().get(messageId).catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve message ' + messageId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('messages#getList', function () {
    it('should call requester#get with the path and query parameters', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      var filters = {to: '+12228883943', from: '+28374958534', dateSent: '2018-01-03 09:34:13'}
      expect.assertions(1)
      return messages(accountId, authToken).getList(filters).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Messages', filters)
      })
    })
    describe('on success', function () {
      it('should return the payload', function () {
        var expectedPayload = {mock: 'messageList'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return messages().getList().then(function (response) {
          expect(response).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 499
        var statusText = 'Bad Request'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))
        
        expect.assertions(1)
        return messages().getList().catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve message list (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('messages#getNextPage', function () {
    var nextPageUri = '/Accounts/AC32142315123412353/Messages?cursor=2341235123412351234'
    var errorMsg = 'Could not retrieve message list'
    it('should call commonGetBuilder with the credentials, nextPageUri, query, and errorMsg', function () {
      var innerMock = jest.fn().mockResolvedValue({})
      var getMock = jest.fn().mockReturnValue(innerMock)
      common.commonGetBuilder = getMock

      expect.assertions(2)
      return messages(accountId, authToken).getNextPage(nextPageUri).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken)
        expect(innerMock).toHaveBeenCalledWith(nextPageUri, null, errorMsg)
      })
    })
  })
  describe('messages#create', function () {
    it('should call requester#post with the path and body', function () {
      var postMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.POST = postMock

      var from = '+13334445555'
      var to = '+10009994856'
      var text = 'Test Text Message'
      expect.assertions(1)
      return messages(accountId, authToken).create(from, to, text).then(function () {
        expect(postMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Messages', {from: from, to: to, text: text})
      })
    })
    describe('on success', function () {
      it('should return the payload', function () {
        var expectedPayload = {mock: 'new message'}
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return messages().create().then(function (result) {
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
        var statusText = 'failure reason'
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return messages().create().catch(function (error) {
          expect(error).toEqual(Error('Could not create message (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
})
