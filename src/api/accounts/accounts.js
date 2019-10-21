/**
 * @module freeclimb-sdk/api/accounts
 */

var common = require('../common/index')

/**
 * @typedef AccountRequester
 * @type {Object}
 * @property {function} get - Retrieve a single account from FreeClimb
 * @property {function} update - update an account
 */

/**
 * Represents the set of wrappers around the FreeClimb Accounts API.
 * It provides methods to handle all the operations supported by the FreeClimb Accounts API.
 *
 * @param {string} accountId - The accountId for authentication.
 * @param {string} authToken - The authToken for authentication.
 * @returns {AccountRequester} requester - returns an AccountRequester.
 */
function accounts (accountId, authToken) {
  var getter = common.commonGetBuilder(accountId, authToken)
  var poster = common.commonPostBuilder(accountId, authToken)
  /**
   * Base path for accounts
   */
  var rootPath = '/Accounts/' + accountId

  /**
   * Retrieve a single account from FreeClimb.
   *
   * @function get
   * @async
   * @param {string} accountId - The {@code accountId} of the desired account.
   * @returns {Promise<object>} account - The account matching the {@code accountId} provided.
   * @throws will throw an error on a failed response
   */
  function get (accountId) {
    return getter(rootPath, {}, 'Could not retrieve account ' + accountId)
  }

  /**
   * Update the existing account associated with {@code accountId}.
   *
   * @param {string} accountId - The {@code accountId} of the desired account.
   * @param {object} options - The properties to change in the target account.
   * @returns {Promise<object>} account - The account matching the {@code accountId} provided.
   * @throws will throw an error on a failed response
   */
  function update (accountId, options) {
    return poster(rootPath, options, 'Could not update account ' + accountId)
  }

  return {
    get: get,
    update: update
  }
}

module.exports = accounts
