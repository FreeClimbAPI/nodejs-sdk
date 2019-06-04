var fetch = require('node-fetch')
var https = require('https')
var querystring = require('querystring')

/**
 * The URL of the Persephony API
 */
var persyURL = 'https://www.persephony.com/apiserver'
// TODO - delete this, very insecure
var agent = new https.Agent({
  rejectUnauthorized: false
})

/**
 * Convert the accountId and authToken into a base64 encoded string
 *
 * @param {string} accountId - The accountId for the auth header
 * @param {string} authToken - The authToken for the auth header
 * @returns {string} encodedHeader - The base64 encoded auth header
 */
function base64Encode (accountId, authToken) {
  return Buffer.from(accountId + ':' + authToken, 'utf8').toString('base64')
}

/**
 * Change the Persephony instance the SDK interacts with.
 *
 * @param {string} newUrl - The URL to the apiserver of the Persephony instance to use.
 */
function setPersyUrl (newUrl) {
  persyURL = newUrl
}

/**
 * Make an authenticated GET request to the Persephony API.
 *
 * @param {string} accountId - The accountId for authentication.
 * @param {string} authToken - The authToken for authentication.
 * @param {string} path - The URL fragment to append to the {@code persyURL}.
 * @param {object} [query] - Query parameters for the GET request.
 * @returns {Promise} response - The response to the request.
 */
function GET (accountId, authToken, path, query) {
  var url = persyURL + path
  if (query) {
    url += '?' + querystring.stringify(query)
  }
  return fetch(url, {
    headers: {'Authorization': 'Basic ' + base64Encode(accountId, authToken)},
    agent: agent
  })
}

/**
 * Make an authenticated POST request to the Persephony API.
 *
 * @param {string} accountId - The accountId for authentication.
 * @param {string} authToken - The authToken for authentication.
 * @param {string} path - the URL fragment to append to the {@code persyURL}.
 * @param {object} [body] - The request payload.
 * @returns {Promise} response - The response to the request.
 */
function POST (accountId, authToken, path, body) {
  return fetch(persyURL + path, {
    headers: {
      'Authorization': 'Basic ' + base64Encode(accountId, authToken),
      'Content-Type': 'application/json'
    },
    agent: agent,
    method: 'POST',
    body: JSON.stringify(Object.assign({}, body))
  })
}

/**
 * Make an authenticated DELETE request to the Persephony API.
 *
 * @param {string} accountId - The accountId for authentication.
 * @param {string} authToken - The authToken for authentication.
 * @param {string} path - The URL fragment to append to the {@code persyURL}.
 * @returns {Promise} response - The response to the request.
 */
function DELETE (accountId, authToken, path) {
  return fetch(persyURL + path, {
    headers: {
      'Authorization': 'Basic ' + base64Encode(accountId, authToken)
    },
    agent: agent,
    method: 'DELETE'
  })
}

module.exports = {
  GET: GET,
  POST: POST,
  DELETE: DELETE,
  persyURL: persyURL,
  setPersyUrl: setPersyUrl
}
