import { describe, expect, test, beforeAll } from "@jest/globals";
import * as freeclimb from "../../index";
import * as Models from "../../models/all";
import { parameters, requestBody } from "../testValues";

describe("DefaultApi", () => {
  let apiInstance: freeclimb.DefaultApi;
  const accountId = "YOUR_ACCOUNT_ID";
  beforeAll(() => {
    const configuration = freeclimb.createConfiguration({
      baseServer: new freeclimb.ServerConfiguration<{}>(
        "http://127.0.0.1:4010",
        {},
      ),
      accountId: accountId,
      apiKey: "YOUR_API_KEY",
    });
    apiInstance = new freeclimb.DefaultApi(configuration);
  });

  describe("#getAnAccount", () => {
    test("returns an instance of freeclimb.AccountResult", async () => {
      let response = await apiInstance.getAnAccount();

      expect(response).toBeInstanceOf(freeclimb.AccountResult);
    });
  });
  describe("#getAnApplication", () => {
    test("returns an instance of freeclimb.ApplicationResult", async () => {
      const applicationId = parameters.getAnApplication.applicationId;

      let response = await apiInstance.getAnApplication(applicationId);

      expect(response).toBeInstanceOf(freeclimb.ApplicationResult);
    });
  });
  describe("#updateAnApplication", () => {
    test("returns an instance of freeclimb.ApplicationResult", async () => {
      const applicationId = parameters.updateAnApplication.applicationId;
      let body = requestBody.updateAnApplication;

      let response = await apiInstance.updateAnApplication(applicationId, body);

      expect(response).toBeInstanceOf(freeclimb.ApplicationResult);
    });
  });
  describe("#listApplications", () => {
    test("returns an instance of freeclimb.ApplicationList", async () => {
      const alias = parameters.listApplications.alias;

      let response = await apiInstance.listApplications(alias);

      expect(response).toBeInstanceOf(freeclimb.ApplicationList);
    });
  });
  describe("#createAnApplication", () => {
    test("returns an instance of freeclimb.ApplicationResult", async () => {
      let body = requestBody.createAnApplication;

      let response = await apiInstance.createAnApplication(body);

      expect(response).toBeInstanceOf(freeclimb.ApplicationResult);
    });
  });
  describe("#listAvailableNumbers", () => {
    test("returns an instance of freeclimb.AvailableNumberList", async () => {
      const phoneNumber = parameters.listAvailableNumbers.phoneNumber;
      const region = parameters.listAvailableNumbers.region;
      const country = parameters.listAvailableNumbers.country;
      const voiceEnabled = parameters.listAvailableNumbers.voiceEnabled;
      const smsEnabled = parameters.listAvailableNumbers.smsEnabled;
      const capabilitiesVoice =
        parameters.listAvailableNumbers.capabilitiesVoice;
      const capabilitiesSms = parameters.listAvailableNumbers.capabilitiesSms;
      const capabilitiesTollFree =
        parameters.listAvailableNumbers.capabilitiesTollFree;
      const capabilitiesTenDlc =
        parameters.listAvailableNumbers.capabilitiesTenDlc;
      const capabilitiesShortCode =
        parameters.listAvailableNumbers.capabilitiesShortCode;

      let response = await apiInstance.listAvailableNumbers(
        phoneNumber,
        region,
        country,
        voiceEnabled,
        smsEnabled,
        capabilitiesVoice,
        capabilitiesSms,
        capabilitiesTollFree,
        capabilitiesTenDlc,
        capabilitiesShortCode,
      );

      expect(response).toBeInstanceOf(freeclimb.AvailableNumberList);
    });
  });
  describe("#getAnIncomingNumber", () => {
    test("returns an instance of freeclimb.IncomingNumberResult", async () => {
      const phoneNumberId = parameters.getAnIncomingNumber.phoneNumberId;

      let response = await apiInstance.getAnIncomingNumber(phoneNumberId);

      expect(response).toBeInstanceOf(freeclimb.IncomingNumberResult);
    });
  });
  describe("#updateAnIncomingNumber", () => {
    test("returns an instance of freeclimb.IncomingNumberResult", async () => {
      const phoneNumberId = parameters.updateAnIncomingNumber.phoneNumberId;
      let body = requestBody.updateAnIncomingNumber;

      let response = await apiInstance.updateAnIncomingNumber(
        phoneNumberId,
        body,
      );

      expect(response).toBeInstanceOf(freeclimb.IncomingNumberResult);
    });
  });
  describe("#listIncomingNumbers", () => {
    test("returns an instance of freeclimb.IncomingNumberList", async () => {
      const phoneNumber = parameters.listIncomingNumbers.phoneNumber;
      const alias = parameters.listIncomingNumbers.alias;
      const region = parameters.listIncomingNumbers.region;
      const country = parameters.listIncomingNumbers.country;
      const applicationId = parameters.listIncomingNumbers.applicationId;
      const hasApplication = parameters.listIncomingNumbers.hasApplication;
      const voiceEnabled = parameters.listIncomingNumbers.voiceEnabled;
      const smsEnabled = parameters.listIncomingNumbers.smsEnabled;
      const hasCampaign = parameters.listIncomingNumbers.hasCampaign;
      const capabilitiesVoice =
        parameters.listIncomingNumbers.capabilitiesVoice;
      const capabilitiesSms = parameters.listIncomingNumbers.capabilitiesSms;
      const capabilitiesTollFree =
        parameters.listIncomingNumbers.capabilitiesTollFree;
      const capabilitiesTenDlc =
        parameters.listIncomingNumbers.capabilitiesTenDlc;
      const capabilitiesShortCode =
        parameters.listIncomingNumbers.capabilitiesShortCode;
      const tfnCampaignId = parameters.listIncomingNumbers.tfnCampaignId;
      const offnet = parameters.listIncomingNumbers.offnet;

      let response = await apiInstance.listIncomingNumbers(
        phoneNumber,
        alias,
        region,
        country,
        applicationId,
        hasApplication,
        voiceEnabled,
        smsEnabled,
        hasCampaign,
        capabilitiesVoice,
        capabilitiesSms,
        capabilitiesTollFree,
        capabilitiesTenDlc,
        capabilitiesShortCode,
        tfnCampaignId,
        offnet,
      );

      expect(response).toBeInstanceOf(freeclimb.IncomingNumberList);
    });
  });
  describe("#buyAPhoneNumber", () => {
    test("returns an instance of freeclimb.IncomingNumberResult", async () => {
      let body = requestBody.buyAPhoneNumber;

      let response = await apiInstance.buyAPhoneNumber(body);

      expect(response).toBeInstanceOf(freeclimb.IncomingNumberResult);
    });
  });
  describe("#createKnowledgeBaseCompletion", () => {
    test("returns an instance of freeclimb.CompletionResult", async () => {
      const knowledgeBaseId =
        parameters.createKnowledgeBaseCompletion.knowledgeBaseId;
      let body = requestBody.createKnowledgeBaseCompletion;

      let response = await apiInstance.createKnowledgeBaseCompletion(
        knowledgeBaseId,
        body,
      );

      expect(response).toBeInstanceOf(freeclimb.CompletionResult);
    });
  });
  describe("#getACall", () => {
    test("returns an instance of freeclimb.CallResult", async () => {
      const callId = parameters.getACall.callId;

      let response = await apiInstance.getACall(callId);

      expect(response).toBeInstanceOf(freeclimb.CallResult);
    });
  });
  describe("#makeACall", () => {
    test("returns an instance of freeclimb.CallResult", async () => {
      let body = requestBody.makeACall;

      let response = await apiInstance.makeACall(body);

      expect(response).toBeInstanceOf(freeclimb.CallResult);
    });
  });
  describe("#listCalls", () => {
    test("returns an instance of freeclimb.CallList", async () => {
      const active = parameters.listCalls.active;
      const to = parameters.listCalls.to;
      const from = parameters.listCalls.from;
      const status = parameters.listCalls.status;
      const startTime = parameters.listCalls.startTime;
      const endTime = parameters.listCalls.endTime;
      const parentCallId = parameters.listCalls.parentCallId;
      const applicationId = parameters.listCalls.applicationId;
      const riskScoreMin = parameters.listCalls.riskScoreMin;
      const riskScoreMax = parameters.listCalls.riskScoreMax;

      let response = await apiInstance.listCalls(
        active,
        to,
        from,
        status,
        startTime,
        endTime,
        parentCallId,
        applicationId,
        riskScoreMin,
        riskScoreMax,
      );

      expect(response).toBeInstanceOf(freeclimb.CallList);
    });
  });
  describe("#listCallRecordings", () => {
    test("returns an instance of freeclimb.RecordingList", async () => {
      const callId = parameters.listCallRecordings.callId;
      const dateCreated = parameters.listCallRecordings.dateCreated;

      let response = await apiInstance.listCallRecordings(callId, dateCreated);

      expect(response).toBeInstanceOf(freeclimb.RecordingList);
    });
  });
  describe("#listCallLogs", () => {
    test("returns an instance of freeclimb.LogList", async () => {
      const callId = parameters.listCallLogs.callId;

      let response = await apiInstance.listCallLogs(callId);

      expect(response).toBeInstanceOf(freeclimb.LogList);
    });
  });
  describe("#makeAWebrtcJwt", () => {
    test("returns an instance of string", async () => {
      let body = requestBody.makeAWebrtcJwt;

      let response = await apiInstance.makeAWebrtcJwt(body);

      expect(typeof response).toBe("string");
    });
  });
  describe("#createAConference", () => {
    test("returns an instance of freeclimb.ConferenceResult", async () => {
      let body = requestBody.createAConference;

      let response = await apiInstance.createAConference(body);

      expect(response).toBeInstanceOf(freeclimb.ConferenceResult);
    });
  });
  describe("#listConferences", () => {
    test("returns an instance of freeclimb.ConferenceList", async () => {
      const status = parameters.listConferences.status;
      const alias = parameters.listConferences.alias;
      const dateCreated = parameters.listConferences.dateCreated;
      const dateUpdated = parameters.listConferences.dateUpdated;

      let response = await apiInstance.listConferences(
        status,
        alias,
        dateCreated,
        dateUpdated,
      );

      expect(response).toBeInstanceOf(freeclimb.ConferenceList);
    });
  });
  describe("#getAConference", () => {
    test("returns an instance of freeclimb.ConferenceResult", async () => {
      const conferenceId = parameters.getAConference.conferenceId;

      let response = await apiInstance.getAConference(conferenceId);

      expect(response).toBeInstanceOf(freeclimb.ConferenceResult);
    });
  });
  describe("#updateAParticipant", () => {
    test("returns an instance of freeclimb.ConferenceParticipantResult", async () => {
      const conferenceId = parameters.updateAParticipant.conferenceId;
      const callId = parameters.updateAParticipant.callId;
      let body = requestBody.updateAParticipant;

      let response = await apiInstance.updateAParticipant(
        conferenceId,
        callId,
        body,
      );

      expect(response).toBeInstanceOf(freeclimb.ConferenceParticipantResult);
    });
  });
  describe("#getAParticipant", () => {
    test("returns an instance of freeclimb.ConferenceParticipantResult", async () => {
      const conferenceId = parameters.getAParticipant.conferenceId;
      const callId = parameters.getAParticipant.callId;

      let response = await apiInstance.getAParticipant(conferenceId, callId);

      expect(response).toBeInstanceOf(freeclimb.ConferenceParticipantResult);
    });
  });
  describe("#listParticipants", () => {
    test("returns an instance of freeclimb.ConferenceParticipantList", async () => {
      const conferenceId = parameters.listParticipants.conferenceId;
      const talk = parameters.listParticipants.talk;
      const listen = parameters.listParticipants.listen;
      const dtmfPassThrough = parameters.listParticipants.dtmfPassThrough;

      let response = await apiInstance.listParticipants(
        conferenceId,
        talk,
        listen,
        dtmfPassThrough,
      );

      expect(response).toBeInstanceOf(freeclimb.ConferenceParticipantList);
    });
  });
  describe("#listConferenceRecordings", () => {
    test("returns an instance of freeclimb.RecordingList", async () => {
      const conferenceId = parameters.listConferenceRecordings.conferenceId;
      const callId = parameters.listConferenceRecordings.callId;
      const dateCreated = parameters.listConferenceRecordings.dateCreated;

      let response = await apiInstance.listConferenceRecordings(
        conferenceId,
        callId,
        dateCreated,
      );

      expect(response).toBeInstanceOf(freeclimb.RecordingList);
    });
  });
  describe("#updateAQueue", () => {
    test("returns an instance of freeclimb.QueueResult", async () => {
      const queueId = parameters.updateAQueue.queueId;
      let body = requestBody.updateAQueue;

      let response = await apiInstance.updateAQueue(queueId, body);

      expect(response).toBeInstanceOf(freeclimb.QueueResult);
    });
  });
  describe("#getAQueue", () => {
    test("returns an instance of freeclimb.QueueResult", async () => {
      const queueId = parameters.getAQueue.queueId;

      let response = await apiInstance.getAQueue(queueId);

      expect(response).toBeInstanceOf(freeclimb.QueueResult);
    });
  });
  describe("#listActiveQueues", () => {
    test("returns an instance of freeclimb.QueueList", async () => {
      const alias = parameters.listActiveQueues.alias;

      let response = await apiInstance.listActiveQueues(alias);

      expect(response).toBeInstanceOf(freeclimb.QueueList);
    });
  });
  describe("#createAQueue", () => {
    test("returns an instance of freeclimb.QueueResult", async () => {
      let body = requestBody.createAQueue;

      let response = await apiInstance.createAQueue(body);

      expect(response).toBeInstanceOf(freeclimb.QueueResult);
    });
  });
  describe("#getHeadMember", () => {
    test("returns an instance of freeclimb.QueueMember", async () => {
      const queueId = parameters.getHeadMember.queueId;

      let response = await apiInstance.getHeadMember(queueId);

      expect(response).toBeInstanceOf(freeclimb.QueueMember);
    });
  });
  describe("#dequeueHeadMember", () => {
    test("returns an instance of freeclimb.QueueMember", async () => {
      const queueId = parameters.dequeueHeadMember.queueId;

      let response = await apiInstance.dequeueHeadMember(queueId);

      expect(response).toBeInstanceOf(freeclimb.QueueMember);
    });
  });
  describe("#listMembers", () => {
    test("returns an instance of freeclimb.QueueMemberList", async () => {
      const queueId = parameters.listMembers.queueId;

      let response = await apiInstance.listMembers(queueId);

      expect(response).toBeInstanceOf(freeclimb.QueueMemberList);
    });
  });
  describe("#getAMember", () => {
    test("returns an instance of freeclimb.QueueMember", async () => {
      const queueId = parameters.getAMember.queueId;
      const callId = parameters.getAMember.callId;

      let response = await apiInstance.getAMember(queueId, callId);

      expect(response).toBeInstanceOf(freeclimb.QueueMember);
    });
  });
  describe("#dequeueAMember", () => {
    test("returns an instance of freeclimb.QueueMember", async () => {
      const queueId = parameters.dequeueAMember.queueId;
      const callId = parameters.dequeueAMember.callId;

      let response = await apiInstance.dequeueAMember(queueId, callId);

      expect(response).toBeInstanceOf(freeclimb.QueueMember);
    });
  });
  describe("#listAllAccountLogs", () => {
    test("returns an instance of freeclimb.LogList", async () => {
      let response = await apiInstance.listAllAccountLogs();

      expect(response).toBeInstanceOf(freeclimb.LogList);
    });
  });
  describe("#filterLogs", () => {
    test("returns an instance of freeclimb.LogList", async () => {
      let body = requestBody.filterLogs;

      let response = await apiInstance.filterLogs(body);

      expect(response).toBeInstanceOf(freeclimb.LogList);
    });
  });
  describe("#listRecordings", () => {
    test("returns an instance of freeclimb.RecordingList", async () => {
      const callId = parameters.listRecordings.callId;
      const conferenceId = parameters.listRecordings.conferenceId;
      const dateCreated = parameters.listRecordings.dateCreated;

      let response = await apiInstance.listRecordings(
        callId,
        conferenceId,
        dateCreated,
      );

      expect(response).toBeInstanceOf(freeclimb.RecordingList);
    });
  });
  describe("#getARecording", () => {
    test("returns an instance of freeclimb.RecordingResult", async () => {
      const recordingId = parameters.getARecording.recordingId;

      let response = await apiInstance.getARecording(recordingId);

      expect(response).toBeInstanceOf(freeclimb.RecordingResult);
    });
  });
  describe("#streamARecordingFile", () => {
    test("returns an instance of Buffer", async () => {
      const recordingId = parameters.streamARecordingFile.recordingId;

      let response = await apiInstance.streamARecordingFile(recordingId);

      expect(response.data).toBeInstanceOf(Buffer);
      expect(typeof response.name).toBe("string");
    });
  });
  describe("#downloadARecordingFile", () => {
    test("returns an instance of Buffer", async () => {
      const recordingId = parameters.downloadARecordingFile.recordingId;

      let response = await apiInstance.downloadARecordingFile(recordingId);

      expect(response.data).toBeInstanceOf(Buffer);
      expect(typeof response.name).toBe("string");
    });
  });
  describe("#listSmsMessages", () => {
    test("returns an instance of freeclimb.MessagesList", async () => {
      const to = parameters.listSmsMessages.to;
      const from = parameters.listSmsMessages.from;
      const beginTime = parameters.listSmsMessages.beginTime;
      const endTime = parameters.listSmsMessages.endTime;
      const direction = parameters.listSmsMessages.direction;
      const campaignId = parameters.listSmsMessages.campaignId;
      const brandId = parameters.listSmsMessages.brandId;
      const is10Dlc = parameters.listSmsMessages.is10Dlc;

      let response = await apiInstance.listSmsMessages(
        to,
        from,
        beginTime,
        endTime,
        direction,
        campaignId,
        brandId,
        is10Dlc,
      );

      expect(response).toBeInstanceOf(freeclimb.MessagesList);
    });
  });
  describe("#sendAnSmsMessage", () => {
    test("returns an instance of freeclimb.MessageResult", async () => {
      let body = requestBody.sendAnSmsMessage;

      let response = await apiInstance.sendAnSmsMessage(body);

      expect(response).toBeInstanceOf(freeclimb.MessageResult);
    });
  });
  describe("#getAnSmsMessage", () => {
    test("returns an instance of freeclimb.MessageResult", async () => {
      const messageId = parameters.getAnSmsMessage.messageId;

      let response = await apiInstance.getAnSmsMessage(messageId);

      expect(response).toBeInstanceOf(freeclimb.MessageResult);
    });
  });
  describe("#getTenDLCSmsCampaigns", () => {
    test("returns an instance of freeclimb.SMSTenDLCCampaignsListResult", async () => {
      const brandId = parameters.getTenDLCSmsCampaigns.brandId;

      let response = await apiInstance.getTenDLCSmsCampaigns(brandId);

      expect(response).toBeInstanceOf(freeclimb.SMSTenDLCCampaignsListResult);
    });
  });
  describe("#getTenDLCSmsCampaign", () => {
    test("returns an instance of freeclimb.SMSTenDLCCampaign", async () => {
      const campaignId = parameters.getTenDLCSmsCampaign.campaignId;

      let response = await apiInstance.getTenDLCSmsCampaign(campaignId);

      expect(response).toBeInstanceOf(freeclimb.SMSTenDLCCampaign);
    });
  });
  describe("#getTenDLCSmsPartnerCampaigns", () => {
    test("returns an instance of freeclimb.SMSTenDLCPartnerCampaignsListResult", async () => {
      const brandId = parameters.getTenDLCSmsPartnerCampaigns.brandId;

      let response = await apiInstance.getTenDLCSmsPartnerCampaigns(brandId);

      expect(response).toBeInstanceOf(
        freeclimb.SMSTenDLCPartnerCampaignsListResult,
      );
    });
  });
  describe("#getTenDLCSmsPartnerCampaign", () => {
    test("returns an instance of freeclimb.SMSTenDLCPartnerCampaign", async () => {
      const campaignId = parameters.getTenDLCSmsPartnerCampaign.campaignId;

      let response = await apiInstance.getTenDLCSmsPartnerCampaign(campaignId);

      expect(response).toBeInstanceOf(freeclimb.SMSTenDLCPartnerCampaign);
    });
  });
  describe("#getTenDLCSmsBrands", () => {
    test("returns an instance of freeclimb.SMSTenDLCBrandsListResult", async () => {
      let response = await apiInstance.getTenDLCSmsBrands();

      expect(response).toBeInstanceOf(freeclimb.SMSTenDLCBrandsListResult);
    });
  });
  describe("#getTenDLCSmsBrand", () => {
    test("returns an instance of freeclimb.SMSTenDLCBrand", async () => {
      const brandId = parameters.getTenDLCSmsBrand.brandId;

      let response = await apiInstance.getTenDLCSmsBrand(brandId);

      expect(response).toBeInstanceOf(freeclimb.SMSTenDLCBrand);
    });
  });
  describe("#getTollFreeSmsCampaigns", () => {
    test("returns an instance of freeclimb.SMSTollFreeCampaignsListResult", async () => {
      let response = await apiInstance.getTollFreeSmsCampaigns();

      expect(response).toBeInstanceOf(freeclimb.SMSTollFreeCampaignsListResult);
    });
  });
  describe("#getTollFreeSmsCampaign", () => {
    test("returns an instance of freeclimb.SMSTollFreeCampaign", async () => {
      const campaignId = parameters.getTollFreeSmsCampaign.campaignId;

      let response = await apiInstance.getTollFreeSmsCampaign(campaignId);

      expect(response).toBeInstanceOf(freeclimb.SMSTollFreeCampaign);
    });
  });
  describe("#listExports", () => {
    test("returns an instance of freeclimb.ExportList", async () => {
      const status = parameters.listExports.status;
      const cursor = parameters.listExports.cursor;

      let response = await apiInstance.listExports(status, cursor);

      expect(response).toBeInstanceOf(freeclimb.ExportList);
    });
  });
  describe("#createExport", () => {
    test("returns an instance of freeclimb.ExportResult", async () => {
      let body = requestBody.createExport;

      let response = await apiInstance.createExport(body);

      expect(response).toBeInstanceOf(freeclimb.ExportResult);
    });
  });
  describe("#getAnExport", () => {
    test("returns an instance of freeclimb.ExportResult", async () => {
      const exportId = parameters.getAnExport.exportId;

      let response = await apiInstance.getAnExport(exportId);

      expect(response).toBeInstanceOf(freeclimb.ExportResult);
    });
  });
  describe("#downloadAnExport", () => {
    test("returns an instance of string", async () => {
      const exportId = parameters.downloadAnExport.exportId;

      let response = await apiInstance.downloadAnExport(exportId);

      expect(typeof response).toBe("string");
    });
  });
});
