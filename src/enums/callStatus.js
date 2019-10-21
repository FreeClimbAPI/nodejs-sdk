/**
 * @module freeclimb-sdk/enums/callStatus
 */

/**
 * Enum for Call.status values.
 *
 * @readonly
 * @enum {string}
 */
var callStatus = {
  QUEUED: 'queued',
  RINGING: 'ringing',
  IN_PROGRESS: 'inProgress',
  CANCELED: 'canceled',
  COMPLETED: 'completed',
  FAILED: 'failed',
  BUSY: 'busy',
  NO_ANSWER: 'noAnswer'
}

module.exports = callStatus
