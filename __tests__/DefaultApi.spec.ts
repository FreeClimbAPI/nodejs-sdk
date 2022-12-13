import { describe, expect, test } from "@jest/globals";
import * as freeclimb  from '../index'
import { AccountRequest, AccountResult, ApplicationList, ApplicationRequest, ApplicationResult, AvailableNumberList, BuyIncomingNumberRequest, CallList, CallResult, ConferenceList, ConferenceParticipantList, ConferenceParticipantResult, ConferenceResult, CreateConferenceRequest, FilterLogsRequest, IncomingNumberList, IncomingNumberRequest, IncomingNumberResult, LogList, MessageResult, MessagesList, QueueList, QueueMember, QueueMemberList, QueueRequest, QueueResult, RecordingList, RecordingResult, ServerConfiguration, UpdateCallRequest, UpdateConferenceRequest } from "../index";
import {AccountStatus, AccountType, CallStatus, MessageDirection, PlayBeep, UpdateCallRequestStatus, UpdateConferenceRequestStatus   } from "../models/all";

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
        const request:BuyIncomingNumberRequest = {
            phoneNumber: "phoneNumber_example",
        }
        return apiInstance.buyAPhoneNumber(request).then((data) => expect(data).toBeInstanceOf(IncomingNumberResult))
    });

    test('#createAConference', async () => {
        expect.assertions(1);
        const request:CreateConferenceRequest = {
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
        const request: ApplicationRequest = {
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
        const request: ApplicationRequest = {
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
        const request: string = "recordingId_example"
        return apiInstance.deleteARecording(request)
    });

    test('#deleteAnApplication', async () => {
        const applicationID =  "applicationId_example"
        return apiInstance.deleteAnApplication(applicationID)
    });


    test('#deleteAnIncomingNumber', async () => {
        const phoneNumberId =  "applicationId_example"
        return apiInstance.deleteAnIncomingNumber(phoneNumberId)
    });

    test('#dequeueAMember', async () => {
        const queueId = "queueId_example"
        const callId = "callId_example"
        return apiInstance.dequeueAMember(queueId, callId).then((data) => expect(data).toBeInstanceOf(QueueMember))
    });

    test('#dequeueHeadMember', async () => {
        const queueId = "queueId_example"
        return apiInstance.dequeueHeadMember(queueId).then((data) => expect(data).toBeInstanceOf(QueueMember))
    });

    test('#downloadARecordingFile', async () => {
        const recordingId = "recordingId_example"
        return apiInstance.downloadARecordingFile(recordingId).then((httpFile) => {
            expect(httpFile.data).toBeInstanceOf(Buffer)
            expect(typeof httpFile.name).toBe("string")
        })
    });

    test('#filterLogs', async () => {
        const request: FilterLogsRequest = {
            pql: "pql_example",
        }
        return apiInstance.filterLogs(request).then((data) => expect(data).toBeInstanceOf(LogList))
    });

    test('#getACall', async () => {
        const callId = "callId_example"
        return apiInstance.getACall(callId).then((data) => expect(data).toBeInstanceOf(CallResult))
    });

    test('#getAConference', async () => {
        const conferenceId = "conferenceId_example"
        return apiInstance.getAConference(conferenceId).then((data) => expect(data).toBeInstanceOf(ConferenceResult))
    });

    test('#getAMember', async () => {
        const queueId = "queueId_example"
        const callId = "callId_example"
        return apiInstance.getAMember(queueId, callId).then((data) => expect(data).toBeInstanceOf(QueueMember))
    });

    test('#getAParticipant', async () => {
        const conferenceId = "conferenceId_example"
        const callId = "callId_example"
        return apiInstance.getAParticipant(conferenceId, callId).then((data) => expect(data).toBeInstanceOf(ConferenceParticipantResult))
    });

    test('#getAQueue', async () => {
        const queueId = "queueId_example"
        return apiInstance.getAQueue(queueId).then((data) => expect(data).toBeInstanceOf(QueueResult))
    });


    test('#getARecording', async () => {
        const recordingId = "recordingId_example"
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
        const applicationId = "applicationId_example"
        return apiInstance.getAnApplication(applicationId).then((data) => expect(data).toBeInstanceOf(ApplicationResult))
    });

    test('#getAnIncomingNumber', async () => {
        const phoneNumberId = "phoneNumberId_example"
        return apiInstance.getAnIncomingNumber(phoneNumberId).then((data) => expect(data).toBeInstanceOf(IncomingNumberResult))
    });

    test('#getAnIncomingNumber', async () => {
        const phoneNumberId = "phoneNumberId_example"
        return apiInstance.getAnIncomingNumber(phoneNumberId).then((data) => expect(data).toBeInstanceOf(IncomingNumberResult))
    });

    test('#getAnSmsMessage', async () => {
        const messageId = "messageId_example"
        return apiInstance.getAnSmsMessage(messageId).then((data) => expect(data).toBeInstanceOf(MessageResult))
    });

    test('#getHeadMember', async () => {
        const queueId = "queueId_example"
        return apiInstance.getHeadMember(queueId).then((data) => expect(data).toBeInstanceOf(QueueMember))
    });

    test('#listActiveQueues', async () => {
        const alias = "alias_example"
        return apiInstance.listActiveQueues(alias).then((data) => expect(data).toBeInstanceOf(QueueList))
    });

    test('#listAllAccountLogs', async () => {
        return apiInstance.listAllAccountLogs().then((data) => expect(data).toBeInstanceOf(LogList))
    });

    test('#listApplications', async () => {
        const alias = "alias_example"
        return apiInstance.listApplications(alias).then((data) => expect(data).toBeInstanceOf(ApplicationList))
    });

    test('#listAvailableNumbers', async () => {
        const phoneNumber = "phoneNumber_example"
        const region = "region_example"
        const country = "country_example"
        const voiceEnabled = true
        const smsEnabled = true
        const capabilitiesVoice = true
        const capabilitiesSms = true
        const capabilitiesTollFree = true
        const capabilitiesTenDLC = true
        const capabilitiesShortCode = true
        return apiInstance.listAvailableNumbers(phoneNumber,region, country,voiceEnabled, smsEnabled, capabilitiesVoice, capabilitiesSms, capabilitiesTollFree, capabilitiesTenDLC, capabilitiesShortCode  ).then((data) => expect(data).toBeInstanceOf(AvailableNumberList))
    });

    test('#listCallLogs', async () => {
        const callId = "callId_example"
        return apiInstance.listCallLogs(callId).then((data) => expect(data).toBeInstanceOf(LogList))
    });

    test('#listCallRecordings', async () => {
        const callId = "callId_example"
        const dateCreated = "dateCreated_example"
        return apiInstance.listCallRecordings(callId, dateCreated).then((data) => expect(data).toBeInstanceOf(RecordingList))
    });

    test('#listCalls', async () => {
        const active = false
        const to = "to_example"
        const from = "from_example"
        const status = CallStatus.QUEUED
        const startTime = "startTime_example"
        const endTime = "endTime_example"
        const parentCallId = "parentCallId_example"
        return apiInstance.listCalls(active, to, from, status, startTime, endTime, parentCallId).then((data) => expect(data).toBeInstanceOf(CallList))
    });

    test('#listConferences', async () => {
        const status = "status_example"
        const alias = "to_example"
        const dateCreated = "from_example"
        const dateUpdated = CallStatus.QUEUED
        return apiInstance.listConferences(status, alias, dateCreated, dateUpdated).then((data) => expect(data).toBeInstanceOf(ConferenceList))
    });

    test('#listIncomingNumbers', async () => {
        const phoneNumber = "phoneNumber_example"
        const alias = "alias_example"
        const region = "region_example"
        const country = "country_example"
        const applicationId = "applicationId_example"
        const hasApplication = false
        const voiceEnabled = true
        const smsEnabled = true
        const capabilitiesVoice = true
        const capabilitiesSms = true
        const capabilitiesTollFree = true
        const capabilitiesTenDLC = true
        const capabilitiesShortCode = true
        return apiInstance.listIncomingNumbers(phoneNumber, alias, region, country, applicationId, hasApplication, voiceEnabled, smsEnabled, capabilitiesVoice, capabilitiesSms, capabilitiesTollFree, capabilitiesTenDLC, capabilitiesShortCode).then((data) => expect(data).toBeInstanceOf(IncomingNumberList))
    });

    test('#listIncomingNumbers', async () => {
        const phoneNumber = "phoneNumber_example"
        const alias = "alias_example"
        const region = "region_example"
        const country = "country_example"
        const applicationId = "applicationId_example"
        const hasApplication = false
        const voiceEnabled = true
        const smsEnabled = true
        const capabilitiesVoice = true
        const capabilitiesSms = true
        const capabilitiesTollFree = true
        const capabilitiesTenDLC = true
        const capabilitiesShortCode = true
        return apiInstance.listIncomingNumbers(phoneNumber, alias, region, country, applicationId, hasApplication, voiceEnabled, smsEnabled, capabilitiesVoice, capabilitiesSms, capabilitiesTollFree, capabilitiesTenDLC, capabilitiesShortCode).then((data) => expect(data).toBeInstanceOf(IncomingNumberList))
    });

    test('#listMembers', async () => {
        const queueId = "queueId_example"
        return apiInstance.listMembers(queueId).then((data) => expect(data).toBeInstanceOf(QueueMemberList))
    });

    test('#listParticipants', async () => {
        const conferenceId = "conferenceId_example"
        const talk = true
        const listen = true
        return apiInstance.listParticipants(conferenceId, talk, listen ).then((data) => expect(data).toBeInstanceOf(ConferenceParticipantList))
    });

    test('#listRecordings', async () => {
        const callId = "conferenceId_example"
        const conferenceId = "conferenceId_example"
        const dateCreated = "conferenceId_example"
        return apiInstance.listRecordings(callId, conferenceId, dateCreated ).then((data) => expect(data).toBeInstanceOf(RecordingList))
    });

    test('#listSmsMessages', async () => {
        const to = "to_example"
        const _from = "from_example"
        const beginTime = "beginTime_example"
        const endTime = "endTime_example"
        const direction = MessageDirection.INBOUND
        return apiInstance.listSmsMessages(to, _from, beginTime, endTime, direction).then((data) => expect(data).toBeInstanceOf(MessagesList))
    }); 

    test('#makeACall', async () => {
        const request =  {
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
        const callId = "conferenceId_example"
        const conferenceId = "conferenceId_example"
        return apiInstance.removeAParticipant(conferenceId, callId)
    });


    test('#sendAnSmsMessage', async () => {
        const request = {
            _from: "_from_example",
            to: "to_example",
            text: "Example Text"
        }
        return apiInstance.sendAnSmsMessage(request).then((data) => expect(data).toBeInstanceOf(MessageResult))
    });

    test('#streamARecordingFile', async () => {
        const recordingId = "recordingId_example"
        return apiInstance.streamARecordingFile(recordingId).then((httpFile) => {
            expect(httpFile.data).toBeInstanceOf(Buffer)
            expect(typeof httpFile.name).toBe("string")
        })
    });

    test('#updateAConference', async () => {
        const conferenceId = "conferenceId_example"
        const request: UpdateConferenceRequest = {
              alias: "alias_example",
              playBeep: PlayBeep.ALWAYS,
              status: UpdateConferenceRequestStatus.EMPTY,
        }
        return apiInstance.updateAConference(conferenceId, request).then((data) => expect(data).toBeInstanceOf(ConferenceResult))
    });

    test('#updateALiveCall', async () => {
        const callId = "callId_example"
        const request: UpdateCallRequest = {
              status: UpdateCallRequestStatus.CANCELED,
        }
        return apiInstance.updateALiveCall(callId, request)
    });

    test('#updateAParticipant', async () => {
        const callId = "callId_example"
        const conferenceId = "conferenceId_example"
        return apiInstance.updateAParticipant(callId, conferenceId).then((data) => expect(data).toBeInstanceOf(ConferenceParticipantResult))
    });

    test('#updateAQueue', async () => {
        const queueId = "queueId_example"
        const queueRequest: QueueRequest  =  {
            alias: "alias_example",
            maxSize: 100,
        }
        return apiInstance.updateAQueue(queueId, queueRequest).then((data) => expect(data).toBeInstanceOf(QueueResult))
    });

    test('#updateAnAccount', async () => {
        const accountRequest: AccountRequest  =  {
            alias: "alias_example",
            label: "label_example",
        }
        return apiInstance.updateAnAccount(accountRequest)
    });

    test('#updateAnApplication', async () => {
        const accountRequest: AccountRequest  =  {
            alias: "alias_example",
            label: "label_example",
        }
        return apiInstance.updateAnAccount(accountRequest)
    });

    test('#updateAnIncomingNumber', async () => {
        const phoneNumberId = "phoneNumberId_example";
        const incomingNumberRequest: IncomingNumberRequest  =  {
            applicationId: "applicationId_example",
            alias: "alias_example",
        }
        return apiInstance.updateAnIncomingNumber(phoneNumberId, incomingNumberRequest).then((data) => expect(data).toBeInstanceOf(IncomingNumberResult))
    });

})

