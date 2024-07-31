import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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
import { CreateWebRTCToken } from '../models/CreateWebRTCToken';
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
import { RequestType } from '../models/RequestType';
import { SMSTenDLCBrand } from '../models/SMSTenDLCBrand';
import { SMSTenDLCBrandsListResult } from '../models/SMSTenDLCBrandsListResult';
import { SMSTenDLCBrandsListResultAllOf } from '../models/SMSTenDLCBrandsListResultAllOf';
import { SMSTenDLCCampaign } from '../models/SMSTenDLCCampaign';
import { SMSTenDLCCampaignsListResult } from '../models/SMSTenDLCCampaignsListResult';
import { SMSTenDLCCampaignsListResultAllOf } from '../models/SMSTenDLCCampaignsListResultAllOf';
import { SMSTenDLCPartnerCampaign } from '../models/SMSTenDLCPartnerCampaign';
import { SMSTenDLCPartnerCampaignBrand } from '../models/SMSTenDLCPartnerCampaignBrand';
import { SMSTenDLCPartnerCampaignsListResult } from '../models/SMSTenDLCPartnerCampaignsListResult';
import { SMSTenDLCPartnerCampaignsListResultAllOf } from '../models/SMSTenDLCPartnerCampaignsListResultAllOf';
import { SMSTollFreeCampaign } from '../models/SMSTollFreeCampaign';
import { SMSTollFreeCampaignsListResult } from '../models/SMSTollFreeCampaignsListResult';
import { SMSTollFreeCampaignsListResultAllOf } from '../models/SMSTollFreeCampaignsListResultAllOf';
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
import { TFN } from '../models/TFN';
import { TerminateConference } from '../models/TerminateConference';
import { TranscribeUtterance } from '../models/TranscribeUtterance';
import { TranscribeUtteranceAllOf } from '../models/TranscribeUtteranceAllOf';
import { TranscribeUtteranceAllOfRecord } from '../models/TranscribeUtteranceAllOfRecord';
import { Unpark } from '../models/Unpark';
import { UpdateCallRequest } from '../models/UpdateCallRequest';
import { UpdateCallRequestStatus } from '../models/UpdateCallRequestStatus';
import { UpdateConferenceParticipantRequest } from '../models/UpdateConferenceParticipantRequest';
import { UpdateConferenceRequest } from '../models/UpdateConferenceRequest';
import { UpdateConferenceRequestStatus } from '../models/UpdateConferenceRequestStatus';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Buy a Phone Number
     
     * @param buyIncomingNumberRequest Incoming Number transaction details
     
     */
    public buyAPhoneNumber(buyIncomingNumberRequest: BuyIncomingNumberRequest, _options?: Configuration): Observable<IncomingNumberResult> {
        const requestContextPromise = this.requestFactory.buyAPhoneNumber(buyIncomingNumberRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.buyAPhoneNumber(rsp)));
            }));
    }

    /**
     * Create a Conference
     
     * @param createConferenceRequest Conference to create
     
     */
    public createAConference(createConferenceRequest?: CreateConferenceRequest, _options?: Configuration): Observable<ConferenceResult> {
        const requestContextPromise = this.requestFactory.createAConference(createConferenceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAConference(rsp)));
            }));
    }

    /**
     * Create a Queue
     
     * @param queueRequest Queue details used to create a queue
     
     */
    public createAQueue(queueRequest?: QueueRequest, _options?: Configuration): Observable<QueueResult> {
        const requestContextPromise = this.requestFactory.createAQueue(queueRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAQueue(rsp)));
            }));
    }

    /**
     * Create an application
     
     * @param applicationRequest Application Details
     
     */
    public createAnApplication(applicationRequest?: ApplicationRequest, _options?: Configuration): Observable<ApplicationResult> {
        const requestContextPromise = this.requestFactory.createAnApplication(applicationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAnApplication(rsp)));
            }));
    }

    /**
     * Delete a Recording
     
     * @param recordingId String that uniquely identifies this recording resource.
     
     */
    public deleteARecording(recordingId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteARecording(recordingId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteARecording(rsp)));
            }));
    }

    /**
     * Delete an application
     
     * @param applicationId String that uniquely identifies this application resource.
     
     */
    public deleteAnApplication(applicationId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAnApplication(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAnApplication(rsp)));
            }));
    }

    /**
     * Delete an Incoming Number
     
     * @param phoneNumberId String that uniquely identifies this phone number resource.
     
     */
    public deleteAnIncomingNumber(phoneNumberId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAnIncomingNumber(phoneNumberId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAnIncomingNumber(rsp)));
            }));
    }

    /**
     * Dequeue a Member
     
     * @param queueId String that uniquely identifies the Queue that the Member belongs to.
     
     * @param callId ID if the Call that the Member belongs to
     
     */
    public dequeueAMember(queueId: string, callId: string, _options?: Configuration): Observable<QueueMember> {
        const requestContextPromise = this.requestFactory.dequeueAMember(queueId, callId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dequeueAMember(rsp)));
            }));
    }

    /**
     * Dequeue Head Member
     
     * @param queueId String that uniquely identifies this queue resource.
     
     */
    public dequeueHeadMember(queueId: string, _options?: Configuration): Observable<QueueMember> {
        const requestContextPromise = this.requestFactory.dequeueHeadMember(queueId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.dequeueHeadMember(rsp)));
            }));
    }

    /**
     * Download a Recording File
     
     * @param recordingId String that uniquely identifies this recording resource.
     
     */
    public downloadARecordingFile(recordingId: string, _options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.downloadARecordingFile(recordingId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadARecordingFile(rsp)));
            }));
    }

    /**
     * Filter Logs
     
     * @param filterLogsRequest Filter logs request paramters
     
     */
    public filterLogs(filterLogsRequest: FilterLogsRequest, _options?: Configuration): Observable<LogList> {
        const requestContextPromise = this.requestFactory.filterLogs(filterLogsRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filterLogs(rsp)));
            }));
    }

    /**
     * Get a Call
     
     * @param callId String that uniquely identifies this call resource.
     
     */
    public getACall(callId: string, _options?: Configuration): Observable<CallResult> {
        const requestContextPromise = this.requestFactory.getACall(callId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getACall(rsp)));
            }));
    }

    /**
     * Get a Conference
     
     * @param conferenceId A string that uniquely identifies this conference resource.
     
     */
    public getAConference(conferenceId: string, _options?: Configuration): Observable<ConferenceResult> {
        const requestContextPromise = this.requestFactory.getAConference(conferenceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAConference(rsp)));
            }));
    }

    /**
     * Get a Member
     
     * @param queueId String that uniquely identifies the Queue that the Member belongs to.
     
     * @param callId ID of the Call that the Member belongs to
     
     */
    public getAMember(queueId: string, callId: string, _options?: Configuration): Observable<QueueMember> {
        const requestContextPromise = this.requestFactory.getAMember(queueId, callId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAMember(rsp)));
            }));
    }

    /**
     * Get a Participant
     
     * @param conferenceId ID of the conference this participant is in.
     
     * @param callId ID of the Call associated with this participant.
     
     */
    public getAParticipant(conferenceId: string, callId: string, _options?: Configuration): Observable<ConferenceParticipantResult> {
        const requestContextPromise = this.requestFactory.getAParticipant(conferenceId, callId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAParticipant(rsp)));
            }));
    }

    /**
     * Get a Queue
     
     * @param queueId A string that uniquely identifies this queue resource.
     
     */
    public getAQueue(queueId: string, _options?: Configuration): Observable<QueueResult> {
        const requestContextPromise = this.requestFactory.getAQueue(queueId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAQueue(rsp)));
            }));
    }

    /**
     * Get a Recording
     
     * @param recordingId String that uniquely identifies this recording resource.
     
     */
    public getARecording(recordingId: string, _options?: Configuration): Observable<RecordingResult> {
        const requestContextPromise = this.requestFactory.getARecording(recordingId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getARecording(rsp)));
            }));
    }

    /**
     * Get an Account
     
     */
    public getAnAccount(_options?: Configuration): Observable<AccountResult> {
        const requestContextPromise = this.requestFactory.getAnAccount(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAnAccount(rsp)));
            }));
    }

    /**
     * Get an Application
     
     * @param applicationId A string that uniquely identifies this application resource.
     
     */
    public getAnApplication(applicationId: string, _options?: Configuration): Observable<ApplicationResult> {
        const requestContextPromise = this.requestFactory.getAnApplication(applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAnApplication(rsp)));
            }));
    }

    /**
     * Get an Incoming Number
     
     * @param phoneNumberId String that uniquely identifies this phone number resource.
     
     */
    public getAnIncomingNumber(phoneNumberId: string, _options?: Configuration): Observable<IncomingNumberResult> {
        const requestContextPromise = this.requestFactory.getAnIncomingNumber(phoneNumberId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAnIncomingNumber(rsp)));
            }));
    }

    /**
     * Get an SMS Message
     
     * @param messageId String that uniquely identifies this Message resource.
     
     */
    public getAnSmsMessage(messageId: string, _options?: Configuration): Observable<MessageResult> {
        const requestContextPromise = this.requestFactory.getAnSmsMessage(messageId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAnSmsMessage(rsp)));
            }));
    }

    /**
     * Get Head Member
     
     * @param queueId String that uniquely identifies the Queue that the Member belongs to.
     
     */
    public getHeadMember(queueId: string, _options?: Configuration): Observable<QueueMember> {
        const requestContextPromise = this.requestFactory.getHeadMember(queueId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getHeadMember(rsp)));
            }));
    }

    /**
     * Get a 10DLC SMS Brand
     
     * @param brandId String that uniquely identifies this brand resource.
     
     */
    public getTenDLCSmsBrand(brandId: string, _options?: Configuration): Observable<SMSTenDLCBrand> {
        const requestContextPromise = this.requestFactory.getTenDLCSmsBrand(brandId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTenDLCSmsBrand(rsp)));
            }));
    }

    /**
     * Get list of SMS 10DLC Brands
     
     */
    public getTenDLCSmsBrands(_options?: Configuration): Observable<SMSTenDLCBrandsListResult> {
        const requestContextPromise = this.requestFactory.getTenDLCSmsBrands(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTenDLCSmsBrands(rsp)));
            }));
    }

    /**
     * Get a 10DLC SMS Campaign
     
     * @param campaignId String that uniquely identifies this campaign resource.
     
     */
    public getTenDLCSmsCampaign(campaignId: string, _options?: Configuration): Observable<SMSTenDLCCampaign> {
        const requestContextPromise = this.requestFactory.getTenDLCSmsCampaign(campaignId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTenDLCSmsCampaign(rsp)));
            }));
    }

    /**
     * Get list of SMS 10DLC Campaigns
     
     * @param brandId The unique identifier for a brand
     
     */
    public getTenDLCSmsCampaigns(brandId?: string, _options?: Configuration): Observable<SMSTenDLCCampaignsListResult> {
        const requestContextPromise = this.requestFactory.getTenDLCSmsCampaigns(brandId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTenDLCSmsCampaigns(rsp)));
            }));
    }

    /**
     * Get a 10DLC SMS Partner Campaign
     
     * @param campaignId String that uniquely identifies this campaign resource.
     
     */
    public getTenDLCSmsPartnerCampaign(campaignId: string, _options?: Configuration): Observable<SMSTenDLCPartnerCampaign> {
        const requestContextPromise = this.requestFactory.getTenDLCSmsPartnerCampaign(campaignId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTenDLCSmsPartnerCampaign(rsp)));
            }));
    }

    /**
     * Get list of SMS 10DLC Partner Campaigns
     
     * @param brandId The unique identifier for a brand
     
     */
    public getTenDLCSmsPartnerCampaigns(brandId?: string, _options?: Configuration): Observable<SMSTenDLCPartnerCampaignsListResult> {
        const requestContextPromise = this.requestFactory.getTenDLCSmsPartnerCampaigns(brandId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTenDLCSmsPartnerCampaigns(rsp)));
            }));
    }

    /**
     * Get a TollFree SMS Campaign
     
     * @param campaignId String that uniquely identifies this TollFree Campaign resource.
     
     */
    public getTollFreeSmsCampaign(campaignId: string, _options?: Configuration): Observable<SMSTollFreeCampaign> {
        const requestContextPromise = this.requestFactory.getTollFreeSmsCampaign(campaignId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTollFreeSmsCampaign(rsp)));
            }));
    }

    /**
     * Get list of TollFree Campaigns
     
     */
    public getTollFreeSmsCampaigns(_options?: Configuration): Observable<SMSTollFreeCampaignsListResult> {
        const requestContextPromise = this.requestFactory.getTollFreeSmsCampaigns(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTollFreeSmsCampaigns(rsp)));
            }));
    }

    /**
     * List Active Queues
     
     * @param alias Return only the Queue resources with aliases that exactly match this name.
     
     */
    public listActiveQueues(alias?: string, _options?: Configuration): Observable<QueueList> {
        const requestContextPromise = this.requestFactory.listActiveQueues(alias, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listActiveQueues(rsp)));
            }));
    }

    /**
     * List All Account Logs
     
     */
    public listAllAccountLogs(_options?: Configuration): Observable<LogList> {
        const requestContextPromise = this.requestFactory.listAllAccountLogs(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAllAccountLogs(rsp)));
            }));
    }

    /**
     * List applications
     
     * @param alias Return only applications with aliases that exactly match this value.
     
     */
    public listApplications(alias?: string, _options?: Configuration): Observable<ApplicationList> {
        const requestContextPromise = this.requestFactory.listApplications(alias, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApplications(rsp)));
            }));
    }

    /**
     * List available numbers
     
     * @param phoneNumber PCRE-compatible regular expression to filter against &#x60;phoneNumber&#x60; field, which is in E.164 format.
     
     * @param region State or province of this phone number.
     
     * @param country Country of this phone number.
     
     * @param voiceEnabled Indicates whether the phone number can handle Calls. Typically set to true for all numbers.
     
     * @param smsEnabled Indication of whether the phone number can handle sending and receiving SMS messages. Typically set to true for all numbers.
     
     * @param capabilitiesVoice 
     
     * @param capabilitiesSms 
     
     * @param capabilitiesTollFree 
     
     * @param capabilitiesTenDLC 
     
     * @param capabilitiesShortCode 
     
     */
    public listAvailableNumbers(phoneNumber?: string, region?: string, country?: string, voiceEnabled?: boolean, smsEnabled?: boolean, capabilitiesVoice?: boolean, capabilitiesSms?: boolean, capabilitiesTollFree?: boolean, capabilitiesTenDLC?: boolean, capabilitiesShortCode?: boolean, _options?: Configuration): Observable<AvailableNumberList> {
        const requestContextPromise = this.requestFactory.listAvailableNumbers(phoneNumber, region, country, voiceEnabled, smsEnabled, capabilitiesVoice, capabilitiesSms, capabilitiesTollFree, capabilitiesTenDLC, capabilitiesShortCode, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAvailableNumbers(rsp)));
            }));
    }

    /**
     * List Call Logs
     
     * @param callId String that uniquely identifies this call resource.
     
     */
    public listCallLogs(callId: string, _options?: Configuration): Observable<LogList> {
        const requestContextPromise = this.requestFactory.listCallLogs(callId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCallLogs(rsp)));
            }));
    }

    /**
     * List Call Recordings
     
     * @param callId String that uniquely identifies this call resource.
     
     * @param dateCreated Only show recordings created on the specified date, in the form *YYYY-MM-DD*.
     
     */
    public listCallRecordings(callId: string, dateCreated?: string, _options?: Configuration): Observable<RecordingList> {
        const requestContextPromise = this.requestFactory.listCallRecordings(callId, dateCreated, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCallRecordings(rsp)));
            }));
    }

    /**
     * List Calls
     
     * @param active If active is set to true then all calls of the nature queued, ringing, inProgress are returned in the query.
     
     * @param to Only show Calls to this phone number.
     
     * @param _from Only show Calls from this phone number.
     
     * @param status Only show Calls currently in this status. May be &#x60;queued&#x60;, &#x60;ringing&#x60;, &#x60;inProgress&#x60;, &#x60;canceled&#x60;, &#x60;completed&#x60;, &#x60;failed&#x60;, &#x60;busy&#x60;, or &#x60;noAnswer&#x60;.
     
     * @param startTime Only show Calls that started at or after this time, given as YYYY-MM-DD hh:mm:ss.
     
     * @param endTime Only show Calls that ended at or before this time, given as YYYY-MM- DD hh:mm:ss.
     
     * @param parentCallId Only show Calls spawned by the call with this ID.
     
     * @param applicationId Only show calls belonging to the given applicationId. This parameter can be repeated to return calls from multiple Applications.
     
     */
    public listCalls(active?: boolean, to?: string, _from?: string, status?: CallStatus, startTime?: string, endTime?: string, parentCallId?: string, applicationId?: Array<string>, _options?: Configuration): Observable<CallList> {
        const requestContextPromise = this.requestFactory.listCalls(active, to, _from, status, startTime, endTime, parentCallId, applicationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCalls(rsp)));
            }));
    }

    /**
     * List Conference Recordings
     
     * @param conferenceId Show only Recordings made during the conference with this ID.
     
     * @param callId Show only Recordings made during the Call with this ID.
     
     * @param dateCreated Only show Recordings created on this date, formatted as *YYYY-MM-DD*.
     
     */
    public listConferenceRecordings(conferenceId: string, callId?: string, dateCreated?: string, _options?: Configuration): Observable<RecordingList> {
        const requestContextPromise = this.requestFactory.listConferenceRecordings(conferenceId, callId, dateCreated, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listConferenceRecordings(rsp)));
            }));
    }

    /**
     * List Conferences
     
     * @param status Only show conferences that currently have the specified status. Valid values: &#x60;empty&#x60;, &#x60;populated&#x60;, &#x60;inProgress&#x60;, or &#x60;terminated&#x60;.
     
     * @param alias List Conferences whose alias exactly matches this string.
     
     * @param dateCreated Only show Conferences that were created on the specified date, in the form *YYYY-MM-DD*.
     
     * @param dateUpdated Only show Conferences that were last updated on the specified date, in the form *YYYY-MM-DD*.
     
     */
    public listConferences(status?: string, alias?: string, dateCreated?: string, dateUpdated?: string, _options?: Configuration): Observable<ConferenceList> {
        const requestContextPromise = this.requestFactory.listConferences(status, alias, dateCreated, dateUpdated, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listConferences(rsp)));
            }));
    }

    /**
     * List Incoming Numbers
     
     * @param phoneNumber Only show incoming phone number resources that match this PCRE-compatible regular expression.
     
     * @param alias Only show incoming phone numbers with aliases that exactly match this value.
     
     * @param region State or province of this phone number.
     
     * @param country Country of this phone number.
     
     * @param applicationId ID of the Application that FreeClimb should contact if a Call or SMS arrives for this phone number or a Call from this number is placed. An incoming phone number is not useful until associated with an applicationId.
     
     * @param hasApplication Indication of whether the phone number has an application linked to it.
     
     * @param voiceEnabled Indicates whether the phone number can handle Calls. Typically set to true for all numbers.
     
     * @param smsEnabled Indication of whether the phone number can handle sending and receiving SMS messages. Typically set to true for all numbers.
     
     * @param hasCampaign Indication of whether the phone number has a campaign associated with it
     
     * @param capabilitiesVoice 
     
     * @param capabilitiesSms 
     
     * @param capabilitiesTollFree 
     
     * @param capabilitiesTenDLC 
     
     * @param capabilitiesShortCode 
     
     * @param tfnCampaignId Only show incoming phone number resources that have been assigned to the provided TFNCampaign ID.
     
     * @param offnet Indication of whether the phone number was registered as an offnet number. This field will be rendered only for requests to the IncomingPhone number resource.
     
     */
    public listIncomingNumbers(phoneNumber?: string, alias?: string, region?: string, country?: string, applicationId?: string, hasApplication?: boolean, voiceEnabled?: boolean, smsEnabled?: boolean, hasCampaign?: boolean, capabilitiesVoice?: boolean, capabilitiesSms?: boolean, capabilitiesTollFree?: boolean, capabilitiesTenDLC?: boolean, capabilitiesShortCode?: boolean, tfnCampaignId?: string, offnet?: boolean, _options?: Configuration): Observable<IncomingNumberList> {
        const requestContextPromise = this.requestFactory.listIncomingNumbers(phoneNumber, alias, region, country, applicationId, hasApplication, voiceEnabled, smsEnabled, hasCampaign, capabilitiesVoice, capabilitiesSms, capabilitiesTollFree, capabilitiesTenDLC, capabilitiesShortCode, tfnCampaignId, offnet, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listIncomingNumbers(rsp)));
            }));
    }

    /**
     * List Members
     
     * @param queueId String that uniquely identifies the Queue that the Member belongs to.
     
     */
    public listMembers(queueId: string, _options?: Configuration): Observable<QueueMemberList> {
        const requestContextPromise = this.requestFactory.listMembers(queueId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listMembers(rsp)));
            }));
    }

    /**
     * List Participants
     
     * @param conferenceId ID of the conference this participant is in.
     
     * @param talk Only show Participants with the talk privilege.
     
     * @param listen Only show Participants with the listen privilege.
     
     */
    public listParticipants(conferenceId: string, talk?: boolean, listen?: boolean, _options?: Configuration): Observable<ConferenceParticipantList> {
        const requestContextPromise = this.requestFactory.listParticipants(conferenceId, talk, listen, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listParticipants(rsp)));
            }));
    }

    /**
     * List Recordings
     
     * @param callId Show only Recordings made during the Call with this ID.
     
     * @param conferenceId Show only Recordings made during the conference with this ID.
     
     * @param dateCreated Only show Recordings created on this date, formatted as *YYYY-MM-DD*.
     
     */
    public listRecordings(callId?: string, conferenceId?: string, dateCreated?: string, _options?: Configuration): Observable<RecordingList> {
        const requestContextPromise = this.requestFactory.listRecordings(callId, conferenceId, dateCreated, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRecordings(rsp)));
            }));
    }

    /**
     * List SMS Messages
     
     * @param to Only show Messages to this phone number.
     
     * @param _from Only show Messages from this phone number.
     
     * @param beginTime Only show Messages sent at or after this time (GMT), given as *YYYY-MM-DD hh:mm:ss*.
     
     * @param endTime Only show messages sent at or before this time (GMT), given as *YYYY-MM-DD hh:mm*..
     
     * @param direction Either &#x60;inbound&#x60; or &#x60;outbound&#x60;. Only show Messages that were either *sent from* or *received by* FreeClimb.
     
     * @param campaignId Only show messages associated with this campaign ID.
     
     * @param brandId Only show messages associated with this brand ID
     
     * @param is10DLC Only show messages that were sent as part of a 10DLC campaign.
     
     */
    public listSmsMessages(to?: string, _from?: string, beginTime?: string, endTime?: string, direction?: MessageDirection, campaignId?: string, brandId?: string, is10DLC?: boolean, _options?: Configuration): Observable<MessagesList> {
        const requestContextPromise = this.requestFactory.listSmsMessages(to, _from, beginTime, endTime, direction, campaignId, brandId, is10DLC, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSmsMessages(rsp)));
            }));
    }

    /**
     * Make a Call
     
     * @param makeCallRequest Call details for making a call
     
     */
    public makeACall(makeCallRequest?: MakeCallRequest, _options?: Configuration): Observable<CallResult> {
        const requestContextPromise = this.requestFactory.makeACall(makeCallRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.makeACall(rsp)));
            }));
    }

    /**
     * Make a JWT for WebRTC calling
     * Make a JWT for WebRTC calling
     
     * @param createWebRTCToken Information needed to craft a JWT compatible with the platforms WebRTC APIs
     
     */
    public makeAWebrtcJwt(createWebRTCToken: CreateWebRTCToken, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.makeAWebrtcJwt(createWebRTCToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.makeAWebrtcJwt(rsp)));
            }));
    }

    /**
     * Remove a Participant
     
     * @param conferenceId ID of the conference this participant is in.
     
     * @param callId ID of the Call associated with this participant.
     
     */
    public removeAParticipant(conferenceId: string, callId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.removeAParticipant(conferenceId, callId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeAParticipant(rsp)));
            }));
    }

    /**
     * Send an SMS Message
     
     * @param messageRequest Details to create a message
     
     */
    public sendAnSmsMessage(messageRequest: MessageRequest, _options?: Configuration): Observable<MessageResult> {
        const requestContextPromise = this.requestFactory.sendAnSmsMessage(messageRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendAnSmsMessage(rsp)));
            }));
    }

    /**
     * Stream a Recording File
     
     * @param recordingId String that uniquely identifies this recording resource.
     
     */
    public streamARecordingFile(recordingId: string, _options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.streamARecordingFile(recordingId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.streamARecordingFile(rsp)));
            }));
    }

    /**
     * Update a Conference
     
     * @param conferenceId String that uniquely identifies this conference resource.
     
     * @param updateConferenceRequest Conference Details to update
     
     */
    public updateAConference(conferenceId: string, updateConferenceRequest?: UpdateConferenceRequest, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.updateAConference(conferenceId, updateConferenceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAConference(rsp)));
            }));
    }

    /**
     * Update a Live Call
     
     * @param callId String that uniquely identifies this call resource.
     
     * @param updateCallRequest Call details to update
     
     */
    public updateALiveCall(callId: string, updateCallRequest: UpdateCallRequest, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.updateALiveCall(callId, updateCallRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateALiveCall(rsp)));
            }));
    }

    /**
     * Update a Participant
     
     * @param conferenceId ID of the conference this participant is in.
     
     * @param callId ID of the Call associated with this participant.
     
     * @param updateConferenceParticipantRequest Conference participant details to update
     
     */
    public updateAParticipant(conferenceId: string, callId: string, updateConferenceParticipantRequest?: UpdateConferenceParticipantRequest, _options?: Configuration): Observable<ConferenceParticipantResult> {
        const requestContextPromise = this.requestFactory.updateAParticipant(conferenceId, callId, updateConferenceParticipantRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAParticipant(rsp)));
            }));
    }

    /**
     * Update a Queue
     
     * @param queueId A string that uniquely identifies this Queue resource.
     
     * @param queueRequest Queue Details to update
     
     */
    public updateAQueue(queueId: string, queueRequest?: QueueRequest, _options?: Configuration): Observable<QueueResult> {
        const requestContextPromise = this.requestFactory.updateAQueue(queueId, queueRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAQueue(rsp)));
            }));
    }

    /**
     * Manage an account
     
     * @param accountRequest Account details to update
     
     */
    public updateAnAccount(accountRequest?: AccountRequest, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.updateAnAccount(accountRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAnAccount(rsp)));
            }));
    }

    /**
     * Update an application
     
     * @param applicationId A string that uniquely identifies this application resource.
     
     * @param applicationRequest Application details to update.
     
     */
    public updateAnApplication(applicationId: string, applicationRequest?: ApplicationRequest, _options?: Configuration): Observable<ApplicationResult> {
        const requestContextPromise = this.requestFactory.updateAnApplication(applicationId, applicationRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAnApplication(rsp)));
            }));
    }

    /**
     * Update an Incoming Number
     
     * @param phoneNumberId String that uniquely identifies this phone number resource.
     
     * @param incomingNumberRequest Incoming Number details to update
     
     */
    public updateAnIncomingNumber(phoneNumberId: string, incomingNumberRequest?: IncomingNumberRequest, _options?: Configuration): Observable<IncomingNumberResult> {
        const requestContextPromise = this.requestFactory.updateAnIncomingNumber(phoneNumberId, incomingNumberRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAnIncomingNumber(rsp)));
            }));
    }

}
