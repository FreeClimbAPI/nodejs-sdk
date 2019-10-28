/**
 * @module freeclimb-sdk/api/incomingNumbers
 */

var assign = require('lodash.assign')
var common = require('../common/index')

/**
 * @typedef IncomingNumbersRequester
 * @type {Object}
 * @property {function} get - Retrieve a single incoming number
 * @property {function} update - Update an existing incoming number
 * @property {function} getList - Retrieve a list of incoming numbers associated with this accountId
 * @property {function} purchase - Purchase a new incoming phone number
 * @property {function} delete - Delete an incoming phone number
 */

/**
 * Represents the set of wrappers around the FreeClimb IncomingNumbers API.
 * It provides methods to handle all the operations supported by the FreeClimb IncomingNumbers API.
 *
 * @param {string} accountId - The accountId for authentication.
 * @param {string} authToken - The authToken for authentication.
 * @returns {IncomingNumbersRequester} requester - returns an IncomingNumbersRequester
 */
function incomingNumbers (accountId, authToken) {
  var getter = common.commonGetBuilder(accountId, authToken)
  var poster = common.commonPostBuilder(accountId, authToken)
  var deleter = common.commonDeleteBuilder(accountId, authToken)

  /**
   * Base url for incoming phone numbers
   * @type {string}
   */
  var rootUrl = '/Accounts/' + accountId + '/IncomingPhoneNumbers'

  /**
   * Retrieve a single incoming phone number from FreeClimb.
   *
   * @param {string} incomingNumberId - The {@code incomingPhoneNumberId} of the desired incoming phone number.
   * @returns {Promise<object>} incoming number - The incoming phone number matching the {@code incomingPhoneNumberId} provided.
   * @throws will throw an error on a failed response
   */
  function get (incomingNumberId) {
    return getter(rootUrl + '/' + incomingNumberId, {}, 'Could not retrieve incoming number ' + incomingNumberId)
  }

  /**
   * Update the existing incoming phone number associated with the {@code incomingPhoneNumberId}.
   *
   * @param {string} incomingNumberId - The {@code incomingPhoneNumberId} of the desired incoming phone number.
   * @param {object} options - The properties to change in the target incoming phone number.
   * @returns {Promise<object>} incoming number - The modified incoming phone number.
   * @throws will throw an error on a failed response
   */
  function update (incomingNumberId, options) {
    return poster(rootUrl + '/' + incomingNumberId, options, 'Could not update incoming number ' + incomingNumberId)
  }

  /**
   * Retrieve a list of IncomingPhoneNumbers associated with the {@code accountId}.
   * @param {object} [filter] - An optional object containing a number of possible ways to filter the incoming numbers list returned by FreeClimb.
   * @returns {Promise<object>} incoming number list - A list of Incoming Phone Numbers.
   * @throws will throw an error on a failed response
   */
  function getList (filter) {
    return getter(rootUrl, filter, 'Could not retrieve incoming number list')
  }

  /**
   * Retrieve the next page of list results
   *
   * @param {string} nextPageUri - The URL to the next page of results
   *
   * @return {Promise<object>} incoming number page - the next page of incoming phone numbers
   * @throws will throw an error on a failed response
   */
  function getNextPage (nextPageUri) {
    return getter(nextPageUri, null, 'Could not retrieve incoming number list')
  }

  /**
   * Purchase a new incoming phone number through the FreeClimb API.
   *
   * @param {string} phoneNumber - The phone number to purchase in E.164 format (as returned in the list of Available Phone Numbers)
   * @param {object} [options] - Properties to set on the newly purchased number.
   * @returns {Promise<object>} incoming number - The newly purchased incoming phone number.
   * @throws will throw an error on a failed response
   */
  function purchase (phoneNumber, options) {
    return poster(rootUrl, assign({phoneNumber: phoneNumber}, options), 'Could not purchase incoming number ' + phoneNumber)
  }

  /**
   * Remove the incoming phone number with a matching {@code incomingPhoneNumberId} as an incoming number.
   * FreeClimb will no longer answer calls to this number.
   *
   * @param {string} incomingNumberId - The id of the incoming phone number to delete.
   * @returns {Promise<null>} null - resolves to null on success
   * @throws will throw an error on a failed response
   */
  function deleteNum (incomingNumberId) {
    return deleter(rootUrl + '/' + incomingNumberId, 'Could not delete incoming number ' + incomingNumberId)
  }

  return {
    get: get,
    update: update,
    getList: getList,
    getNextPage: getNextPage,
    purchase: purchase,
    delete: deleteNum
  }
}

module.exports = incomingNumbers
