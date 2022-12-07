import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AccountRequest } from '../models/AccountRequest';
import { AccountResult } from '../models/AccountResult';
import { AccountResultAllOf } from '../models/AccountResultAllOf';
import { AccountStatus } from '../models/AccountStatus';
import { AccountType } from '../models/AccountType';
import { AddToConference } from '../models/AddToConference';
import { AddToConferenceAllOf } from '../models/AddToConferenceAllOf';
import { AnsweredBy } from '../models/AnsweredBy';
import { ApplicationList } from '../models/ApplicationList';
import { ApplicationListAllOf } from '../models/ApplicationListAllOf';
import { ApplicationRequest } from '../models/ApplicationRequest';
import { ApplicationResult } from '../models/ApplicationResult';
import { ApplicationResultAllOf } from '../models/ApplicationResultAllOf';
import { AvailableNumber } from '../models/AvailableNumber';
import { AvailableNumberList } from '../models/AvailableNumberList';
import { AvailableNumberListAllOf } from '../models/AvailableNumberListAllOf';
import { BuyIncomingNumberRequest } from '../models/BuyIncomingNumberRequest';
import { CallDirection } from '../models/CallDirection';
import { CallList } from '../models/CallList';
import { CallListAllOf } from '../models/CallListAllOf';
import { CallResult } from '../models/CallResult';
import { CallResultAllOf } from '../models/CallResultAllOf';
import { CallStatus } from '../models/CallStatus';
import { Capabilities } from '../models/Capabilities';
import { ConferenceList } from '../models/ConferenceList';
import { ConferenceListAllOf } from '../models/ConferenceListAllOf';
import { ConferenceParticipantList } from '../models/ConferenceParticipantList';
import { ConferenceParticipantListAllOf } from '../models/ConferenceParticipantListAllOf';
import { ConferenceParticipantResult } from '../models/ConferenceParticipantResult';
import { ConferenceParticipantResultAllOf } from '../models/ConferenceParticipantResultAllOf';
import { ConferenceResult } from '../models/ConferenceResult';
import { ConferenceResultAllOf } from '../models/ConferenceResultAllOf';
import { ConferenceStatus } from '../models/ConferenceStatus';
import { CreateConference } from '../models/CreateConference';
import { CreateConferenceAllOf } from '../models/CreateConferenceAllOf';
import { CreateConferenceRequest } from '../models/CreateConferenceRequest';
import { Dequeue } from '../models/Dequeue';
import { Enqueue } from '../models/Enqueue';
import { EnqueueAllOf } from '../models/EnqueueAllOf';
import { FilterLogsRequest } from '../models/FilterLogsRequest';
import { GetDigits } from '../models/GetDigits';
import { GetDigitsAllOf } from '../models/GetDigitsAllOf';
import { GetSpeech } from '../models/GetSpeech';
import { GetSpeechAllOf } from '../models/GetSpeechAllOf';
import { GetSpeechReason } from '../models/GetSpeechReason';
import { GrammarFileBuiltIn } from '../models/GrammarFileBuiltIn';
import { GrammarType } from '../models/GrammarType';
import { Hangup } from '../models/Hangup';
import { HangupAllOf } from '../models/HangupAllOf';
import { IfMachine } from '../models/IfMachine';
import { IncomingNumberList } from '../models/IncomingNumberList';
import { IncomingNumberListAllOf } from '../models/IncomingNumberListAllOf';
import { IncomingNumberRequest } from '../models/IncomingNumberRequest';
import { IncomingNumberResult } from '../models/IncomingNumberResult';
import { IncomingNumberResultAllOf } from '../models/IncomingNumberResultAllOf';
import { Language } from '../models/Language';
import { LogLevel } from '../models/LogLevel';
import { LogList } from '../models/LogList';
import { LogListAllOf } from '../models/LogListAllOf';
import { LogResult } from '../models/LogResult';
import { MachineType } from '../models/MachineType';
import { MakeCallRequest } from '../models/MakeCallRequest';
import { MessageDirection } from '../models/MessageDirection';
import { MessageRequest } from '../models/MessageRequest';
import { MessageRequestAllOf } from '../models/MessageRequestAllOf';
import { MessageResult } from '../models/MessageResult';
import { MessageResultAllOf } from '../models/MessageResultAllOf';
import { MessageStatus } from '../models/MessageStatus';
import { MessagesList } from '../models/MessagesList';
import { MessagesListAllOf } from '../models/MessagesListAllOf';
import { MutableResourceModel } from '../models/MutableResourceModel';
import { OutDial } from '../models/OutDial';
import { OutDialAllOf } from '../models/OutDialAllOf';
import { PaginationModel } from '../models/PaginationModel';
import { Park } from '../models/Park';
import { ParkAllOf } from '../models/ParkAllOf';
import { Pause } from '../models/Pause';
import { PauseAllOf } from '../models/PauseAllOf';
import { PerclCommand } from '../models/PerclCommand';
import { PerclScript } from '../models/PerclScript';
import { Play } from '../models/Play';
import { PlayAllOf } from '../models/PlayAllOf';
import { PlayBeep } from '../models/PlayBeep';
import { PlayEarlyMedia } from '../models/PlayEarlyMedia';
import { PlayEarlyMediaAllOf } from '../models/PlayEarlyMediaAllOf';
import { QueueList } from '../models/QueueList';
import { QueueListAllOf } from '../models/QueueListAllOf';
import { QueueMember } from '../models/QueueMember';
import { QueueMemberList } from '../models/QueueMemberList';
import { QueueMemberListAllOf } from '../models/QueueMemberListAllOf';
import { QueueRequest } from '../models/QueueRequest';
import { QueueResult } from '../models/QueueResult';
import { QueueResultAllOf } from '../models/QueueResultAllOf';
import { QueueResultStatus } from '../models/QueueResultStatus';
import { RecordUtterance } from '../models/RecordUtterance';
import { RecordUtteranceAllOf } from '../models/RecordUtteranceAllOf';
import { RecordUtteranceTermReason } from '../models/RecordUtteranceTermReason';
import { RecordingList } from '../models/RecordingList';
import { RecordingListAllOf } from '../models/RecordingListAllOf';
import { RecordingResult } from '../models/RecordingResult';
import { RecordingResultAllOf } from '../models/RecordingResultAllOf';
import { Redirect } from '../models/Redirect';
import { RedirectAllOf } from '../models/RedirectAllOf';
import { Reject } from '../models/Reject';
import { RejectAllOf } from '../models/RejectAllOf';
import { RemoveFromConference } from '../models/RemoveFromConference';
import { RemoveFromConferenceAllOf } from '../models/RemoveFromConferenceAllOf';
import { RequestType } from '../models/RequestType';
import { Say } from '../models/Say';
import { SayAllOf } from '../models/SayAllOf';
import { SendDigits } from '../models/SendDigits';
import { SendDigitsAllOf } from '../models/SendDigitsAllOf';
import { SetListen } from '../models/SetListen';
import { SetListenAllOf } from '../models/SetListenAllOf';
import { SetTalk } from '../models/SetTalk';
import { SetTalkAllOf } from '../models/SetTalkAllOf';
import { Sms } from '../models/Sms';
import { SmsAllOf } from '../models/SmsAllOf';
import { StartRecordCall } from '../models/StartRecordCall';
import { TerminateConference } from '../models/TerminateConference';
import { TerminateConferenceAllOf } from '../models/TerminateConferenceAllOf';
import { Unpark } from '../models/Unpark';
import { UpdateCallRequest } from '../models/UpdateCallRequest';
import { UpdateCallRequestStatus } from '../models/UpdateCallRequestStatus';
import { UpdateConferenceParticipantRequest } from '../models/UpdateConferenceParticipantRequest';
import { UpdateConferenceRequest } from '../models/UpdateConferenceRequest';
import { UpdateConferenceRequestStatus } from '../models/UpdateConferenceRequestStatus';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiBuyAPhoneNumberRequest {
    
    /**
     * Incoming Number transaction details
     * @type BuyIncomingNumberRequest
     * @memberof DefaultApibuyAPhoneNumber
     */
    buyIncomingNumberRequest: BuyIncomingNumberRequest
    
}

export interface DefaultApiCreateAConferenceRequest {
    
    /**
     * Conference to create
     * @type CreateConferenceRequest
     * @memberof DefaultApicreateAConference
     */
    createConferenceRequest?: CreateConferenceRequest
    
}

export interface DefaultApiCreateAQueueRequest {
    
    /**
     * Queue details used to create a queue
     * @type QueueRequest
     * @memberof DefaultApicreateAQueue
     */
    queueRequest?: QueueRequest
    
}

export interface DefaultApiCreateAnApplicationRequest {
    
    /**
     * Application Details
     * @type ApplicationRequest
     * @memberof DefaultApicreateAnApplication
     */
    applicationRequest?: ApplicationRequest
    
}

export interface DefaultApiDeleteARecordingRequest {
    
    /**
     * String that uniquely identifies this recording resource.
     * @type string
     * @memberof DefaultApideleteARecording
     */
    recordingId: string
    
}

export interface DefaultApiDeleteAnApplicationRequest {
    
    /**
     * String that uniquely identifies this application resource.
     * @type string
     * @memberof DefaultApideleteAnApplication
     */
    applicationId: string
    
}

export interface DefaultApiDeleteAnIncomingNumberRequest {
    
    /**
     * String that uniquely identifies this phone number resource.
     * @type string
     * @memberof DefaultApideleteAnIncomingNumber
     */
    phoneNumberId: string
    
}

export interface DefaultApiDequeueAMemberRequest {
    
    /**
     * String that uniquely identifies the Queue that the Member belongs to.
     * @type string
     * @memberof DefaultApidequeueAMember
     */
    queueId: string
    
    /**
     * ID if the Call that the Member belongs to
     * @type string
     * @memberof DefaultApidequeueAMember
     */
    callId: string
    
}

export interface DefaultApiDequeueHeadMemberRequest {
    
    /**
     * String that uniquely identifies this queue resource.
     * @type string
     * @memberof DefaultApidequeueHeadMember
     */
    queueId: string
    
}

export interface DefaultApiDownloadARecordingFileRequest {
    
    /**
     * String that uniquely identifies this recording resource.
     * @type string
     * @memberof DefaultApidownloadARecordingFile
     */
    recordingId: string
    
}

export interface DefaultApiFilterLogsRequest {
    
    /**
     * Filter logs request paramters
     * @type FilterLogsRequest
     * @memberof DefaultApifilterLogs
     */
    filterLogsRequest: FilterLogsRequest
    
}

export interface DefaultApiGetACallRequest {
    
    /**
     * String that uniquely identifies this call resource.
     * @type string
     * @memberof DefaultApigetACall
     */
    callId: string
    
}

export interface DefaultApiGetAConferenceRequest {
    
    /**
     * A string that uniquely identifies this conference resource.
     * @type string
     * @memberof DefaultApigetAConference
     */
    conferenceId: string
    
}

export interface DefaultApiGetAMemberRequest {
    
    /**
     * String that uniquely identifies the Queue that the Member belongs to.
     * @type string
     * @memberof DefaultApigetAMember
     */
    queueId: string
    
    /**
     * ID of the Call that the Member belongs to
     * @type string
     * @memberof DefaultApigetAMember
     */
    callId: string
    
}

export interface DefaultApiGetAParticipantRequest {
    
    /**
     * ID of the conference this participant is in.
     * @type string
     * @memberof DefaultApigetAParticipant
     */
    conferenceId: string
    
    /**
     * ID of the Call associated with this participant.
     * @type string
     * @memberof DefaultApigetAParticipant
     */
    callId: string
    
}

export interface DefaultApiGetAQueueRequest {
    
    /**
     * A string that uniquely identifies this queue resource.
     * @type string
     * @memberof DefaultApigetAQueue
     */
    queueId: string
    
}

export interface DefaultApiGetARecordingRequest {
    
    /**
     * String that uniquely identifies this recording resource.
     * @type string
     * @memberof DefaultApigetARecording
     */
    recordingId: string
    
}

export interface DefaultApiGetAnAccountRequest {
    
}

export interface DefaultApiGetAnApplicationRequest {
    
    /**
     * A string that uniquely identifies this application resource.
     * @type string
     * @memberof DefaultApigetAnApplication
     */
    applicationId: string
    
}

export interface DefaultApiGetAnIncomingNumberRequest {
    
    /**
     * String that uniquely identifies this phone number resource.
     * @type string
     * @memberof DefaultApigetAnIncomingNumber
     */
    phoneNumberId: string
    
}

export interface DefaultApiGetAnSmsMessageRequest {
    
    /**
     * String that uniquely identifies this Message resource.
     * @type string
     * @memberof DefaultApigetAnSmsMessage
     */
    messageId: string
    
}

export interface DefaultApiGetHeadMemberRequest {
    
    /**
     * String that uniquely identifies the Queue that the Member belongs to.
     * @type string
     * @memberof DefaultApigetHeadMember
     */
    queueId: string
    
}

export interface DefaultApiListActiveQueuesRequest {
    
    /**
     * Return only the Queue resources with aliases that exactly match this name.
     * @type string
     * @memberof DefaultApilistActiveQueues
     */
    alias?: string
    
}

export interface DefaultApiListAllAccountLogsRequest {
    
}

export interface DefaultApiListApplicationsRequest {
    
    /**
     * Return only applications with aliases that exactly match this value.
     * @type string
     * @memberof DefaultApilistApplications
     */
    alias?: string
    
}

export interface DefaultApiListAvailableNumbersRequest {
    
    /**
     * PCRE-compatible regular expression to filter against &#x60;phoneNumber&#x60; field, which is in E.164 format.
     * @type string
     * @memberof DefaultApilistAvailableNumbers
     */
    phoneNumber?: string
    
    /**
     * State or province of this phone number.
     * @type string
     * @memberof DefaultApilistAvailableNumbers
     */
    region?: string
    
    /**
     * Country of this phone number.
     * @type string
     * @memberof DefaultApilistAvailableNumbers
     */
    country?: string
    
    /**
     * Indicates whether the phone number can handle Calls. Typically set to true for all numbers.
     * @type boolean
     * @memberof DefaultApilistAvailableNumbers
     */
    voiceEnabled?: boolean
    
    /**
     * Indication of whether the phone number can handle sending and receiving SMS messages. Typically set to true for all numbers.
     * @type boolean
     * @memberof DefaultApilistAvailableNumbers
     */
    smsEnabled?: boolean
    
    /**
     * 
     * @type boolean
     * @memberof DefaultApilistAvailableNumbers
     */
    capabilitiesVoice?: boolean
    
    /**
     * 
     * @type boolean
     * @memberof DefaultApilistAvailableNumbers
     */
    capabilitiesSms?: boolean
    
    /**
     * 
     * @type boolean
     * @memberof DefaultApilistAvailableNumbers
     */
    capabilitiesTollFree?: boolean
    
    /**
     * 
     * @type boolean
     * @memberof DefaultApilistAvailableNumbers
     */
    capabilitiesTenDLC?: boolean
    
    /**
     * 
     * @type boolean
     * @memberof DefaultApilistAvailableNumbers
     */
    capabilitiesShortCode?: boolean
    
}

export interface DefaultApiListCallLogsRequest {
    
    /**
     * String that uniquely identifies this call resource.
     * @type string
     * @memberof DefaultApilistCallLogs
     */
    callId: string
    
}

export interface DefaultApiListCallRecordingsRequest {
    
    /**
     * String that uniquely identifies this call resource.
     * @type string
     * @memberof DefaultApilistCallRecordings
     */
    callId: string
    
    /**
     * Only show recordings created on the specified date, in the form *YYYY-MM-DD*.
     * @type string
     * @memberof DefaultApilistCallRecordings
     */
    dateCreated?: string
    
}

export interface DefaultApiListCallsRequest {
    
    /**
     * If active is set to true then all calls of the nature queued, ringing, inProgress are returned in the query.
     * @type boolean
     * @memberof DefaultApilistCalls
     */
    active?: boolean
    
    /**
     * Only show Calls to this phone number.
     * @type string
     * @memberof DefaultApilistCalls
     */
    to?: string
    
    /**
     * Only show Calls from this phone number.
     * @type string
     * @memberof DefaultApilistCalls
     */
    _from?: string
    
    /**
     * Only show Calls currently in this status. May be &#x60;queued&#x60;, &#x60;ringing&#x60;, &#x60;inProgress&#x60;, &#x60;canceled&#x60;, &#x60;completed&#x60;, &#x60;failed&#x60;, &#x60;busy&#x60;, or &#x60;noAnswer&#x60;.
     * @type CallStatus
     * @memberof DefaultApilistCalls
     */
    status?: CallStatus
    
    /**
     * Only show Calls that started at or after this time, given as YYYY-MM-DD hh:mm:ss.
     * @type string
     * @memberof DefaultApilistCalls
     */
    startTime?: string
    
    /**
     * Only show Calls that ended at or before this time, given as YYYY-MM- DD hh:mm:ss.
     * @type string
     * @memberof DefaultApilistCalls
     */
    endTime?: string
    
    /**
     * Only show Calls spawned by the call with this ID.
     * @type string
     * @memberof DefaultApilistCalls
     */
    parentCallId?: string
    
}

export interface DefaultApiListConferencesRequest {
    
    /**
     * Only show conferences that currently have the specified status. Valid values: &#x60;empty&#x60;, &#x60;populated&#x60;, &#x60;inProgress&#x60;, or &#x60;terminated&#x60;.
     * @type string
     * @memberof DefaultApilistConferences
     */
    status?: string
    
    /**
     * List Conferences whose alias exactly matches this string.
     * @type string
     * @memberof DefaultApilistConferences
     */
    alias?: string
    
    /**
     * Only show Conferences that were created on the specified date, in the form *YYYY-MM-DD*.
     * @type string
     * @memberof DefaultApilistConferences
     */
    dateCreated?: string
    
    /**
     * Only show Conferences that were last updated on the specified date, in the form *YYYY-MM-DD*.
     * @type string
     * @memberof DefaultApilistConferences
     */
    dateUpdated?: string
    
}

export interface DefaultApiListIncomingNumbersRequest {
    
    /**
     * Only show incoming phone number resources that match this PCRE-compatible regular expression.
     * @type string
     * @memberof DefaultApilistIncomingNumbers
     */
    phoneNumber?: string
    
    /**
     * Only show incoming phone numbers with aliases that exactly match this value.
     * @type string
     * @memberof DefaultApilistIncomingNumbers
     */
    alias?: string
    
    /**
     * State or province of this phone number.
     * @type string
     * @memberof DefaultApilistIncomingNumbers
     */
    region?: string
    
    /**
     * Country of this phone number.
     * @type string
     * @memberof DefaultApilistIncomingNumbers
     */
    country?: string
    
    /**
     * ID of the Application that FreeClimb should contact if a Call or SMS arrives for this phone number or a Call from this number is placed. An incoming phone number is not useful until associated with an applicationId.
     * @type string
     * @memberof DefaultApilistIncomingNumbers
     */
    applicationId?: string
    
    /**
     * Indication of whether the phone number has an application linked to it.
     * @type boolean
     * @memberof DefaultApilistIncomingNumbers
     */
    hasApplication?: boolean
    
    /**
     * Indicates whether the phone number can handle Calls. Typically set to true for all numbers.
     * @type boolean
     * @memberof DefaultApilistIncomingNumbers
     */
    voiceEnabled?: boolean
    
    /**
     * Indication of whether the phone number can handle sending and receiving SMS messages. Typically set to true for all numbers.
     * @type boolean
     * @memberof DefaultApilistIncomingNumbers
     */
    smsEnabled?: boolean
    
    /**
     * 
     * @type boolean
     * @memberof DefaultApilistIncomingNumbers
     */
    capabilitiesVoice?: boolean
    
    /**
     * 
     * @type boolean
     * @memberof DefaultApilistIncomingNumbers
     */
    capabilitiesSms?: boolean
    
    /**
     * 
     * @type boolean
     * @memberof DefaultApilistIncomingNumbers
     */
    capabilitiesTollFree?: boolean
    
    /**
     * 
     * @type boolean
     * @memberof DefaultApilistIncomingNumbers
     */
    capabilitiesTenDLC?: boolean
    
    /**
     * 
     * @type boolean
     * @memberof DefaultApilistIncomingNumbers
     */
    capabilitiesShortCode?: boolean
    
    /**
     * Indication of whether the phone number was registered as an offnet number. This field will be rendered only for requests to the IncomingPhone number resource.
     * @type boolean
     * @memberof DefaultApilistIncomingNumbers
     */
    offnet?: boolean
    
}

export interface DefaultApiListMembersRequest {
    
    /**
     * String that uniquely identifies the Queue that the Member belongs to.
     * @type string
     * @memberof DefaultApilistMembers
     */
    queueId: string
    
}

export interface DefaultApiListParticipantsRequest {
    
    /**
     * ID of the conference this participant is in.
     * @type string
     * @memberof DefaultApilistParticipants
     */
    conferenceId: string
    
    /**
     * Only show Participants with the talk privilege.
     * @type boolean
     * @memberof DefaultApilistParticipants
     */
    talk?: boolean
    
    /**
     * Only show Participants with the listen privilege.
     * @type boolean
     * @memberof DefaultApilistParticipants
     */
    listen?: boolean
    
}

export interface DefaultApiListRecordingsRequest {
    
    /**
     * Show only Recordings made during the Call with this ID.
     * @type string
     * @memberof DefaultApilistRecordings
     */
    callId?: string
    
    /**
     * Show only Recordings made during the conference with this ID.
     * @type string
     * @memberof DefaultApilistRecordings
     */
    conferenceId?: string
    
    /**
     * Only show Recordings created on this date, formatted as *YYYY-MM-DD*.
     * @type string
     * @memberof DefaultApilistRecordings
     */
    dateCreated?: string
    
}

export interface DefaultApiListSmsMessagesRequest {
    
    /**
     * Only show Messages to this phone number.
     * @type string
     * @memberof DefaultApilistSmsMessages
     */
    to?: string
    
    /**
     * Only show Messages from this phone number.
     * @type string
     * @memberof DefaultApilistSmsMessages
     */
    _from?: string
    
    /**
     * Only show Messages sent at or after this time (GMT), given as *YYYY-MM-DD hh:mm:ss*.
     * @type string
     * @memberof DefaultApilistSmsMessages
     */
    beginTime?: string
    
    /**
     * Only show messages sent at or before this time (GMT), given as *YYYY-MM-DD hh:mm*..
     * @type string
     * @memberof DefaultApilistSmsMessages
     */
    endTime?: string
    
    /**
     * Either &#x60;inbound&#x60; or &#x60;outbound&#x60;. Only show Messages that were either *sent from* or *received by* FreeClimb.
     * @type MessageDirection
     * @memberof DefaultApilistSmsMessages
     */
    direction?: MessageDirection
    
}

export interface DefaultApiMakeACallRequest {
    
    /**
     * Call details for making a call
     * @type MakeCallRequest
     * @memberof DefaultApimakeACall
     */
    makeCallRequest?: MakeCallRequest
    
}

export interface DefaultApiRemoveAParticipantRequest {
    
    /**
     * ID of the conference this participant is in.
     * @type string
     * @memberof DefaultApiremoveAParticipant
     */
    conferenceId: string
    
    /**
     * ID of the Call associated with this participant.
     * @type string
     * @memberof DefaultApiremoveAParticipant
     */
    callId: string
    
}

export interface DefaultApiSendAnSmsMessageRequest {
    
    /**
     * Details to create a message
     * @type MessageRequest
     * @memberof DefaultApisendAnSmsMessage
     */
    messageRequest: MessageRequest
    
}

export interface DefaultApiStreamARecordingFileRequest {
    
    /**
     * String that uniquely identifies this recording resource.
     * @type string
     * @memberof DefaultApistreamARecordingFile
     */
    recordingId: string
    
}

export interface DefaultApiUpdateAConferenceRequest {
    
    /**
     * String that uniquely identifies this conference resource.
     * @type string
     * @memberof DefaultApiupdateAConference
     */
    conferenceId: string
    
    /**
     * Conference Details to update
     * @type UpdateConferenceRequest
     * @memberof DefaultApiupdateAConference
     */
    updateConferenceRequest?: UpdateConferenceRequest
    
}

export interface DefaultApiUpdateALiveCallRequest {
    
    /**
     * String that uniquely identifies this call resource.
     * @type string
     * @memberof DefaultApiupdateALiveCall
     */
    callId: string
    
    /**
     * Call details to update
     * @type UpdateCallRequest
     * @memberof DefaultApiupdateALiveCall
     */
    updateCallRequest: UpdateCallRequest
    
}

export interface DefaultApiUpdateAParticipantRequest {
    
    /**
     * ID of the conference this participant is in.
     * @type string
     * @memberof DefaultApiupdateAParticipant
     */
    conferenceId: string
    
    /**
     * ID of the Call associated with this participant.
     * @type string
     * @memberof DefaultApiupdateAParticipant
     */
    callId: string
    
    /**
     * Conference participant details to update
     * @type UpdateConferenceParticipantRequest
     * @memberof DefaultApiupdateAParticipant
     */
    updateConferenceParticipantRequest?: UpdateConferenceParticipantRequest
    
}

export interface DefaultApiUpdateAQueueRequest {
    
    /**
     * A string that uniquely identifies this Queue resource.
     * @type string
     * @memberof DefaultApiupdateAQueue
     */
    queueId: string
    
    /**
     * Queue Details to update
     * @type QueueRequest
     * @memberof DefaultApiupdateAQueue
     */
    queueRequest?: QueueRequest
    
}

export interface DefaultApiUpdateAnAccountRequest {
    
    /**
     * Account details to update
     * @type AccountRequest
     * @memberof DefaultApiupdateAnAccount
     */
    accountRequest?: AccountRequest
    
}

export interface DefaultApiUpdateAnApplicationRequest {
    
    /**
     * A string that uniquely identifies this application resource.
     * @type string
     * @memberof DefaultApiupdateAnApplication
     */
    applicationId: string
    
    /**
     * Application details to update.
     * @type ApplicationRequest
     * @memberof DefaultApiupdateAnApplication
     */
    applicationRequest?: ApplicationRequest
    
}

export interface DefaultApiUpdateAnIncomingNumberRequest {
    
    /**
     * String that uniquely identifies this phone number resource.
     * @type string
     * @memberof DefaultApiupdateAnIncomingNumber
     */
    phoneNumberId: string
    
    /**
     * Incoming Number details to update
     * @type IncomingNumberRequest
     * @memberof DefaultApiupdateAnIncomingNumber
     */
    incomingNumberRequest?: IncomingNumberRequest
    
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Buy a Phone Number
     * @param param the request object
     */
    public buyAPhoneNumber(param: DefaultApiBuyAPhoneNumberRequest, options?: Configuration): Promise<IncomingNumberResult> {
        return this.api.buyAPhoneNumber(param.buyIncomingNumberRequest,  options).toPromise();
    }

    /**
     * Create a Conference
     * @param param the request object
     */
    public createAConference(param: DefaultApiCreateAConferenceRequest, options?: Configuration): Promise<ConferenceResult> {
        return this.api.createAConference(param.createConferenceRequest,  options).toPromise();
    }

    /**
     * Create a Queue
     * @param param the request object
     */
    public createAQueue(param: DefaultApiCreateAQueueRequest, options?: Configuration): Promise<QueueResult> {
        return this.api.createAQueue(param.queueRequest,  options).toPromise();
    }

    /**
     * Create an application
     * @param param the request object
     */
    public createAnApplication(param: DefaultApiCreateAnApplicationRequest, options?: Configuration): Promise<ApplicationResult> {
        return this.api.createAnApplication(param.applicationRequest,  options).toPromise();
    }

    /**
     * Delete a Recording
     * @param param the request object
     */
    public deleteARecording(param: DefaultApiDeleteARecordingRequest, options?: Configuration): Promise<void> {
        return this.api.deleteARecording(param.recordingId,  options).toPromise();
    }

    /**
     * Delete an application
     * @param param the request object
     */
    public deleteAnApplication(param: DefaultApiDeleteAnApplicationRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAnApplication(param.applicationId,  options).toPromise();
    }

    /**
     * Delete an Incoming Number
     * @param param the request object
     */
    public deleteAnIncomingNumber(param: DefaultApiDeleteAnIncomingNumberRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAnIncomingNumber(param.phoneNumberId,  options).toPromise();
    }

    /**
     * Dequeue a Member
     * @param param the request object
     */
    public dequeueAMember(param: DefaultApiDequeueAMemberRequest, options?: Configuration): Promise<QueueMember> {
        return this.api.dequeueAMember(param.queueId, param.callId,  options).toPromise();
    }

    /**
     * Dequeue Head Member
     * @param param the request object
     */
    public dequeueHeadMember(param: DefaultApiDequeueHeadMemberRequest, options?: Configuration): Promise<QueueMember> {
        return this.api.dequeueHeadMember(param.queueId,  options).toPromise();
    }

    /**
     * Download a Recording File
     * @param param the request object
     */
    public downloadARecordingFile(param: DefaultApiDownloadARecordingFileRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.downloadARecordingFile(param.recordingId,  options).toPromise();
    }

    /**
     * Filter Logs
     * @param param the request object
     */
    public filterLogs(param: DefaultApiFilterLogsRequest, options?: Configuration): Promise<LogList> {
        return this.api.filterLogs(param.filterLogsRequest,  options).toPromise();
    }

    /**
     * Get a Call
     * @param param the request object
     */
    public getACall(param: DefaultApiGetACallRequest, options?: Configuration): Promise<CallResult> {
        return this.api.getACall(param.callId,  options).toPromise();
    }

    /**
     * Get a Conference
     * @param param the request object
     */
    public getAConference(param: DefaultApiGetAConferenceRequest, options?: Configuration): Promise<ConferenceResult> {
        return this.api.getAConference(param.conferenceId,  options).toPromise();
    }

    /**
     * Get a Member
     * @param param the request object
     */
    public getAMember(param: DefaultApiGetAMemberRequest, options?: Configuration): Promise<QueueMember> {
        return this.api.getAMember(param.queueId, param.callId,  options).toPromise();
    }

    /**
     * Get a Participant
     * @param param the request object
     */
    public getAParticipant(param: DefaultApiGetAParticipantRequest, options?: Configuration): Promise<ConferenceParticipantResult> {
        return this.api.getAParticipant(param.conferenceId, param.callId,  options).toPromise();
    }

    /**
     * Get a Queue
     * @param param the request object
     */
    public getAQueue(param: DefaultApiGetAQueueRequest, options?: Configuration): Promise<QueueResult> {
        return this.api.getAQueue(param.queueId,  options).toPromise();
    }

    /**
     * Get a Recording
     * @param param the request object
     */
    public getARecording(param: DefaultApiGetARecordingRequest, options?: Configuration): Promise<RecordingResult> {
        return this.api.getARecording(param.recordingId,  options).toPromise();
    }

    /**
     * Get an Account
     * @param param the request object
     */
    public getAnAccount(param: DefaultApiGetAnAccountRequest, options?: Configuration): Promise<AccountResult> {
        return this.api.getAnAccount( options).toPromise();
    }

    /**
     * Get an Application
     * @param param the request object
     */
    public getAnApplication(param: DefaultApiGetAnApplicationRequest, options?: Configuration): Promise<ApplicationResult> {
        return this.api.getAnApplication(param.applicationId,  options).toPromise();
    }

    /**
     * Get an Incoming Number
     * @param param the request object
     */
    public getAnIncomingNumber(param: DefaultApiGetAnIncomingNumberRequest, options?: Configuration): Promise<IncomingNumberResult> {
        return this.api.getAnIncomingNumber(param.phoneNumberId,  options).toPromise();
    }

    /**
     * Get an SMS Message
     * @param param the request object
     */
    public getAnSmsMessage(param: DefaultApiGetAnSmsMessageRequest, options?: Configuration): Promise<MessageResult> {
        return this.api.getAnSmsMessage(param.messageId,  options).toPromise();
    }

    /**
     * Get Head Member
     * @param param the request object
     */
    public getHeadMember(param: DefaultApiGetHeadMemberRequest, options?: Configuration): Promise<QueueMember> {
        return this.api.getHeadMember(param.queueId,  options).toPromise();
    }

    /**
     * List Active Queues
     * @param param the request object
     */
    public listActiveQueues(param: DefaultApiListActiveQueuesRequest, options?: Configuration): Promise<QueueList> {
        return this.api.listActiveQueues(param.alias,  options).toPromise();
    }

    /**
     * List All Account Logs
     * @param param the request object
     */
    public listAllAccountLogs(param: DefaultApiListAllAccountLogsRequest, options?: Configuration): Promise<LogList> {
        return this.api.listAllAccountLogs( options).toPromise();
    }

    /**
     * List applications
     * @param param the request object
     */
    public listApplications(param: DefaultApiListApplicationsRequest, options?: Configuration): Promise<ApplicationList> {
        return this.api.listApplications(param.alias,  options).toPromise();
    }

    /**
     * List available numbers
     * @param param the request object
     */
    public listAvailableNumbers(param: DefaultApiListAvailableNumbersRequest = {}, options?: Configuration): Promise<AvailableNumberList> {
        return this.api.listAvailableNumbers(param.phoneNumber, param.region, param.country, param.voiceEnabled, param.smsEnabled, param.capabilitiesVoice, param.capabilitiesSms, param.capabilitiesTollFree, param.capabilitiesTenDLC, param.capabilitiesShortCode,  options).toPromise();
    }

    /**
     * List Call Logs
     * @param param the request object
     */
    public listCallLogs(param: DefaultApiListCallLogsRequest, options?: Configuration): Promise<LogList> {
        return this.api.listCallLogs(param.callId,  options).toPromise();
    }

    /**
     * List Call Recordings
     * @param param the request object
     */
    public listCallRecordings(param: DefaultApiListCallRecordingsRequest, options?: Configuration): Promise<RecordingList> {
        return this.api.listCallRecordings(param.callId, param.dateCreated,  options).toPromise();
    }

    /**
     * List Calls
     * @param param the request object
     */
    public listCalls(param: DefaultApiListCallsRequest, options?: Configuration): Promise<CallList> {
        return this.api.listCalls(param.active, param.to, param._from, param.status, param.startTime, param.endTime, param.parentCallId,  options).toPromise();
    }

    /**
     * List Conferences
     * @param param the request object
     */
    public listConferences(param: DefaultApiListConferencesRequest, options?: Configuration): Promise<ConferenceList> {
        return this.api.listConferences(param.status, param.alias, param.dateCreated, param.dateUpdated,  options).toPromise();
    }

    /**
     * List Incoming Numbers
     * @param param the request object
     */
    public listIncomingNumbers(param: DefaultApiListIncomingNumbersRequest, options?: Configuration): Promise<IncomingNumberList> {
        return this.api.listIncomingNumbers(param.phoneNumber, param.alias, param.region, param.country, param.applicationId, param.hasApplication, param.voiceEnabled, param.smsEnabled, param.capabilitiesVoice, param.capabilitiesSms, param.capabilitiesTollFree, param.capabilitiesTenDLC, param.capabilitiesShortCode, param.offnet,  options).toPromise();
    }

    /**
     * List Members
     * @param param the request object
     */
    public listMembers(param: DefaultApiListMembersRequest, options?: Configuration): Promise<QueueMemberList> {
        return this.api.listMembers(param.queueId,  options).toPromise();
    }

    /**
     * List Participants
     * @param param the request object
     */
    public listParticipants(param: DefaultApiListParticipantsRequest, options?: Configuration): Promise<ConferenceParticipantList> {
        return this.api.listParticipants(param.conferenceId, param.talk, param.listen,  options).toPromise();
    }

    /**
     * List Recordings
     * @param param the request object
     */
    public listRecordings(param: DefaultApiListRecordingsRequest, options?: Configuration): Promise<RecordingList> {
        return this.api.listRecordings(param.callId, param.conferenceId, param.dateCreated,  options).toPromise();
    }

    /**
     * List SMS Messages
     * @param param the request object
     */
    public listSmsMessages(param: DefaultApiListSmsMessagesRequest, options?: Configuration): Promise<MessagesList> {
        return this.api.listSmsMessages(param.to, param._from, param.beginTime, param.endTime, param.direction,  options).toPromise();
    }

    /**
     * Make a Call
     * @param param the request object
     */
    public makeACall(param: DefaultApiMakeACallRequest, options?: Configuration): Promise<CallResult> {
        return this.api.makeACall(param.makeCallRequest,  options).toPromise();
    }

    /**
     * Remove a Participant
     * @param param the request object
     */
    public removeAParticipant(param: DefaultApiRemoveAParticipantRequest, options?: Configuration): Promise<void> {
        return this.api.removeAParticipant(param.conferenceId, param.callId,  options).toPromise();
    }

    /**
     * Send an SMS Message
     * @param param the request object
     */
    public sendAnSmsMessage(param: DefaultApiSendAnSmsMessageRequest, options?: Configuration): Promise<MessageResult> {
        return this.api.sendAnSmsMessage(param.messageRequest,  options).toPromise();
    }

    /**
     * Stream a Recording File
     * @param param the request object
     */
    public streamARecordingFile(param: DefaultApiStreamARecordingFileRequest, options?: Configuration): Promise<HttpFile> {
        return this.api.streamARecordingFile(param.recordingId,  options).toPromise();
    }

    /**
     * Update a Conference
     * @param param the request object
     */
    public updateAConference(param: DefaultApiUpdateAConferenceRequest, options?: Configuration): Promise<ConferenceResult> {
        return this.api.updateAConference(param.conferenceId, param.updateConferenceRequest,  options).toPromise();
    }

    /**
     * Update a Live Call
     * @param param the request object
     */
    public updateALiveCall(param: DefaultApiUpdateALiveCallRequest, options?: Configuration): Promise<void> {
        return this.api.updateALiveCall(param.callId, param.updateCallRequest,  options).toPromise();
    }

    /**
     * Update a Participant
     * @param param the request object
     */
    public updateAParticipant(param: DefaultApiUpdateAParticipantRequest, options?: Configuration): Promise<ConferenceParticipantResult> {
        return this.api.updateAParticipant(param.conferenceId, param.callId, param.updateConferenceParticipantRequest,  options).toPromise();
    }

    /**
     * Update a Queue
     * @param param the request object
     */
    public updateAQueue(param: DefaultApiUpdateAQueueRequest, options?: Configuration): Promise<QueueResult> {
        return this.api.updateAQueue(param.queueId, param.queueRequest,  options).toPromise();
    }

    /**
     * Manage an account
     * @param param the request object
     */
    public updateAnAccount(param: DefaultApiUpdateAnAccountRequest, options?: Configuration): Promise<void> {
        return this.api.updateAnAccount(param.accountRequest,  options).toPromise();
    }

    /**
     * Update an application
     * @param param the request object
     */
    public updateAnApplication(param: DefaultApiUpdateAnApplicationRequest, options?: Configuration): Promise<ApplicationResult> {
        return this.api.updateAnApplication(param.applicationId, param.applicationRequest,  options).toPromise();
    }

    /**
     * Update an Incoming Number
     * @param param the request object
     */
    public updateAnIncomingNumber(param: DefaultApiUpdateAnIncomingNumberRequest, options?: Configuration): Promise<IncomingNumberResult> {
        return this.api.updateAnIncomingNumber(param.phoneNumberId, param.incomingNumberRequest,  options).toPromise();
    }

}
