import { describe, expect, test, beforeAll } from "@jest/globals";
import * as freeclimb  from '../index'
import * as DefaultApi from '../apis/DefaultApi'
import { AccountRequest, AccountResult, ApplicationList, ApplicationRequest, ApplicationResult, AvailableNumberList, BuyIncomingNumberRequest, CallList, CallResult, ConferenceList, ConferenceParticipantList, ConferenceParticipantResult, ConferenceResult, CreateConferenceRequest, FilterLogsRequest, IncomingNumberList, IncomingNumberRequest, IncomingNumberResult, LogList, MessageResult, MessagesList, QueueList, QueueMember, QueueMemberList, QueueRequest, QueueResult, RecordingList, RecordingResult, ServerConfiguration, UpdateCallRequest, UpdateConferenceRequest } from "../index";
import {AccountStatus, AccountType, CallStatus, MessageDirection, PlayBeep, SMSTenDLCBrandsListResult, UpdateCallRequestStatus, UpdateConferenceRequestStatus, SMSTenDLCCampaignsListResult, SMSTenDLCPartnerCampaignsListResult, SMSTenDLCBrand, SMSTenDLCCampaign, SMSTollFreeCampaignsListResult} from "../models/all";

describe('DefaultAPI', () => {
    
    let apiInstance: freeclimb.DefaultApi
    const accountId = 'YOUR_ACCOUNT_ID'
    beforeAll(() => {
        const configuration = freeclimb.createConfiguration({
            baseServer: new ServerConfiguration<{  }>("http://127.0.0.1:4010", {  }),
            accountId: accountId,
            apiKey: 'YOUR_API_KEY'
        });
        apiInstance = new freeclimb.DefaultApi(configuration);
    });

    test('#buyAPhoneNumber', async () => {
        expect.assertions(1);
        const request:BuyIncomingNumberRequest = {
            phoneNumber: "phoneNumber_example",
        }
        let data = await apiInstance.buyAPhoneNumber(request)
        expect(data).toBeInstanceOf(IncomingNumberResult)
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
        let data = await apiInstance.createAConference(request)
        expect(data).toBeInstanceOf(ConferenceResult)
    });

    test('#createAQueue', async () => {
        expect.assertions(1);
        var request: QueueRequest = {
            alias: "alias_example",
            maxSize: 100,
        }
        let data = await apiInstance.createAQueue(request)
        expect(data).toBeInstanceOf(QueueResult)
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
        let data = await apiInstance.createAnApplication(request)
        expect(data).toBeInstanceOf(ApplicationResult)
    });

    test('#deleteARecording', async () => {
        const request: string = "recordingId_example"
        let data = await apiInstance.deleteARecording(request)
        expect(data).toBe(undefined)
    });

    test('#deleteAnApplication', async () => {
        const applicationID =  "applicationId_example"
        let data = await apiInstance.deleteAnApplication(applicationID)
        expect(data).toBe(undefined)
    });


    test('#deleteAnIncomingNumber', async () => {
        const phoneNumberId =  "applicationId_example"
        let data = await apiInstance.deleteAnIncomingNumber(phoneNumberId)
        expect(data).toBe(undefined)
    });

    test('#dequeueAMember', async () => {
        const queueId = "queueId_example"
        const callId = "callId_example"
        let data = await apiInstance.dequeueAMember(queueId, callId)
        expect(data).toBeInstanceOf(QueueMember)
    });

    test('#dequeueHeadMember', async () => {
        const queueId = "queueId_example"
        let data = await apiInstance.dequeueHeadMember(queueId)
        expect(data).toBeInstanceOf(QueueMember)
    });

    test('#downloadARecordingFile', async () => {
        const recordingId = "recordingId_example"
        let httpFile = await apiInstance.downloadARecordingFile(recordingId)
        expect(httpFile.data).toBeInstanceOf(Buffer)
        expect(typeof httpFile.name).toBe("string")
    });

    test('#filterLogs', async () => {
        const request: FilterLogsRequest = {
            pql: "pql_example",
        }
        let data = await apiInstance.filterLogs(request)
        expect(data).toBeInstanceOf(LogList)
    });

    test('#getACall', async () => {
        const callId = "callId_example"
        let data = await apiInstance.getACall(callId)
        expect(data).toBeInstanceOf(CallResult)
    });

    test('#getAConference', async () => {
        const conferenceId = "conferenceId_example"
        let data = await apiInstance.getAConference(conferenceId)
        expect(data).toBeInstanceOf(ConferenceResult)
    });

    test('#getAMember', async () => {
        const queueId = "queueId_example"
        const callId = "callId_example"
        let data = await apiInstance.getAMember(queueId, callId)
        expect(data).toBeInstanceOf(QueueMember)
    });

    test('#getAParticipant', async () => {
        const conferenceId = "conferenceId_example"
        const callId = "callId_example"
        let data = await apiInstance.getAParticipant(conferenceId, callId)
        expect(data).toBeInstanceOf(ConferenceParticipantResult)
    });

    test('#getAQueue', async () => {
        const queueId = "queueId_example"
        let data = await apiInstance.getAQueue(queueId)
        expect(data).toBeInstanceOf(QueueResult)
    });


    test('#getARecording', async () => {
        const recordingId = "recordingId_example"
        let data = await apiInstance.getARecording(recordingId)
        expect(data).toBeInstanceOf(RecordingResult)
    });

    test('#getAnAccount', async () => {
        let data = await apiInstance.getAnAccount()
        expect(data).toBeInstanceOf(AccountResult)
        expect(data.status).toBe(AccountStatus.CLOSED)
        expect(data.type).toBe(AccountType.TRIAL)
    });

    test('#getAnApplication', async () => {
        const applicationId = "applicationId_example"
        let data = await apiInstance.getAnApplication(applicationId)
        expect(data).toBeInstanceOf(ApplicationResult)
    });

    test('#getAnIncomingNumber', async () => {
        const phoneNumberId = "phoneNumberId_example"
        let data = await apiInstance.getAnIncomingNumber(phoneNumberId)
        expect(data).toBeInstanceOf(IncomingNumberResult)
    });

    test('#getAnSmsMessage', async () => {
        const messageId = "messageId_example"
        let data = await apiInstance.getAnSmsMessage(messageId)
        expect(data).toBeInstanceOf(MessageResult)
    });

    test('#getHeadMember', async () => {
        const queueId = "queueId_example"
        let data = await apiInstance.getHeadMember(queueId)
        expect(data).toBeInstanceOf(QueueMember)
    });

    test('#listActiveQueues', async () => {
        const alias = "alias_example"
        let data = await apiInstance.listActiveQueues(alias)
        expect(data).toBeInstanceOf(QueueList)
    });

    test('#listAllAccountLogs', async () => {
        let data = await apiInstance.listAllAccountLogs()
        expect(data).toBeInstanceOf(LogList) 
    });

    test('#listApplications', async () => {
        const alias = "alias_example"
        let data = await apiInstance.listApplications(alias)
        expect(data).toBeInstanceOf(ApplicationList)
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
        let data = await apiInstance.listAvailableNumbers(phoneNumber,region, country,voiceEnabled, smsEnabled, capabilitiesVoice, capabilitiesSms, capabilitiesTollFree, capabilitiesTenDLC, capabilitiesShortCode)
        expect(data).toBeInstanceOf(AvailableNumberList)
    });

    test('#listCallLogs', async () => {
        const callId = "callId_example"
        let data = await apiInstance.listCallLogs(callId)        
        expect(data).toBeInstanceOf(LogList)
    });

    test('#listCallRecordings', async () => {
        const callId = "callId_example"
        const dateCreated = "dateCreated_example"
        let data = await apiInstance.listCallRecordings(callId, dateCreated)        
        expect(data).toBeInstanceOf(RecordingList)
    });

    test('#listCalls', async () => {
        const active = false
        const to = "to_example"
        const from = "from_example"
        const status = CallStatus.QUEUED
        const startTime = "startTime_example"
        const endTime = "endTime_example"
        const parentCallId = "parentCallId_example"
        const applicationId: Array<string> = ["AP0123456789ABCDEFabcedf000000000000000001", "AP0123456789ABCDEFabcedf000000000000000002", "AP0123456789ABCDEFabcedf000000000000000003"]
        let data = await apiInstance.listCalls(active, to, from, status, startTime, endTime, parentCallId, applicationId)        
        expect(data).toBeInstanceOf(CallList)
    });

    test('#listConferences', async () => {
        const status = "status_example"
        const alias = "to_example"
        const dateCreated = "from_example"
        const dateUpdated = CallStatus.QUEUED
        let data = await apiInstance.listConferences(status, alias, dateCreated, dateUpdated)   
        expect(data).toBeInstanceOf(ConferenceList)
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
        const hasCampaign = true
        const capabilitiesVoice = true
        const capabilitiesSms = true
        const capabilitiesTollFree = true
        const capabilitiesTenDLC = true
        const capabilitiesShortCode = true
        const tfnCampaignId = "CX56XX4"
        let data = await apiInstance.listIncomingNumbers(phoneNumber, alias, region, country, applicationId, hasApplication, voiceEnabled, smsEnabled, hasCampaign, capabilitiesVoice, capabilitiesSms, capabilitiesTollFree, capabilitiesTenDLC, capabilitiesShortCode, tfnCampaignId)  
        expect(data).toBeInstanceOf(IncomingNumberList)
    });

    test('#listMembers', async () => {
        const queueId = "queueId_example"
        let data = await apiInstance.listMembers(queueId)        
        expect(data).toBeInstanceOf(QueueMemberList)
    });

    test('#listParticipants', async () => {
        const conferenceId = "conferenceId_example"
        const talk = true
        const listen = true
        let data = await apiInstance.listParticipants(conferenceId, talk, listen )       
        expect(data).toBeInstanceOf(ConferenceParticipantList)
    });

    test('#listRecordings', async () => {
        const callId = "conferenceId_example"
        const conferenceId = "conferenceId_example"
        const dateCreated = "conferenceId_example"
        let data = await apiInstance.listRecordings(callId, conferenceId, dateCreated )      
        expect(data).toBeInstanceOf(RecordingList)
    });

    test('#listSmsMessages', async () => {
        const to = "to_example"
        const _from = "from_example"
        const beginTime = "beginTime_example"
        const endTime = "endTime_example"
        const direction = MessageDirection.INBOUND
        const campaignId = "CX56XX4"
        const brandId = "BX56XX4"
        const is10DLC = true
        let data = await apiInstance.listSmsMessages(to, _from, beginTime, endTime, direction)      
        expect(data).toBeInstanceOf(MessagesList)
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
        let data = await apiInstance.makeACall(request)      
        expect(data).toBeInstanceOf(CallResult)
    }); 

    test('#removeAParticipant', async () => {
        const callId = "conferenceId_example"
        const conferenceId = "conferenceId_example"
        let data = await apiInstance.removeAParticipant(conferenceId, callId)
        expect(data).toBe(undefined)
    });


    test('#sendAnSmsMessage', async () => {
        const request = {
            _from: "_from_example",
            to: "to_example",
            text: "Example Text"
        }
        let data = await apiInstance.sendAnSmsMessage(request)     
        expect(data).toBeInstanceOf(MessageResult)
    });

    test('#streamARecordingFile', async () => {
        const recordingId = "recordingId_example"
        let httpFile = await apiInstance.streamARecordingFile(recordingId)   
        expect(httpFile.data).toBeInstanceOf(Buffer)
        expect(typeof httpFile.name).toBe("string")
    });

    test('#updateAConference', async () => {
        const conferenceId = "conferenceId_example"
        const request: UpdateConferenceRequest = {
              alias: "alias_example",
              playBeep: PlayBeep.ALWAYS,
              status: UpdateConferenceRequestStatus.EMPTY,
        }
        let data = await apiInstance.updateAConference(conferenceId, request) 
        expect(data).toBe(undefined)
    });

    test('#updateALiveCall', async () => {
        const callId = "callId_example"
        const request: UpdateCallRequest = {
              status: UpdateCallRequestStatus.CANCELED,
        }
        let data = await apiInstance.updateALiveCall(callId, request)
        expect(data).toBe(undefined)
    });

    test('#updateAParticipant', async () => {
        const callId = "callId_example"
        const conferenceId = "conferenceId_example"
        let data = await apiInstance.updateAParticipant(callId, conferenceId)
        expect(data).toBeInstanceOf(ConferenceParticipantResult)
    });

    test('#updateAQueue', async () => {
        const queueId = "queueId_example"
        const queueRequest: QueueRequest  =  {
            alias: "alias_example",
            maxSize: 100,
        }
        let data = await apiInstance.updateAQueue(queueId, queueRequest)
        expect(data).toBeInstanceOf(QueueResult)
    });

    test('#updateAnAccount', async () => {
        const accountRequest: AccountRequest  =  {
            alias: "alias_example",
            label: "label_example",
        }
        let data = await apiInstance.updateAnAccount(accountRequest)
        expect(data).toBe(undefined)
    });

    test('#updateAnApplication', async () => {
        const applicationId = "applicationId_example"
        const applicationRequest: ApplicationRequest  =  {
            alias: "alias_example"
        }
        let data = await apiInstance.updateAnApplication(applicationId, applicationRequest)
        expect(data).toBeInstanceOf(ApplicationResult)
    });

    test('#updateAnIncomingNumber', async () => {
        const phoneNumberId = "phoneNumberId_example";
        const incomingNumberRequest: IncomingNumberRequest  =  {
            applicationId: "applicationId_example",
            alias: "alias_example",
        }
        let data = await apiInstance.updateAnIncomingNumber(phoneNumberId, incomingNumberRequest)
        expect(data).toBeInstanceOf(IncomingNumberResult)
    });

    test('#getAnSmsTenDLCBrands', async () => {
        let data = await apiInstance.getTenDLCSmsBrands()
        expect(data).toBeInstanceOf(SMSTenDLCBrandsListResult)
    });

    test('#getAnSmsTenDLCCampaigns', async () => {
        const brandId = "BX56XX4"
        let data = await apiInstance.getTenDLCSmsCampaigns(brandId)
        expect(data).toBeInstanceOf(SMSTenDLCCampaignsListResult)
    });

    test('#getAnSmsTenDLCPartnerCampaigns', async () => {
        const brandId = "BX56XX4"
        let data = await apiInstance.getTenDLCSmsPartnerCampaigns(brandId)
        expect(data).toBeInstanceOf(SMSTenDLCPartnerCampaignsListResult)
    });

    test('#getTenDLCSmsBrand', async () => {
        const brandId = "BX56XX4"
        let data = await apiInstance.getTenDLCSmsBrand(brandId)
        expect(data).toBeInstanceOf(SMSTenDLCBrand)
    });

    test('#getTenDLCSmsCampaign', async () => {
        const campaignId = "CX56XX4"
        let data = await apiInstance.getTenDLCSmsCampaign(campaignId)
        expect(data).toBeInstanceOf(SMSTenDLCCampaign)
    });

    test('#makeAWebrtcJwt', async () => {
        const createWebrtcToken: freeclimb.CreateWebRTCToken = {
            to: "to_example",
            _from: "from_example",
            uses: 1,
        }
        let data = await apiInstance.makeAWebrtcJwt(createWebrtcToken)
        expect(typeof data).toBe("string")
    });
    
    test('#listConferenceRecordings', async () => {
        const callId = "CX56XX4"
        const conferenceId = "CX56XX4"
        const dateCreated = "CX56XX4"
        let data = await apiInstance.listConferenceRecordings(callId, conferenceId, dateCreated)
        expect(data).toBeInstanceOf(RecordingList)
    });

    test('#getNextPage', async () => {
        const responseObject: RecordingList = {
            total: 0,
            start: 0,
            end: 0,
            page: 0,
            numPages: 0,
            pageSize: 0,
            nextPageUri: `/Accounts/${accountId}/Recordings?cursor=1`,
            recordings: []
        }
        const expectedResponseObject: RecordingList = {
            total: 0,
            start: 0,
            end: 0,
            page: 0,
            numPages: 0,
            pageSize: 0,
            nextPageUri: 'string',
            recordings: [
                {
                    accountId: "string",
                    callId: "string",
                    conferenceId: "string",
                    dateCreated: "string",
                    dateUpdated: "string",
                    durationSec: 0,
                    recordingId: "string",
                    revision: 0,
                    uri: "string",
                }
            ]
        }
        let data = await apiInstance.getNextPage(responseObject)
        expect(data).toStrictEqual(expectedResponseObject)
    });
})

