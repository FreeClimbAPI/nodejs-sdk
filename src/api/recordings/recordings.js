/**
 * @module freeclimb-sdk/api/recordings
 */
var requester = require('../requester/index')
var common = require('../common/index')
var fs = require('fs')
var path = require('path')

/**
 * @typedef RecordingsRequester
 * @type {Object}
 * @property {function} get - Retrieve metadata about a single recording
 * @property {function} getList - Retrieve a list of recording metadata associated with the {@code accountId}
 * @property {function} download - Save a recording to disk
 * @property {function} stream - Retrieve a file stream for a recording
 * @property {function} delete - Delete a recording
 */

/**
 * Represents the set of wrappers around the FreeClimb Recordings API.
 * It provides methods to handle all the operations supported by the FreeClimb Recordings API.
 *
 * @param {string} accountId - The accountId for authentication
 * @param {string} authToken - The authToken for authentication
 * @returns {RecordingsRequester} requester - A RecordingsRequester
 */
function recordings (accountId, authToken) {
  var getter = common.commonGetBuilder(accountId, authToken)
  var deleter = common.commonDeleteBuilder(accountId, authToken)

  /**
   * Base url for recordings
   */
  var rootUrl = '/Accounts/' + accountId + '/Recordings'

  /**
   * Retrieve metadata about a single recording.
   *
   * @param {string} recordingId - The {@code recordingId} of the desired recording
   * @returns {Promise<object>} recording - Metadata about the recording matching the {@code recordingId} provided.
   * @throws will throw an error on a failed response
   */
  function get (recordingId) {
    return getter(rootUrl + '/' + recordingId, {}, 'Could not retrieve recording ' + recordingId)
  }

  /**
   * Retrieve a list of recording metadata associated with the {@code accountId}
   *
   * @param {object} [filters] - Optional properties to filter the recording list FreeClimb will return
   * @returns {Promise<object>} recording list - A list of metadata about the available recordings
   * @throws will throw an error on a failed response
   */
  function getList (filters) {
    return getter(rootUrl, filters, 'Could not retrieve recording list')
  }

  /**
   * Retrieve the next page of list results
   *
   * @param {string} nextPageUri - The URL to the next page of results
   *
   * @return {Promise<object>} recording page - the next page of recordings
   * @throws will throw an error on a failed response
   */
  function getNextPage (nextPageUri) {
    return getter(nextPageUri, null, 'Could not retrieve recording list')
  }

  /**
   * Save a recording to disk.
   *
   * @param {string} recordingId - The {@code recordingId} of the desired recording.
   * @param {string} filePath - The path to the location on disk and filename to save the recording to.
   * @returns {Promise<undefined>} undefined - Will return undefined once the request succeeds
   * @throws will throw an error on failed response
   */
  function download (recordingId, filePath) {
    return requester.GET(accountId, authToken, rootUrl + '/' + recordingId + '/Download', {}).then(function (resp) {
      if (!resp.ok) {
        return resp.json().then(function (json) {
          throw new Error('Could not download recording ' + recordingId + ' (' + resp.status + ' ' + resp.statusText + ') ' + JSON.stringify(json))
        })
      }
      var pathObj = path.parse(filePath)
      var formattedPath = path.format(pathObj)
      var destination = fs.createWriteStream(formattedPath)
      resp.body.pipe(destination)
    })
  }

  /**
   * Retrieve a file stream for a recording
   *
   * @param {string} recordingId - The {@code recordingId} of the desired recording.
   * @returns {Promise<Stream>} ReadableStream - A Node.js Readable Stream for independent decoding. {@see https://nodejs.org/api/stream.html#stream_readable_streams}
   * @throws will throw an error on failed response
   */
  function stream (recordingId) {
    return requester.GET(accountId, authToken, rootUrl + '/' + recordingId + '/Stream', {}).then(function (resp) {
      if (!resp.ok) {
        return resp.json().then(function (json) {
          throw new Error('Could not stream recording ' + recordingId + ' (' + resp.status + ' ' + resp.statusText + ') ' + JSON.stringify(json))
        })
      }
      return resp.body
    })
  }

  /**
   * Delete a recording.
   *
   * @param {string} recordingId - The {@code recordingId} of the recording to delete
   * @returns {Promise<null>} null - resolves to null on success
   * @throws will throw an error on a failed response
   */
  function deleteRec (recordingId) {
    return deleter(rootUrl + '/' + recordingId, 'Could not delete recording ' + recordingId)
  }

  return {
    get: get,
    getList: getList,
    getNextPage: getNextPage,
    download: download,
    stream: stream,
    delete: deleteRec
  }
}

module.exports = recordings
