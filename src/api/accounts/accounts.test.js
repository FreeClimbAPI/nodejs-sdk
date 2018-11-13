jest.mock('../requester')
var accounts = require('./accounts')
var requester = require('../requester/index')

describe('accounts', function () {
  var accountId = 'mock_account_id'
  var authToken = 'mock_account_token'
  describe('accounts#get', function () {
    it('should call requester#get with the authentication, path, and no query', function () {
      var getMock = jest.fn().mockReturnValue(Promise.resolve({ok: true, json: jest.fn().mockReturnValue(Promise.resolve({}))}))
      requester.GET = getMock

      expect.assertions(1)
      return accounts(accountId, authToken).get(accountId).then(function () {
        expect(getMock).toBeCalledWith(accountId, authToken, '/Accounts/' + accountId, {})
      })
    })
    describe('on success', function () {
      it('should return the account with the matching account id', function () {
        var testId = 'AC79df825d6690cc51111673d64aed6ed121dd39e1'
        var expectedAccount = {
          accountId: 'AC79df825d6690cc51111673d64aed6ed121dd39e1',
          alias: '',
          authToken: '865442d5b4188e373e9a4b0d852c1bfe96fbd9d9',
          dateCreated: 'Mon, 23 Oct 2017 15:38:04 GMT',
          dateUpdated: 'Mon, 23 Oct 2017 15:38:04 GMT',
          label: null,
          metadata: {},
          revision: 1,
          status: 'active',
          subresourceUris: {
            applications: '/Accounts/AC79df825d6690cc51111673d64aed6ed121dd39e1/Applications',
            availablePhoneNumbers: '/Accounts/AC79df825d6690cc51111673d64aed6ed121dd39e1/AvailablePhoneNumbers',
            callingNumbers: '/Accounts/AC79df825d6690cc51111673d64aed6ed121dd39e1/CallingNumbers',
            calls: '/Accounts/AC79df825d6690cc51111673d64aed6ed121dd39e1/Calls',
            conferences: '/Accounts/AC79df825d6690cc51111673d64aed6ed121dd39e1/Conferences',
            incomingPhoneNumbers: '/Accounts/AC79df825d6690cc51111673d64aed6ed121dd39e1/IncomingPhoneNumbers',
            logs: '/Accounts/AC79df825d6690cc51111673d64aed6ed121dd39e1/Logs',
            queues: '/Accounts/AC79df825d6690cc51111673d64aed6ed121dd39e1/Queues',
            recordings: '/Accounts/AC79df825d6690cc51111673d64aed6ed121dd39e1/Recordings'
          },
          type: 'trial',
          uri: '/Accounts/AC79df825d6690cc51111673d64aed6ed121dd39e1'
        }

        requester.GET = jest.fn(function () {
          return Promise.resolve({
            ok: true,
            json: function () { return Promise.resolve(expectedAccount) }
          })
        })

        expect.assertions(1)

        return accounts().get(testId).then(function (account) {
          expect(account).toEqual(expectedAccount)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error message', function () {
        var mockErrorMessage = {status: '400', message: 'AccountId was not valid'}
        requester.GET = jest.fn().mockReturnValue(Promise.resolve({
          ok: false,
          status: 400,
          statusText: 'Bad Request',
          json: jest.fn().mockReturnValue(Promise.resolve(mockErrorMessage))
        }))

        expect.assertions(1)
        return accounts(accountId, authToken).get(accountId).catch(function (error) {
          expect(error).toEqual(new Error('Could not retrieve account ' + accountId + ' (400 Bad Request) ' + JSON.stringify(mockErrorMessage)))
        })
      })
    })
  })
  describe('accounts#update', function () {
    it('should call requester#post with the authentication, path, and body', function () {
      var postMock = jest.fn().mockReturnValue(Promise.resolve({ok: true, json: jest.fn().mockReturnValue(Promise.resolve({}))}))
      requester.POST = postMock
      var body = 'mock_payload'

      expect.assertions(1)
      return accounts(accountId, authToken).update(accountId, body).then(function (account) {
        expect(postMock).toBeCalledWith(accountId, authToken, '/Accounts/' + accountId, body)
      })
    })
    describe('on success', function () {
      it('should return the updated account with the matching account id', function () {
        var expectedResponse = {accountId: 'mock_account_id', revision: 3}
        requester.POST = jest.fn().mockReturnValue(Promise.resolve({ok: true, json: jest.fn().mockReturnValue(Promise.resolve(expectedResponse))}))

        expect.assertions(1)

        return accounts().update('mock_account_id', {alias: 'new alias'}).then(function (account) {
          expect(account).toEqual(expectedResponse)
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error message', function () {
        var status = 502
        var statusMessage = 'Internal Gateway'
        var expectedPayload = {status: 502, message: 'Could not find a needed internal service'}
        requester.POST = jest.fn().mockReturnValue(Promise.resolve({
          ok: false,
          status: status,
          statusText: statusMessage,
          json: jest.fn().mockReturnValue(Promise.resolve(expectedPayload))
        }))

        expect.assertions(1)
        return accounts(accountId, authToken).update(accountId).catch(function (response) {
          expect(response).toEqual(Error('Could not update account ' + accountId + ' (' + status + ' ' + statusMessage + ') ' + JSON.stringify(expectedPayload)))
        })
      })
    })
  })
})
