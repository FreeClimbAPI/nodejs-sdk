import {
  CallStatus,
  CallDirection,
  MessageDirection,
  ConferenceStatus,
  BuyIncomingNumberRequest,
  CreateWebRTCToken,
  FilterLogsRequest,
  MessageRequest,
  ApplicationRequest,
  IncomingNumberRequest,
  CompletionRequest,
  MakeCallRequest,
  CreateConferenceRequest,
  UpdateConferenceParticipantRequest,
  QueueRequest,
} from "../index";

export const parameters = {
  getAnApplication: {
    applicationId: "TEST_APPLICATION_ID",
  },
  updateAnApplication: {
    applicationId: "TEST_APPLICATION_ID",
  },
  listApplications: {
    alias: "TEST_ALIAS",
  },
  listAvailableNumbers: {
    phoneNumber: "TEST_PHONE_NUMBER",
    region: "TEST_REGION",
    country: "TEST_COUNTRY",
    voiceEnabled: false,
    smsEnabled: false,
    capabilitiesVoice: false,
    capabilitiesSms: false,
    capabilitiesTollFree: false,
    capabilitiesTenDlc: false,
    capabilitiesShortCode: false,
  },
  getAnIncomingNumber: {
    phoneNumberId: "TEST_PHONE_NUMBER_ID",
  },
  updateAnIncomingNumber: {
    phoneNumberId: "TEST_PHONE_NUMBER_ID",
  },
  listIncomingNumbers: {
    phoneNumber: "TEST_PHONE_NUMBER",
    alias: "TEST_ALIAS",
    region: "TEST_REGION",
    country: "TEST_COUNTRY",
    applicationId: "TEST_APPLICATION_ID",
    hasApplication: false,
    voiceEnabled: false,
    smsEnabled: false,
    capabilitiesVoice: false,
    capabilitiesSms: false,
    capabilitiesTollFree: false,
    capabilitiesTenDlc: false,
    capabilitiesShortCode: false,
    hasCampaign: false,
    tfnCampaignId: "TEST_CAMPAIGN_ID",
    offnet: false,
  },
  createKnowledgeBaseCompletion: {
    knowledgeBaseId: "TEST_KNOWLEDGE_BASE_ID",
  },
  getACall: {
    callId: "TEST_CALL_ID",
  },
  listCalls: {
    active: false,
    to: "TEST_TO_NUMBER",
    from: "TEST_FROM_NUMBER",
    status: CallStatus.COMPLETED,
    startTime: "TEST_START_TIME",
    endTime: "TEST_END_TIME",
    parentCallId: "TEST_PARENT_CALL_ID",
    applicationId: ["AP0000000000000000000000000000000000000000"],
  },
  listCallRecordings: {
    callId: "TEST_CALL_ID",
    dateCreated: "TEST_DATE_CREATED",
  },
  listCallLogs: {
    callId: "TEST_CALL_ID",
    dateCreated: "TEST_DATE_CREATED",
  },
  listConferences: {
    status: ConferenceStatus.TERMINATED,
    alias: "TEST_ALIAS",
    dateCreated: "TEST_DATE_CREATED",
    dateUpdated: "TEST_DATE_UPDATED",
  },
  getAConference: {
    conferenceId: "TEST_CONFERENCE_ID",
  },
  updateAParticipant: {
    conferenceId: "TEST_CONFERENCE_ID",
    callId: "TEST_CALL_ID",
  },
  getAParticipant: {
    conferenceId: "TEST_CONFERENCE_ID",
    callId: "TEST_CALL_ID",
  },
  listParticipants: {
    conferenceId: "TEST_CONFERENCE_ID",
    talk: false,
    listen: false,
    dtmfPassThrough: false,
  },
  listConferenceRecordings: {
    conferenceId: "TEST_CONFERENCE_ID",
    callId: "TEST_CALL_ID",
    dateCreated: "TEST_DATE_CREATED",
  },
  updateAQueue: {
    queueId: "TEST_QUEUE_ID",
  },
  getAQueue: {
    queueId: "TEST_QUEUE_ID",
  },
  listActiveQueues: {
    alias: "TEST_ALIAS",
  },
  getHeadMember: {
    queueId: "TEST_QUEUE_ID",
  },
  dequeueHeadMember: {
    queueId: "TEST_QUEUE_ID",
  },
  listMembers: {
    queueId: "TEST_QUEUE_ID",
  },
  getAMember: {
    queueId: "TEST_QUEUE_ID",
    callId: "TEST_CALL_ID",
  },
  dequeueAMember: {
    queueId: "TEST_QUEUE_ID",
    callId: "TEST_CALL_ID",
  },
  listRecordings: {
    callId: "TEST_CALL_ID",
    conferenceId: "TEST_CONFERENCE_ID",
    dateCreated: "TEST_DATE_CREATED",
  },
  getARecording: {
    recordingId: "TEST_RECORDING_ID",
  },
  streamARecordingFile: {
    recordingId: "TEST_RECORDING_ID",
  },
  downloadARecordingFile: {
    recordingId: "TEST_RECORDING_ID",
  },
  listSmsMessages: {
    to: "TEST_TO_NUMBER",
    from: "TEST_FROM_NUMBER",
    beginTime: "TEST_BEGIN_TIME",
    endTime: "TEST_END_TIME",
    direction: MessageDirection.INBOUND,
    campaignId: "TEST_CAMPAIGN_ID",
    brandId: "TEST_BRAND_ID",
    is10Dlc: false,
  },
  getAnSmsMessage: {
    messageId: "TEST_MESSAGE_ID",
  },
  getTenDLCSmsCampaigns: {
    brandId: "TEST_BRAND_ID",
  },
  getTenDLCSmsCampaign: {
    campaignId: "TEST_CAMPAIGN_ID",
  },
  getTenDLCSmsPartnerCampaigns: {
    brandId: "TEST_BRAND_ID",
  },
  getTenDLCSmsPartnerCampaign: {
    campaignId: "TEST_CAMPAIGN_ID",
  },
  getTenDLCSmsBrand: {
    brandId: "TEST_BRAND_ID",
  },
  getTollFreeSmsCampaign: {
    campaignId: "TEST_CAMPAIGN_ID",
  },
};

export const requestBody = {
  buyAPhoneNumber: new BuyIncomingNumberRequest({
    phoneNumber: "TEST_PHONE_NUMBER",
  }),
  updateAnApplication: new ApplicationRequest({
    alias: "TEST_ALIAS",
  }),
  createAnApplication: new ApplicationRequest({
    alias: "TEST_ALIAS",
  }),
  updateAnIncomingNumber: new IncomingNumberRequest({
    alias: "TEST",
  }),
  createKnowledgeBaseCompletion: new CompletionRequest({
    query: "TEST_QUERY",
  }),
  makeACall: new MakeCallRequest({
    from: "TEST_FROM_NUMBER",
    to: "TEST_TO_NUMBER",
  }),
  makeAWebrtcJwt: new CreateWebRTCToken({
    to: "TEST_TO_NUMBER",
    from: "TEST_FROM_NUMBER",
    uses: 1,
  }),
  createAConference: new CreateConferenceRequest({
    alias: "TEST_CONFERENCE",
  }),
  filterLogs: new FilterLogsRequest({
    pql: "TEST_PQL",
  }),
  updateAParticipant: new UpdateConferenceParticipantRequest({
    talk: false,
  }),
  createAQueue: new QueueRequest({
    alias: "TEST_ALIAS",
  }),
  updateAQueue: new QueueRequest({
    alias: "TEST_ALIAS",
  }),
  sendAnSmsMessage: new MessageRequest({
    from: "TEST_FROM_NUMBER",
    to: "TEST_TO_NUMBER",
    text: "TEST_TEXT",
  }),
};
