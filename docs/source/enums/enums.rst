Enums
======

These Enum values are used to ensure correctness when comparing against values sent by FreeClimb and for certain value in API requests.

.. _Enums-accountStatus-label:

accountStatus
-------------

Enum for Account.status values.

- CLOSED
- SUSPENDED
- ACTIVE

.. _Enums-answeredBy-label:

answeredBy
-----------

Enum for the possible values of the answeredBy field on a callConnectUrl invocation.

- HUMAN
- MACHINE

.. _Enums-callDirection-label:

callDirection
-------------

Enum for Call.direction values.

- INBOUND
- OUTBOUND_API
- OUTBOUND_DIAL

.. _Enums-callStatus-label:

callStatus
----------

Enum for Call.status values.

- QUEUED
- RINGING
- IN_PROGRESS
- CANCELED
- COMPLETED
- FAILED
- BUSY
- NO_ANSWER

.. _Enums-conferenceStatus-label:

conferenceStatus
-----------------

Enum for Conference.status values.

- EMPTY
- POPULATED
- IN_PROGRESS
- TERMINATED

.. _Enums-getDigitsReason-label:

getDigitsReason
---------------

Enum for the possible values of the reason field on a GetDigits invocation.

- FINISH_KEY
- TIMEOUT
- HANGUP
- MIN_DIGITS
- MAX_DIGITS

.. _Enums-getSpeechReason-label:

getSpeechReason
---------------

Enum for the possible values of the reason field on a GetSpeech invocation.

- ERROR
- HANGUP
- DIGIT
- NO_INPUT
- NO_MATCH
- RECOGNITION

.. _Enums-grammarFileBuiltIn-label:

grammarFileBuiltIn
-------------------

Enum for the built-in grammar file names for the GetSpeech PerCL command.

- AlPHNUM6
- ANY_DIG
- DIG1
- DIG2
- DIG3
- DIG4
- DIG5
- DIG6
- DIG7
- DIG8
- DIG9
- DIG10
- DIG11
- UP_TO_20_DIGIT_SEQUENCE
- VERSAY_YESNO

.. _Enums-grammarType-label:

grammarType
------------

Enum for the supported values for the grammarType option of the GetSpeech PerCL command.

- URL
- BUILT_IN

.. _Enums-ifMachine-label:

ifMachine
----------

Enum for the allowed values for the ifMachine property when placing a Call through the API or the OutDial PerCL command.

- REDIRECT
- HANGUP

.. _Enums-language-label:

language
---------

Enum for the allowed values for the language property of the Say command.

- CATALAN
- DANISH
- GERMAN
- ENGLISH_AU
- ENGLISH_CA
- ENGLISH_UK
- ENGLISH_IN
- ENGLISH_US
- ENGLIS_ES
- ENGLISH_MX
- FINNISH
- FRENCH_CA
- FRENCH_FE
- ITALIAN
- JAPANESE
- KOREAN
- NORWEGIAN
- DUTCH
- POLISH
- PORTUGESE_BR
- PORTUGESE_PT
- RUSSIAN
- SWEDISH
- CHINESE_CN
- CHINESE_HK
- CHINESE_TW

.. _Enums-logLevel-label:

logLevel
--------

Enum for the values of Log.level

- INFO
- WARNING
- ERROR

.. _Enums-machineType-label:

machineType
-----------

Enum for the possible values of the machineType field on an ifMachineUrl invocation.

- ANSWERING_MACHINE
- FAX_MACHINE

.. _Enums-messageDirection-label:

messageDirection
----------------

Enum for Message.direction values.

- INBOUND
- OUTBOUND

.. _Enums-messageStatus-label:

messageStatus
-------------

Enum for Message.status values.

- NEW
- QUEUED
- REJECTED
- SENDING
- SENT
- FAILED
- RECEIVED
- UNDELIVERED
- EXPIRED
- DELETED
- UNKNOWN

.. _Enums-playBeep-label:

playBeep
---------

Enum for Conference.playBeep values.

- ALWAYS
- NEVER
- ENTRY_ONLY
- EXIT_ONLY

.. _Enums-queueResult-label:

queueResult
-----------

Enum for the possible values of the queueResult field on a Queue actionUrl invocation.

- QUEUE_FULL
- DEQUEUED
- HANGUP
- SYSTEM_ERROR

.. _Enums-recordUtteranceTermReason-label:

recordUtteranceTermReason
--------------------------

Enum for the possible values of the termReason field on a RecordUtterance actionUrl invocation.

- FINISH_KEY
- TIMEOUT
- HANGUP
- MAX_LENGTH

.. _Enums-requestType-label:

requestType
-----------

Enum for requestType values. Can be checked against to know the format of the callback.

- INBOUND_CALL
- RECORD
- GET_DIGITS
- GET_SPEECH
- REDIRECT
- PAUSE
- OUT_DIAL_START
- OUT_DIAL_CONNECT
- OUT_DIAL_API_CONNECT
- MACHINE_DETECTED
- DEQUEUE
- QUEUE_WAIT
- ADD_TO_QUEUE_NOTIFICATION
- REMOVE_FROM_QUEUE_NOTIFICATION
- CALL_STATUS
- CREATE_CONFERENCE
- CONFERENCE_STATUS
- LEAVE_CONFERENCE
- ADD_TO_CONFERENCE_NOTIFICATION
- CONFERENCE_RECORDING_STATUS
- CONFERENCE_CALL_CONTROL
- MESSAGE_DELIVERY
- MESSAGE_STATUS