jest.mock('./participants')
var requester = require('../requester/index')
var common = require('../common/index')
var conferences = require('./conferences')
var participants = require('./participants/index')
var { Response } = require('node-fetch')

describe('conferences', function () {
  var accountId = 'accountId'
  var authToken = 'authToken'
  var conferenceId = 'CF1313513513512351234123523463456345634573476435734745367'
  describe('conferences#get', function () {
    it('should call requester#get with the path', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      expect.assertions(1)
      return conferences(accountId, authToken).get(conferenceId).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Conferences/' + conferenceId, {})
      })
    })
    describe('on success', function () {
      it('should return the response payload', function () {
        var expectedPayload = {mock: 'conference'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))
        expect.assertions(1)
        return conferences().get().then(function (response) {
          expect(response).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 888
        var statusText = 'Failure Cause'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))
         
        expect.assertions(1)
        return conferences().get(conferenceId).catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve conference ' + conferenceId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('conferences#update', function () {
    it('should call requester#post with the path and body', function () {
      var postMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.POST = postMock

      var options = {alias: 'Conference Alias', playBeep: 'always', status: 'empty'}
      expect.assertions(1)
      return conferences(accountId, authToken).update(conferenceId, options).then(function () {
        expect(postMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Conferences/' + conferenceId, options)
      })
    })
    describe('on success', function () {
      it('should return the payload', function () {
        var expectedPayload = {mock: 'conference'}
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return conferences().update().then(function (result) {
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
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return conferences().update(conferenceId).catch(function (error) {
          expect(error).toEqual(Error('Could not update conference ' + conferenceId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('conferences#getList', function () {
    it('should call requester#get with the path and query parameters', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      var filters = {status: 'inProgress', alias: 'These aliases', dateCreated: '2017-12-25', dateUpdated: '2017-12-25'}
      expect.assertions(1)
      return conferences(accountId, authToken).getList(filters).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Conferences', filters)
      })
    })
    describe('on success', function () {
      it('should return the payload', function () {
        var expectedPayload = {mock: 'conferenceList'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return conferences().getList().then(function (result) {
          expect(result).toEqual(expectedPayload)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 988
        var statusText = 'Failure Reason'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))
        
        expect.assertions(1)
        return conferences().getList().catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve conference list (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('conferences#getNextPage', function () {
    var nextPageUri = '/Accounts/AC32142315123412353/Conferences?cursor=2341235123412351234'
    var errorMsg = 'Could not retrieve conference list'
    it('should call commonGetBuilder with the credentials, nextPageUri, query, and errorMsg', function () {
      var innerMock = jest.fn().mockReturnValue(Promise.resolve({}))
      var getMock = jest.fn().mockReturnValue(innerMock)
      common.commonGetBuilder = getMock

      expect.assertions(2)
      return conferences(accountId, authToken).getNextPage(nextPageUri).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken)
        expect(innerMock).toHaveBeenCalledWith(nextPageUri, null, errorMsg)
      })
    })
  })
  describe('conferences#create', function () {
    it('should call requester#post with the path and body', function () {
      var postMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.POST = postMock

      var options = {alias: 'Alias', playBeep: 'exitOnly', record: true, waitUrl: 'http://waitmusic.com', statusCallbackUrl: 'http://status.callback'}
      expect.assertions(1)
      return conferences(accountId, authToken).create(options).then(function () {
        expect(postMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Conferences', options)
      })
    })
    describe('on success', function () {
      it('should return the payload', function () {
        var expectedPayload = {mock: 'conference'}
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return conferences().create().then(function (result) {
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
        return conferences().create().catch(function (error) {
          expect(error).toEqual(Error('Could not create conference (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('conferences#participants', function () {
    it('should call participants with the accountId, authToken, and conferenceId', function () {
      conferences(accountId, authToken).participants(conferenceId)
      expect(participants).toHaveBeenCalledWith(accountId, authToken, conferenceId)
    })
  })
})
