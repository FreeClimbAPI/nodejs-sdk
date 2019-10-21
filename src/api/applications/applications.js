/**
 * @module freeclimb-sdk/api/applications
 */
var common = require('../common/index')

/**
 * @typedef ApplicationRequester
 * @type {Object}
 * @property {function} get - Retrieve a single application from FreeClimb
 * @property {function} update - Update an existing application
 * @property {function} getList - Retrieve a list of applications associated with this accountId
 * @property {function} create - Create a new application
 * @property {function} delete - Delete an application
 */

/**
 * Represents the set of wrappers around the FreeClimb Applications API.
 * It provides methods to handle all the operations supported by the FreeClimb Applications API.
 *
 * @param {string} accountId - The accountId for authentication.
 * @param {string} authToken - The authToken for authentication.
 * @returns {ApplicationsRequester} requester - returns an ApplicationRequester
 */
function applications (accountId, authToken) {
  var getter = common.commonGetBuilder(accountId, authToken)
  var poster = common.commonPostBuilder(accountId, authToken)
  var deleter = common.commonDeleteBuilder(accountId, authToken)

  /**
   * baseUrl for applications
   */
  var rootUrl = '/Accounts/' + accountId + '/Applications'

  /**
   * Retrieve a single application from FreeClimb
   *
   * @param {string} applicationId - The {@code applicationId} of the desired application.
   * @returns {Promise<object>} application - The application matching the {@code applicationId} provided.
   * @throws will throw an error on a failed response
   */
  function get (applicationId) {
    return getter(rootUrl + '/' + applicationId, {}, 'Could not retrieve application ' + applicationId)
  }

  /**
   * Update the existing application associated with {@code applicationId}.
   *
   * @param {string} applicationId - The {@code applicationId} of the desired application.
   * @param {object} options - The properties to change in the target application.
   * @returns {Promise<object>} application - The application matching the {@code applicationId} provided.
   * @throws will throw an error on a failed response
   */
  function update (applicationId, options) {
    return poster(rootUrl + '/' + applicationId, options, 'Could not update application ' + applicationId)
  }

  /**
   * Retrieve a list of applications associated with the {@code accountId}
   *
   * @param {object} [filters] - An object containing a number of possible ways to filter the applications
   * @returns {Promise<object>} application list - The list of applications
   * @throws will throw an error on a failed response
   */
  function getList (filters) {
    return getter(rootUrl, filters, 'Could not retrieve application list')
  }

  /**
   * Retrieve the next page of list results
   *
   * @param {string} nextPageUri - The URL to the next page of results
   *
   * @return {Promise<object>} application page - the next page of applications
   * @throws will throw an error on a failed response
   */
  function getNextPage (nextPageUri) {
    return getter(nextPageUri, null, 'Could not retrieve application list')
  }

  /**
   * Create a new application through the FreeClimb API.
   *
   * @param {object} [options] - arguments that can be provided when creating an application. See FreeClimb documentation for details.
   * @returns {Promise<object>} application - The newly created application
   * @throws will throw an error on a failed response
   */
  function create (options) {
    return poster(rootUrl, options, 'Could not create application')
  }

  /**
   * Delete the application associated with {@code applicationId}
   *
   * @param {string} applicationId - The {@code applicationId} of the application to delete.
   * @returns {Promise<null>} null - resolves to null on success
   * @throws will throw an error on a failed response
   */
  function deleteApp (applicationId) {
    return deleter(rootUrl + '/' + applicationId, 'Could not delete application ' + applicationId)
  }

  return {
    get: get,
    update: update,
    getList: getList,
    getNextPage: getNextPage,
    create: create,
    delete: deleteApp
  }
}

module.exports = applications
