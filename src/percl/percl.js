/**
 * @module freeclimb-sdk/percl
 */
var assign = require('lodash.assign')

/**
 * Build an OutDial PerCL command.
 *
 * @param {string} to - The E.164 representation of the target phone number.
 * @param {string} from - The caller ID that will appear to the called party when FreeClimb calls. Can be the {@code To} or {@code From} number from the callConnectUrl that is requesting this command, or any phone number purchased or verified on FreeClimb.
 * @param {string} actionUrl - The URL which will be requested immediately on processing an OutDial command. This is used to continue control of the parent call that has requested the OutDial.
 * @param {string} callConnectUrl - The URL which will be requested informing the result of the OutDial. PerCL is expected if the call status is {@code module:freeclimb-sdk/enums/callStatus.IN_PROGRESS}.
 * @param {object} [options] - Additional properties to include in the command.
 * @returns {{OutDial}} - An object representing an OutDial command.
 */
function outDial (to, from, actionUrl, callConnectUrl, options) {
  return {OutDial: assign({destination: to, callingNumber: from, actionUrl: actionUrl, callConnectUrl: callConnectUrl}, options)}
}

/**
 * Build a Hangup PerCL command.
 *
 * @param {object} [options] - Additional properties to include in the command.
 * @returns {{Hangup}} - An object representing a Hangup command.
 */
function hangup (options) {
  return {Hangup: assign({}, options)}
}

/**
 * Build a Pause PerCL command.
 *
 * @param {integer} length - The length in milliseconds FreeClimb will wait silently before continuing on.
 * @returns {{Pause}} - An object representing a Pause command.
 */
function pause (length) {
  return {Pause: {length: length}}
}

/**
 * Build a Redirect PerCL command.
 *
 * @param {string} actionUrl - The URL to request for a new PerCL script.
 * @returns {{Redirect}} - An object representing a Redirect command.
 */
function redirect (actionUrl) {
  return {Redirect: {actionUrl: actionUrl}}
}

/**
 * Build a SendDigits PerCL command.
 *
 * @param {string} digits - The string containing the digits to be played.
 * @param {object} [options] - Additional properties to include in the command.
 * @returns {{SendDigits}} - An object representing a SendDigits command.
 */
function sendDigits (digits, options) {
  return {SendDigits: assign({digits: digits}, options)}
}

/**
 * Build a CreateConference PerCL command.
 *
 * @param {string} actionUrl - The URL to request once the conference is created.
 * @param {object} [options] - Additional properties to include in the command.
 * @returns {{CreateConference}} - An object representing a CreateConference command.
 */
function createConference (actionUrl, options) {
  return {CreateConference: assign({actionUrl: actionUrl}, options)}
}

/**
 * Build a TerminateConference PerCL command.
 *
 * @param {string} conferenceId - The ID of the conference to terminate.
 * @returns {{TerminateConference}} - An object representing a TerminateConference command.
 */
function terminateConference (conferenceId) {
  return {TerminateConference: {conferenceId: conferenceId}}
}

/**
 * Build an AddToConference PerCL command.
 *
 * @param {string} conferenceId - ID of the conference to which to add the participant.
 * @param {string} callId - ID of the call that will be added to the specified conference.
 * @param {object} [options] - Additional properties to include in the command.
 * @returns {{AddToConference}} - An object representing an AddToConference command.
 */
function addToConference (conferenceId, callId, options) {
  return {AddToConference: assign({conferenceId: conferenceId, callId: callId}, options)}
}

/**
 * Build a RemoveFromConference PerCL Command.
 *
 * @param {string} callId - The ID of the call leg that will be removed from the conference it is currently in.
 * @returns {{RemoveFromConference}} - An object representing a RemoveFromConference command.
 */
function removeFromConference (callId) {
  return {RemoveFromConference: {callId: callId}}
}

/**
 * Build a SetListen PerCL command.
 *
 * @param {string} callId - The ID of the call leg that is to be assigned the listen privilege.
 * @param {boolean} [listen] - Specifying false will silence the conference for this participant, while true will un-silence.
 * @returns {{SetListen}} - An object representing a SetListen command.
 */
function setListen (callId, listen) {
  var options = {callId: callId}
  if (listen !== undefined) {
    options.listen = listen
  }
  return {SetListen: options}
}

/**
 * Build a SetTalk PerCL command.
 *
 * @param {string} callId - The ID of the call leg that is to be assigned the talk privilege.
 * @param {boolean} [talk] = Specifying false will mute the participant, while true will un-mute.
 * @returns {{SetTalk}} - An object representing a SetTalk command.
 */
function setTalk (callId, talk) {
  var options = {callId: callId}
  if (talk !== undefined) {
    options.talk = talk
  }
  return {SetTalk: options}
}

/**
 * Build an Enqueue PerCL command.
 *
 * @param {string} queueId - The ID of the queue to add the call to.
 * @param {string} actionUrl - The URL that will be requested when the call leaves the queue.
 * @param {string} waitUrl - The URL pointing to a PerCL document containing PerCL actions to loop through while the caller is waiting in the queue.
 * @param {string} [notificationUrl] - THe URL to be invoked when the call enters the queue.
 * @returns {{Enqueue}} - An object representing an Enqueue command.
 */
function enqueue (queueId, actionUrl, waitUrl, notificationUrl) {
  var options = {queueId: queueId, actionUrl: actionUrl, waitUrl: waitUrl}
  if (notificationUrl !== undefined) {
    options.notificationUrl = notificationUrl
  }
  return {Enqueue: options}
}

/**
 * Build a Dequeue PerCL command.
 *
 * @returns {{Dequeue}} - An object representing a Dequeue command.
 */
function dequeue () {
  return {Dequeue: {}}
}

/**
 * Build a RecordUtterance PerCL command.
 *
 * @param {string} actionUrl - The URL to which information on the complete recording is submitted. The PerCL received in response is then used to continue further with the call processing.
 * @param {object} [options] - Additional properties to include in the command.
 * @returns {{RecordUtterance}} - An object representing a RecordUtterance command.
 */
function recordUtterance (actionUrl, options) {
  return {RecordUtterance: assign({actionUrl: actionUrl}, options)}
}

/**
 * Build a StartRecordCall PerCL command.
 *
 * @returns {{StartRecordCall}} - An object representing a StartRecordCall command.
 */
function startRecordCall () {
  return {StartRecordCall: {}}
}

/**
 * Build a Play PerCL command.
 *
 * @param {string} file - The URL of the audio file to be played to the caller.
 * @param {object} [options] - Additional properties to include in the command.
 * @returns {{Play}} - An object representing a Play command.
 */
function play (file, options) {
  return {Play: assign({file: file}, options)}
}

/**
 * Build a PlayEarlyMedia PerCL command.
 *
 * @param {string} file - The URL of the audio file to be played to the caller.
 * @returns {{PlayEarlyMedia}} - An object representing a PlayEarlyMedia command.
 */
function playEarlyMedia (file) {
  return {PlayEarlyMedia: {file: file}}
}

/**
 * Build a Say PerCL command.
 *
 * @param {string} text - The message to be played to the caller using TTS. String size is limited to 4 KB. An empty string will cause the command to be skipped over.
 * @param {object} [options] - Additional properties to include in the command.
 * @returns {{Say}} - An object representing a Say command.
 */
function say (text, options) {
  return {Say: assign({text: text}, options)}
}

/**
 * Build a GetDigits PerCL command.
 *
 * @param {string} actionUrl - The URL to request when the caller has finished entering digits.
 * @param {object} [options] - Additional properties to include in the command.
 * @returns {{GetDigits}} - An object representing a GetDigits command.
 */
function getDigits (actionUrl, options) {
  return {GetDigits: assign({actionUrl: actionUrl}, options)}
}

/**
 * Build a GetSpeech PerCL command.
 *
 * @param {string} actionUrl - The URl to be invoked when the caller has finished speaking or on a timeout.
 * @param {string} grammarFile - The grammar file to be used for speech recognition. If grammarType is set to {@code module:freeclimb-sdk/enums/grammarType.URL} this attribute is specified as a download URL. Otherwise it must be one of the built-ins. {@see module:freeclimb-sdk/enums/grammarFileBuiltin}
 * @param {object} [options] - Additional properties to include in the command.
 * @returns {{GetSpeech}} - An object representing a GetSpeech command.
 */
function getSpeech (actionUrl, grammarFile, options) {
  return {GetSpeech: assign({actionUrl: actionUrl, grammarFile: grammarFile}, options)}
}

/**
 * Build an Sms PerCL command.
 *
 * @param {string} from - E.164 representation of the phone number to use as the sender. This must be an incoming phone number you have purchased from FreeClimb.
 * @param {string} to - E.164 representation of the phone number to which the message will be sent.
 * @param {string} text - The text contained in the message. (maximum 254 characters)
 * @param {object} [options] - Additional properties to include in the command.
 * @returns {{Sms}} - An object representing an Sms command.
 */
function sms (from, to, text, options) {
  return {Sms: assign({from: from, to: to, text: text}, options)}
}

/**
 * Build an Reject PerCL command.
 *
 * @param {string} reason - Reason for rejecting the call
 * @returns {{Reject}} - An object rereseting a Reject command.
 */
function reject (reason) {
  return {Reject: {reason}}
}

/**
 * Convenience function to convert one or more PerCL commands into a PerCL script.
 *
 * @param {object} scripts - one or more PerCL commands
 * @returns {[script]} script - Returns all the provided PerCL commands wrapped in an array.
 */
function build (scripts) {
  return Array.prototype.slice.call(arguments)
}

module.exports = {
  build: build,
  outDial: outDial,
  hangup: hangup,
  pause: pause,
  redirect: redirect,
  sendDigits: sendDigits,
  createConference: createConference,
  terminateConference: terminateConference,
  addToConference: addToConference,
  removeFromConference: removeFromConference,
  setListen: setListen,
  setTalk: setTalk,
  enqueue: enqueue,
  dequeue: dequeue,
  recordUtterance: recordUtterance,
  startRecordCall: startRecordCall,
  play: play,
  playEarlyMedia: playEarlyMedia,
  say: say,
  getDigits: getDigits,
  getSpeech: getSpeech,
  sms: sms,
  reject
}
