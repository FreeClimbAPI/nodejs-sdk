/**
 * @typedef /**
 * @module freeclimb-sdk/api/destinationPhoneNumbers
 */
var common = require('../common/index')

/**
 * @typedef DestinationNumbersRequester
 * @type {Object}
 * @property {function} getList - Retrieve a list of destination phone numbers for purchase.
 */

/**
 * Represents the set of wrappers around the FreeClimb DestinationNumbers API.
 * It provides methods to handle all the operations supported by the Perspehony DestinationNumbers API.
 *
 * @param {string} accountId - The accountId for authentication.
 * @param {string} authToken - The authToken for authentication.
 * @returns {DestinationNumbersRequester} requester - returns an DestinationNumbersRequester.
 */
function destinationNumbers(accountId, authToken) {
  var getter = common.commonGetBuilder(accountId, authToken)
  var poster = common.commonPostBuilder(accountId, authToken)
  var deleter = common.commonDeleteBuilder(accountId, authToken)
  var patcher = common.commonPatchBuilder(accountId, authToken)

  /**
   * Base url for destination phone numbers
   */
  var rootUrl = '/Accounts/' + accountId + '/DestinationNumbers'

  function get(destinationNumId) {
    return getter(rootUrl + '/' + destinationNumId, {}, 'Could not retreive destination numbers: ' + destinationNumId)
  }

  /**
   * Retrieve the list of destination phone numbers of the user.
   * @param {object} [filters] - An object containing a number of possible ways to filter the destination phone numbers returned by FreeClimb.
   * @returns {Promise<object>} phone number list - The list of destination phone numbers
   * @throws will throw an error on a failed response
   */
  function getList(filters) {
    return getter(rootUrl, filters, 'Could not retrieve destination number list')
  }

  /**
   * Retrieve the next page of list results
   *
   * @param {string} nextPageUri - The URL to the next page of results
   *
   * @return {Promise<object>} destination number page - the next page of destination phone numbers
   * @throws will throw an error on a failed response
   */
  function getNextPage(nextPageUri) {
    return getter(nextPageUri, null, 'Could not retrieve destination number list')
  }

  /**
   * Verify a destination number
   * 
   * @param {string} destinationNumId - The id of the destination number to verify
   * @param {string} code - The verification code
   * 
   * @return {Promise<null>}
   * @throws will throw an error on a failed response
   */
  function verify(destinationNumId, code) {
    return patcher(rootUrl + '/' + destinationNumId, { code }, 'Could not verify destination number' + destinationNumId)
  }

  /**
   * Remove the destination phone number with a matching {@code incomingPhoneNumberId} as an destination number.
   * FreeClimb will no longer allow calls or texts to this number.
   *
   * @param {string} destinationNumId - The id of the destinatino phone number to delete.
   * @returns {Promise<null>} null - resolves to null on success
   * @throws will throw an error on a failed response
   */
  function deleteNum(destinationNumId) {
    return deleter(`${rootUrl}/${destinationNumId}`, 'Could not delete destination number ' + destinationNumId)
  }

  /**
   * Add a destination phone number
   * The destination must be verified before calls or text are allowed to be sent to it
   * 
   * @param {string} phoneNumber
   * @returns {promise<object>}
   * @throws will throw an error on a failed response
   */
  function create(phoneNumber) {
    return poster(rootUrl, { phoneNumber }, 'Could not create the destination phone number ' + phoneNumber)
  }

  /**
   * resend verification code to the phone number specified by destinationNumId
   * 
   * @param {string} destinationNumId
   * @returns {promise<null>}
   * @throws will throw an error on a failed response
   */
  function resendCode(destinationNumId) {
    return poster(`${rootUrl}/${destinationNumId}/VerificationCodes`, undefined, 'Could not resend the verification code to destination number ' + destinationNumId)
  }

  return {
    getList,
    getNextPage,
    get,
    verify,
    delete: deleteNum,
    create,
    resendCode
  }
}

module.exports = destinationNumbers