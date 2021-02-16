var percl = require('./percl')
var enums = require('../enums/index')

describe('percl', function () {
  describe('outDial', function () {
    var to = '+18374568394'
    var from = '+19345559483'
    var actionUrl = 'http://action.url'
    var callConnectUrl = 'http://call.connect'
    it('should return an OutDial command with the destination, calling number, actionUrl, and callConnectUrl set to the input values', function () {
      var expectedResult = {OutDial: {destination: to, callingNumber: from, actionUrl: actionUrl, callConnectUrl: callConnectUrl}}
      expect(percl.outDial(to, from, actionUrl, callConnectUrl)).toEqual(expectedResult)
    })
    it('should allow setting the optional fields', function () {
      var sendDigits = '1493#'
      var timeout = 93
      var ifMachine = 'redirect'
      var ifMachineUrl = 'http://if.machine'
      var statusCallbackUrl = 'http://status.callback'
      var privacyMode = true
      var expectedResult = {OutDial: {destination: to, callingNumber: from, actionUrl: actionUrl, callConnectUrl: callConnectUrl, sendDigits: sendDigits, timeout: timeout, ifMachine: ifMachine, ifMachineUrl: ifMachineUrl, statusCallbackUrl: statusCallbackUrl, privacyMode: privacyMode}}
      expect(percl.outDial(to, from, actionUrl, callConnectUrl, {sendDigits: sendDigits, timeout: timeout, ifMachine: ifMachine, ifMachineUrl: ifMachineUrl, statusCallbackUrl: statusCallbackUrl, privacyMode: privacyMode})).toEqual(expectedResult)
    })
  })
  describe('hangup', function () {
    it('should return a Hangup command', function () {
      expect(percl.hangup()).toEqual({Hangup: {}})
    })
    it('should allow optional properties', function () {
      var callId = 'CA1412312341235125245234534'
      var reason = 'Test reason'
      expect(percl.hangup({callId: callId, reason: reason})).toEqual({Hangup: {callId: callId, reason: reason}})
    })
  })
  describe('pause', function () {
    it('should build a Pause command', function () {
      var length = 20
      expect(percl.pause(length)).toEqual({Pause: {length: length}})
    })
  })
  describe('redirect', function () {
    it('should build a Redirect command', function () {
      var actionUrl = 'http://action.url'
      expect(percl.redirect(actionUrl)).toEqual({Redirect: {actionUrl: actionUrl}})
    })
  })
  describe('sendDigits', function () {
    var digits = '1234#'
    it('should build a SendDigits command', function () {
      expect(percl.sendDigits(digits)).toEqual({SendDigits: {digits: digits}})
    })
    it('should allow optional properties', function () {
      var pauseMs = 1000
      var privacyMode = true
      expect(percl.sendDigits(digits, {pauseMs: pauseMs, privacyMode: privacyMode})).toEqual({SendDigits: {digits: digits, pauseMs: pauseMs, privacyMode: privacyMode}})
    })
  })
  describe('createConference', function () {
    var actionUrl = 'http://action.url'
    it('should create a CreateConference command', function () {
      expect(percl.createConference(actionUrl)).toEqual({CreateConference: {actionUrl: actionUrl}})
    })
    it('should allow optional properties', function () {
      var alias = 'alias'
      var playBeep = 'entryOnly'
      var record = true
      var waitUrl = 'http://wait.url'
      var statusCallbackUrl = 'http://status.callback'
      expect(percl.createConference(actionUrl, {alias: alias, playBeep: playBeep, record: record, waitUrl: waitUrl, statusCallbackUrl: statusCallbackUrl})).toEqual({CreateConference: {actionUrl: actionUrl, alias: alias, playBeep: playBeep, record: record, waitUrl: waitUrl, statusCallbackUrl: statusCallbackUrl}})
    })
  })
  describe('terminateConference', function () {
    it('should create a TerminateConference command', function () {
      var conferenceId = 'CF3142351235135123512353245124325'
      expect(percl.terminateConference(conferenceId)).toEqual({TerminateConference: {conferenceId: conferenceId}})
    })
  })
  describe('addToConference', function () {
    var conferenceId = 'CF241235123512351234'
    var callId = 'CA23412351234214125'
    it('should create an AddToConference command', function () {
      expect(percl.addToConference(conferenceId, callId)).toEqual({AddToConference: {conferenceId: conferenceId, callId: callId}})
    })
    it('should allow optional properties', function () {
      var startConfOnEnter = false
      var talk = false
      var listen = false
      var allowCallControl = false
      var callControlSequence = '1'
      var callControlUrl = 'http://callControl.url'
      var leaveConferenceUrl = 'http://leave.url'
      var notificationUrl = 'http://notification.url'
      expect(percl.addToConference(conferenceId, callId, {startConfOnEnter: startConfOnEnter, talk: talk, listen: listen, leaveConferenceUrl: leaveConferenceUrl, notificationUrl: notificationUrl, allowCallControl: allowCallControl, callControlSequence: callControlSequence, callControlUrl: callControlUrl})).toEqual({AddToConference: {conferenceId: conferenceId, callId: callId, startConfOnEnter: startConfOnEnter, talk: talk, listen: listen, allowCallControl: allowCallControl, callControlSequence: callControlSequence, callControlUrl: callControlUrl, leaveConferenceUrl: leaveConferenceUrl, notificationUrl: notificationUrl}})
    })
  })
  describe('removeFromConference', function () {
    it('should create a RemoveFromConference command', function () {
      var callId = 'CA23412351234123'
      expect(percl.removeFromConference(callId)).toEqual({RemoveFromConference: {callId: callId}})
    })
  })
  describe('setListen', function () {
    var callId = 'CA2312351234123512341235'
    it('should create a SetListen command', function () {
      expect(percl.setListen(callId)).toEqual({SetListen: {callId: callId}})
    })
    it('should allow setting the listen value', function () {
      expect(percl.setListen(callId, false)).toEqual({SetListen: {callId: callId, listen: false}})
      expect(percl.setListen(callId, true)).toEqual({SetListen: {callId: callId, listen: true}})
    })
  })
  describe('setTalk', function () {
    var callId = 'CA231235123412351234234'
    it('should create a SetTalk command', function () {
      expect(percl.setTalk(callId)).toEqual({SetTalk: {callId: callId}})
    })
    it('should allow setting the talk value', function () {
      expect(percl.setTalk(callId, false)).toEqual({SetTalk: {callId: callId, talk: false}})
      expect(percl.setTalk(callId, true)).toEqual({SetTalk: {callId: callId, talk: true}})
    })
  })
  describe('enqueue', function () {
    var queueId = 'QU233412341235123512341235123e42134'
    var actionUrl = 'http://action.url'
    var waitUrl = 'http://wait.url'
    it('should create an Enqueue command', function () {
      expect(percl.enqueue(queueId, actionUrl, waitUrl)).toEqual({Enqueue: {queueId: queueId, actionUrl: actionUrl, waitUrl: waitUrl}})
    })
    it('should allow an optional notificationUrl', function () {
      var notificationUrl = 'http://notif.y'
      expect(percl.enqueue(queueId, actionUrl, waitUrl, notificationUrl)).toEqual({Enqueue: {queueId: queueId, actionUrl: actionUrl, waitUrl: waitUrl, notificationUrl: notificationUrl}})
    })
  })
  describe('dequeue', function () {
    it('should create a Dequeue command', function () {
      expect(percl.dequeue()).toEqual({Dequeue: {}})
    })
  })
  describe('recordUtterance', function () {
    var actionUrl = 'http://action.url'
    it('should create a RecordUtterance command', function () {
      expect(percl.recordUtterance(actionUrl)).toEqual({RecordUtterance: {actionUrl: actionUrl}})
    })
    it('should allow optional properties', function () {
      var silenceTimeoutMs = 3299
      var finishOnKey = '*'
      var maxLengthSec = 300
      var playBeep = false
      var autoStart = true
      var privacyMode = true
      expect(percl.recordUtterance(actionUrl, {silenceTimeoutMs: silenceTimeoutMs, finishOnKey: finishOnKey, maxLengthSec: maxLengthSec, playBeep: playBeep, autoStart: autoStart, privacyMode: privacyMode})).toEqual({RecordUtterance: {actionUrl: actionUrl, silenceTimeoutMs: silenceTimeoutMs, finishOnKey: finishOnKey, maxLengthSec: maxLengthSec, playBeep: playBeep, autoStart: autoStart, privacyMode: privacyMode}})
    })
  })
  describe('startRecordCall', function () {
    it('should create a StartRecordCall command', function () {
      expect(percl.startRecordCall()).toEqual({StartRecordCall: {}})
    })
  })
  describe('play', function () {
    var file = 'http://file.url'
    it('should create a Play command', function () {
      expect(percl.play(file)).toEqual({Play: {file: file}})
    })
    it('should allow optional properties', function () {
      var loop = 2
      var conferenceId = 'CF3241235123512341235'
      var privacyMode = true
      expect(percl.play(file, {loop: loop, conferenceId: conferenceId, privacyMode: privacyMode})).toEqual({Play: {file: file, loop: loop, conferenceId: conferenceId, privacyMode: privacyMode}})
    })
  })
  describe('playEarlyMedia', function () {
    var file = 'http://file.url'
    it('should create a playEarlyMedia command', function () {
      expect(percl.playEarlyMedia(file)).toEqual({PlayEarlyMedia: {file: file}})
    })
  })
  describe('say', function () {
    it('should return a Say command with the text set to the parameter value', function () {
      var expectedText = 'Hello World'
      var expectedResult = {Say: {text: expectedText}}

      expect(percl.say(expectedText)).toEqual(expectedResult)
    })
    it('should allow setting the language, loop, and conferenceId properties', function () {
      var text = 'example text'
      var language = 'en-US'
      var loop = 3
      var conferenceId = 'CF79df825d6690cc51111673d64aed6ed121dd39e1'
      var privacyMode = true
      var expectedResult = {Say: {text: text, language: language, loop: loop, conferenceId: conferenceId, privacyMode: privacyMode}}
      expect(percl.say(text, {language: enums.language.ENGLISH_US, loop: 3, conferenceId: conferenceId, privacyMode: privacyMode})).toEqual(expectedResult)
    })
  })
  describe('getDigits', function () {
    var actionUrl = 'http://action.url'
    it('should create a GetDigits command', function () {
      expect(percl.getDigits(actionUrl)).toEqual({GetDigits: {actionUrl: actionUrl}})
    })
    it('should allow optional properties', function () {
      var initialTimeoutMs = 40
      var privacyMode = true
      var prompts = [{Say: {text: 'press a button'}}, {Pause: {length: 3}}]
      expect(percl.getDigits(actionUrl, {initialTimeoutMs: initialTimeoutMs, prompts: prompts, privacyMode: privacyMode})).toEqual({GetDigits: {actionUrl: actionUrl, initialTimeoutMs: initialTimeoutMs, prompts: prompts, privacyMode: privacyMode}})
    })
  })
  describe('getSpeech', function () {
    var actionUrl = 'http://action.url'
    var grammarFile = 'http://grammar.url'
    it('should create a GetSpeech command', function () {
      expect(percl.getSpeech(actionUrl, grammarFile)).toEqual({GetSpeech: {actionUrl: actionUrl, grammarFile: grammarFile}})
    })
    it('should allow optional properties', function () {
      var grammarType = 'BUILTIN'
      var playBeep = true
      var privacyMode = true
      expect(percl.getSpeech(actionUrl, grammarFile, {grammarType: grammarType, playBeep: playBeep, privacyMode: privacyMode})).toEqual({GetSpeech: {actionUrl: actionUrl, grammarFile: grammarFile, grammarType: grammarType, playBeep: playBeep, privacyMode: privacyMode}})
    })
  })
  describe('sms', function () {
    var from = '+12223334444'
    var to = '+18884447564'
    var text = 'Hello World'
    it('should create an Sms command', function () {
      expect(percl.sms(from, to, text)).toEqual({Sms: {from: from, to: to, text: text}})
    })
    it('should allow optional properties', function () {
      var url = 'http://www.notification.url'
      expect(percl.sms(from, to, text, {notificationUrl: url})).toEqual({Sms: {from: from, to: to, text: text, notificationUrl: url}})
    })
  })
  describe('reject', function() {
    let reason = 'Not a bears fan'
    it('should create a reject object with the given reason', function () {
      expect(percl.reject(reason)).toEqual({Reject: {reason}})
    })
    it('should create a reject object with an undefined reason', function (){
      expect(percl.reject()).toEqual({Reject:{}})
    })
  })
  describe('percl#build', function () {
    it('should build an array of the arguments', function () {
      var script1 = {Say: {text: 'Hello World'}}
      var script2 = {StartRecordCall: {}}
      var script3 = {Hangup: {}}
      expect(percl.build(script1, script2, script3)).toEqual([script1, script2, script3])
    })
  })
})
