/**
 * SDK Module
 * @module freeclimb-sdk
 */

var api = require('./api')
var percl = require('./percl')
var enums = require('./enums')

/**
 * The publicly exposed modules of the FreeClimb SDK
 *
 * @typedef FreeClimbSDK
 * @type {Object}
 * @property {module:freeclimb-sdk/api} api - The API module
 * @property {module:freeclimb-sdk/percl} percl - The PerCL module
 * @property {module:freeclimb-sdk/enums} enums - The Enums module
 */

/**
 * The top level module of the FreeClimb SDK
 * @param {string} accountId The ID of the account making API requests
 * @param {string} authToken The auth token of the account making API requests
 * @returns {FreeClimbSDK} SDK - API, PerCL, and Enum modules
 */
function freeClimbSDK (accountId, authToken) {
  return {
    api: api(accountId, authToken),
    percl: percl,
    enums: enums
  }
}

module.exports = freeClimbSDK
