/**
 * @module freeclimb-sdk/enums/recordUtteranceTermReason
 */

/**
 * Enum for the possible values of the termReason field on a RecordUtterance actionUrl invocation.
 *
 * @readonly
 * @enum {string}
 */
var recordUtteranceTermReason = {
  FINISH_KEY: 'finishKey',
  TIMEOUT: 'timeout',
  HANGUP: 'hangup',
  MAX_LENGTH: 'maxLength'
}

module.exports = recordUtteranceTermReason
