/**
 * @module freeclimb-sdk/api/conferences/participants
 */

var common = require('../../common/index')

/**
 * @typedef ParticipantsRequester
 * @type {object}
 * @property {function} get - Retrieve a single participant
 * @property {function} update - Update an existing participant
 * @property {function} getList - Retrieve a list of participants associated with this conferenceId
 * @property {function} delete - Delete a participant
 */

/**
 * Represents the set of wrappers around the FreeClimb Participants API.
 * It provides methods to handle all the operations supported by the FreeClimb Participants API.
 *
 * @param {string} accountId - The accountId for authentication.
 * @param {string} authToken - The authToken for authentication.
 * @param {string} conferenceId - The conferenceId to operate against.
 * @returns {ParticipantsRequester} requester - A ParticipantsRequester
 */
function participants (accountId, authToken, conferenceId) {
  var getter = common.commonGetBuilder(accountId, authToken)
  var poster = common.commonPostBuilder(accountId, authToken)
  var deleter = common.commonDeleteBuilder(accountId, authToken)

  /**
   * base url for participants for this conference
   */
  var rootUrl = '/Accounts/' + accountId + '/Conferences/' + conferenceId + '/Participants'

  /**
   * Retrieve a single participant from FreeClimb.
   *
   * @param {string} participantId - The {@code callId} of the desired participant.
   * @returns {Promise<object>} participant - The participant matching the {@code callId} provided.
   * @throws will throw an error on a failed response
   */
  function get (participantId) {
    return getter(rootUrl + '/' + participantId, {}, 'Could not retrieve participant ' + participantId)
  }

  /**
   * Update the existing participant associated with the {@code callId}.
   *
   * @param {string} participantId - The {@code callId} of the desired participant.
   * @param {object} options - The properties to change on the target participant.
   * @returns {Promise<object>} participant - The participant matching the {@code callId} provided.
   * @throws will throw an error on a failed response
   */
  function update (participantId, options) {
    return poster(rootUrl + '/' + participantId, options, 'Could not update participant ' + participantId)
  }

  /**
   * Retrieve a list of participants associated with the conference.
   *
   * @param {object} [filters] - An object containing a number of possible ways to filter the participants returned by FreeClimb.
   * @returns {Promise<object>} participant list - A list of participants for this conference.
   * @throws will throw an error on a failed response
   */
  function getList (filters) {
    return getter(rootUrl, filters, 'Could not retrieve participant list')
  }

  /**
   * Retrieve the next page of list results
   *
   * @param {string} nextPageUri - The URL to the next page of results
   *
   * @return {Promise<object>} participants page - the next page of participants
   * @throws will throw an error on a failed response
   */
  function getNextPage (nextPageUri) {
    return getter(nextPageUri, null, 'Could not retrieve participant list')
  }

  /**
   * Delete the participant associated with the {@code callId}.
   *
   * @param {string} participantId - The {@code callId} of the desired participant.
   * @returns {Promise<null>} null - resolves to null on a success.
   * @throws will throw an error on a failed response
   */
  function deleteParticipant (participantId) {
    return deleter(rootUrl + '/' + participantId, 'Could not delete participant ' + participantId)
  }

  return {
    get: get,
    update: update,
    getList: getList,
    getNextPage: getNextPage,
    delete: deleteParticipant
  }
}

module.exports = participants
