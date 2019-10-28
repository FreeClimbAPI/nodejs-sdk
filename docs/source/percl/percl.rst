PerCL
======
The PerCL module exposes functions to create PerCL commands, and to combine those commands into a script to be sent to FreeClimb.

Commands
^^^^^^^^^

outDial(to, from, actionUrl, callConnectUrl, options)
-----------------------------------------------------

     Build an OutDial PerCL command.

     :to: {string} The E.164 representation of the target phone number.
     :from: {string} The caller ID that will appear to the called party when FreeClimb calls. Can be the :code:`To` or :code:`From` number from the callConnectUrl that is requesting this command, or any phone number purchased or verified on FreeClimb.
     :actionUrl: {string} The URL which will be requested immediately on processing an OutDial command. This is used to continue control of the parent call that has requested the OutDial.
     :callConnectUrl: {string} The URL which will be requested informing the result of the OutDial. PerCL is expected if the call status is :ref:`Enums-callStatus-label`.IN_PROGRESS.
     :[options]: {object} Additional properties to include in the command.

     :returns: {{OutDial}} An object representing an OutDial command.

hangup(options)
---------------

    Build a Hangup PerCL command.

    :[options]: {object} Additional properties to include in the command.

    :returns: {{Hangup}} An object representing a Hangup command.

pause(length)
-------------

    Build a Pause PerCL command.

    :length: {integer} The length in millisecond FreeClimb will wait silently before continuing on.

    :returns: {{Pause}} An object representing a Pause command.

redirect(actionUrl)
-------------------

    Build a Redirect PerCL command.

    :actionUrl: {string} The URL to request for a new PerCL script.

    :returns: {{Redirect}} An object representing a Redirect command.

sendDigits(digits, options)
---------------------------

    Build a SendDigits PerCL command.

    :digits: {string} The string containing the digits to be played.
    :[options]: {object} Additional properties to include in the command.

    :returns: {{SendDigits}} An object representing a SendDigits command.

createConference(actionUrl, options)
-------------------------------------

    Build a CreateConference PerCL command.

    :actionUrl: {string} The URL to request once the conference is created.
    :[options]: {object} Additional properties to include in the command.

    :returns: {{CreateConference}} An object representing a CreateConference command.

terminateConference(conferenceId)
----------------------------------

    Build a TerminateConference command.

    :conferenceId: {string} The ID of the conference to terminate.

    :returns: {{TerminateConference}} An object representing a TerminateConference command.

addToConference(conferenceId, callId, options)
-----------------------------------------------

    Build an AddToConference PerCL command.

    :conferenceId: {string} ID of the conference to which to add the participant.
    :callId: {string} ID of the call that will be added to the specified conference.
    :[options]: {object} Additional properties to include in the command.

    :returns: {{AddToConference}} An object representing an AddToConference command.

removeFromConference(callId)
-----------------------------

    Build a RemoveFromConference PerCL command.

    :callId: {string} The ID of the call leg that will be removed from the conference it is currently in.

    :returns: {{RemoveFromConference}} An object representing a RemoveFromConference command.

setListen(callId, listen)
--------------------------

    Build a SetListen PerCL command.

    :callId: {string} The ID of the call leg that is to be assigned the listen privilege.
    :[listen]: {boolean} Specifying false will silence the conference for this participant, while true will un-silence.

    :return: {{SetListen}} An object representing a SetListen command.

setTalk(callId, talk)
----------------------

    Build a SetTalk PerCL command.

    :callId: {string} The ID of the call leg that is to be assigned the talk privilege.
    :[talk]: {boolean} Specifiying false will mute the participant, while true will un-mute.

    :returns: {{SetTalk}} An object representing a SetTalk command.

enqueue(queueId, actionUrl, waitUrl, notificationUrl)
------------------------------------------------------

    Build an Enqueue PerCL command.

    :queueId: {string} the ID of the queue to add the call to.
    :actionUrl: {string} The URL that will be requested when the call leaves the queue.
    :waitUrl: {string} The URL pointing to a PerCL document containing PerCL actions to loop through while the caller is waiting in the queue.
    :[notificationUrl]: {string} The URL to be invoked when the call enters the queue.

    :returns: {{Enqueue}} An object representing an Enqueue command.

dequeue()
---------

    Build a Dequeue PerCL command.

    :returns: {{Dequeue}} An object representing a Dequeue command.

recordUtterance(actionUrl, options)
------------------------------------

    Build a RecordUtterance PerCL command.

    :actionUrl: {string} The URL to which information on the complete recording is submitted. The PerCL received in response is then used to continue further with the call processing.
    :[options]: {object} Additional properties to include in the command.

    :returns: {{RecordUtterance}} An object representing a RecordUtterance command.

startRecordCall()
-----------------

    Build a StartRecordCall PerCL command.

    :returns: {{StartRecordCall}} An object representing a StartRecordCall command.

play(file, options)
--------------------

    Build a Play PerCL command.

    :file: {string} The URL of the audio file to be played to the caller.
    :[options]: {object} Additional properties to include in the command.

    :returns: {{Play}} An object representing a Play command.

playEarlyMedia(file)
--------------------

    Build a PlayEarlyMedia PerCL command.

    :file: {string} The URL of the audio file to be played to the caller.

    :returns: {{PlayEarlyMedia}} An object representing a PlayEarlyMedia command.

say(text, options)
--------------------

    Build a Say PerCL command.

    :text: {string} The message to be played to the caller using TTS. String size is limited to 4 KB. An empty string will cause the command to be skipped over.
    :[options]: {object} Additional properties to include in the command.

    :returns: {{Say}} An object representing a Say command.

getDigits(actionUrl, options)
------------------------------

    Build a GetDigits PerCL command.

    :actionUrl: {string} The URL to request when the caller has finished entering digits.
    :[options]: {object} Additional properties to include in the command.

    :returns: {{GetDigits}} An object representing a GetDigits command.

getSpeech(actionUrl, grammarFile, options)
-------------------------------------------

    Build a GetSpeech PerCL command.

    :actionUrl: {string} The URL to be invoked when the caller has finished speaking or on a timeout.
    :grammarFile: {string} The grammar file to be used for speech recognition. If grammarType is set to :ref:`Enums-grammarType-label`.URL this attribute is specified as a dowload URL. Otherwise it must be one of the built-ins. See :ref:`Enums-grammarFileBuiltIn-label`
    :[options]: {object} Additional properties to include in the command.

    :returns: {{GetSpeech}} An object representing a GetSpeech command.

sms(from, to, text, options)
-----------------------------

    Build an Sms PerCL command.

    :from: {string} E.164 representation of the phone number to use as the sender. This must be an incoming phone number you have purchased from FreeClimb.
    :to: {string} E.164 representation of the phone number to which the message will be sent.
    :text: {string} The text contained in the message. (maximum 254 characters)
    :[options]: {object} Additional properties to include in the command.

    :returns: {{Sms}} An object representing an Sms command.

Helpers
^^^^^^^

build(scripts)
---------------

    Convenience function to convert one or more PerCL commands into a PerCL script.

    :scripts: ...{object} One or more PerCL commands.

    :returns: {[script]} Returns all the provided PerCL commands wrapped in an array.
