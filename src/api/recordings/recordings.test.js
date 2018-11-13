jest.mock('fs')
var requester = require('../requester/index')
var common = require('../common/index')
var recordings = require('./recordings')
var fs = require('fs')

describe('recordings', function () {
  var accountId = 'accountId'
  var authToken = 'authToken'
  var recordingId = 'RE32532452304582346324524246'
  var filePath = '../test/fileName.wav'
  describe('recordings#get', function () {
    it('should call requester#get with the path', function () {
      var getMock = jest.fn().mockReturnValue(Promise.resolve({ok: true, json: jest.fn().mockReturnValue(Promise.resolve({}))}))
      requester.GET = getMock

      expect.assertions(1)
      return recordings(accountId, authToken).get(recordingId).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Recordings/' + recordingId, {})
      })
    })
    describe('on success', function () {
      it('should return the response payload', function () {
        var expectedPayload = {mock: 'recording meta'}
        requester.GET = jest.fn().mockReturnValue(Promise.resolve({ok: true, json: jest.fn().mockReturnValue(Promise.resolve(expectedPayload))}))

        expect.assertions(1)
        return recordings().get().then(function (result) {
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
        var statusText = 'text'
        requester.GET = jest.fn().mockReturnValue(Promise.resolve({
          ok: false,
          status: status,
          statusText: statusText,
          json: jest.fn().mockReturnValue(Promise.resolve(body))
        }))

        expect.assertions(1)
        return recordings().get(recordingId).catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve recording ' + recordingId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('recordings#getList', function () {
    it('should call requester#get with the path and query parameters', function () {
      var getMock = jest.fn().mockReturnValue(Promise.resolve({ok: true, json: jest.fn().mockReturnValue(Promise.resolve({}))}))
      requester.GET = getMock

      var filters = {callId: 'CA4232346324632453245', dateCreated: '2017-12-25'}
      expect.assertions(1)
      return recordings(accountId, authToken).getList(filters).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Recordings', filters)
      })
    })
    describe('on success', function () {
      it('should return the response payload', function () {
        var expectedPayload = {mock: 'recording list'}
        requester.GET = jest.fn().mockReturnValue(Promise.resolve({ok: true, json: jest.fn().mockReturnValue(Promise.resolve(expectedPayload))}))

        expect.assertions(1)
        return recordings().getList().then(function (result) {
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
        var statusText = 'text'
        requester.GET = jest.fn().mockReturnValue(Promise.resolve({
          ok: false,
          status: status,
          statusText: statusText,
          json: jest.fn().mockReturnValue(Promise.resolve(body))
        }))

        expect.assertions(1)
        return recordings().getList().catch(function (error) {
          expect(error).toEqual(Error('Could not retrieve recording list (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('recordings#getNextPage', function () {
    var nextPageUri = '/Accounts/AC32151235421512346/Recordings?cursor=2341235124215123324125425'
    var errorMsg = 'Could not retrieve recording list'
    it('should call commonGetBuilder with the credentials, nextPageUri, query, and errorMsg', function () {
      var innerMock = jest.fn().mockReturnValue(Promise.resolve({}))
      var getMock = jest.fn().mockReturnValue(innerMock)
      common.commonGetBuilder = getMock

      expect.assertions(2)
      return recordings(accountId, authToken).getNextPage(nextPageUri).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken)
        expect(innerMock).toHaveBeenCalledWith(nextPageUri, null, errorMsg)
      })
    })
  })
  describe('recordings#download', function () {
    it('should call requester#get with the path', function () {
      var getMock = jest.fn().mockReturnValue(Promise.resolve({ok: true, body: {pipe: jest.fn()}}))
      requester.GET = getMock

      expect.assertions(1)
      return recordings(accountId, authToken).download(recordingId, filePath).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Recordings/' + recordingId + '/Download', {})
      })
    })
    describe('on success', function () {
      it('should save the stream to disk', function () {
        var destinationMock = []
        var writeStreamMock = jest.fn().mockReturnValue(destinationMock)
        fs.createWriteStream = writeStreamMock
        var mockPipe = jest.fn()
        requester.GET = jest.fn().mockReturnValue(Promise.resolve({ok: true, body: {pipe: mockPipe}}))

        expect.assertions(2)
        return recordings().download(recordingId, filePath).then(function () {
          expect(writeStreamMock).toHaveBeenCalledWith(filePath)
          expect(mockPipe).toHaveBeenCalledWith(destinationMock)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 577
        var statusText = 'Recording Download Failure Reason'
        requester.GET = jest.fn().mockReturnValue(Promise.resolve({
          ok: false,
          status: status,
          statusText: statusText,
          json: jest.fn().mockReturnValue(Promise.resolve(body))
        }))

        expect.assertions(1)
        return recordings().download(recordingId).catch(function (error) {
          expect(error).toEqual(Error('Could not download recording ' + recordingId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('recordings#stream', function () {
    it('should call requester#get with the path', function () {
      var getMock = jest.fn().mockReturnValue(Promise.resolve({ok: true, body: {}}))
      requester.GET = getMock

      expect.assertions(1)
      return recordings(accountId, authToken).stream(recordingId).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Recordings/' + recordingId + '/Stream', {})
      })
    })
    describe('on success', function () {
      it('should return the readable stream', function () {
        var mockBody = jest.fn()
        requester.GET = jest.fn().mockReturnValue(Promise.resolve({ok: true, body: mockBody}))

        expect.assertions(1)
        return recordings().stream(recordingId).then(function (result) {
          expect(result).toEqual(mockBody)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error', function () {
        var body = {
          message: 'message'
        }
        var status = 577
        var statusText = 'Recording Stream Failure Reason'
        requester.GET = jest.fn().mockReturnValue(Promise.resolve({
          ok: false,
          status: status,
          statusText: statusText,
          json: jest.fn().mockReturnValue(Promise.resolve(body))
        }))

        expect.assertions(1)
        return recordings().stream(recordingId).catch(function (error) {
          expect(error).toEqual(Error('Could not stream recording ' + recordingId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
  describe('recordings#delete', function () {
    it('should call requester#delete with the path', function () {
      var deleteMock = jest.fn().mockReturnValue(Promise.resolve({ok: true, json: jest.fn().mockReturnValue(Promise.resolve({}))}))
      requester.DELETE = deleteMock

      expect.assertions(1)
      return recordings(accountId, authToken).delete(recordingId).then(function () {
        expect(deleteMock).toHaveBeenCalledWith(accountId, authToken, '/Accounts/' + accountId + '/Recordings/' + recordingId)
      })
    })
    describe('on success', function () {
      it('should return null', function () {
        requester.DELETE = jest.fn().mockReturnValue(Promise.resolve({ok: true}))

        expect.assertions(1)
        return recordings().delete().then(function (result) {
          expect(result).toBeNull()
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
        requester.DELETE = jest.fn().mockReturnValue(Promise.resolve({
          ok: false,
          status: status,
          statusText: statusText,
          json: jest.fn().mockReturnValue(Promise.resolve(body))
        }))

        expect.assertions(1)
        return recordings().delete(recordingId).catch(function (error) {
          expect(error).toEqual(Error('Could not delete recording ' + recordingId + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
    })
  })
})
