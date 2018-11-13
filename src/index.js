/**
 * SDK Module
 * @module persephony-sdk
 */

var api = require('./api')
var percl = require('./percl')
var enums = require('./enums')

/**
 * The publicly exposed modules of the Persephony SDK
 *
 * @typedef PersephonySDK
 * @type {Object}
 * @property {module:persephony-sdk/api} api - The API module
 * @property {module:persephony-sdk/percl} percl - The PerCL module
 * @property {module:persephony-sdk/enums} enums - The Enums module
 */

/**
 * The top level module of the persephony SDK
 * @param {string} accountId The ID of the account making API requests
 * @param {string} authToken The auth token of the account making API requests
 * @returns {PersephonySDK} SDK - API, PerCL, and Enum modules
 */
function persephonySDK (accountId, authToken) {
  return {
    api: api(accountId, authToken),
    percl: percl,
    enums: enums
  }
}

module.exports = persephonySDK
