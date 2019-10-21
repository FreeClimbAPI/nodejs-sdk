/**
 * @module freeclimb-sdk/enums/getSpeechReason
 */

/**
 * Enum for the possible values of the reason field on a GetSpeech invocation.
 *
 * @readonly
 * @enum {string}
 */
var getSpeechReason = {
  ERROR: 'error',
  HANGUP: 'hangup',
  DIGIT: 'digit',
  NO_INPUT: 'noInput',
  NO_MATCH: 'noMatch',
  RECOGNITION: 'recognition'
}

module.exports = getSpeechReason
