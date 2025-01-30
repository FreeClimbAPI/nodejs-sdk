import { ResponseContext, RequestContext, HttpFile } from "../http/http";
import * as models from "../models/all";
import { Configuration } from "../configuration";

import { AccountRequest } from "../models/AccountRequest";
import { AccountResult } from "../models/AccountResult";
import { AccountStatus } from "../models/AccountStatus";
import { AccountType } from "../models/AccountType";
import { AddToConference } from "../models/AddToConference";
import { AddToConferenceNotificationWebhook } from "../models/AddToConferenceNotificationWebhook";
import { AddToQueueNotificationWebhook } from "../models/AddToQueueNotificationWebhook";
import { AnsweredBy } from "../models/AnsweredBy";
import { ApplicationList } from "../models/ApplicationList";
import { ApplicationRequest } from "../models/ApplicationRequest";
import { ApplicationResult } from "../models/ApplicationResult";
import { AvailableNumber } from "../models/AvailableNumber";
import { AvailableNumberList } from "../models/AvailableNumberList";
import { BargeInReason } from "../models/BargeInReason";
import { BuyIncomingNumberRequest } from "../models/BuyIncomingNumberRequest";
import { CallControlWebhook } from "../models/CallControlWebhook";
import { CallDirection } from "../models/CallDirection";
import { CallEndedReason } from "../models/CallEndedReason";
import { CallList } from "../models/CallList";
import { CallResult } from "../models/CallResult";
import { CallStatus } from "../models/CallStatus";
import { CallStatusWebhook } from "../models/CallStatusWebhook";
import { Capabilities } from "../models/Capabilities";
import { CompletionRequest } from "../models/CompletionRequest";
import { CompletionResult } from "../models/CompletionResult";
import { CompletionResultStatus } from "../models/CompletionResultStatus";
import { ConferenceList } from "../models/ConferenceList";
import { ConferenceParticipantList } from "../models/ConferenceParticipantList";
import { ConferenceParticipantResult } from "../models/ConferenceParticipantResult";
import { ConferenceRecordingStatusWebhook } from "../models/ConferenceRecordingStatusWebhook";
import { ConferenceResult } from "../models/ConferenceResult";
import { ConferenceStatus } from "../models/ConferenceStatus";
import { ConferenceStatusWebhook } from "../models/ConferenceStatusWebhook";
import { CreateConference } from "../models/CreateConference";
import { CreateConferenceRequest } from "../models/CreateConferenceRequest";
import { CreateConferenceWebhook } from "../models/CreateConferenceWebhook";
import { CreateWebRTCToken } from "../models/CreateWebRTCToken";
import { Dequeue } from "../models/Dequeue";
import { DequeueWebhook } from "../models/DequeueWebhook";
import { Enqueue } from "../models/Enqueue";
import { FilterLogsRequest } from "../models/FilterLogsRequest";
import { GetDigits } from "../models/GetDigits";
import { GetDigitsReason } from "../models/GetDigitsReason";
import { GetDigitsWebhook } from "../models/GetDigitsWebhook";
import { GetSpeech } from "../models/GetSpeech";
import { GetSpeechReason } from "../models/GetSpeechReason";
import { GetSpeechWebhook } from "../models/GetSpeechWebhook";
import { GrammarFileBuiltIn } from "../models/GrammarFileBuiltIn";
import { GrammarType } from "../models/GrammarType";
import { Hangup } from "../models/Hangup";
import { IfMachine } from "../models/IfMachine";
import { InboundCallWebhook } from "../models/InboundCallWebhook";
import { IncomingNumberList } from "../models/IncomingNumberList";
import { IncomingNumberRequest } from "../models/IncomingNumberRequest";
import { IncomingNumberResult } from "../models/IncomingNumberResult";
import { Language } from "../models/Language";
import { LeaveConferenceWebhook } from "../models/LeaveConferenceWebhook";
import { LogLevel } from "../models/LogLevel";
import { LogList } from "../models/LogList";
import { LogResult } from "../models/LogResult";
import { MachineDetectedWebhook } from "../models/MachineDetectedWebhook";
import { MachineType } from "../models/MachineType";
import { MakeCallRequest } from "../models/MakeCallRequest";
import { MessageDeliveryWebhook } from "../models/MessageDeliveryWebhook";
import { MessageDirection } from "../models/MessageDirection";
import { MessageRequest } from "../models/MessageRequest";
import { MessageResult } from "../models/MessageResult";
import { MessageResultAllOfTfn } from "../models/MessageResultAllOfTfn";
import { MessageStatus } from "../models/MessageStatus";
import { MessageStatusWebhook } from "../models/MessageStatusWebhook";
import { MessagesList } from "../models/MessagesList";
import { MutableResourceModel } from "../models/MutableResourceModel";
import { OutDial } from "../models/OutDial";
import { OutDialApiConnectWebhook } from "../models/OutDialApiConnectWebhook";
import { OutDialConnectWebhook } from "../models/OutDialConnectWebhook";
import { OutDialStartWebhook } from "../models/OutDialStartWebhook";
import { PaginationModel } from "../models/PaginationModel";
import { Park } from "../models/Park";
import { Pause } from "../models/Pause";
import { PerclCommand } from "../models/PerclCommand";
import { PerclScript } from "../models/PerclScript";
import { Play } from "../models/Play";
import { PlayBeep } from "../models/PlayBeep";
import { PlayEarlyMedia } from "../models/PlayEarlyMedia";
import { QueueList } from "../models/QueueList";
import { QueueMember } from "../models/QueueMember";
import { QueueMemberList } from "../models/QueueMemberList";
import { QueueRequest } from "../models/QueueRequest";
import { QueueResult } from "../models/QueueResult";
import { QueueResultStatus } from "../models/QueueResultStatus";
import { QueueWaitWebhook } from "../models/QueueWaitWebhook";
import { RecordUtterance } from "../models/RecordUtterance";
import { RecordUtteranceTermReason } from "../models/RecordUtteranceTermReason";
import { RecordWebhook } from "../models/RecordWebhook";
import { RecordingList } from "../models/RecordingList";
import { RecordingResult } from "../models/RecordingResult";
import { Redirect } from "../models/Redirect";
import { RedirectWebhook } from "../models/RedirectWebhook";
import { Reject } from "../models/Reject";
import { RemoveFromConference } from "../models/RemoveFromConference";
import { RemoveFromQueueNotificationWebhook } from "../models/RemoveFromQueueNotificationWebhook";
import { RequestType } from "../models/RequestType";
import { SMSTenDLCBrand } from "../models/SMSTenDLCBrand";
import { SMSTenDLCBrandAltBusinessIdType } from "../models/SMSTenDLCBrandAltBusinessIdType";
import { SMSTenDLCBrandEntityType } from "../models/SMSTenDLCBrandEntityType";
import { SMSTenDLCBrandIdentityStatus } from "../models/SMSTenDLCBrandIdentityStatus";
import { SMSTenDLCBrandRelationship } from "../models/SMSTenDLCBrandRelationship";
import { SMSTenDLCBrandStockExchange } from "../models/SMSTenDLCBrandStockExchange";
import { SMSTenDLCBrandsListResult } from "../models/SMSTenDLCBrandsListResult";
import { SMSTenDLCCampaign } from "../models/SMSTenDLCCampaign";
import { SMSTenDLCCampaignStatus } from "../models/SMSTenDLCCampaignStatus";
import { SMSTenDLCCampaignsListResult } from "../models/SMSTenDLCCampaignsListResult";
import { SMSTenDLCPartnerCampaign } from "../models/SMSTenDLCPartnerCampaign";
import { SMSTenDLCPartnerCampaignBrand } from "../models/SMSTenDLCPartnerCampaignBrand";
import { SMSTenDLCPartnerCampaignStatus } from "../models/SMSTenDLCPartnerCampaignStatus";
import { SMSTenDLCPartnerCampaignsListResult } from "../models/SMSTenDLCPartnerCampaignsListResult";
import { SMSTollFreeCampaign } from "../models/SMSTollFreeCampaign";
import { SMSTollFreeCampaignRegistrationStatus } from "../models/SMSTollFreeCampaignRegistrationStatus";
import { SMSTollFreeCampaignsListResult } from "../models/SMSTollFreeCampaignsListResult";
import { Say } from "../models/Say";
import { SendDigits } from "../models/SendDigits";
import { SetDTMFPassThrough } from "../models/SetDTMFPassThrough";
import { SetListen } from "../models/SetListen";
import { SetTalk } from "../models/SetTalk";
import { Sms } from "../models/Sms";
import { StartRecordCall } from "../models/StartRecordCall";
import { TFN } from "../models/TFN";
import { TFNCampaign } from "../models/TFNCampaign";
import { TerminateConference } from "../models/TerminateConference";
import { TranscribeReason } from "../models/TranscribeReason";
import { TranscribeTermReason } from "../models/TranscribeTermReason";
import { TranscribeUtterance } from "../models/TranscribeUtterance";
import { TranscribeUtteranceRecord } from "../models/TranscribeUtteranceRecord";
import { TranscribeWebhook } from "../models/TranscribeWebhook";
import { Unpark } from "../models/Unpark";
import { UpdateCallRequest } from "../models/UpdateCallRequest";
import { UpdateCallRequestStatus } from "../models/UpdateCallRequestStatus";
import { UpdateConferenceParticipantRequest } from "../models/UpdateConferenceParticipantRequest";
import { UpdateConferenceRequest } from "../models/UpdateConferenceRequest";
import { UpdateConferenceRequestStatus } from "../models/UpdateConferenceRequestStatus";
import { Webhook } from "../models/Webhook";

import { ObservableDefaultApi } from "./ObservableAPI";
import {
  DefaultApiRequestFactory,
  DefaultApiResponseProcessor,
} from "../apis/DefaultApi";

export interface DefaultApiBuyAPhoneNumberRequest {
  /**
   * Incoming Number transaction details
   * @type BuyIncomingNumberRequest
   * @memberof DefaultApibuyAPhoneNumber
   */
  buyIncomingNumberRequest: BuyIncomingNumberRequest;
}

export interface DefaultApiCreateAConferenceRequest {
  /**
   * Conference to create
   * @type CreateConferenceRequest
   * @memberof DefaultApicreateAConference
   */
  createConferenceRequest?: CreateConferenceRequest;
}

export interface DefaultApiCreateAQueueRequest {
  /**
   * Queue details used to create a queue
   * @type QueueRequest
   * @memberof DefaultApicreateAQueue
   */
  queueRequest?: QueueRequest;
}

export interface DefaultApiCreateAnApplicationRequest {
  /**
   * Application Details
   * @type ApplicationRequest
   * @memberof DefaultApicreateAnApplication
   */
  applicationRequest?: ApplicationRequest;
}

export interface DefaultApiCreateKnowledgeBaseCompletionRequest {
  /**
   * A string that uniquely identifies the KnowledgeBase resource.
   * @type string
   * @memberof DefaultApicreateKnowledgeBaseCompletion
   */
  knowledgeBaseId: string;

  /**
   * Completion request details
   * @type CompletionRequest
   * @memberof DefaultApicreateKnowledgeBaseCompletion
   */
  completionRequest?: CompletionRequest;
}

export interface DefaultApiDeleteARecordingRequest {
  /**
   * String that uniquely identifies this recording resource.
   * @type string
   * @memberof DefaultApideleteARecording
   */
  recordingId: string;
}

export interface DefaultApiDeleteAnApplicationRequest {
  /**
   * String that uniquely identifies this application resource.
   * @type string
   * @memberof DefaultApideleteAnApplication
   */
  applicationId: string;
}

export interface DefaultApiDeleteAnIncomingNumberRequest {
  /**
   * String that uniquely identifies this phone number resource.
   * @type string
   * @memberof DefaultApideleteAnIncomingNumber
   */
  phoneNumberId: string;
}

export interface DefaultApiDequeueAMemberRequest {
  /**
   * String that uniquely identifies the Queue that the Member belongs to.
   * @type string
   * @memberof DefaultApidequeueAMember
   */
  queueId: string;

  /**
   * ID if the Call that the Member belongs to
   * @type string
   * @memberof DefaultApidequeueAMember
   */
  callId: string;
}

export interface DefaultApiDequeueHeadMemberRequest {
  /**
   * String that uniquely identifies this queue resource.
   * @type string
   * @memberof DefaultApidequeueHeadMember
   */
  queueId: string;
}

export interface DefaultApiDownloadARecordingFileRequest {
  /**
   * String that uniquely identifies this recording resource.
   * @type string
   * @memberof DefaultApidownloadARecordingFile
   */
  recordingId: string;
}

export interface DefaultApiFilterLogsRequest {
  /**
   * Filter logs request paramters
   * @type FilterLogsRequest
   * @memberof DefaultApifilterLogs
   */
  filterLogsRequest: FilterLogsRequest;
}

export interface DefaultApiGetACallRequest {
  /**
   * String that uniquely identifies this call resource.
   * @type string
   * @memberof DefaultApigetACall
   */
  callId: string;
}

export interface DefaultApiGetAConferenceRequest {
  /**
   * A string that uniquely identifies this conference resource.
   * @type string
   * @memberof DefaultApigetAConference
   */
  conferenceId: string;
}

export interface DefaultApiGetAMemberRequest {
  /**
   * String that uniquely identifies the Queue that the Member belongs to.
   * @type string
   * @memberof DefaultApigetAMember
   */
  queueId: string;

  /**
   * ID of the Call that the Member belongs to
   * @type string
   * @memberof DefaultApigetAMember
   */
  callId: string;
}

export interface DefaultApiGetAParticipantRequest {
  /**
   * ID of the conference this participant is in.
   * @type string
   * @memberof DefaultApigetAParticipant
   */
  conferenceId: string;

  /**
   * ID of the Call associated with this participant.
   * @type string
   * @memberof DefaultApigetAParticipant
   */
  callId: string;
}

export interface DefaultApiGetAQueueRequest {
  /**
   * A string that uniquely identifies this queue resource.
   * @type string
   * @memberof DefaultApigetAQueue
   */
  queueId: string;
}

export interface DefaultApiGetARecordingRequest {
  /**
   * String that uniquely identifies this recording resource.
   * @type string
   * @memberof DefaultApigetARecording
   */
  recordingId: string;
}

export interface DefaultApiGetAnAccountRequest {}

export interface DefaultApiGetAnApplicationRequest {
  /**
   * A string that uniquely identifies this application resource.
   * @type string
   * @memberof DefaultApigetAnApplication
   */
  applicationId: string;
}

export interface DefaultApiGetAnIncomingNumberRequest {
  /**
   * String that uniquely identifies this phone number resource.
   * @type string
   * @memberof DefaultApigetAnIncomingNumber
   */
  phoneNumberId: string;
}

export interface DefaultApiGetAnSmsMessageRequest {
  /**
   * String that uniquely identifies this Message resource.
   * @type string
   * @memberof DefaultApigetAnSmsMessage
   */
  messageId: string;
}

export interface DefaultApiGetHeadMemberRequest {
  /**
   * String that uniquely identifies the Queue that the Member belongs to.
   * @type string
   * @memberof DefaultApigetHeadMember
   */
  queueId: string;
}

export interface DefaultApiGetTenDLCSmsBrandRequest {
  /**
   * String that uniquely identifies this brand resource.
   * @type string
   * @memberof DefaultApigetTenDLCSmsBrand
   */
  brandId: string;
}

export interface DefaultApiGetTenDLCSmsBrandsRequest {}

export interface DefaultApiGetTenDLCSmsCampaignRequest {
  /**
   * String that uniquely identifies this campaign resource.
   * @type string
   * @memberof DefaultApigetTenDLCSmsCampaign
   */
  campaignId: string;
}

export interface DefaultApiGetTenDLCSmsCampaignsRequest {
  /**
   * The unique identifier for a brand
   * @type string
   * @memberof DefaultApigetTenDLCSmsCampaigns
   */
  brandId?: string;
}

export interface DefaultApiGetTenDLCSmsPartnerCampaignRequest {
  /**
   * String that uniquely identifies this campaign resource.
   * @type string
   * @memberof DefaultApigetTenDLCSmsPartnerCampaign
   */
  campaignId: string;
}

export interface DefaultApiGetTenDLCSmsPartnerCampaignsRequest {
  /**
   * The unique identifier for a brand
   * @type string
   * @memberof DefaultApigetTenDLCSmsPartnerCampaigns
   */
  brandId?: string;
}

export interface DefaultApiGetTollFreeSmsCampaignRequest {
  /**
   * String that uniquely identifies this TollFree Campaign resource.
   * @type string
   * @memberof DefaultApigetTollFreeSmsCampaign
   */
  campaignId: string;
}

export interface DefaultApiGetTollFreeSmsCampaignsRequest {}

export interface DefaultApiListActiveQueuesRequest {
  /**
   * Return only the Queue resources with aliases that exactly match this name.
   * @type string
   * @memberof DefaultApilistActiveQueues
   */
  alias?: string;
}

export interface DefaultApiListAllAccountLogsRequest {}

export interface DefaultApiListApplicationsRequest {
  /**
   * Return only applications with aliases that exactly match this value.
   * @type string
   * @memberof DefaultApilistApplications
   */
  alias?: string;
}

export interface DefaultApiListAvailableNumbersRequest {
  /**
   * PCRE-compatible regular expression to filter against &#x60;phoneNumber&#x60; field, which is in E.164 format.
   * @type string
   * @memberof DefaultApilistAvailableNumbers
   */
  phoneNumber?: string;

  /**
   * State or province of this phone number.
   * @type string
   * @memberof DefaultApilistAvailableNumbers
   */
  region?: string;

  /**
   * Country of this phone number.
   * @type string
   * @memberof DefaultApilistAvailableNumbers
   */
  country?: string;

  /**
   * Indicates whether the phone number can handle Calls. Typically set to true for all numbers.
   * @type boolean
   * @memberof DefaultApilistAvailableNumbers
   */
  voiceEnabled?: boolean;

  /**
   * Indication of whether the phone number can handle sending and receiving SMS messages. Typically set to true for all numbers.
   * @type boolean
   * @memberof DefaultApilistAvailableNumbers
   */
  smsEnabled?: boolean;

  /**
   *
   * @type boolean
   * @memberof DefaultApilistAvailableNumbers
   */
  capabilitiesVoice?: boolean;

  /**
   *
   * @type boolean
   * @memberof DefaultApilistAvailableNumbers
   */
  capabilitiesSms?: boolean;

  /**
   *
   * @type boolean
   * @memberof DefaultApilistAvailableNumbers
   */
  capabilitiesTollFree?: boolean;

  /**
   *
   * @type boolean
   * @memberof DefaultApilistAvailableNumbers
   */
  capabilitiesTenDLC?: boolean;

  /**
   *
   * @type boolean
   * @memberof DefaultApilistAvailableNumbers
   */
  capabilitiesShortCode?: boolean;
}

export interface DefaultApiListCallLogsRequest {
  /**
   * String that uniquely identifies this call resource.
   * @type string
   * @memberof DefaultApilistCallLogs
   */
  callId: string;
}

export interface DefaultApiListCallRecordingsRequest {
  /**
   * String that uniquely identifies this call resource.
   * @type string
   * @memberof DefaultApilistCallRecordings
   */
  callId: string;

  /**
   * Only show recordings created on the specified date, in the form *YYYY-MM-DD*.
   * @type string
   * @memberof DefaultApilistCallRecordings
   */
  dateCreated?: string;
}

export interface DefaultApiListCallsRequest {
  /**
   * If active is set to true then all calls of the nature queued, ringing, inProgress are returned in the query.
   * @type boolean
   * @memberof DefaultApilistCalls
   */
  active?: boolean;

  /**
   * Only show Calls to this phone number.
   * @type string
   * @memberof DefaultApilistCalls
   */
  to?: string;

  /**
   * Only show Calls from this phone number.
   * @type string
   * @memberof DefaultApilistCalls
   */
  _from?: string;

  /**
   * Only show Calls currently in this status. May be &#x60;queued&#x60;, &#x60;ringing&#x60;, &#x60;inProgress&#x60;, &#x60;canceled&#x60;, &#x60;completed&#x60;, &#x60;failed&#x60;, &#x60;busy&#x60;, or &#x60;noAnswer&#x60;.
   * @type CallStatus
   * @memberof DefaultApilistCalls
   */
  status?: CallStatus;

  /**
   * Only show Calls that started at or after this time, given as YYYY-MM-DD hh:mm:ss.
   * @type string
   * @memberof DefaultApilistCalls
   */
  startTime?: string;

  /**
   * Only show Calls that ended at or before this time, given as YYYY-MM- DD hh:mm:ss.
   * @type string
   * @memberof DefaultApilistCalls
   */
  endTime?: string;

  /**
   * Only show Calls spawned by the call with this ID.
   * @type string
   * @memberof DefaultApilistCalls
   */
  parentCallId?: string;

  /**
   * Only show calls belonging to the given applicationId. This parameter can be repeated to return calls from multiple Applications.
   * @type Array&lt;string&gt;
   * @memberof DefaultApilistCalls
   */
  applicationId?: Array<string>;
}

export interface DefaultApiListConferenceRecordingsRequest {
  /**
   * Show only Recordings made during the conference with this ID.
   * @type string
   * @memberof DefaultApilistConferenceRecordings
   */
  conferenceId: string;

  /**
   * Show only Recordings made during the Call with this ID.
   * @type string
   * @memberof DefaultApilistConferenceRecordings
   */
  callId?: string;

  /**
   * Only show Recordings created on this date, formatted as *YYYY-MM-DD*.
   * @type string
   * @memberof DefaultApilistConferenceRecordings
   */
  dateCreated?: string;
}

export interface DefaultApiListConferencesRequest {
  /**
   * Only show conferences that currently have the specified status. Valid values: &#x60;empty&#x60;, &#x60;populated&#x60;, &#x60;inProgress&#x60;, or &#x60;terminated&#x60;.
   * @type string
   * @memberof DefaultApilistConferences
   */
  status?: string;

  /**
   * List Conferences whose alias exactly matches this string.
   * @type string
   * @memberof DefaultApilistConferences
   */
  alias?: string;

  /**
   * Only show Conferences that were created on the specified date, in the form *YYYY-MM-DD*.
   * @type string
   * @memberof DefaultApilistConferences
   */
  dateCreated?: string;

  /**
   * Only show Conferences that were last updated on the specified date, in the form *YYYY-MM-DD*.
   * @type string
   * @memberof DefaultApilistConferences
   */
  dateUpdated?: string;
}

export interface DefaultApiListIncomingNumbersRequest {
  /**
   * Only show incoming phone number resources that match this PCRE-compatible regular expression.
   * @type string
   * @memberof DefaultApilistIncomingNumbers
   */
  phoneNumber?: string;

  /**
   * Only show incoming phone numbers with aliases that exactly match this value.
   * @type string
   * @memberof DefaultApilistIncomingNumbers
   */
  alias?: string;

  /**
   * State or province of this phone number.
   * @type string
   * @memberof DefaultApilistIncomingNumbers
   */
  region?: string;

  /**
   * Country of this phone number.
   * @type string
   * @memberof DefaultApilistIncomingNumbers
   */
  country?: string;

  /**
   * ID of the Application that FreeClimb should contact if a Call or SMS arrives for this phone number or a Call from this number is placed. An incoming phone number is not useful until associated with an applicationId.
   * @type string
   * @memberof DefaultApilistIncomingNumbers
   */
  applicationId?: string;

  /**
   * Indication of whether the phone number has an application linked to it.
   * @type boolean
   * @memberof DefaultApilistIncomingNumbers
   */
  hasApplication?: boolean;

  /**
   * Indicates whether the phone number can handle Calls. Typically set to true for all numbers.
   * @type boolean
   * @memberof DefaultApilistIncomingNumbers
   */
  voiceEnabled?: boolean;

  /**
   * Indication of whether the phone number can handle sending and receiving SMS messages. Typically set to true for all numbers.
   * @type boolean
   * @memberof DefaultApilistIncomingNumbers
   */
  smsEnabled?: boolean;

  /**
   * Indication of whether the phone number has a campaign associated with it
   * @type boolean
   * @memberof DefaultApilistIncomingNumbers
   */
  hasCampaign?: boolean;

  /**
   *
   * @type boolean
   * @memberof DefaultApilistIncomingNumbers
   */
  capabilitiesVoice?: boolean;

  /**
   *
   * @type boolean
   * @memberof DefaultApilistIncomingNumbers
   */
  capabilitiesSms?: boolean;

  /**
   *
   * @type boolean
   * @memberof DefaultApilistIncomingNumbers
   */
  capabilitiesTollFree?: boolean;

  /**
   *
   * @type boolean
   * @memberof DefaultApilistIncomingNumbers
   */
  capabilitiesTenDLC?: boolean;

  /**
   *
   * @type boolean
   * @memberof DefaultApilistIncomingNumbers
   */
  capabilitiesShortCode?: boolean;

  /**
   * Only show incoming phone number resources that have been assigned to the provided TFNCampaign ID.
   * @type string
   * @memberof DefaultApilistIncomingNumbers
   */
  tfnCampaignId?: string;

  /**
   * Indication of whether the phone number was registered as an offnet number. This field will be rendered only for requests to the IncomingPhone number resource.
   * @type boolean
   * @memberof DefaultApilistIncomingNumbers
   */
  offnet?: boolean;
}

export interface DefaultApiListMembersRequest {
  /**
   * String that uniquely identifies the Queue that the Member belongs to.
   * @type string
   * @memberof DefaultApilistMembers
   */
  queueId: string;
}

export interface DefaultApiListParticipantsRequest {
  /**
   * ID of the conference this participant is in.
   * @type string
   * @memberof DefaultApilistParticipants
   */
  conferenceId: string;

  /**
   * Only show Participants with the talk privilege.
   * @type boolean
   * @memberof DefaultApilistParticipants
   */
  talk?: boolean;

  /**
   * Only show Participants with the listen privilege.
   * @type boolean
   * @memberof DefaultApilistParticipants
   */
  listen?: boolean;

  /**
   * Only show Participants with the dtmfPassThrough privilege.
   * @type boolean
   * @memberof DefaultApilistParticipants
   */
  dtmfPassThrough?: boolean;
}

export interface DefaultApiListRecordingsRequest {
  /**
   * Show only Recordings made during the Call with this ID.
   * @type string
   * @memberof DefaultApilistRecordings
   */
  callId?: string;

  /**
   * Show only Recordings made during the conference with this ID.
   * @type string
   * @memberof DefaultApilistRecordings
   */
  conferenceId?: string;

  /**
   * Only show Recordings created on this date, formatted as *YYYY-MM-DD*.
   * @type string
   * @memberof DefaultApilistRecordings
   */
  dateCreated?: string;
}

export interface DefaultApiListSmsMessagesRequest {
  /**
   * Only show Messages to this phone number.
   * @type string
   * @memberof DefaultApilistSmsMessages
   */
  to?: string;

  /**
   * Only show Messages from this phone number.
   * @type string
   * @memberof DefaultApilistSmsMessages
   */
  _from?: string;

  /**
   * Only show Messages sent at or after this time (GMT), given as *YYYY-MM-DD hh:mm:ss*.
   * @type string
   * @memberof DefaultApilistSmsMessages
   */
  beginTime?: string;

  /**
   * Only show messages sent at or before this time (GMT), given as *YYYY-MM-DD hh:mm*..
   * @type string
   * @memberof DefaultApilistSmsMessages
   */
  endTime?: string;

  /**
   * Either &#x60;inbound&#x60; or &#x60;outbound&#x60;. Only show Messages that were either *sent from* or *received by* FreeClimb.
   * @type MessageDirection
   * @memberof DefaultApilistSmsMessages
   */
  direction?: MessageDirection;

  /**
   * Only show messages associated with this campaign ID.
   * @type string
   * @memberof DefaultApilistSmsMessages
   */
  campaignId?: string;

  /**
   * Only show messages associated with this brand ID
   * @type string
   * @memberof DefaultApilistSmsMessages
   */
  brandId?: string;

  /**
   * Only show messages that were sent as part of a 10DLC campaign.
   * @type boolean
   * @memberof DefaultApilistSmsMessages
   */
  is10DLC?: boolean;
}

export interface DefaultApiMakeACallRequest {
  /**
   * Call details for making a call
   * @type MakeCallRequest
   * @memberof DefaultApimakeACall
   */
  makeCallRequest?: MakeCallRequest;
}

export interface DefaultApiMakeAWebrtcJwtRequest {
  /**
   * Information needed to craft a JWT compatible with the platforms WebRTC APIs
   * @type CreateWebRTCToken
   * @memberof DefaultApimakeAWebrtcJwt
   */
  createWebRTCToken: CreateWebRTCToken;
}

export interface DefaultApiRemoveAParticipantRequest {
  /**
   * ID of the conference this participant is in.
   * @type string
   * @memberof DefaultApiremoveAParticipant
   */
  conferenceId: string;

  /**
   * ID of the Call associated with this participant.
   * @type string
   * @memberof DefaultApiremoveAParticipant
   */
  callId: string;
}

export interface DefaultApiSendAnSmsMessageRequest {
  /**
   * Details to create a message
   * @type MessageRequest
   * @memberof DefaultApisendAnSmsMessage
   */
  messageRequest: MessageRequest;
}

export interface DefaultApiStreamARecordingFileRequest {
  /**
   * String that uniquely identifies this recording resource.
   * @type string
   * @memberof DefaultApistreamARecordingFile
   */
  recordingId: string;
}

export interface DefaultApiUpdateAConferenceRequest {
  /**
   * String that uniquely identifies this conference resource.
   * @type string
   * @memberof DefaultApiupdateAConference
   */
  conferenceId: string;

  /**
   * Conference Details to update
   * @type UpdateConferenceRequest
   * @memberof DefaultApiupdateAConference
   */
  updateConferenceRequest?: UpdateConferenceRequest;
}

export interface DefaultApiUpdateALiveCallRequest {
  /**
   * String that uniquely identifies this call resource.
   * @type string
   * @memberof DefaultApiupdateALiveCall
   */
  callId: string;

  /**
   * Call details to update
   * @type UpdateCallRequest
   * @memberof DefaultApiupdateALiveCall
   */
  updateCallRequest: UpdateCallRequest;
}

export interface DefaultApiUpdateAParticipantRequest {
  /**
   * ID of the conference this participant is in.
   * @type string
   * @memberof DefaultApiupdateAParticipant
   */
  conferenceId: string;

  /**
   * ID of the Call associated with this participant.
   * @type string
   * @memberof DefaultApiupdateAParticipant
   */
  callId: string;

  /**
   * Conference participant details to update
   * @type UpdateConferenceParticipantRequest
   * @memberof DefaultApiupdateAParticipant
   */
  updateConferenceParticipantRequest?: UpdateConferenceParticipantRequest;
}

export interface DefaultApiUpdateAQueueRequest {
  /**
   * A string that uniquely identifies this Queue resource.
   * @type string
   * @memberof DefaultApiupdateAQueue
   */
  queueId: string;

  /**
   * Queue Details to update
   * @type QueueRequest
   * @memberof DefaultApiupdateAQueue
   */
  queueRequest?: QueueRequest;
}

export interface DefaultApiUpdateAnAccountRequest {
  /**
   * Account details to update
   * @type AccountRequest
   * @memberof DefaultApiupdateAnAccount
   */
  accountRequest?: AccountRequest;
}

export interface DefaultApiUpdateAnApplicationRequest {
  /**
   * A string that uniquely identifies this application resource.
   * @type string
   * @memberof DefaultApiupdateAnApplication
   */
  applicationId: string;

  /**
   * Application details to update.
   * @type ApplicationRequest
   * @memberof DefaultApiupdateAnApplication
   */
  applicationRequest?: ApplicationRequest;
}

export interface DefaultApiUpdateAnIncomingNumberRequest {
  /**
   * String that uniquely identifies this phone number resource.
   * @type string
   * @memberof DefaultApiupdateAnIncomingNumber
   */
  phoneNumberId: string;

  /**
   * Incoming Number details to update
   * @type IncomingNumberRequest
   * @memberof DefaultApiupdateAnIncomingNumber
   */
  incomingNumberRequest?: IncomingNumberRequest;
}

export class ObjectDefaultApi {
  private api: ObservableDefaultApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: DefaultApiRequestFactory,
    responseProcessor?: DefaultApiResponseProcessor,
  ) {
    this.api = new ObservableDefaultApi(
      configuration,
      requestFactory,
      responseProcessor,
    );
  }

  /**
   * Buy a Phone Number
   * @param param the request object
   */
  public buyAPhoneNumber(
    param: DefaultApiBuyAPhoneNumberRequest,
    options?: Configuration,
  ): Promise<IncomingNumberResult> {
    return this.api
      .buyAPhoneNumber(param.buyIncomingNumberRequest, options)
      .toPromise();
  }

  /**
   * Create a Conference
   * @param param the request object
   */
  public createAConference(
    param: DefaultApiCreateAConferenceRequest,
    options?: Configuration,
  ): Promise<ConferenceResult> {
    return this.api
      .createAConference(param.createConferenceRequest, options)
      .toPromise();
  }

  /**
   * Create a Queue
   * @param param the request object
   */
  public createAQueue(
    param: DefaultApiCreateAQueueRequest,
    options?: Configuration,
  ): Promise<QueueResult> {
    return this.api.createAQueue(param.queueRequest, options).toPromise();
  }

  /**
   * Create an application
   * @param param the request object
   */
  public createAnApplication(
    param: DefaultApiCreateAnApplicationRequest,
    options?: Configuration,
  ): Promise<ApplicationResult> {
    return this.api
      .createAnApplication(param.applicationRequest, options)
      .toPromise();
  }

  /**
   * Query the knowledge base
   * @param param the request object
   */
  public createKnowledgeBaseCompletion(
    param: DefaultApiCreateKnowledgeBaseCompletionRequest,
    options?: Configuration,
  ): Promise<CompletionResult> {
    return this.api
      .createKnowledgeBaseCompletion(
        param.knowledgeBaseId,
        param.completionRequest,
        options,
      )
      .toPromise();
  }

  /**
   * Delete a Recording
   * @param param the request object
   */
  public deleteARecording(
    param: DefaultApiDeleteARecordingRequest,
    options?: Configuration,
  ): Promise<void> {
    return this.api.deleteARecording(param.recordingId, options).toPromise();
  }

  /**
   * Delete an application
   * @param param the request object
   */
  public deleteAnApplication(
    param: DefaultApiDeleteAnApplicationRequest,
    options?: Configuration,
  ): Promise<void> {
    return this.api
      .deleteAnApplication(param.applicationId, options)
      .toPromise();
  }

  /**
   * Delete an Incoming Number
   * @param param the request object
   */
  public deleteAnIncomingNumber(
    param: DefaultApiDeleteAnIncomingNumberRequest,
    options?: Configuration,
  ): Promise<void> {
    return this.api
      .deleteAnIncomingNumber(param.phoneNumberId, options)
      .toPromise();
  }

  /**
   * Dequeue a Member
   * @param param the request object
   */
  public dequeueAMember(
    param: DefaultApiDequeueAMemberRequest,
    options?: Configuration,
  ): Promise<QueueMember> {
    return this.api
      .dequeueAMember(param.queueId, param.callId, options)
      .toPromise();
  }

  /**
   * Dequeue Head Member
   * @param param the request object
   */
  public dequeueHeadMember(
    param: DefaultApiDequeueHeadMemberRequest,
    options?: Configuration,
  ): Promise<QueueMember> {
    return this.api.dequeueHeadMember(param.queueId, options).toPromise();
  }

  /**
   * Download a Recording File
   * @param param the request object
   */
  public downloadARecordingFile(
    param: DefaultApiDownloadARecordingFileRequest,
    options?: Configuration,
  ): Promise<HttpFile> {
    return this.api
      .downloadARecordingFile(param.recordingId, options)
      .toPromise();
  }

  /**
   * Filter Logs
   * @param param the request object
   */
  public filterLogs(
    param: DefaultApiFilterLogsRequest,
    options?: Configuration,
  ): Promise<LogList> {
    return this.api.filterLogs(param.filterLogsRequest, options).toPromise();
  }

  /**
   * Get a Call
   * @param param the request object
   */
  public getACall(
    param: DefaultApiGetACallRequest,
    options?: Configuration,
  ): Promise<CallResult> {
    return this.api.getACall(param.callId, options).toPromise();
  }

  /**
   * Get a Conference
   * @param param the request object
   */
  public getAConference(
    param: DefaultApiGetAConferenceRequest,
    options?: Configuration,
  ): Promise<ConferenceResult> {
    return this.api.getAConference(param.conferenceId, options).toPromise();
  }

  /**
   * Get a Member
   * @param param the request object
   */
  public getAMember(
    param: DefaultApiGetAMemberRequest,
    options?: Configuration,
  ): Promise<QueueMember> {
    return this.api
      .getAMember(param.queueId, param.callId, options)
      .toPromise();
  }

  /**
   * Get a Participant
   * @param param the request object
   */
  public getAParticipant(
    param: DefaultApiGetAParticipantRequest,
    options?: Configuration,
  ): Promise<ConferenceParticipantResult> {
    return this.api
      .getAParticipant(param.conferenceId, param.callId, options)
      .toPromise();
  }

  /**
   * Get a Queue
   * @param param the request object
   */
  public getAQueue(
    param: DefaultApiGetAQueueRequest,
    options?: Configuration,
  ): Promise<QueueResult> {
    return this.api.getAQueue(param.queueId, options).toPromise();
  }

  /**
   * Get a Recording
   * @param param the request object
   */
  public getARecording(
    param: DefaultApiGetARecordingRequest,
    options?: Configuration,
  ): Promise<RecordingResult> {
    return this.api.getARecording(param.recordingId, options).toPromise();
  }

  /**
   * Get an Account
   * @param param the request object
   */
  public getAnAccount(
    param: DefaultApiGetAnAccountRequest,
    options?: Configuration,
  ): Promise<AccountResult> {
    return this.api.getAnAccount(options).toPromise();
  }

  /**
   * Get an Application
   * @param param the request object
   */
  public getAnApplication(
    param: DefaultApiGetAnApplicationRequest,
    options?: Configuration,
  ): Promise<ApplicationResult> {
    return this.api.getAnApplication(param.applicationId, options).toPromise();
  }

  /**
   * Get an Incoming Number
   * @param param the request object
   */
  public getAnIncomingNumber(
    param: DefaultApiGetAnIncomingNumberRequest,
    options?: Configuration,
  ): Promise<IncomingNumberResult> {
    return this.api
      .getAnIncomingNumber(param.phoneNumberId, options)
      .toPromise();
  }

  /**
   * Get an SMS Message
   * @param param the request object
   */
  public getAnSmsMessage(
    param: DefaultApiGetAnSmsMessageRequest,
    options?: Configuration,
  ): Promise<MessageResult> {
    return this.api.getAnSmsMessage(param.messageId, options).toPromise();
  }

  /**
   * Get Head Member
   * @param param the request object
   */
  public getHeadMember(
    param: DefaultApiGetHeadMemberRequest,
    options?: Configuration,
  ): Promise<QueueMember> {
    return this.api.getHeadMember(param.queueId, options).toPromise();
  }

  /**
   * Get a 10DLC SMS Brand
   * @param param the request object
   */
  public getTenDLCSmsBrand(
    param: DefaultApiGetTenDLCSmsBrandRequest,
    options?: Configuration,
  ): Promise<SMSTenDLCBrand> {
    return this.api.getTenDLCSmsBrand(param.brandId, options).toPromise();
  }

  /**
   * Get list of SMS 10DLC Brands
   * @param param the request object
   */
  public getTenDLCSmsBrands(
    param: DefaultApiGetTenDLCSmsBrandsRequest,
    options?: Configuration,
  ): Promise<SMSTenDLCBrandsListResult> {
    return this.api.getTenDLCSmsBrands(options).toPromise();
  }

  /**
   * Get a 10DLC SMS Campaign
   * @param param the request object
   */
  public getTenDLCSmsCampaign(
    param: DefaultApiGetTenDLCSmsCampaignRequest,
    options?: Configuration,
  ): Promise<SMSTenDLCCampaign> {
    return this.api.getTenDLCSmsCampaign(param.campaignId, options).toPromise();
  }

  /**
   * Get list of SMS 10DLC Campaigns
   * @param param the request object
   */
  public getTenDLCSmsCampaigns(
    param: DefaultApiGetTenDLCSmsCampaignsRequest,
    options?: Configuration,
  ): Promise<SMSTenDLCCampaignsListResult> {
    return this.api.getTenDLCSmsCampaigns(param.brandId, options).toPromise();
  }

  /**
   * Get a 10DLC SMS Partner Campaign
   * @param param the request object
   */
  public getTenDLCSmsPartnerCampaign(
    param: DefaultApiGetTenDLCSmsPartnerCampaignRequest,
    options?: Configuration,
  ): Promise<SMSTenDLCPartnerCampaign> {
    return this.api
      .getTenDLCSmsPartnerCampaign(param.campaignId, options)
      .toPromise();
  }

  /**
   * Get list of SMS 10DLC Partner Campaigns
   * @param param the request object
   */
  public getTenDLCSmsPartnerCampaigns(
    param: DefaultApiGetTenDLCSmsPartnerCampaignsRequest,
    options?: Configuration,
  ): Promise<SMSTenDLCPartnerCampaignsListResult> {
    return this.api
      .getTenDLCSmsPartnerCampaigns(param.brandId, options)
      .toPromise();
  }

  /**
   * Get a TollFree SMS Campaign
   * @param param the request object
   */
  public getTollFreeSmsCampaign(
    param: DefaultApiGetTollFreeSmsCampaignRequest,
    options?: Configuration,
  ): Promise<SMSTollFreeCampaign> {
    return this.api
      .getTollFreeSmsCampaign(param.campaignId, options)
      .toPromise();
  }

  /**
   * Get list of TollFree Campaigns
   * @param param the request object
   */
  public getTollFreeSmsCampaigns(
    param: DefaultApiGetTollFreeSmsCampaignsRequest,
    options?: Configuration,
  ): Promise<SMSTollFreeCampaignsListResult> {
    return this.api.getTollFreeSmsCampaigns(options).toPromise();
  }

  /**
   * List Active Queues
   * @param param the request object
   */
  public listActiveQueues(
    param: DefaultApiListActiveQueuesRequest,
    options?: Configuration,
  ): Promise<QueueList> {
    return this.api.listActiveQueues(param.alias, options).toPromise();
  }

  /**
   * List All Account Logs
   * @param param the request object
   */
  public listAllAccountLogs(
    param: DefaultApiListAllAccountLogsRequest,
    options?: Configuration,
  ): Promise<LogList> {
    return this.api.listAllAccountLogs(options).toPromise();
  }

  /**
   * List applications
   * @param param the request object
   */
  public listApplications(
    param: DefaultApiListApplicationsRequest,
    options?: Configuration,
  ): Promise<ApplicationList> {
    return this.api.listApplications(param.alias, options).toPromise();
  }

  /**
   * List available numbers
   * @param param the request object
   */
  public listAvailableNumbers(
    param: DefaultApiListAvailableNumbersRequest = {},
    options?: Configuration,
  ): Promise<AvailableNumberList> {
    return this.api
      .listAvailableNumbers(
        param.phoneNumber,
        param.region,
        param.country,
        param.voiceEnabled,
        param.smsEnabled,
        param.capabilitiesVoice,
        param.capabilitiesSms,
        param.capabilitiesTollFree,
        param.capabilitiesTenDLC,
        param.capabilitiesShortCode,
        options,
      )
      .toPromise();
  }

  /**
   * List Call Logs
   * @param param the request object
   */
  public listCallLogs(
    param: DefaultApiListCallLogsRequest,
    options?: Configuration,
  ): Promise<LogList> {
    return this.api.listCallLogs(param.callId, options).toPromise();
  }

  /**
   * List Call Recordings
   * @param param the request object
   */
  public listCallRecordings(
    param: DefaultApiListCallRecordingsRequest,
    options?: Configuration,
  ): Promise<RecordingList> {
    return this.api
      .listCallRecordings(param.callId, param.dateCreated, options)
      .toPromise();
  }

  /**
   * List Calls
   * @param param the request object
   */
  public listCalls(
    param: DefaultApiListCallsRequest,
    options?: Configuration,
  ): Promise<CallList> {
    return this.api
      .listCalls(
        param.active,
        param.to,
        param._from,
        param.status,
        param.startTime,
        param.endTime,
        param.parentCallId,
        param.applicationId,
        options,
      )
      .toPromise();
  }

  /**
   * List Conference Recordings
   * @param param the request object
   */
  public listConferenceRecordings(
    param: DefaultApiListConferenceRecordingsRequest,
    options?: Configuration,
  ): Promise<RecordingList> {
    return this.api
      .listConferenceRecordings(
        param.conferenceId,
        param.callId,
        param.dateCreated,
        options,
      )
      .toPromise();
  }

  /**
   * List Conferences
   * @param param the request object
   */
  public listConferences(
    param: DefaultApiListConferencesRequest,
    options?: Configuration,
  ): Promise<ConferenceList> {
    return this.api
      .listConferences(
        param.status,
        param.alias,
        param.dateCreated,
        param.dateUpdated,
        options,
      )
      .toPromise();
  }

  /**
   * List Incoming Numbers
   * @param param the request object
   */
  public listIncomingNumbers(
    param: DefaultApiListIncomingNumbersRequest,
    options?: Configuration,
  ): Promise<IncomingNumberList> {
    return this.api
      .listIncomingNumbers(
        param.phoneNumber,
        param.alias,
        param.region,
        param.country,
        param.applicationId,
        param.hasApplication,
        param.voiceEnabled,
        param.smsEnabled,
        param.hasCampaign,
        param.capabilitiesVoice,
        param.capabilitiesSms,
        param.capabilitiesTollFree,
        param.capabilitiesTenDLC,
        param.capabilitiesShortCode,
        param.tfnCampaignId,
        param.offnet,
        options,
      )
      .toPromise();
  }

  /**
   * List Members
   * @param param the request object
   */
  public listMembers(
    param: DefaultApiListMembersRequest,
    options?: Configuration,
  ): Promise<QueueMemberList> {
    return this.api.listMembers(param.queueId, options).toPromise();
  }

  /**
   * List Participants
   * @param param the request object
   */
  public listParticipants(
    param: DefaultApiListParticipantsRequest,
    options?: Configuration,
  ): Promise<ConferenceParticipantList> {
    return this.api
      .listParticipants(
        param.conferenceId,
        param.talk,
        param.listen,
        param.dtmfPassThrough,
        options,
      )
      .toPromise();
  }

  /**
   * List Recordings
   * @param param the request object
   */
  public listRecordings(
    param: DefaultApiListRecordingsRequest,
    options?: Configuration,
  ): Promise<RecordingList> {
    return this.api
      .listRecordings(
        param.callId,
        param.conferenceId,
        param.dateCreated,
        options,
      )
      .toPromise();
  }

  /**
   * List SMS Messages
   * @param param the request object
   */
  public listSmsMessages(
    param: DefaultApiListSmsMessagesRequest,
    options?: Configuration,
  ): Promise<MessagesList> {
    return this.api
      .listSmsMessages(
        param.to,
        param._from,
        param.beginTime,
        param.endTime,
        param.direction,
        param.campaignId,
        param.brandId,
        param.is10DLC,
        options,
      )
      .toPromise();
  }

  /**
   * Make a Call
   * @param param the request object
   */
  public makeACall(
    param: DefaultApiMakeACallRequest,
    options?: Configuration,
  ): Promise<CallResult> {
    return this.api.makeACall(param.makeCallRequest, options).toPromise();
  }

  /**
   * Make a JWT for WebRTC calling
   * @param param the request object
   */
  public makeAWebrtcJwt(
    param: DefaultApiMakeAWebrtcJwtRequest,
    options?: Configuration,
  ): Promise<string> {
    return this.api
      .makeAWebrtcJwt(param.createWebRTCToken, options)
      .toPromise();
  }

  /**
   * Remove a Participant
   * @param param the request object
   */
  public removeAParticipant(
    param: DefaultApiRemoveAParticipantRequest,
    options?: Configuration,
  ): Promise<void> {
    return this.api
      .removeAParticipant(param.conferenceId, param.callId, options)
      .toPromise();
  }

  /**
   * Send an SMS Message
   * @param param the request object
   */
  public sendAnSmsMessage(
    param: DefaultApiSendAnSmsMessageRequest,
    options?: Configuration,
  ): Promise<MessageResult> {
    return this.api.sendAnSmsMessage(param.messageRequest, options).toPromise();
  }

  /**
   * Stream a Recording File
   * @param param the request object
   */
  public streamARecordingFile(
    param: DefaultApiStreamARecordingFileRequest,
    options?: Configuration,
  ): Promise<HttpFile> {
    return this.api
      .streamARecordingFile(param.recordingId, options)
      .toPromise();
  }

  /**
   * Update a Conference
   * @param param the request object
   */
  public updateAConference(
    param: DefaultApiUpdateAConferenceRequest,
    options?: Configuration,
  ): Promise<void> {
    return this.api
      .updateAConference(
        param.conferenceId,
        param.updateConferenceRequest,
        options,
      )
      .toPromise();
  }

  /**
   * Update a Live Call
   * @param param the request object
   */
  public updateALiveCall(
    param: DefaultApiUpdateALiveCallRequest,
    options?: Configuration,
  ): Promise<void> {
    return this.api
      .updateALiveCall(param.callId, param.updateCallRequest, options)
      .toPromise();
  }

  /**
   * Update a Participant
   * @param param the request object
   */
  public updateAParticipant(
    param: DefaultApiUpdateAParticipantRequest,
    options?: Configuration,
  ): Promise<ConferenceParticipantResult> {
    return this.api
      .updateAParticipant(
        param.conferenceId,
        param.callId,
        param.updateConferenceParticipantRequest,
        options,
      )
      .toPromise();
  }

  /**
   * Update a Queue
   * @param param the request object
   */
  public updateAQueue(
    param: DefaultApiUpdateAQueueRequest,
    options?: Configuration,
  ): Promise<QueueResult> {
    return this.api
      .updateAQueue(param.queueId, param.queueRequest, options)
      .toPromise();
  }

  /**
   * Manage an account
   * @param param the request object
   */
  public updateAnAccount(
    param: DefaultApiUpdateAnAccountRequest,
    options?: Configuration,
  ): Promise<void> {
    return this.api.updateAnAccount(param.accountRequest, options).toPromise();
  }

  /**
   * Update an application
   * @param param the request object
   */
  public updateAnApplication(
    param: DefaultApiUpdateAnApplicationRequest,
    options?: Configuration,
  ): Promise<ApplicationResult> {
    return this.api
      .updateAnApplication(
        param.applicationId,
        param.applicationRequest,
        options,
      )
      .toPromise();
  }

  /**
   * Update an Incoming Number
   * @param param the request object
   */
  public updateAnIncomingNumber(
    param: DefaultApiUpdateAnIncomingNumberRequest,
    options?: Configuration,
  ): Promise<IncomingNumberResult> {
    return this.api
      .updateAnIncomingNumber(
        param.phoneNumberId,
        param.incomingNumberRequest,
        options,
      )
      .toPromise();
  }
}
