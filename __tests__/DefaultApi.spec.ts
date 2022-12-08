import { describe, expect, test } from "@jest/globals";
import * as freeclimb from '../index'
import { AccountResult, ApplicationList, ApplicationRequest, ApplicationResult, AvailableNumberList, BuyIncomingNumberRequest, CallList, CallResult, ConferenceList, ConferenceParticipantResult, ConferenceResult, CreateConferenceRequest, FilterLogsRequest, IncomingNumberResult, LogList, MessageResult, QueueList, QueueMember, QueueRequest, QueueResult, RecordingList, RecordingResult, ServerConfiguration, UpdateCallRequest } from "../index";
import { AccountStatus } from "../models/AccountStatus";
import { AccountType } from "../models/AccountType";
import { CallStatus } from "../models/CallStatus";
import { PlayBeep } from "../models/PlayBeep";
import { UpdateCallRequestStatus } from "../models/UpdateCallRequestStatus";
import { DefaultApiDeleteARecordingRequest, DefaultApiListAvailableNumbersRequest, DefaultApiUpdateALiveCallRequest } from "../types/ObjectParamAPI";

describe('DefaultAPI', () => {
    
    let apiInstance: freeclimb.DefaultApi
    beforeAll(() => {
        const configuration = freeclimb.createConfiguration({
            baseServer: new ServerConfiguration<{  }>("http://127.0.0.1:4010", {  }),
            accountId: 'YOUR_ACCOUNT_ID',
            apiKey: 'YOUR_API_KEY'
        });
        apiInstance = new freeclimb.DefaultApi(configuration);
    });

    test('#buyAPhoneNumber', async () => {
        expect.assertions(1);
        var request:BuyIncomingNumberRequest = {
            phoneNumber: "phoneNumber_example",
        }
        return apiInstance.buyAPhoneNumber(request).then((data) => expect(data).toBeInstanceOf(IncomingNumberResult))
    });

    test('#createAConference', async () => {
        expect.assertions(1);
        var request:CreateConferenceRequest = {
            alias: "alias_example",
            playBeep: PlayBeep.ALWAYS,
            record: true,
            waitUrl: "waitUrl_example",
            statusCallbackUrl: "statusCallbackUrl_example",
        }
        return apiInstance.createAConference(request).then((data) => expect(data).toBeInstanceOf(ConferenceResult))
    });

    test('#createAQueue', async () => {
        expect.assertions(1);
        var request: QueueRequest = {
            alias: "alias_example",
            maxSize: 100,
        }
        return apiInstance.createAQueue(request).then((data) => expect(data).toBeInstanceOf(QueueResult))
    });

    test('#createAnApplication', async () => {
        expect.assertions(1);
        var request: ApplicationRequest = {
            alias: "alias_example",
            voiceUrl: "voiceUrl_example",
            voiceFallbackUrl: "voiceFallbackUrl_example",
            callConnectUrl: "callConnectUrl_example",
            statusCallbackUrl: "statusCallbackUrl_example",
            smsUrl: "smsUrl_example",
            smsFallbackUrl: "smsFallbackUrl_example",
        }
        return apiInstance.createAnApplication(request).then((data) => expect(data).toBeInstanceOf(ApplicationResult))
    });

    test('#createAnApplication', async () => {
        expect.assertions(1);
        var request: ApplicationRequest = {
            alias: "alias_example",
            voiceUrl: "voiceUrl_example",
            voiceFallbackUrl: "voiceFallbackUrl_example",
            callConnectUrl: "callConnectUrl_example",
            statusCallbackUrl: "statusCallbackUrl_example",
            smsUrl: "smsUrl_example",
            smsFallbackUrl: "smsFallbackUrl_example",
        }
        return apiInstance.createAnApplication(request).then((data) => expect(data).toBeInstanceOf(ApplicationResult))
    });

    test('#deleteARecording', async () => {
        var request: string = "recordingId_example"
        return apiInstance.deleteARecording(request)
    });

    test('#deleteAnApplication', async () => {
        var applicationID =  "applicationId_example"
        return apiInstance.deleteAnApplication(applicationID)
    });


    test('#deleteAnIncomingNumber', async () => {
        var phoneNumberId =  "applicationId_example"
        return apiInstance.deleteAnIncomingNumber(phoneNumberId)
    });

    test('#dequeueAMember', async () => {
        var queueId = "queueId_example"
        var callId = "callId_example"
        return apiInstance.dequeueAMember(queueId, callId).then((data) => expect(data).toBeInstanceOf(QueueMember))
    });

    test('#dequeueHeadMember', async () => {
        var queueId = "queueId_example"
        return apiInstance.dequeueHeadMember(queueId).then((data) => expect(data).toBeInstanceOf(QueueMember))
    });

    //Error on this test due to not being able to find an assertion for httpFile being returned
    // test('#downloadARecordingFile', async () => {
    //     var recordingId = "recordingId_example"
    //     return apiInstance.downloadARecordingFile(recordingId).then((data) => expect(data).toBeInstanceOf(HttpFile))
    // });

    test('#filterLogs', async () => {
        var request: FilterLogsRequest = {
            pql: "pql_example",
        }
        return apiInstance.filterLogs(request).then((data) => expect(data).toBeInstanceOf(LogList))
    });

    test('#getACall', async () => {
        var callId = "callId_example"
        return apiInstance.getACall(callId).then((data) => expect(data).toBeInstanceOf(CallResult))
    });

    test('#getAConference', async () => {
        var conferenceId = "conferenceId_example"
        return apiInstance.getAConference(conferenceId).then((data) => expect(data).toBeInstanceOf(ConferenceResult))
    });

    test('#getAMember', async () => {
        var queueId = "queueId_example"
        var callId = "callId_example"
        return apiInstance.getAMember(queueId, callId).then((data) => expect(data).toBeInstanceOf(QueueMember))
    });

    test('#getAParticipant', async () => {
        var conferenceId = "conferenceId_example"
        var callId = "callId_example"
        return apiInstance.getAParticipant(conferenceId, callId).then((data) => expect(data).toBeInstanceOf(ConferenceParticipantResult))
    });

    test('#getAQueue', async () => {
        var queueId = "queueId_example"
        return apiInstance.getAQueue(queueId).then((data) => expect(data).toBeInstanceOf(QueueResult))
    });


    test('#getARecording', async () => {
        var recordingId = "recordingId_example"
        return apiInstance.getARecording(recordingId).then((data) => expect(data).toBeInstanceOf(RecordingResult))
    });

    test('#getAnAccount', async () => {
        return apiInstance.getAnAccount().then((data:AccountResult) => {
            expect(data).toBeInstanceOf(AccountResult)
            expect(data.status).toBe(AccountStatus.CLOSED)
            expect(data.type).toBe(AccountType.TRIAL)
        })
    });

    test('#getAnApplication', async () => {
        var applicationId = "applicationId_example"
        return apiInstance.getAnApplication(applicationId).then((data) => expect(data).toBeInstanceOf(ApplicationResult))
    });

    test('#getAnIncomingNumber', async () => {
        var phoneNumberId = "phoneNumberId_example"
        return apiInstance.getAnIncomingNumber(phoneNumberId).then((data) => expect(data).toBeInstanceOf(IncomingNumberResult))
    });

    test('#getAnIncomingNumber', async () => {
        var phoneNumberId = "phoneNumberId_example"
        return apiInstance.getAnIncomingNumber(phoneNumberId).then((data) => expect(data).toBeInstanceOf(IncomingNumberResult))
    });

    test('#getAnSmsMessage', async () => {
        var messageId = "messageId_example"
        return apiInstance.getAnSmsMessage(messageId).then((data) => expect(data).toBeInstanceOf(MessageResult))
    });

    test('#getHeadMember', async () => {
        var queueId = "queueId_example"
        return apiInstance.getHeadMember(queueId).then((data) => expect(data).toBeInstanceOf(QueueMember))
    });

    test('#listActiveQueues', async () => {
        var alias = "alias_example"
        return apiInstance.listActiveQueues(alias).then((data) => expect(data).toBeInstanceOf(QueueList))
    });

    test('#listAllAccountLogs', async () => {
        return apiInstance.listAllAccountLogs().then((data) => expect(data).toBeInstanceOf(LogList))
    });

    test('#listApplications', async () => {
        var alias = "alias_example"
        return apiInstance.listApplications(alias).then((data) => expect(data).toBeInstanceOf(ApplicationList))
    });

    test('#listAvailableNumbers', async () => {
        var phoneNumber = "phoneNumber_example"
        var region = "region_example"
        var country = "country_example"
        var voiceEnabled = true
        var smsEnabled = true
        var capabilitiesVoice = true
        var capabilitiesSms = true
        var capabilitiesTollFree = true
        var capabilitiesTenDLC = true
        var capabilitiesShortCode = true
        return apiInstance.listAvailableNumbers(phoneNumber,region, country,voiceEnabled, smsEnabled, capabilitiesVoice, capabilitiesSms, capabilitiesTollFree, capabilitiesTenDLC, capabilitiesShortCode  ).then((data) => expect(data).toBeInstanceOf(AvailableNumberList))
    });

    test('#listCallLogs', async () => {
        var callId = "callId_example"
        return apiInstance.listCallLogs(callId).then((data) => expect(data).toBeInstanceOf(LogList))
    });

    test('#listCallRecordings', async () => {
        var callId = "callId_example"
        var dateCreated = "dateCreated_example"
        return apiInstance.listCallRecordings(callId, dateCreated).then((data) => expect(data).toBeInstanceOf(RecordingList))
    });

    test('#listCalls', async () => {
        var active = false
        var to = "to_example"
        var from = "from_example"
        var status = CallStatus.QUEUED
        var startTime = "startTime_example"
        var endTime = "endTime_example"
        var parentCallId = "parentCallId_example"
        return apiInstance.listCalls(active, to, from, status, startTime, endTime, parentCallId).then((data) => expect(data).toBeInstanceOf(CallList))
    });

    test('#listConferences', async () => {
        var status = "status_example"
        var alias = "to_example"
        var dateCreated = "from_example"
        var dateUpdated = CallStatus.QUEUED
        return apiInstance.listConferences(status, alias, dateCreated, dateUpdated).then((data) => expect(data).toBeInstanceOf(ConferenceList))
    });

})

