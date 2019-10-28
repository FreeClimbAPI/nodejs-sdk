/**
 * @module freeclimb-sdk/api/messages
 */

var common = require('../common/index')

/**
 * @typedef MessagesRequester
 * @type {Object}
 * @property {function } get - Retrieve a single message from FreeClimb
 */

/**
 * Represents the set of wrappers around the FreeClimb Messages API.
 * It provides methods to handle all the operations supported by the FreeClimb Messages API.
 *
 * @param {string} accountId - The accountId for authentication.
 * @param {string} authToken - The authToken for authentication.
 * @returns {MessagesRequester} requester - A MessagesRequester
 */
function messages (accountId, authToken) {
  var getter = common.commonGetBuilder(accountId, authToken)
  var poster = common.commonPostBuilder(accountId, authToken)

  /**
   * Base url for messages
   */
  var rootUrl = '/Accounts/' + accountId + '/Messages'

  /**
   * Retrieve a single message from FreeClimb.
   *
   * @param {string} messageId - The {@code messageId} of the desired message.
   * @returns {Promise<object>} message - The message matching the {@code messageId} provided.
   * @throws will throw an error on a failed response
   */
  function get (messageId) {
    return getter(rootUrl + '/' + messageId, {}, 'Could not retrieve message ' + messageId)
  }

  /**
   * Retrieve a list of messages associated with the {@code accountId}.
   *
   * @param {object} [filters] - Properties to filter the list
   * @returns {Promise<object>} message list - The list of messages
   * @throws will throw an error on a failed response
   */
  function getList (filters) {
    return getter(rootUrl, filters, 'Could not retrieve message list')
  }

  /**
   * Retrieve the next page of list results.
   *
   * @param {string} nextPageUri - The URL to the next page of results
   *
   * @returns {Promise<object>} message page - the next page of messages
   * @throws will throw an error on a failed response
   */
  function getNextPage (nextPageUri) {
    return getter(nextPageUri, null, 'Could not retrieve message list')
  }

  /**
   * Send an SMS message through the FreeClimb API.
   *
   * @param {string} from - The phone number to use as the sender. This must be an incoming phone number you have purchased from FreeClimb.
   * @param {string} to - The phone number to send the message to.
   * @param {string} text - The text contained in the message. (maximum 254 characters)
   * @returns {Promise<object>} message - The newly created message
   * @throws will throw an error on a failed response
   */
  function create (from, to, text) {
    return poster(rootUrl, {from: from, to: to, text: text}, 'Could not create message')
  }

  return {
    get: get,
    getList: getList,
    getNextPage: getNextPage,
    create: create
  }
}

module.exports = messages
