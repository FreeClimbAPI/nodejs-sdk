var assign = require('lodash.assign')
var requester = require('../requester/index')
var common = require('../common/index')

/**
 * @typedef CallsRequester
 * @type {Object}
 * @property {function} get - Retrieve a single call from Persephony
 * @property {function} update - Update a live call
 * @property {function} getList - retrieve a list of calls from Persephony
 * @property {function} create - Create a new call through the Persephony API
 */

/**
 * Represents the set of wrappers around the Persephony Calls API.
 * It provides methods to handle all the operations supported by the Persephony Calls API.
 *
 * @param {string} accountId - The accountId for authentication.
 * @param {string} authToken - The authToken for authentication.
 * @returns {CallsRequester} requester - returns a CallsRequester
 */
function calls (accountId, authToken) {
  var getter = common.commonGetBuilder(accountId, authToken)
  var commonPoster = common.commonPostBuilder(accountId, authToken)

  /**
   * Base url for calls
   */
  var rootUrl = '/Accounts/' + accountId + '/Calls'

  /**
   * Retrieve a single call from Persephony.
   *
   * @param {string} callId - The {@code callId} of the desired call.
   * @returns {Promise<object>} call - The call matching the {@code callId} provided.
   * @throws will throw an error on a failed response
   */
  function get (callId) {
    return getter(rootUrl + '/' + callId, {}, 'Could not retrieve call ' + callId)
  }

  /**
   * Update the existing call associated with the {@code callId}.
   *
   * @param {string} callId - The {@code callId} of the desired call.
   * @param {string} status - The status to set the target call to. Can be either {@link module:persephony-sdk/enums/callStatus.CANCELED} or {@link module:persephony-sdk/enums/callStatus.COMPLETED}.
   * @returns {Promise<null>} null - Will resolve to null on a success.
   * @throws will throw an error on a failed response
   */
  function update (callId, status) {
    return requester.POST(accountId, authToken, rootUrl + '/' + callId, {status: status}).then(function (resp) {
      if (!resp.ok) {
        return resp.json().then(function (json) {
          throw new Error('Could not update call ' + callId + ' (' + resp.status + ' ' + resp.statusText + ') ' + JSON.stringify(json))
        })
      }
      return null
    })
  }

  /**
   * Retrieve a list of calls associated with the {@code accountId}
   *
   * @param {object} [filters] - Optional filters containing a number of possible ways to filter the calls returned by Persephony.
   * @returns {Promise<object>} call list - A list of call instances matching the filters if provided.
   * @throws an error on a failed response
   */
  function getList (filters) {
    return getter(rootUrl, filters, 'Could not retrieve call list')
  }

  /**
   * Retrieve the next page of list results
   *
   * @param {string} nextPageUri - The URL to the next page of results
   *
   * @return {Promise<object>} call page - the next page of calls
   * @throws will throw an error on a failed response
   */
  function getNextPage (nextPageUri) {
    return getter(nextPageUri, null, 'Could not retrieve call list')
  }

  /**
   * Create a new call through the Persephony API.
   *
   * @param {string} to - The number to call out to (DNIS). This can be any valid phone number formatted in #.164 format in Persephony's service area.
   * @param {string} from - The number to call from (ANI). This must be a number purchased from Persephony or a verified phone number owned by the user.
   * @param {object} options - Additional properties to set the behavior of the call to be placed. Must include either {@code callConnectUrl} or {@code applicationId}.
   * @returns {Promise<object>} call - Resolves to the newly placed call
   * @throws will throw an error on a failed response
   */
  function create (to, from, options) {
    return commonPoster(rootUrl, assign({to: to, from: from}, options), 'Could not create call')
  }

  return {
    get: get,
    update: update,
    getList: getList,
    getNextPage: getNextPage,
    create: create
  }
}

module.exports = calls
