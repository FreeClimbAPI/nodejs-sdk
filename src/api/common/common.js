var requester = require('../requester/index')

/**
 * A builder function that wraps a helper function that will make a GET request and return the payload on a successful request or throw an error with the given message on a failure.
 *
 * @param {string} accountId - The accountId for authentication
 * @param {string} authToken - The authToken for authentication
 * @returns {Function} innerGet - The curried function to call to make a request
 * @property {string} innerGet.path - The URL to request
 * @property {object} innerGet.query - The query parameters
 * @property {string} innerGet.errorMsg - The message to prepend on the error thrown on failure
 * @throws will throw an error on a failed response
 * @return the json response
 */
function commonGetBuilder (accountId, authToken) {
  return function (path, query, errorMsg) {
    return requester.GET(accountId, authToken, path, query).then(function (resp) {
      return handleResponse(errorMsg, resp)
    })
  }
}

/**
 * A wrapper function that returns a helper function for making POST requests
 *
 * @param {string} accountId - The accountId for authentication
 * @param {string} authToken - The authToken for authentication
 * @returns {Function} innerPost - The curried function to call to make a request
 * @property {string} innerPost.path - The URL to POST
 * @property {object} innerPost.body - The payload of the request
 * @property {string} innerPost.errorMsg - The message to prepend on the error thrown on failure
 * @throws will throw an error on a failed response
 * @return the json response
 */
function commonPostBuilder (accountId, authToken) {
  return function (path, body, errorMsg) {
    return requester.POST(accountId, authToken, path, body).then(function (resp) {
      return handleResponse(errorMsg, resp)
    })
  }
}

/**
 * A wrapper function that returns a helper function for making DELETE requests
 *
 * @param {string} accountId - The accountId for authentication
 * @param {string} authToken - The authToken for authentication
 * @returns {Function} innerDelete - The curried function to call to make a request
 * @property {string} innerDelete.path - The URL to DELETE
 * @property {string{ innerDelete.errorMsg - The message to prepend on the error thrown on failure
 * @throws will throw an error on a failed response
 * @return will return null on success
 */
function commonDeleteBuilder (accountId, authToken) {
  return function (path, errorMsg) {
    return requester.DELETE(accountId, authToken, path).then(function (resp) {
      if (!resp.ok) {
        return resp.text().then(function (text) {
          throw new Error(errorMsg + ' (' + resp.status + ' ' + resp.statusText + ') ' + text)
        })
      }
      return null
    })
  }
}

function handleResponse (errorMsg, resp) {
  return resp.text().then(text => {
    if(!resp.ok){
      throw new Error(errorMsg + ' (' + resp.status + ' ' + resp.statusText + ') ' + text)
    }
    try {
      return JSON.parse(text)
    } catch (_) {
      return text
    }
  })
}

module.exports = {
  commonGetBuilder: commonGetBuilder,
  commonPostBuilder: commonPostBuilder,
  commonDeleteBuilder: commonDeleteBuilder
}
