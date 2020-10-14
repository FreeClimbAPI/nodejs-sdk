/* globals btoa */
jest.mock('node-fetch')

var fetch = require('node-fetch')

var requester = require('./requester')

describe('requester', function () {
  var accountId = 'accountId'
  var authToken = 'authToken'
  var expectedAuthHeader = 'Basic ' + btoa(accountId + ':' + authToken)
  var path = '/test/path'
  beforeEach(() => {
    fetch.mockResolvedValue({})
  })
  describe('requester#get', function () {
    it('should call fetch with a url composed of the apiUrl, path, and query parameters with the correct auth header', function () {
      expect.assertions(3)
      var queryParams = {test: 'value', other: false}
      var queryString = '?test=value&other=false'

      return requester.GET(accountId, authToken, path, queryParams).then(function (response) {
        expect(fetch.mock.calls.length).toBe(1)
        expect(fetch.mock.calls[0][0]).toBe(requester.apiUrl + path + queryString)
        expect(fetch.mock.calls[0][1].headers).toEqual({Authorization: expectedAuthHeader})
      })
    })
    it('should return the promise returned by fetch', function () {
      var expectedResultPayload = {key: 'testValue'}
      fetch.mockResolvedValue(expectedResultPayload)

      return requester.GET('', '', '', '').then(function (response) {
        expect(response).toEqual(expectedResultPayload)
      })
    })
  })
  describe('requester#post', function () {
    it('should call fetch with a url composed of the apiUrl and the path, with the body stringified', function () {
      var body = {test: 'value'}
      expect.assertions(5)

      return requester.POST(accountId, authToken, path, body).then(function (response) {
        expect(fetch.mock.calls.length).toBe(1)
        expect(fetch.mock.calls[0][0]).toBe(requester.apiUrl + path)
        expect(fetch.mock.calls[0][1].method).toEqual('POST')
        expect(fetch.mock.calls[0][1].headers).toEqual({Authorization: expectedAuthHeader, 'Content-Type': 'application/json'})
        expect(fetch.mock.calls[0][1].body).toEqual(JSON.stringify(body))
      })
    })
    describe('when the body is null', function () {
      it('should call fetch with an empty object for the body', function () {
        expect.assertions(5)
        return requester.POST(accountId, authToken, path, null).then(function (response) {
          expect(fetch.mock.calls.length).toBe(1)
          var args = fetch.mock.calls[0]
          expect(args[0]).toBe(requester.apiUrl + path)
          expect(args[1].method).toEqual('POST')
          expect(args[1].headers).toEqual({Authorization: expectedAuthHeader, 'Content-Type': 'application/json'})
          expect(args[1].body).toEqual(JSON.stringify({}))
        })
      })
    })
  })
  describe('requester#delete', function () {
    it('should call fetch with a url composed of the apiUrl and the path, using the DELETE method', function () {
      expect.assertions(4)
      return requester.DELETE(accountId, authToken, path).then(function (response) {
        expect(fetch.mock.calls.length).toBe(1)
        expect(fetch.mock.calls[0][0]).toBe(requester.apiUrl + path)
        expect(fetch.mock.calls[0][1].method).toEqual('DELETE')
        expect(fetch.mock.calls[0][1].headers).toEqual({Authorization: expectedAuthHeader})
      })
    })
  })
  describe('requester#setApiUrl', function () {
    it('should send requests to the new api url', async () => {
      const newApiUrl = 'MOCK_API_URL'
      requester.setApiUrl(newApiUrl)

      await requester.GET(accountId, authToken, path)
      await requester.POST(accountId, authToken, path, null)
      await requester.DELETE(accountId, authToken, path)

      expect(fetch.mock.calls.length).toBe(3)
      expect(fetch.mock.calls[0][0]).toBe(newApiUrl + path)
      expect(fetch.mock.calls[1][0]).toBe(newApiUrl + path)
      expect(fetch.mock.calls[2][0]).toBe(newApiUrl + path)
    })
  })
})
