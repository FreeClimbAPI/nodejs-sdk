/**
 * SDK Module
 * @module freeclimb-sdk
 */

const api = require('./api')
const percl = require('./percl')
const enums = require('./enums')
const utils = require('./utils')

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
 * @param {string} apiKey The auth token of the account making API requests
 * @property {module:freeclimb-sdk/utils} utils - Utility functions to help interact with the API
 * @returns {FreeClimbSDK} SDK - API, PerCL, Enum, and Utils modules
 */
function freeClimbSDK (accountId, apiKey) {
  return {
    api: api(accountId, apiKey),
    percl: percl,
    enums: enums,
    utils: utils
  }
}

module.exports = freeClimbSDK
