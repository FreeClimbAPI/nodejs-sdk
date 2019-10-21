/**
 * @module freeclimb-sdk/enums/getDigitsReason
 */

/**
 * Enum for the possible values of the reason field on a GetDigits invocation
 *
 * @readonly
 * @enum {string}
 */
var getDigitsReason = {
  FINISH_KEY: 'finishKey',
  TIMEOUT: 'timeout',
  HANGUP: 'hangup',
  MIN_DIGITS: 'minDigits',
  MAX_DIGITS: 'maxDigits'
}

module.exports = getDigitsReason
