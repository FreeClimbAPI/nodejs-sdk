import { describe, expect, test } from "@jest/globals";
import * as freeclimb from '../index'
import { AccountRequest, AccountResult, ApplicationList, ApplicationRequest, ApplicationResult, AvailableNumberList, BuyIncomingNumberRequest, CallList, CallResult, ConferenceList, ConferenceParticipantList, ConferenceParticipantResult, ConferenceResult, CreateConferenceRequest, FilterLogsRequest, IncomingNumberList, IncomingNumberRequest, IncomingNumberResult, LogList, MessageResult, MessagesList, QueueList, QueueMember, QueueMemberList, QueueRequest, QueueResult, RecordingList, RecordingResult, ServerConfiguration, UpdateCallRequest, UpdateConferenceRequest } from "../index";
import { AccountStatus } from "../models/AccountStatus";
import { AccountType } from "../models/AccountType";
import { CallStatus } from "../models/CallStatus";
import { MessageDirection } from "../models/MessageDirection";
import { PlayBeep } from "../models/PlayBeep";
import { UpdateCallRequestStatus } from "../models/UpdateCallRequestStatus";
import { UpdateConferenceRequestStatus } from "../models/UpdateConferenceRequestStatus";
import { DefaultApiDeleteARecordingRequest, DefaultApiListAvailableNumbersRequest, DefaultApiMakeACallRequest, DefaultApiUpdateALiveCallRequest } from "../types/ObjectParamAPI";

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
    test('#downloadARecordingFile', async () => {
        var recordingId = "recordingId_example"
        return apiInstance.downloadARecordingFile(recordingId).then((data) => expect(data).toBeInstanceOf(QueueMember))
    });

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

    test('#listIncomingNumbers', async () => {
        var phoneNumber = "phoneNumber_example"
        var alias = "alias_example"
        var region = "region_example"
        var country = "country_example"
        var applicationId = "applicationId_example"
        var hasApplication = false
        var voiceEnabled = true
        var smsEnabled = true
        var capabilitiesVoice = true
        var capabilitiesSms = true
        var capabilitiesTollFree = true
        var capabilitiesTenDLC = true
        var capabilitiesShortCode = true
        return apiInstance.listIncomingNumbers(phoneNumber, alias, region, country, applicationId, hasApplication, voiceEnabled, smsEnabled, capabilitiesVoice, capabilitiesSms, capabilitiesTollFree, capabilitiesTenDLC, capabilitiesShortCode).then((data) => expect(data).toBeInstanceOf(IncomingNumberList))
    });

    test('#listIncomingNumbers', async () => {
        var phoneNumber = "phoneNumber_example"
        var alias = "alias_example"
        var region = "region_example"
        var country = "country_example"
        var applicationId = "applicationId_example"
        var hasApplication = false
        var voiceEnabled = true
        var smsEnabled = true
        var capabilitiesVoice = true
        var capabilitiesSms = true
        var capabilitiesTollFree = true
        var capabilitiesTenDLC = true
        var capabilitiesShortCode = true
        return apiInstance.listIncomingNumbers(phoneNumber, alias, region, country, applicationId, hasApplication, voiceEnabled, smsEnabled, capabilitiesVoice, capabilitiesSms, capabilitiesTollFree, capabilitiesTenDLC, capabilitiesShortCode).then((data) => expect(data).toBeInstanceOf(IncomingNumberList))
    });

    test('#listMembers', async () => {
        var queueId = "queueId_example"
        return apiInstance.listMembers(queueId).then((data) => expect(data).toBeInstanceOf(QueueMemberList))
    });

    test('#listParticipants', async () => {
        var conferenceId = "conferenceId_example"
        var talk = true
        var listen = true
        return apiInstance.listParticipants(conferenceId, talk, listen ).then((data) => expect(data).toBeInstanceOf(ConferenceParticipantList))
    });

    test('#listRecordings', async () => {
        var callId = "conferenceId_example"
        var conferenceId = "conferenceId_example"
        var dateCreated = "conferenceId_example"
        return apiInstance.listRecordings(callId, conferenceId, dateCreated ).then((data) => expect(data).toBeInstanceOf(RecordingList))
    });

    test('#listSmsMessages', async () => {
        var to = "to_example"
        var _from = "from_example"
        var beginTime = "beginTime_example"
        var endTime = "endTime_example"
        var direction = MessageDirection.INBOUND
        return apiInstance.listSmsMessages(to, _from, beginTime, endTime, direction).then((data) => expect(data).toBeInstanceOf(MessagesList))
    }); 

    test('#makeACall', async () => {
        var request =  {
            _from: "_from_example",
            to: "to_example",
            applicationId: "applicationId_example",
            sendDigits: "sendDigits_example",
            ifMachine: "ifMachine_example",
            ifMachineUrl: "ifMachineUrl_example",
            timeout: 30,
            parentCallId: "parentCallId_example",
            privacyMode: true,
            callConnectUrl: "callConnectUrl_example",
        }
        return apiInstance.makeACall(request).then((data) => expect(data).toBeInstanceOf(CallResult))
    }); 

    test('#removeAParticipant', async () => {
        var callId = "conferenceId_example"
        var conferenceId = "conferenceId_example"
        return apiInstance.removeAParticipant(conferenceId, callId)
    });


    test('#sendAnSmsMessage', async () => {
        var request = {
            _from: "_from_example",
            to: "to_example",
            text: "Example Text"
        }
        return apiInstance.sendAnSmsMessage(request).then((data) => expect(data).toBeInstanceOf(MessageResult))
    });

    //Error on this test due to not being able to find an assertion for httpFile being returned
    test('#streamARecordingFile', async () => {
        var recordingId = "recordingId_example"
        return apiInstance.streamARecordingFile(recordingId).then((data) => expect(data).toBeInstanceOf(MessageResult))
    });

    test('#updateAConference', async () => {
        var conferenceId = "conferenceId_example"
        var request: UpdateConferenceRequest = {
              alias: "alias_example",
              playBeep: PlayBeep.ALWAYS,
              status: UpdateConferenceRequestStatus.EMPTY,
        }
        return apiInstance.updateAConference(conferenceId, request).then((data) => expect(data).toBeInstanceOf(ConferenceResult))
    });

    test('#updateALiveCall', async () => {
        var callId = "callId_example"
        var request: UpdateCallRequest = {
              status: UpdateCallRequestStatus.CANCELED,
        }
        return apiInstance.updateALiveCall(callId, request)
    });

    test('#updateAParticipant', async () => {
        var callId = "callId_example"
        var conferenceId = "conferenceId_example"
        return apiInstance.updateAParticipant(callId, conferenceId).then((data) => expect(data).toBeInstanceOf(ConferenceParticipantResult))
    });

    test('#updateAQueue', async () => {
        var queueId = "queueId_example"
        var queueRequest: QueueRequest  =  {
            alias: "alias_example",
            maxSize: 100,
        }
        return apiInstance.updateAQueue(queueId, queueRequest).then((data) => expect(data).toBeInstanceOf(QueueResult))
    });

    test('#updateAnAccount', async () => {
        var accountRequest: AccountRequest  =  {
            alias: "alias_example",
            label: "label_example",
        }
        return apiInstance.updateAnAccount(accountRequest)
    });

    test('#updateAnApplication', async () => {
        var accountRequest: AccountRequest  =  {
            alias: "alias_example",
            label: "label_example",
        }
        return apiInstance.updateAnAccount(accountRequest)
    });

    test('#updateAnIncomingNumber', async () => {
        var phoneNumberId = "phoneNumberId_example";
        var incomingNumberRequest: IncomingNumberRequest  =  {
            applicationId: "applicationId_example",
            alias: "alias_example",
        }
        return apiInstance.updateAnIncomingNumber(phoneNumberId, incomingNumberRequest).then((data) => expect(data).toBeInstanceOf(IncomingNumberResult))
    });

})

