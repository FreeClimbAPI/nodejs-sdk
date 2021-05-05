/**
 * @module freeclimb-sdk/utils
 */

const moment = require('moment');
const qs = require('qs');
const crypto = require('crypto');

const Utils = {
  /**
   * Verify a request's signature
   * 
   * @param {string or Buffer} requestBody - The request's body
   * @param {string} signatureHeader - The request's `freeclimb-signature` header
   * @param {string} signingSecret - A signing secret from the FreeClimb account
   * @param {integer} tolerance - Acceptable duration threshold represented in 
   * milliseconds,  defaulting to 5 minutes
   * @returns {null} - Will resolve to null on success
   * @throws will throw an error on a failed verification
   */
  verifyRequest: function (requestBody, signatureHeader, signingSecret, tolerance=5*60*1000) {
    if (typeof signatureHeader !== 'string') {
      throw new Error(`ERROR - signatureHeader must be the string value of the 'freeclimb-signature' header`)
    }
    if (typeof signingSecret !== 'string') {
      throw new Error(`ERROR - signingSecret must be the string value of the account's signings secret`)
    }
    const signatureHeaderObj = signatureHeader.split(',')
      .map(element => qs.parse(element))
      .reduce((result, obj) => {
        if(result.v1 && obj.v1) {
          result.v1 = [result.v1, obj.v1];
        }
        return {...obj, ...result};
      });
    // timestamp (t) on the `FreeClimb-Signature` header is represented by a unix timestamp (in seconds)
    const currentTime = moment().unix();
    const signatureAge = (currentTime - signatureHeaderObj.t) * 1000;
    if (tolerance < signatureAge) {
      throw new Error(`Request rejected - signature's timestamp failed against current tolerance of ${tolerance} milliseconds. Signature age: ${signatureAge} milliseconds`);
    }

    const data = signatureHeaderObj.t + '.' + requestBody;
    const hmac = crypto.createHmac('sha256', signingSecret)
      .update(data, 'sha256')
      .digest('hex');
    if (!signatureHeaderObj.v1.includes(hmac)) {
        throw new Error('Request rejected - request signature failed');
    }
  }
};

module.exports = Utils;
