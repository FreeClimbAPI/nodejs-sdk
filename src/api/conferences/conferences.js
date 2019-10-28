/**
 * @module freeclimb-sdk/api/conferences
 */

var participants = require('./participants/index')
var common = require('../common/index')

/**
 * @typedef ConferencesRequester
 * @type {Object}
 * @property {function} get - Retrieve a single conference from FreeClimb
 * @property {function} update - Update an existing conference
 * @property {function} getList - Retrieve a list of conferences associated with this accountId
 * @property {function} create - Create a new conference
 * @property {module:freeclimb-sdk/api/conferences/participants.ParticipantsRequester} participants - Interact with the participants of a specific conference
 */

/**
 * Represents the set of wrappers around the FreeClimb Conferences API.
 * It provides methods to handle all the operations supported by the FreeClimb Conferences API.
 *
 * @param {string} accountId - The accountId for authentication.
 * @param {string} authToken - The authToken for authentication.
 * @returns {ConferencesRequester} requester - A ConferencesRequester
 */
function conferences (accountId, authToken) {
  var getter = common.commonGetBuilder(accountId, authToken)
  var poster = common.commonPostBuilder(accountId, authToken)

  /**
   * Base url for conferences
   */
  var rootUrl = '/Accounts/' + accountId + '/Conferences'

  /**
   * Retrieve a single conference from FreeClimb.
   *
   * @param {string} conferenceId - The {@code conferenceId} of the desired conference.
   *
   * @returns {Promise<object>} conference - The conference matching the {@code conferenceId} provided.
   * @throws will throw an error on a failed response
   */
  function get (conferenceId) {
    return getter(rootUrl + '/' + conferenceId, {}, 'Could not retrieve conference ' + conferenceId)
  }

  /**
   * Update the existing conference associated with the {@code conferenceId}.
   *
   * @param {string} conferenceId - The {@code conferenceId} of the desired conference.
   * @param {object} options - The properties to change in the target conference.
   * @returns {Promise<object>} conference - The conference matching the {@code conferenceId} provided.
   * @throws will throw an error on a failed response
   */
  function update (conferenceId, options) {
    return poster(rootUrl + '/' + conferenceId, options, 'Could not update conference ' + conferenceId)
  }

  /**
   * Retrieve a list of conferences associated with the {@code accountId}.
   *
   * @param {object} [filters] - Properties to filter the list
   * @returns {Promise<object>} conference list - The list of conferences
   * @throws will throw an error on a failed response
   */
  function getList (filters) {
    return getter(rootUrl, filters, 'Could not retrieve conference list')
  }

  /**
   * Retrieve the next page of list results
   *
   * @param {string} nextPageUri - The URL to the next page of results
   *
   * @return {Promise<object>} conference page - the next page of conferences
   * @throws will throw an error on a failed response
   */
  function getNextPage (nextPageUri) {
    return getter(nextPageUri, null, 'Could not retrieve conference list')
  }

  /**
   * Create a new conference through the FreeClimb API.
   *
   * @param {object} [options] - Properties to set when creating a conference.
   * @returns {Promise<object>} conference - The newly created conference
   * @throws will throw an error on a failed response
   */
  function create (options) {
    return poster(rootUrl, options, 'Could not create conference')
  }

  /**
   * Creates a {@link module:freeclimb-sdk/api/conferences/participants.ParticipantsRequester} bound to a specific conference.
   *
   * @param {string} conferenceId - The {@code conferenceId} to bind the ParticipantsRequester to.
   * @returns {ParticipantsRequester} requester - the ParticipantsRequester that was created.
   */
  function participantsRequester (conferenceId) {
    return participants(accountId, authToken, conferenceId)
  }

  return {
    get: get,
    update: update,
    getList: getList,
    getNextPage: getNextPage,
    create: create,
    participants: participantsRequester
  }
}

module.exports = conferences
