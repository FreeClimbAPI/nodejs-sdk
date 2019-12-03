var requester = require('../../requester/index')
var common = require('../../common/index')
var participants = require('./participants')
var { Response } = require('node-fetch')

describe('participants', function () {
  var accountId = 'accountId'
  var authToken = 'authToken'
  var conferenceId = 'CFq235342345234234623423462346'
  var participantId = 'CA1532423462346346345347457'
  describe('participants#get', function () {
    it('should call requester#get with the path', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      expect.assertions(1)
      return participants(accountId, authToken, conferenceId).get(participantId).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Conferences/' + conferenceId + '/Participants/' + participantId, {})
      })
    })
    describe('on success', function () {
      it('should return the participant payload', function () {
        var expectedPayload = {mock: 'participant'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return participants(accountId, authToken, conferenceId).get(participantId).then(function (result) {
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
        return participants().get(participantId).catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve participant ' + participantId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('participants#update', function () {
    it('should call requester#post with the path and body', function () {
      var postMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.POST = postMock

      var options = {talk: false, listen: false}
      expect.assertions(1)
      return participants(accountId, authToken, conferenceId).update(participantId, options).then(function () {
        expect(postMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Conferences/' + conferenceId + '/Participants/' + participantId, options)
      })
    })
    describe('on success', function () {
      it('should return the payload', function () {
        var expectedPayload = {mock: 'new participant'}
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return participants().update().then(function (result) {
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
        return participants().update(participantId).catch(function (error) {
          expect(error).toEqual(Error('Could not update participant ' + participantId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('participants#getList', function () {
    it('should call requester#get with the path and query params', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      var filters = {talk: false, listen: false}
      expect.assertions(1)
      return participants(accountId, authToken, conferenceId).getList(filters).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Conferences/' + conferenceId + '/Participants', filters)
      })
    })
    describe('on success', function () {
      it('should return the payload', function () {
        var expectedPayload = {mock: 'participants list'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return participants().getList().then(function (result) {
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
        return participants().getList().catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve participant list (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('participants#getNextPage', function () {
    var nextPageUri = '/Accounts/AC234213512423/Conferences/231423512342135214/Participants?cursor=32142135123412351234235'
    var errorMsg = 'Could not retrieve participant list'
    it('should call commonGetBuilder with the credentials, nextPageUri, query, and errorMsg', function () {
      var innerMock = jest.fn().mockReturnValue(Promise.resolve({}))
      var getMock = jest.fn().mockReturnValue(innerMock)
      common.commonGetBuilder = getMock

      expect.assertions(2)
      return participants(accountId, authToken, conferenceId).getNextPage(nextPageUri).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken)
        expect(innerMock).toHaveBeenCalledWith(nextPageUri, null, errorMsg)
      })
    })
  })
  describe('participants#delete', function () {
    it('should call requester#delete with the path', function () {
      var deleteMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.DELETE = deleteMock

      expect.assertions(1)
      return participants(accountId, authToken, conferenceId).delete(participantId).then(function () {
        expect(deleteMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Conferences/' + conferenceId + '/Participants/' + participantId)
      })
    })
    describe('on success', function () {
      it('should return null', function () {
        requester.DELETE = jest.fn().mockResolvedValue(new Response())

        expect.assertions(1)
        return participants().delete().then(function (result) {
          expect(result).toBeNull()
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 433
        var statusText = 'Failure Reason'
        requester.DELETE = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return participants().delete(participantId).catch(function (error) {
          expect(error).toEqual(Error('Could not delete participant ' + participantId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
})
