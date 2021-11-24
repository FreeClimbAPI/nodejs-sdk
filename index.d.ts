declare module '@freeclimb/sdk' {
  export = freeClimbSDK
  function freeClimbSDK(accountId: string, authToken: string): FreeClimbSDK
  namespace freeClimbSDK {
    export { FreeClimbSDK, PerCL, Api, Enums }
  }

/**
 * The publicly exposed modules of the FreeClimb SDK
 */
 interface FreeClimbSDK {
    api: Api.ApiClients
    percl: PerCL.Builders
    enums: Enums.EnumCollection
  }
  namespace Api {

    interface Resource {
      uri: string
      dateCreated: string
      dateUpdated: string
      revision: number
    }

    interface Page {
      total: number
      start: number
      end: number
      numPages: number
      pageSize: number
      nextPageUri: string | null
    }

    // Accounts

    type AccountStatus = "active" | "suspended" | "closed"
    interface Account extends Resource {
      accountId: string
      authToken: string
      alias: string
      label: string
      type: string
      status: AccountStatus
      subresourceUris: {
        applications: string
        calls: string
        conferences: string
        incomingPhoneNumbers: string
        logs: string
        recordings: string
        queues: string
      }
    }

    interface UpdateAccountOptions {
      alias?: string
      label?: string
    }

    interface AccountsClient {
      get(accountId: string): Promise<Account>
      update(accountId: string, options: UpdateAccountOptions): Promise<Account>
    }

    // Applications
    interface Application extends Resource {
      applicationId: string
      accountId: string
      alias: string
      voiceUrl: string
      voiceFallbackUrl: string
      callConnectUrl: string
      statusCallbackUrl: string
      smsUrl: string
      smsFallbackUrl: string
    }

    interface ApplicationOptions {
      alias?: string
      voiceUrl?: string
      voiceFallbackUrl?: string
      callConnectUrl?: string
      statusCallbackUrl?: string
      smsUrl?: string
      smsFallbackUrl?: string
    }

    interface ApplicationListFilters {
      alias: string
    }

    interface ApplicationPage extends Page {
      applications: Application[]
    }

    interface ApplicationsClient {
      get(applicationId: string): Promise<Application>
      update(applicationId: string, options: ApplicationOptions): Promise<Application>
      getList(filters?: ApplicationListFilters): Promise<ApplicationPage>
      getNextPage(nextPageUri: string): Promise<ApplicationPage>
      create(options: ApplicationOptions): Promise<Application>
      delete(applicationId: string): Promise<null>
    }

    // Available Numbers
    interface AvailableNumber {
      phoneNumber: string
      voiceEnabled: boolean
      smsEnabled: boolean
      alias: string
      region: string
      country: string
    }

    interface ListAvailableNumbersFilters {
      phoneNumber?: string
      country?: string
      region?: string
      smsEnabled?: boolean
      voiceEnabled?: boolean
    }

    interface AvailableNumbersPage extends Page {
      availablePhoneNumbers: AvailableNumber[]
    }

    interface AvailableNumbersClient {
      getList(filters?: ListAvailableNumbersFilters): Promise<AvailableNumbersPage>
      getNextPage(nextPageUri: string): Promise<AvailableNumbersPage>
    }

    // Incoming Numbers
    interface IncomingNumber extends Resource {
      phoneNumberId: string
      accountId: string
      applicationId: string
      phoneNumber: string
      alias: string
      country: string
      voiceEnabled: boolean
      smsEnabled: boolean
      region: string
    }

    interface UpdateIncomingNumberOptions {
      applicationId?: string
      alias?: string
    }

    interface ListIncomingNumbersFilters {
      phoneNumber?: string
      alias?: string
      applicationId?: string
      country?: string
      hasApplication?: boolean
      region?: string
      smsEnabled?: boolean
      voiceEnabled?: boolean
    }

    interface IncomingNumbersPage extends Page {
      incomingPhoneNumbers: IncomingNumber[]
    }

    interface PurchaseIncomingNumberOptions {
      alias?: string
      applicationId?: string
    }

    interface IncomingNumbersClient {
      get(incomingNumberId: string): Promise<IncomingNumber>
      update(incomingNumberId: string, options: UpdateIncomingNumberOptions): Promise<IncomingNumber>
      getList(filters?: ListIncomingNumbersFilters): Promise<IncomingNumbersPage>
      getNextPage(nextPageUri: string): Promise<IncomingNumbersPage>
      purchase(phoneNumber: string, options?: PurchaseIncomingNumberOptions): Promise<IncomingNumber>
      delete(incomingNumberId: string): Promise<null>
    }

    // There is no definition for calling number in the docs
    // however it is present in the api code
    interface CallingNumber extends Resource {}

    interface CallingNumbersPage extends Page {}

    interface UpdateCallingNumberOptions {}

    interface ListCallingNumbersOptions {}

    interface CreateCallingNumberOptions {}

    interface CallingNumbersClient {
      get(callingNumberId: string): Promise<CallingNumber>
      update(callingNumberId: string, options: UpdateCallingNumberOptions): Promise<CallingNumber>
      getList(options: ListCallingNumbersOptions): Promise<CallingNumbersPage>
      getNextPage(nextPageUri: string): Promise<CallingNumbersPage>
      create(phoneNumber: string, options: CreateCallingNumberOptions): Promise<CallingNumber>
      delete(callingNumberId: string): Promise<null>
    }

    // Calls
    type CallStatus = "queued" |  "ringing" | "inProgress" | "canceled" | "completed" | "busy" | "failed" | "noAnswer"

    interface Call extends Resource {
      callId: string
      parentCallId: string
      accountId: string
      to: string
      from: string
      phoneNumberId: string
      status: CallStatus
      startTime: string
      connectTime: string
      endTime: string
      connectDuration: number
      direction: string
      duration: number
      answeredBy: string
      subResourceUris: {
        logs: string
        recordings: string
      }
    }

    interface CallsPage extends Page {
      calls: Call[]
    }

    interface ListCallsFilters {
      to?: string
      from?: string
      status?: string
      startTime?: string
      endTime?: string
      parentCallId?: string
      active?: boolean
    }

    interface CreateCallOptions {
      sendDigits?: string
      ifMachine?: string
      ifMachineUrl?: string
      timeout?: number
      parentCallId?: string
      privacyMode?: boolean
    }


    interface CallsClient {
      get(callId: string): Promise<Call>
      update(callId: string, status: Extract<CallStatus, "completed" | "canceled">): Promise<null>
      getList(filters: ListCallsFilters) : Promise<CallsPage>
      getNextPage(nextPageUri: string): Promise<CallsPage>
      create(to: string, from: string, applicationId: string, options: CreateCallOptions): Promise<Call>
    }

    // Conferences

    type PlayBeep = "always" | "never" | "entryOnly" | "exitOnly"
    type ConferenceStatus = "creating" | "empty" | "populated" | "terminated"

    interface Conference extends Resource {
      conferenceId: string
      accountId: string
      alias: string
      playBeep: PlayBeep
      record: boolean
      status: ConferenceStatus
      waitUrl: string
      actionUrl: string
      statusCallbackUrl: string
      subResourceUris: {
        participants: string
        recordings: string
      }
    }

    interface ConferencesPage extends Page {
      conferences: Conference[]
    }

    interface UpdateConferenceOptions {
      alias?: string
      playBeep?: PlayBeep
      status?: Extract<ConferenceStatus, "empty" | "terminated">
    }

    interface ListConferencesFilters {
      status?: ConferenceStatus
      alias?: string
      dateCreated?: string
      dateUpdated?: string

    }

    interface CreateConferenceOptions {
      alias?: string
      playBeep?: PlayBeep
      record?: boolean
      waitUrl?: string
      statusCallbackUrl?: string
    }

    interface ConferencesClient {
      get(conferenceId: string): Promise<Conference>
      update(conferenceId: string, object: UpdateConferenceOptions): Promise<Conference>
      getList(filters?: ListConferencesFilters): Promise<ConferencesPage>
      getNextPage(nextPageUri: string): Promise<ConferencesPage>
      create(options?: CreateConferenceOptions): Promise<Conference>
      participants(conferenceId: string): ConferenceParticipantsClient
    }

    // Conference Participants
    interface ConferenceParticipant extends Resource {
      callId: string
      conferenceId: string
      accountId: string
      talk: boolean
      listen: boolean
      startConfOnEnter: boolean
    }

    interface ConferencePartipantsPage extends Page {
      participants: ConferenceParticipant[]
    }

    interface ListConferenceParticipantsFilters {
      talk?: boolean
      listen?: boolean
    }

    interface ConferenceParticipantsClient {
      get(participantId: string): Promise<ConferenceParticipant>
      update(participantId: string): Promise<ConferenceParticipant>
      getList(filters?: ListConferenceParticipantsFilters): Promise<ConferencePartipantsPage>
      getNextPage(nextPageUri: string): Promise<ConferencePartipantsPage>
      delete(participantId: string): Promise<null>
    }

    // Queues
    interface Queue extends Resource {
      accountId: string
      queueId: string
      alias: string
      currentSize: number
      mazSize: number
      averageWaitTime: number
      subresourceUris: {
        members: string
      }
    }

    interface QueuesPage extends Page {
      queues: Queue[]
    }

    interface UpdateQueueOptions {
      alias?: string
      maxSize?: string
    }

    interface CreateQueueOptions {
      alias?: string
      maxSize?: string
    }

    interface ListQueuesFilters {}

    interface QueuesClient {
      get(queueId: string): Promise<Queue>
      update(queueId: string, options: UpdateQueueOptions): Promise<Queue>
      getList(filters?: ListQueuesFilters): Promise<QueuesPage>
      getNextPage(nextPageUri: string): Promise<QueuesPage>
      create(options?: CreateQueueOptions): Promise<Queue>
      members(queueId: string): QueueMembersClient
    }

    // Queue Members

    interface QueueMember {
      uri: string
      callId: string
      dateEnqueued: string
      waitTime: number
      position: number
    }

    interface QueueMembersPage {
      queueMembers: QueueMember[]
    }

    interface QueueMembersClient {
      get(memberId: string): Promise<QueueMember>
      getFront(): Promise<QueueMember>
      getList(): Promise<QueueMembersPage>
      getNextPage(nextPageUri: string): Promise<QueueMembersPage>
      dequeue(memberId: string): Promise<QueueMember>
      dequeueFront(): Promise<QueueMember>
    }

    // Logs

    interface Log {
      timestamp: number
      level: string
      requestId: string
      accountId: string
      callId: string
      message: string
      metadata: LogMetadata
    }

    interface LogMetadata {}

    interface LogsPage extends Page {
    logs: Log[]
    }

    interface GetLogsFilters {
      pql: string
    }

    interface LogsClient {
      get(filters?: GetLogsFilters): Promise<LogsPage>
      getNextPage(nextPageUri: string): Promise<LogsPage>
    }

    // Call Recordings

    interface Recording extends Resource {
      accountId: string
      callId?: string
      conferenceId?: string
      durationSec: string
      recordingId: string
    }

    interface RecordingsPage extends Page {
      recordings: Recording[]
    }

    interface ListRecordingsFilters {
      callId?: string
      conferenceId?: string
      dateCreate?: string
    }

    interface RecordingsClient {
      get(recordingId: string): Promise<Recording>
      getList(filters?: ListRecordingsFilters): Promise<RecordingsPage>
      getNextPage(nextPageUri: string): Promise<RecordingsPage>
      download(recordingId: string, filePath: string): Promise<undefined>
      stream(recordingId: string): Promise<unknown>
      delete(recordingId: string): Promise<null>
    }

    type SmsDirection = "inbound" | "outbound"
    // Messages
    interface SmsMessage extends Resource {
      accountId: string
      direction:SmsDirection
      from: string
      messageId: string
      notificationUrl: string
      status: SmsMessageInboundStatus | SmsMessageOutBoundStatus
    }

    type SmsMessageOutBoundStatus =
      "new"
      | "queued"
      | "rejected"
      | "sending"
      | "sent"
      | "failed"
      | "expired"
      | "deleted"
      | "unknown"

    type SmsMessageInboundStatus =
      "Received"
      | "Undelivered"

    interface SmsMessagesPage extends Page {
      messages: SmsMessage[]
    }

    interface ListSmsMessagesFilters {
      to?: string
      form?: string
      beginTime?: string
      endTime?: string
      direction?: string
    }

    interface SmsMessagesClient {
      get(messageId: string): Promise<SmsMessage>
      getList(filters?: ListSmsMessagesFilters): Promise<SmsMessagesPage>
      getNextPage(nextPageUri: string): Promise<SmsMessagesPage>
      create(from: string, to: string, text: string): Promise<SmsMessage>
    }

    interface ApiClients {
      accounts: AccountsClient
      applications: ApplicationsClient
      availableNumbers: AvailableNumbersClient
      incomingNumbers: IncomingNumbersClient
      callingNumbers: CallingNumbersClient
      calls: CallsClient
      conferences: ConferencesClient
      queues: QueuesClient
      logs: LogsClient
      recordings: RecordingsClient
      messages: SmsMessagesClient
      setApiUrl(newUrl: string): void
    }
  }

  namespace PerCL {
    // Commands
    interface AddToConferenceCommand {
      "AddToConference": {
        conferenceId: string
        callId: string
        startConfOnEnter?: boolean
        talk?: boolean
        listen?: boolean
        allowCallControl?: boolean
        callControlSequence?: string
        callControlUrl?: string
        leaveConferenceUrl?: string
        notificationUrl?: string
      }
    }

    interface AddToConferenceOptions {
      startConfOnEnter?: boolean
      talk?: boolean
      listen?: boolean
      allowCallControl?: boolean
      callControlSequence?: string
      callControlUrl?: string
      leaveConferenceUrl?: string
      notificationUrl?: string
    }

    interface CreateConferenceCommand {
      "CreateConference": {
        actionUrl: string
        statusCallbackUrl?: string
        alias?: string
        playBeep?: boolean
        record?: boolean
        waitUrl?: string
      }
    }

    interface CreateConferenceOptions {
      statusCallbackUrl?: string
      alias?: string
      playBeep?: boolean
      record?: boolean
      waitUrl?: string
    }

    interface DequeueCommand {
      "Dequeue": {}
    }

    interface EnqueueCommand {
        "Enqueue": {
          queueId: string
          actionUrl: string
          waitUrl: string
          notificatonUrl?: string
        }
      }

    interface GetDigitsCommand {
      "GetDigits": {
        actionUrl: string
        initialTimeoutMs?: number
        digitTimeoutMs?: number
        finishOnKey?: string
        minDigits?: number
        maxDigits?: number
        flushBuffer?: boolean
        prompts?: NestableCommand[]
        privacyMode?: boolean
      }
    }

    interface GetDigitsOptions {
      initialTimeoutMs?: number
      digitTimeoutMs?: number
      finishOnKey?: string
      minDigits?: number
      maxDigits?: number
      flushBuffer?: boolean
      prompts?: NestableCommand[]
      privacyMode?: boolean
    }

    type GrammarType = "URL" | "BUILTIN"
    interface GetSpeechCommand {
      "GetSpeech": {
        actionUrl: string
        grammerFile: string
        grammarType?: GrammarType
        grammarRule?: string
        playBeep?: boolean
        prompts?: NestableCommand[]
        noInputTimoutMs?: number
        recognitionTimeoutMs?: number
        confidenceThreshold?: number
        sensitivityLevel?: number
        speechCompleteTimeoutMs?: number
        speechIncompleteTimeoutMs?: number
        privacyMode?: boolean
      }
    }

    interface GetSpeechOptions {
      grammarType?: GrammarType
      grammarRule?: string
      playBeep?: boolean
      prompts?: NestableCommand[]
      noInputTimoutMs?: number
      recognitionTimeoutMs?: number
      confidenceThreshold?: number
      sensitivityLevel?: number
      speechCompleteTimeoutMs?: number
      speechIncompleteTimeoutMs?: number
      privacyMode?: boolean
    }

    interface HangupCommand {
      "Hangup": {
        reason?: string
      }
    }

    interface HangupOptions {
      reason: string
    }

    interface OutDialCommand {
      "OutDial" : {
        actionUrl: string,
        callConnectUrl: string
        callingNumber: string
        destination: string
        ifMachine?: string
        ifMachineUrl?: string
        sendDigits?: string
        statusCallbackUrl?: string
        timeout?: number
        privacyMode?: boolean
      }
    }

    interface OutDialCommandOptions {
      ifMachine?: string
      ifMachineUrl?: string
      sendDigits?: string
      statusCallbackUrl?: string
      timeout?: number
      privacyMode?: boolean
    }

    interface PauseCommand {
      "Pause" : {
        length: number
      }
    }

    interface PlayCommand {
      "Play": {
        file: string
        loop?: number
        privacyMode?: boolean
      }
    }

    interface PlayOptions {
      loop?: number
      privacyMode?: boolean
    }
    interface PlayEarlyMediaCommand {
      "PlayEarlyMedia": {
        file: string
      }
    }

    interface RecordUtteranceCommand {
      "RecordUtterance": {
        actionUrl: string
        silenceTimeoutMs?: number
        finishOnKey?: string
        maxLengthSec?: number
        playBeep?: boolean
        autoStart?: boolean
      }
    }

    interface RecordUtteranceOptions{
      silenceTimeoutMs?: number
      finishOnKey?: string
      maxLengthSec?: number
      playBeep?: boolean
      autoStart?: boolean
    }

    interface RedirectCommand {
      "Redirect": {
        actionUrl: string
      }
    }

    interface RejectCommand {
      "Reject" : {
        reason: string
      }
    }

    interface RemoveFromConferenceCommand {
      "RemoveFromConference": {
        callId: string
      }
    }

    type SayLanguageValue=
      "ca-ES" |
      "da-DK" |
      "de-DE" |
      "en-AU" |
      "en-CA" |
      "en-GB" |
      "en-IN" |
      "en-US" |
      "es-ES" |
      "es-MX" |
      "fi-FI" |
      "fr-CA" |
      "fr-FR" |
      "it-IT" |
      "ja-JP" |
      "ko-KR" |
      "nb-NO" |
      "nl-NL" |
      "pl-PL" |
      "pt-BR" |
      "pt-PT" |
      "ru-RU" |
      "sv-SE" |
      "zh-CN" |
      "zh-HK" |
      "zh-TW"

    interface SayCommand {
      "Say": {
        text: string
        loop?: number
        language?: SayLanguageValue
        privacyMode?: boolean
      }
    }

    interface SayOptions {
      loop?: number
      language?: SayLanguageValue
      privacyMode?: boolean
    }

    interface SendDigitsCommand {
      "SendDigits" : {
        digits: string
        pauseMs?: number
        privacyMode?: boolean
      }
    }

    interface SendDigitsOptions {
      pauseMs?: number
      privacyMode?: boolean
    }

    interface SetListenCommand {
      "SetListen": {
        callId: string
        listen: boolean
      }
    }

    interface SetTalkCommand {
      "SetTalk": {
        callId: string
        talk: boolean
      }
    }

    interface SmsCommand {
      "Sms": {
        to: string
        from: string
        text: string
        notificationUrl?: string
      }
    }

    interface SmsOptions {
      notificatioUrl?: string
    }

    interface StartRecordCallCommand {
      "StartRecordCall": {}
    }

    interface TerminateConferenceCommand {
      "TerminateConference": {
        conferenceId: string
      }
    }

    type NestableCommand = PlayCommand | PauseCommand | SayCommand

    type Command =
      AddToConferenceCommand
      | CreateConferenceCommand
      | DequeueCommand
      | EnqueueCommand
      | GetDigitsCommand
      | GetSpeechCommand
      | HangupCommand
      | OutDialCommand
      | PauseCommand
      | PlayCommand
      | PlayEarlyMediaCommand
      | RecordUtteranceCommand
      | RejectCommand
      | RedirectCommand
      | RemoveFromConferenceCommand
      | SayCommand
      | SendDigitsCommand
      | SetListenCommand
      | SetTalkCommand
      | SmsCommand
      | StartRecordCallCommand
      | TerminateConferenceCommand


    // Builders
      interface Builders {
        outDial(to: string, from: string, actionUrl: string, callConnectUrl: string, options?: OutDialCommandOptions): OutDialCommand
        hangup(options?: HangupOptions): HangupCommand
        pause(length: number): PauseCommand
        redirect(actionUrl: string): RedirectCommand
        sendDigits(digits: string, options?: SendDigitsOptions): SendDigitsCommand
        createConference(actionUrl: string, options?: CreateConferenceOptions): CreateConferenceCommand
        terminateConference(conferenceId: string): TerminateConferenceCommand
        addToConference(conferenceId: string, callId: string, options?: AddToConferenceOptions): AddToConferenceCommand
        removeFromConference(callId: string): RemoveFromConferenceCommand
        setListen(callId: string, listen?: boolean): SetListenCommand
        setTalk(callId: string, talk?: boolean): SetTalkCommand
        enqueue(queueId: string, actionUrl: string, waitUrl: string, notificationUrl?: string): EnqueueCommand
        dequeue(): DequeueCommand
        recordUtterance(actionUrl: string, options?: RecordUtteranceOptions): RecordUtteranceCommand
        startRecordCall(): StartRecordCallCommand
        play(file: string, options?: PlayOptions):  PlayCommand
        playEarlyMedia(file: string): PlayEarlyMediaCommand
        say(text: string, options?: SayOptions): SayCommand
        getDigits(actionUrl: string, options?: GetDigitsOptions): GetDigitsCommand
        getSpeech(actionUrl: string, grammerFile: string, options?: GetSpeechOptions): GetSpeechCommand
        sms(to: string, from: string, text: string, options?: SmsOptions): SmsCommand
        reject(reason: string): RejectCommand
        build(...scripts: Command[]): Command[]
    }
  }

  namespace Enums {
    interface Language {
      CATALAN: 'ca-ES',
      DANISH: 'da-DK',
      GERMAN: 'de-DE',
      ENGLISH_AU: 'en-AU',
      ENGLISH_CA: 'en-CA',
      ENGLISH_UK: 'en-GB',
      ENGLISH_IN: 'en-IN',
      ENGLISH_US: 'en-US',
      ENGLISH_ES: 'es-ES',
      ENGLISH_MX: 'es-MX',
      FINNISH: 'fi-FI',
      FRENCH_CA: 'fr-CA',
      FRENCH_FR: 'fr-FR',
      ITALIAN: 'it-IT',
      JAPANESE: 'ja-JP',
      KOREAN: 'ko-KR',
      NORWEGIAN : 'nb-NO',
      DUTCH: 'nl-NL',
      POLISH: 'pl-PL',
      PORTUGESE_BR: 'pt-BR',
      PORTUGESE_PT: 'pt-PT',
      RUSSIAN: 'ru-RU',
      SWEDISH: 'sv-SE',
      CHINESE_CN: 'zh-CN',
      CHINESE_HK: 'zh-HK',
      CHINESE_TW: 'zh-TW'
    }

    interface CallStatus {
      QUEUED: 'queued',
      RINGING: 'ringing',
      IN_PROGRESS: 'inProgress',
      CANCELED: 'canceled',
      COMPLETED: 'completed',
      FAILED: 'failed',
      BUSY: 'busy',
      NO_ANSWER: 'noAnswer'
    }

    interface IfMachine {
      REDIRECT: 'redirect',
      HANGUP: 'hangup'
    }

    interface PlayBeep {
      ALWAYS: 'always',
      NEVER: 'never',
      ENTRY_ONLY: 'entryOnly',
      EXIT_ONLY: 'exitOnly'
    }

    interface ConferenceStatus {
      EMPTY: 'empty',
      POPULATED: 'populated',
      IN_PROGRESS: 'inProgress',
      TERMINATED: 'terminated'
    }

    interface GrammarType {
      URL: 'URL',
      BUILT_IN: 'BUILTIN'
    }

    interface AccountStatus {
      CLOSED: 'closed',
      SUSPENDED: 'suspended',
      ACTIVE: 'active'
    }

    interface CallDirection {
      INBOUND: 'inbound',
      OUTBOUND_API: 'outboundAPI',
      OUTBOUND_DIAL: 'outboundDial'
    }

    interface AnsweredBy {
      HUMAN: 'human',
      MACHINE: 'machine'
    }

    interface MachineType {
      ANSWERING_MACHINE: 'answeringMachine',
      FAX_MACHINE: 'faxMachine'
    }

    interface LogLevel {
      INFO: 'info',
      WARNING: 'warning',
      ERROR: 'error'
    }

    interface QueueResult {
      QUEUE_FULL: 'queueFull',
      DEQUEUED: 'dequeued',
      HANGUP: 'hangup',
      SYSTEM_ERROR: 'systemError'
    }

    interface RecordUtteranceTermReason {
      FINISH_KEY: 'finishKey',
      TIMEOUT: 'timeout',
      HANGUP: 'hangup',
      MAX_LENGTH: 'maxLength'
    }

    interface GetDigitsReason {
      FINISH_KEY: 'finishKey',
      TIMEOUT: 'timeout',
      HANGUP: 'hangup',
      MIN_DIGITS: 'minDigits',
      MAX_DIGITS: 'maxDigits'
    }

    interface GetSpeechReason {
      ERROR: 'error',
      HANGUP: 'hangup',
      DIGIT: 'digit',
      NO_INPUT: 'noInput',
      NO_MATCH: 'noMatch',
      RECOGNITION: 'recognition'
    }

    interface GrammarFileBuiltIn {
      ALPHNUM6: 'ALPHNUM6',
      ANY_DIG: 'ANY_DIG',
      DIG1: 'DIG1',
      DIG2: 'DIG2',
      DIG3: 'DIG3',
      DIG4: 'DIG4',
      DIG5: 'DIG5',
      DIG6: 'DIG6',
      DIG7: 'DIG7',
      DIG8: 'DIG8',
      DIG9: 'DIG9',
      DIG10: 'DIG10',
      DIG11: 'DIG11',
      UP_TO_20_DIGIT_SEQUENCE: 'UP_TO_20_DIGIT_SEQUENCE',
      VERSAY_YESNO: 'VERSAY_YESNO'
    }

    interface MessageDirection {
      INBOUND: 'inbound',
      OUTBOUND: 'outbound'
    }

    interface MessageStatus {
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

    interface RequestType {
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

    interface EnumCollection {
      language: Language,
      callStatus: CallStatus
      ifMachine: IfMachine
      playBeep: PlayBeep
      conferenceStatus: ConferenceStatus
      grammarType: GrammarType
      accountStatus: AccountStatus
      callDirection: CallDirection
      answeredBy: AnsweredBy
      machineType: MachineType
      logLevel: LogLevel
      queueResult: QueueResult
      recordUtteranceTermReason: RecordUtteranceTermReason
      getDigitsReason: GetDigitsReason
      getSpeechReason: GetSpeechReason
      grammarFileBuiltIn: GrammarFileBuiltIn
      messageDirection: MessageDirection
      messageStatus: MessageStatus
      requestType: RequestType
    }
  }
}