/**
 * @module freeclimb-sdk/enums/requestType
 */

/**
 * Enum for requestType values.
 * Can be checked against to know the format of the callback.
 *
 * @readonly
 * @enum {string}
 */
var requestType = {
  INBOUND_CALL: 'inboundCall',
  RECORD: 'record',
  GET_DIGITS: 'getDigits',
  GET_SPEECH: 'getSpeech',
  REDIRECT: 'redirect',
  PAUSE: 'pause',
  OUT_DIAL_START: 'outDialStart',
  OUT_DIAL_CONNECT: 'outDialConnect',
  OUT_DIAL_API_CONNECT: 'outDialApiConnect',
  MACHINE_DETECTED: 'machineDetected',
  DEQUEUE: 'dequeue',
  QUEUE_WAIT: 'queueWait',
  ADD_TO_QUEUE_NOTIFICATION: 'addToQueueNotification',
  REMOVE_FROM_QUEUE_NOTIFICATION: 'removeFromQueueNotification',
  CALL_STATUS: 'callStatus',
  CREATE_CONFERENCE: 'createConference',
  CONFERENCE_STATUS: 'conferenceStatus',
  LEAVE_CONFERENCE: 'leaveConference',
  ADD_TO_CONFERENCE_NOTIFICATION: 'addToConferenceNotification',
  CONFERENCE_RECORDING_STATUS: 'conferenceRecordingStatus',
  CONFERENCE_CALL_CONTROL: 'conferenceCallControl',
  MESSAGE_DELIVERY: 'messageDelivery',
  MESSAGE_STATUS: 'messageStatus'
}

module.exports = requestType
