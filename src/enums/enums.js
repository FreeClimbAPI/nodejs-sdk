/**
 * @module freeclimb-sdk/enums
 */

var language = require('./language')
var callStatus = require('./callStatus')
var ifMachine = require('./ifMachine')
var playBeep = require('./playBeep')
var conferenceStatus = require('./conferenceStatus')
var grammarType = require('./grammarType')
var accountStatus = require('./accountStatus')
var callDirection = require('./callDirection')
var answeredBy = require('./answeredBy')
var machineType = require('./machineType')
var logLevel = require('./logLevel')
var queueResult = require('./queueResult')
var recordUtteranceTermReason = require('./recordUtteranceTermReason')
var getDigitsReason = require('./getDigitsReason')
var getSpeechReason = require('./getSpeechReason')
var grammarFileBuiltIn = require('./grammarFileBuiltIn')
var messageDirection = require('./messageDirection')
var messageStatus = require('./messageStatus')
var requestType = require('./requestType')

module.exports = {
  language: language,
  callStatus: callStatus,
  ifMachine: ifMachine,
  playBeep: playBeep,
  conferenceStatus: conferenceStatus,
  grammarType: grammarType,
  accountStatus: accountStatus,
  callDirection: callDirection,
  answeredBy: answeredBy,
  machineType: machineType,
  logLevel: logLevel,
  queueResult: queueResult,
  recordUtteranceTermReason: recordUtteranceTermReason,
  getDigitsReason: getDigitsReason,
  getSpeechReason: getSpeechReason,
  grammarFileBuiltIn: grammarFileBuiltIn,
  messageDirection: messageDirection,
  messageStatus: messageStatus,
  requestType: requestType
}
