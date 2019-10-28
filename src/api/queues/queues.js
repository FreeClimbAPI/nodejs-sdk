/**
 * @module freeclimb-sdk/api/queues
 */

var common = require('../common/index')
var members = require('./members/index')

/**
 * @typedef QueuesRequester
 * @type {Object}
 * @property {function} get - Retrieve a single queue from FreeClimb
 * @property {function} update - Update an existing queue associated with the {@code accountId}
 * @property {function} getList - Retrieve a list of queues associated with the {@code accountId}
 * @property {function} create - Create a new queue through the FreeClimb API
 * @property {module:freeclimb-sdk/api/queues/members.MembersRequester} members - Interact with the members of a specific queue
 */

/**
 * Represents the set of wrappers around the FreeClimb Queues API.
 * It provides methods to handle all the operations supported by the FreeClimb Queues API.
 *
 * @param {string} accountId - The accountId for authentication.
 * @param {string} authToken - The authToken for authentication.
 * @returns {QueuesRequester} requester - A QueuesRequester.
 */
function queues (accountId, authToken) {
  var getter = common.commonGetBuilder(accountId, authToken)
  var poster = common.commonPostBuilder(accountId, authToken)

  /**
   * Base url for queues
   * @type {string}
   */
  var rootUrl = '/Accounts/' + accountId + '/Queues'

  /**
   * Retrieve a single queue from FreeClimb.
   *
   * @param {string} queueId - The {@code queueId} of the desired queue.
   * @returns {Promise<object>} queue - The queue matching the provided id.
   * @throws will throw an error on a failed response
   */
  function get (queueId) {
    return getter(rootUrl + '/' + queueId, {}, 'Could not retrieve queue ' + queueId)
  }

  /**
   * Update the existing queue associated with the {@code queueId}.
   *
   * @param {string} queueId - The {@code queueId} of the desired queue.
   * @param {object} options - The properties to change in the target queue.
   * @returns {Promise<object>} queue - The queue matching the {@code queueId} provided.
   * @throws will throw an error on a failed response
   */
  function update (queueId, options) {
    return poster(rootUrl + '/' + queueId, options, 'Could not update queue ' + queueId)
  }

  /**
   * Retrieve a list of queues associated with the {@code accountId}.
   *
   * @param {object} [filters] - An optional object containing a number of possible ways to filter the queues returned by FreeClimb.
   * @returns {Promise<object>} queue list - A list of queues.
   * @throws will throw an error on a failed response
   */
  function getList (filters) {
    return getter(rootUrl, filters, 'Could not retrieve queue list')
  }

  /**
   * Retrieve the next page of list results
   *
   * @param {string} nextPageUri - The URL to the next page of results
   *
   * @return {Promise<object>} queue page - the next page of queues
   * @throws will throw an error on a failed response
   */
  function getNextPage (nextPageUri) {
    return getter(nextPageUri, null, 'Could not retrieve queue list')
  }

  /**
   * Create a new queue through the FreeClimb API.
   *
   * @param {object} [options] - An Object to set the properties on the newly created queue.
   * @returns {Promise<object>} queue - The newly created queue.
   * @throws will throw an error on a failed response
   */
  function create (options) {
    return poster(rootUrl, options, 'Could not create queue')
  }

  /**
   * Creates a {@link module:freeclimb-sdk/api/queues/members.MembersRequester} bound to a specific queue.
   * @param {string} queueId - The {@code queueId} to bind the MembersRequester to.
   * @returns {MembersRequester} requester - The MembersRequester that was created.
   */
  function membersRequester (queueId) {
    return members(accountId, authToken, queueId)
  }

  return {
    get: get,
    update: update,
    getList: getList,
    getNextPage: getNextPage,
    create: create,
    members: membersRequester
  }
}

module.exports = queues
