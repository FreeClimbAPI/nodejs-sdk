/**
 * @module freeclimb-sdk/enums/queueResult
 */

/**
 * Enums for the possible values of the queueResult field on a Queue actionUrl invocation.
 *
 * @readonly
 * @enum {string}
 */
var queueResult = {
  QUEUE_FULL: 'queueFull',
  DEQUEUED: 'dequeued',
  HANGUP: 'hangup',
  SYSTEM_ERROR: 'systemError'
}

module.exports = queueResult
