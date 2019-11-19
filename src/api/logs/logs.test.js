var requester = require('../requester/index')
var common = require('../common/index')
var logs = require('./logs')
var { Response } = require('node-fetch')

describe('logs', function () {
  var accountId = 'accountID'
  var authToken = 'authToken'
  var filters = {pql: 'level="error"'}
  describe('logs#get', function () {
    describe('When the user does not provide pql', function () {
      it('should call requester#get to the path', function () {
        var getMock = jest.fn().mockResolvedValue(new Response('{}'))
        requester.GET = getMock

        expect.assertions(1)
        return logs(accountId, authToken).get().then(function () {
          expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Logs', {})
        })
      })
      describe('on success', function () {
        it('should return the response payload', function () {
          var expectedPayload = {mock: 'log list'}
          requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

          expect.assertions(1)
          return logs().get().then(function (result) {
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
          requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

          expect.assertions(1)
          return logs().get().catch(function (error) {
            expect(error).toEqual(Error('Could not retrieve log list (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
          })
        })
      })
    })
    describe('When the user provides a pql query', function () {
      it('should call requester#post with the path and body', function () {
        var postMock = jest.fn().mockResolvedValue(new Response('{}'))
        requester.POST = postMock

        expect.assertions(1)
        return logs(accountId, authToken).get(filters).then(function () {
          expect(postMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Logs', filters)
        })
      })
      describe('on success', function () {
        it('should return the response payload', function () {
          var expectedPayload = {mock: 'filtered log list'}
          requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

          expect.assertions(1)
          return logs().get(filters).then(function (result) {
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
          var statusText = 'Status Text'
          requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))
        
          expect.assertions(1)
          return logs().get(filters).catch(function (error) {
            expect(error).toEqual(Error('Could not retrieve log list (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
          })
        })
      })
    })
  })
  describe('logs#getNextPage', function () {
    var nextPageUri = '/Accounts/AC3241123512341235/Logs?cursor=23412351234215234213'
    var errorMsg = 'Could not retrieve log list'
    it('should call commonGetBuilder with credentials, the nextPageUri, an empty query, and the errorMsg', function () {
      var innerMock = jest.fn().mockReturnValue(Promise.resolve({}))
      var getMock = jest.fn().mockReturnValue(innerMock)
      common.commonGetBuilder = getMock

      expect.assertions(2)
      return logs(accountId, authToken).getNextPage(nextPageUri).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken)
        expect(innerMock).toHaveBeenCalledWith(nextPageUri, null, errorMsg)
      })
    })
  })
})
