/**
 * @module freeclimb-sdk/api/logs
 */

var assign = require('lodash.assign')
var common = require('../common/index')

/**
 * @typedef LogsRequester
 * @type {Object}
 * @property {function} get - Retrieve a list of logs associated with the {@code accountId}
 */

/**
 * Represents the set of wrappers around the FreeClimb Logs API.
 * It provides methods to handle all the operations supported by the FreeClimb Logs API.
 *
 * @param {string} accountId - The accountId for authentication.
 * @param {string} authToken - The authToken for authentication.
 * @returns {LogsRequester} requester - A LogRequester
 */
function logs (accountId, authToken) {
  var getter = common.commonGetBuilder(accountId, authToken)
  var poster = common.commonPostBuilder(accountId, authToken)

  /**
   * Base url for logs
   */
  var rootUrl = '/Accounts/' + accountId + '/Logs'

  /**
   * Retrieve a list of logs associated with the {@code accountId}.
   *
   * @param {object} [filters] - An object containing a number of ways to filter the logs returned by Perspehony.
   * @returns {Promise<object>} log list - The list of logs associated with the {@code accountId}
   * @throws will throw an error on a failed response
   */
  function get (filters) {
    var method = filters ? poster : getter
    return method(rootUrl, assign({}, filters), 'Could not retrieve log list')
  }

  /**
   * Retrieve the next page of list results
   *
   * @param {string} nextPageUri - The URL to the next page of results
   *
   * @return {Promise<object>} log page - the next page of logs
   * @throws will throw an error on a failed response
   */
  function getNextPage (nextPageUri) {
    return getter(nextPageUri, null, 'Could not retrieve log list')
  }

  return {
    get: get,
    getNextPage: getNextPage
  }
}

module.exports = logs
