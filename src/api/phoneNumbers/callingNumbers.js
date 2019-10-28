/**
 * @module freeclimb-sdk/api/callingNumbers
 */
var assign = require('lodash.assign')
var common = require('../common/index')

/**
 * @typedef CallingNumbersRequester
 * @type {Object}
 * @property {function} get - Retrieve a calling number
 * @property {function} update - Update an existing calling numbers
 * @property {function} getList - Retrieve a list of calling numbers associated with this accountId
 * @property {function} create - Create a new calling number
 * @property {function} delete - Delete a calling number
 */

/**
 * Represents the set of wrappers around the FreeClimb CallingNumbers API.
 * It provides methods to handle all the operations supported by the FreeClimb CallingNumbers API.
 *
 * @param {string} accountId - The accountId for authentication.
 * @param {string} authToken - The authToken for authentication.
 * @returns {CallingNumbersRequester} requester - A CallingNumbersRequester
 */
function callingNumbers (accountId, authToken) {
  var getter = common.commonGetBuilder(accountId, authToken)
  var poster = common.commonPostBuilder(accountId, authToken)
  var deleter = common.commonDeleteBuilder(accountId, authToken)

  /**
   * Base url for calling numbers
   */
  var rootUrl = '/Accounts/' + accountId + '/CallingNumbers'

  /**
   * Retrieve a single calling number from FreeClimb.
   *
   * @param {string} callingNumberId - The {@code callingNumberId} of the desired calling number.
   * @returns {Promise<object>} CallingNumber - The calling number matching the {@code callingNumberId} provided.
   * @throws will throw an error on a failed response
   */
  function get (callingNumberId) {
    return getter(rootUrl + '/' + callingNumberId, {}, 'Could not retrieve calling number ' + callingNumberId)
  }

  /**
   * Update the existing calling number associated with the {@code callingNumberId}.
   * @param {string} callingNumberId - The {@code callingNumberId} of the desired calling number.
   * @param {object} options - The properties to change in the target calling number.
   * @returns {Promise<object>} calling number - The calling number matching the {@code callingNumberId} provided.
   * @throws will throw an error on a failed response
   */
  function update (callingNumberId, options) {
    return poster(rootUrl + '/' + callingNumberId, options, 'Could not update calling number ' + callingNumberId)
  }

  /**
   * Retrieve a list of calling numbers associated with the {@code accountId}.
   * @param {object} [options] - An optional object containing a number of possible ways to filter the calling numbers returned by FreeClimb.
   * @returns {Promise<object>} calling number list - A list of calling numbers
   * @throws will throw an error on a failed response
   */
  function getList (options) {
    return getter(rootUrl, options, 'Could not retrieve calling number list')
  }

  /**
   * Retrieve the next page of list results
   *
   * @param {string} nextPageUri - The URL to the next page of results
   *
   * @return {Promise<object>} calling number page - the next page of calling numbers
   * @throws will throw an error on a failed response
   */
  function getNextPage (nextPageUri) {
    return getter(nextPageUri, null, 'Could not retrieve calling number list')
  }

  /**
   * Create a new CallingNumber through the FreeClimb API.
   *
   * @param {string} phoneNumber - The phone number to add. Should be formatted with a '+' and country code e.g. +16175551212 (E.164 format). FreeClimb will also accept unformatted US numbers e.g. (415) 555-1212, 415-555-1212.
   * @param {object} [options] - The optional properties to set on the new calling number.
   * @returns {Promise<object>} calling number - The newly created calling number
   * @throws will throw an error on a failed response
   */
  function create (phoneNumber, options) {
    return poster(rootUrl, assign({phoneNumber: phoneNumber}, options), 'Could not add calling number ' + phoneNumber)
  }

  /**
   * Delete a CallingNumber through the FreeClimb API.
   *
   * @param {string} callingNumberId - The {@code} callingNumberId} of the calling number to delete.
   * @returns {Promise<null>} null - resolves to null on success
   * @throws will throw an error on a failed response
   */
  function deleteNum (callingNumberId) {
    return deleter(rootUrl + '/' + callingNumberId, 'Could not delete calling number ' + callingNumberId)
  }

  return {
    get: get,
    update: update,
    getList: getList,
    getNextPage: getNextPage,
    create: create,
    delete: deleteNum
  }
}

module.exports = callingNumbers
