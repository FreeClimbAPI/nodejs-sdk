/**
 * @module freeclimb-sdk/api/availablePhoneNumbers
 */
var common = require('../common/index')

/**
 * @typedef AvailableNumbersRequester
 * @type {Object}
 * @property {function} getList - Retrieve a list of available phone numbers for purchase.
 */

/**
 * Represents the set of wrappers around the FreeClimb AvailableNumbers API.
 * It provides methods to handle all the operations supported by the Perspehony AvailableNumbers API.
 *
 * @param {string} accountId - The accountId for authentication.
 * @param {string} authToken - The authToken for authentication.
 * @returns {AvailableNumbersRequester} requester - returns an AvailableNumbersRequester.
 */
function availableNumbers (accountId, authToken) {
  var getter = common.commonGetBuilder(accountId, authToken)

  /**
   * Base url for available phone numbers
   */
  var rootUrl = '/AvailablePhoneNumbers'

  /**
   * Retrieve the list of available phone numbers for purchase.
   * @param {object} [filters] - An object containing a number of possible ways to filter the available phone numbers returned by FreeClimb.
   * @returns {Promise<object>} phone number list - The list of phone numbers available for purchase.
   * @throws will throw an error on a failed response
   */
  function getList (filters) {
    return getter(rootUrl, filters, 'Could not retrieve available number list')
  }

  /**
   * Retrieve the next page of list results
   *
   * @param {string} nextPageUri - The URL to the next page of results
   *
   * @return {Promise<object>} available number page - the next page of available phone numbers
   * @throws will throw an error on a failed response
   */
  function getNextPage (nextPageUri) {
    return getter(nextPageUri, null, 'Could not retrieve available number list')
  }

  return {
    getList: getList,
    getNextPage: getNextPage
  }
}

module.exports = availableNumbers
