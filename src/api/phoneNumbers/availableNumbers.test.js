jest.mock('../requester')

var availableNumbers = require('./availableNumbers')
var requester = require('../requester/index')
var common = require('../common/index')
var { Response } = require('node-fetch')

describe('availableNumbers', function () {
  var accountId = 'mock_account_id'
  var authToken = 'mock_auth_token'
  describe('availableNumbers#getList', function () {
    it('should call fetch get with the availablePhoneNumbers endpoint and the query options', function () {
      var queryOptions = {alias: '(234) 234-2432', phoneNumber: '^\\+1847[0-9]{7}$'}
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      expect.assertions(1)
      return availableNumbers(accountId, authToken).getList(queryOptions).then(function (phoneNumberList) {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, '/AvailablePhoneNumbers', queryOptions)
      })
    })
    describe('on success', function () {
      it('should return the json payload of the Response', function () {
        var expectedResponse = {mock: 'list_of_numbers'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedResponse)))

        expect.assertions(1)
        return availableNumbers().getList().then(function (response) {
          expect(response).toEqual(expectedResponse)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error message', function () {
        var message = {
          status: '303',
          message: 'an error occurred'
        }
        var status = 303
        var statusText = 'Error'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(message), {status, statusText}))

        expect.assertions(1)
        return availableNumbers().getList().catch(function (resp) {
          expect(resp).toEqual(Error('Could not retrieve available number list (' + status + ' ' + statusText + ') ' + JSON.stringify(message)))
        })
      })
    })
  })
  describe('availableNumbers#getNextPage', function () {
    var nextPageUri = '/AvailablePhoneNumbers?cursor=234123512341235124'
    var errorMsg = 'Could not retrieve available number list'
    it('should call commonGetBuilder with the credentials, path, query, and errorMsg', function () {
      var innerMock = jest.fn().mockReturnValue(Promise.resolve({}))
      var getMock = jest.fn().mockReturnValue(innerMock)
      common.commonGetBuilder = getMock

      expect.assertions(2)
      return availableNumbers(accountId, authToken).getNextPage(nextPageUri).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken)
        expect(innerMock).toHaveBeenCalledWith(nextPageUri, null, errorMsg)
      })
    })
  })
})
