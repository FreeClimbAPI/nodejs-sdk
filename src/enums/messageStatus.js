/**
 * @module freeclimb-sdk/enums/messageStatus
 */
/**
 * Enum for Message status values.
 *
 * @readonly
 * @enum {string}
 */
var messageStatus = {
  NEW: 'new',
  QUEUED: 'queued',
  REJECTED: 'rejected',
  SENDING: 'sending',
  SENT: 'sent',
  FAILED: 'failed',
  RECEIVED: 'received',
  UNDELIVERED: "undelivered",
  EXPIRED: "expired",
  DELETED: "deleted",
  UNKNOWN: "unknown"
}

module.exports = messageStatus
