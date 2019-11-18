var common = require('./common')
var requester = require('../requester/index')
var { Response } = require('node-fetch')

describe('common', function () {
  var accountId = 'accountId'
  var authToken = 'authToken'
  var errorMsg = 'Could not retrieve application'
  var path = '/Accounts/AC2134123512341235/Applications/AP12340123421342341235'
  describe('commonGetBuilder', function () {
    var query = {alias: 'app alias'}
    it('should return a function that when called called requester#get with all the provided args', function () {
      var getMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.GET = getMock

      expect.assertions(1)
      return common.commonGetBuilder(accountId, authToken)(path, query, errorMsg).then(function () {
        expect(getMock).toHaveBeenCalledWith(accountId, authToken, path, query)
      })
    })
    describe('on success', function () {
      it('should return the json payload', function () {
        var expectedPayload = {mock: 'payload'}
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return common.commonGetBuilder()().then(function (result) {
          expect(result).toEqual(expectedPayload)
        })
      })
      describe('when the response is not JSON', function () {
        it('should return the text payload', function () {
          var expectedPayload = 'payload'
          requester.GET = jest.fn().mockResolvedValue(new Response(expectedPayload))

          expect.assertions(1)
          return common.commonGetBuilder()().then(function (result) {
            expect(result).toEqual(expectedPayload)
          })
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error using the provided error message including the body JSON', function () {
        var body = {
          message: 'message'
        }
        var status = 493
        var statusText = 'Bad Something'
        requester.GET = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return common.commonGetBuilder()(path, query, errorMsg).catch(function (error) {
          expect(error).toEqual(Error(errorMsg + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
      describe('when the failure body is not JSON', function () {
        it('should throw an error using the provided error message including the body text', function () {
          var body = 'notAnObject'
          var status = 403
          var statusText = 'Bad Response Body'
          requester.GET = jest.fn().mockResolvedValue(new Response(body, {status, statusText}))

          expect.assertions(1)
          return common.commonGetBuilder()(path, query, errorMsg).catch(function (error) {
            expect(error).toEqual(Error(errorMsg + ' (' + status + ' ' + statusText + ') ' + body))
          })
        })
      })
    })
  })
  describe('commonPostBuilder', function () {
    var body = {option: 'value'}
    it('should return a function that when called calls requester#post with all the provided args', function () {
      var postMock = jest.fn().mockResolvedValue(new Response('{}'))
      requester.POST = postMock

      expect.assertions(1)
      return common.commonPostBuilder(accountId, authToken)(path, body, errorMsg).then(function () {
        expect(postMock).toHaveBeenCalledWith(accountId, authToken, path, body)
      })
    })
    describe('on success', function () {
      it('should return the json payload', function () {
        var expectedPayload = {mock: 'payload'}
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(expectedPayload)))

        expect.assertions(1)
        return common.commonPostBuilder()().then(function (result) {
          expect(result).toEqual(expectedPayload)
        })
      })
      describe('when the response is not JSON', function () {
        it('should return the text payload', function () {
          var expectedPayload = 'payload'
          requester.POST = jest.fn().mockResolvedValue(new Response(expectedPayload))

          expect.assertions(1)
          return common.commonPostBuilder()().then(function (result) {
            expect(result).toEqual(expectedPayload)
          })
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error using the provided message including the body JSON', function () {
        var failBody = {
          message: 'message'
        }
        var status = 888
        var statusText = 'Status Text'
        requester.POST = jest.fn().mockResolvedValue(new Response(JSON.stringify(failBody), {status, statusText}))

        expect.assertions(1)
        return common.commonPostBuilder(accountId, authToken)(path, body, errorMsg).catch(function (error) {
          expect(error).toEqual(Error(errorMsg + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(failBody)))
        })
      })
      describe('when the response body is not JSON', function () {
        it('should throw an error using the provided message including the body text', function () {
          var body = 'notAnObject'
          var status = 888
          var statusText = 'Status Text'
          requester.POST = jest.fn().mockResolvedValue(new Response(body, {status, statusText}))

          expect.assertions(1)
          return common.commonPostBuilder(accountId, authToken)(path, body, errorMsg).catch(function (error) {
            expect(error).toEqual(Error(errorMsg + ' (' + status + ' ' + statusText + ') ' + body))
          })
        })
      })
    })
  })
  describe('commonDeleteBuilder', function () {
    it('should return a function that when called calls requester#delete with all the provided args', function () {
      var deleteMock = jest.fn().mockResolvedValue(new Response())
      requester.DELETE = deleteMock

      expect.assertions(1)
      return common.commonDeleteBuilder(accountId, authToken)(path, errorMsg).then(function () {
        expect(deleteMock).toHaveBeenCalledWith(accountId, authToken, path)
      })
    })
    describe('on success', function () {
      it('should return null', function () {
        requester.DELETE = jest.fn().mockResolvedValue(new Response())
        expect.assertions(1)
        return common.commonDeleteBuilder(accountId, authToken)(path, errorMsg).then(function (result) {
          expect(result).toBeNull()
        })
      })
    })
    describe('on failure', function () {
      it('should throw an error using the provided message with the body JSON', function () {
        var body = {
          message: 'message'
        }
        var status = 500
        var statusText = 'Status Text'
        requester.DELETE = jest.fn().mockResolvedValue(new Response(JSON.stringify(body), {status, statusText}))

        expect.assertions(1)
        return common.commonDeleteBuilder(accountId, authToken)(path, errorMsg).catch(function (error) {
          expect(error).toEqual(Error(errorMsg + ' (' + status + ' ' + statusText + ') ' + JSON.stringify(body)))
        })
      })
      describe('when the failure body is not JSON', function () {
        it('should throw an error using the provided message with the body text', function () {
          var body = 'message'
          var status = 500
          var statusText = 'Status Text'
          requester.DELETE = jest.fn().mockResolvedValue(new Response(body, {status, statusText}))

          expect.assertions(1)
          return common.commonDeleteBuilder(accountId, authToken)(path, errorMsg).catch(function (error) {
            expect(error).toEqual(Error(errorMsg + ' (' + status + ' ' + statusText + ') ' + body))
          })
        })
      })
    })
  })
})
