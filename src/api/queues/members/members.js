/**
 * @module freeclimb-sdk/api/queues/members
 */
var common = require('../../common/index')

/**
 * @typedef MembersRequester
 * @type {Object}
 * @property {function} get - Retrieve a single member from the queue
 * @property {function} getFront - Retrieve a single member from the front of the queue
 * @property {function} getList - Retrieve a list of members associated with the queue
 * @property {function} dequeue - Dequeue a single member from the queue
 * @property {function} dequeueFront - Dequeue a single member from the front of the queue
 */

/**
 * Represents the set of wrappers around the FreeClimb Members API.
 * It provides methods to handle all the operations supported by the FreeClimb Members API.
 *
 * @param {string} accountId - The accountId for authentication.
 * @param {string} authToken - The authToken for authentication.
 * @param {string} queueId - The queueId to operate against.
 * @returns {MembersRequester} requester - A MembersRequester
 */
function members (accountId, authToken, queueId) {
  var getter = common.commonGetBuilder(accountId, authToken)
  var poster = common.commonPostBuilder(accountId, authToken)

  /**
   * Base url for this queues' members
   * @type {string}
   */
  var rootUrl = '/Accounts/' + accountId + '/Queues/' + queueId + '/Members'

  /**
   * Retrieve a single member from the queue.
   *
   * @param {string} memberId - The {@code callId{ of the desired member.
   * @returns {Promise<object>} member - The member matching the {@code callId} provided.
   * @throws will throw an error on a failed response
   */
  function get (memberId) {
    return getter(rootUrl + '/' + memberId, {}, 'Could not retrieve member ' + memberId)
  }

  /**
   * Retrieve a single member from the front of the queue.
   *
   * @returns {Promise<object>} member - The member at the front of the queue.
   * @throws will throw an error on a failed response
   */
  function getFront () {
    return getter(rootUrl + '/Front', {}, 'Could not retrieve front member')
  }

  /**
   * Retrieve a list of members associated with the queue.
   *
   * @returns {Promise<object>} members list - A list of members in the associated queue.
   * @throws will throw an error on a failed response
   */
  function getList () {
    return getter(rootUrl, {}, 'Could not retrieve member list')
  }

  /**
   * Retrieve the next page of list results
   *
   * @param {string} nextPageUri - The URL to the next page of results
   *
   * @return {Promise<object>} member page - the next page of members
   * @throws will throw an error on a failed response
   */
  function getNextPage (nextPageUri) {
    return getter(nextPageUri, null, 'Could not retrieve member list')
  }

  /**
   * Dequeue a single member from the queue.
   *
   * @param {string} memberId - The {@code callId} of the desired member.
   * @returns {Promise<object>} member - The member matching the {@code callId} provided.
   * @throws will throw an error on a failed response
   */
  function dequeue (memberId) {
    return poster(rootUrl + '/' + memberId, {}, 'Could not dequeue member ' + memberId)
  }

  /**
   * Dequeue a single member from the front of the queue.
   *
   * @returns {Promise<object>} member - The member at the front of the queue.
   * @throws will throw an error on a failed response
   */
  function dequeueFront () {
    return poster(rootUrl + '/Front', {}, 'Could not dequeue front member')
  }

  return {
    get: get,
    getFront: getFront,
    getList: getList,
    getNextPage: getNextPage,
    dequeue: dequeue,
    dequeueFront: dequeueFront
  }
}

module.exports = members
