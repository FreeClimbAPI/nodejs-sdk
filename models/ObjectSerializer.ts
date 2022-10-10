export * from './AccountRequest';
export * from './AccountResult';
export * from './AccountResultAllOf';
export * from './AddToConference';
export * from './AddToConferenceAllOf';
export * from './ApplicationList';
export * from './ApplicationListAllOf';
export * from './ApplicationRequest';
export * from './ApplicationResult';
export * from './ApplicationResultAllOf';
export * from './AvailableNumber';
export * from './AvailableNumberList';
export * from './AvailableNumberListAllOf';
export * from './BuyIncomingNumberRequest';
export * from './CallList';
export * from './CallListAllOf';
export * from './CallResult';
export * from './CallResultAllOf';
export * from './Capabilities';
export * from './ConferenceList';
export * from './ConferenceListAllOf';
export * from './ConferenceParticipantList';
export * from './ConferenceParticipantListAllOf';
export * from './ConferenceParticipantResult';
export * from './ConferenceParticipantResultAllOf';
export * from './ConferenceResult';
export * from './ConferenceResultAllOf';
export * from './CreateConference';
export * from './CreateConferenceAllOf';
export * from './CreateConferenceRequest';
export * from './Dequeue';
export * from './Enqueue';
export * from './EnqueueAllOf';
export * from './FilterLogsRequest';
export * from './GetDigits';
export * from './GetDigitsAllOf';
export * from './GetSpeech';
export * from './GetSpeechAllOf';
export * from './Hangup';
export * from './HangupAllOf';
export * from './IncomingNumberList';
export * from './IncomingNumberListAllOf';
export * from './IncomingNumberRequest';
export * from './IncomingNumberResult';
export * from './IncomingNumberResultAllOf';
export * from './LogList';
export * from './LogListAllOf';
export * from './LogResult';
export * from './MakeCallRequest';
export * from './MessageRequest';
export * from './MessageRequestAllOf';
export * from './MessageResult';
export * from './MessageResultAllOf';
export * from './MessagesList';
export * from './MessagesListAllOf';
export * from './MutableResourceModel';
export * from './OutDial';
export * from './OutDialAllOf';
export * from './PaginationModel';
export * from './Park';
export * from './ParkAllOf';
export * from './Pause';
export * from './PauseAllOf';
export * from './PerclCommand';
export * from './PerclScript';
export * from './Play';
export * from './PlayAllOf';
export * from './PlayEarlyMedia';
export * from './PlayEarlyMediaAllOf';
export * from './QueueList';
export * from './QueueListAllOf';
export * from './QueueMember';
export * from './QueueMemberList';
export * from './QueueMemberListAllOf';
export * from './QueueRequest';
export * from './QueueResult';
export * from './QueueResultAllOf';
export * from './RecordUtterance';
export * from './RecordUtteranceAllOf';
export * from './RecordingList';
export * from './RecordingListAllOf';
export * from './RecordingResult';
export * from './RecordingResultAllOf';
export * from './Redirect';
export * from './RedirectAllOf';
export * from './Reject';
export * from './RejectAllOf';
export * from './RemoveFromConference';
export * from './RemoveFromConferenceAllOf';
export * from './Say';
export * from './SayAllOf';
export * from './SendDigits';
export * from './SendDigitsAllOf';
export * from './SetListen';
export * from './SetListenAllOf';
export * from './SetTalk';
export * from './SetTalkAllOf';
export * from './Sms';
export * from './SmsAllOf';
export * from './StartRecordCall';
export * from './TerminateConference';
export * from './TerminateConferenceAllOf';
export * from './Unpark';
export * from './UpdateCallRequest';
export * from './UpdateConferenceParticipantRequest';
export * from './UpdateConferenceRequest';

import { AccountRequest } from './AccountRequest';
import { AccountResult        , AccountResultTypeEnum  , AccountResultStatusEnum    } from './AccountResult';
import { AccountResultAllOf    , AccountResultAllOfTypeEnum  , AccountResultAllOfStatusEnum    } from './AccountResultAllOf';
import { AddToConference } from './AddToConference';
import { AddToConferenceAllOf } from './AddToConferenceAllOf';
import { ApplicationList } from './ApplicationList';
import { ApplicationListAllOf } from './ApplicationListAllOf';
import { ApplicationRequest } from './ApplicationRequest';
import { ApplicationResult } from './ApplicationResult';
import { ApplicationResultAllOf } from './ApplicationResultAllOf';
import { AvailableNumber } from './AvailableNumber';
import { AvailableNumberList } from './AvailableNumberList';
import { AvailableNumberListAllOf } from './AvailableNumberListAllOf';
import { BuyIncomingNumberRequest } from './BuyIncomingNumberRequest';
import { CallList } from './CallList';
import { CallListAllOf } from './CallListAllOf';
import { CallResult          , CallResultStatusEnum           } from './CallResult';
import { CallResultAllOf      , CallResultAllOfStatusEnum           } from './CallResultAllOf';
import { Capabilities } from './Capabilities';
import { ConferenceList } from './ConferenceList';
import { ConferenceListAllOf } from './ConferenceListAllOf';
import { ConferenceParticipantList } from './ConferenceParticipantList';
import { ConferenceParticipantListAllOf } from './ConferenceParticipantListAllOf';
import { ConferenceParticipantResult } from './ConferenceParticipantResult';
import { ConferenceParticipantResultAllOf } from './ConferenceParticipantResultAllOf';
import { ConferenceResult       , ConferenceResultPlayBeepEnum   , ConferenceResultStatusEnum       } from './ConferenceResult';
import { ConferenceResultAllOf   , ConferenceResultAllOfPlayBeepEnum   , ConferenceResultAllOfStatusEnum       } from './ConferenceResultAllOf';
import { CreateConference } from './CreateConference';
import { CreateConferenceAllOf } from './CreateConferenceAllOf';
import { CreateConferenceRequest , CreateConferenceRequestPlayBeepEnum      } from './CreateConferenceRequest';
import { Dequeue } from './Dequeue';
import { Enqueue } from './Enqueue';
import { EnqueueAllOf } from './EnqueueAllOf';
import { FilterLogsRequest } from './FilterLogsRequest';
import { GetDigits } from './GetDigits';
import { GetDigitsAllOf } from './GetDigitsAllOf';
import { GetSpeech } from './GetSpeech';
import { GetSpeechAllOf } from './GetSpeechAllOf';
import { Hangup } from './Hangup';
import { HangupAllOf } from './HangupAllOf';
import { IncomingNumberList } from './IncomingNumberList';
import { IncomingNumberListAllOf } from './IncomingNumberListAllOf';
import { IncomingNumberRequest } from './IncomingNumberRequest';
import { IncomingNumberResult } from './IncomingNumberResult';
import { IncomingNumberResultAllOf } from './IncomingNumberResultAllOf';
import { LogList } from './LogList';
import { LogListAllOf } from './LogListAllOf';
import { LogResult , LogResultLevelEnum        } from './LogResult';
import { MakeCallRequest } from './MakeCallRequest';
import { MessageRequest } from './MessageRequest';
import { MessageRequestAllOf } from './MessageRequestAllOf';
import { MessageResult      , MessageResultStatusEnum        } from './MessageResult';
import { MessageResultAllOf  , MessageResultAllOfStatusEnum        } from './MessageResultAllOf';
import { MessagesList } from './MessagesList';
import { MessagesListAllOf } from './MessagesListAllOf';
import { MutableResourceModel } from './MutableResourceModel';
import { OutDial } from './OutDial';
import { OutDialAllOf } from './OutDialAllOf';
import { PaginationModel } from './PaginationModel';
import { Park } from './Park';
import { ParkAllOf } from './ParkAllOf';
import { Pause } from './Pause';
import { PauseAllOf } from './PauseAllOf';
import { PerclCommand } from './PerclCommand';
import { PerclScript } from './PerclScript';
import { Play } from './Play';
import { PlayAllOf } from './PlayAllOf';
import { PlayEarlyMedia } from './PlayEarlyMedia';
import { PlayEarlyMediaAllOf } from './PlayEarlyMediaAllOf';
import { QueueList } from './QueueList';
import { QueueListAllOf } from './QueueListAllOf';
import { QueueMember } from './QueueMember';
import { QueueMemberList } from './QueueMemberList';
import { QueueMemberListAllOf } from './QueueMemberListAllOf';
import { QueueRequest } from './QueueRequest';
import { QueueResult } from './QueueResult';
import { QueueResultAllOf } from './QueueResultAllOf';
import { RecordUtterance } from './RecordUtterance';
import { RecordUtteranceAllOf } from './RecordUtteranceAllOf';
import { RecordingList } from './RecordingList';
import { RecordingListAllOf } from './RecordingListAllOf';
import { RecordingResult } from './RecordingResult';
import { RecordingResultAllOf } from './RecordingResultAllOf';
import { Redirect } from './Redirect';
import { RedirectAllOf } from './RedirectAllOf';
import { Reject } from './Reject';
import { RejectAllOf } from './RejectAllOf';
import { RemoveFromConference } from './RemoveFromConference';
import { RemoveFromConferenceAllOf } from './RemoveFromConferenceAllOf';
import { Say } from './Say';
import { SayAllOf } from './SayAllOf';
import { SendDigits } from './SendDigits';
import { SendDigitsAllOf } from './SendDigitsAllOf';
import { SetListen } from './SetListen';
import { SetListenAllOf } from './SetListenAllOf';
import { SetTalk } from './SetTalk';
import { SetTalkAllOf } from './SetTalkAllOf';
import { Sms } from './Sms';
import { SmsAllOf } from './SmsAllOf';
import { StartRecordCall } from './StartRecordCall';
import { TerminateConference } from './TerminateConference';
import { TerminateConferenceAllOf } from './TerminateConferenceAllOf';
import { Unpark } from './Unpark';
import { UpdateCallRequest, UpdateCallRequestStatusEnum   } from './UpdateCallRequest';
import { UpdateConferenceParticipantRequest } from './UpdateConferenceParticipantRequest';
import { UpdateConferenceRequest , UpdateConferenceRequestPlayBeepEnum  , UpdateConferenceRequestStatusEnum   } from './UpdateConferenceRequest';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "AccountResultTypeEnum",
    "AccountResultStatusEnum",
    "AccountResultAllOfTypeEnum",
    "AccountResultAllOfStatusEnum",
    "CallResultStatusEnum",
    "CallResultAllOfStatusEnum",
    "ConferenceResultPlayBeepEnum",
    "ConferenceResultStatusEnum",
    "ConferenceResultAllOfPlayBeepEnum",
    "ConferenceResultAllOfStatusEnum",
    "CreateConferenceRequestPlayBeepEnum",
    "LogResultLevelEnum",
    "MessageResultStatusEnum",
    "MessageResultAllOfStatusEnum",
    "UpdateCallRequestStatusEnum",
    "UpdateConferenceRequestPlayBeepEnum",
    "UpdateConferenceRequestStatusEnum",
]);

let typeMap: {[index: string]: any} = {
    "AccountRequest": AccountRequest,
    "AccountResult": AccountResult,
    "AccountResultAllOf": AccountResultAllOf,
    "AddToConference": AddToConference,
    "AddToConferenceAllOf": AddToConferenceAllOf,
    "ApplicationList": ApplicationList,
    "ApplicationListAllOf": ApplicationListAllOf,
    "ApplicationRequest": ApplicationRequest,
    "ApplicationResult": ApplicationResult,
    "ApplicationResultAllOf": ApplicationResultAllOf,
    "AvailableNumber": AvailableNumber,
    "AvailableNumberList": AvailableNumberList,
    "AvailableNumberListAllOf": AvailableNumberListAllOf,
    "BuyIncomingNumberRequest": BuyIncomingNumberRequest,
    "CallList": CallList,
    "CallListAllOf": CallListAllOf,
    "CallResult": CallResult,
    "CallResultAllOf": CallResultAllOf,
    "Capabilities": Capabilities,
    "ConferenceList": ConferenceList,
    "ConferenceListAllOf": ConferenceListAllOf,
    "ConferenceParticipantList": ConferenceParticipantList,
    "ConferenceParticipantListAllOf": ConferenceParticipantListAllOf,
    "ConferenceParticipantResult": ConferenceParticipantResult,
    "ConferenceParticipantResultAllOf": ConferenceParticipantResultAllOf,
    "ConferenceResult": ConferenceResult,
    "ConferenceResultAllOf": ConferenceResultAllOf,
    "CreateConference": CreateConference,
    "CreateConferenceAllOf": CreateConferenceAllOf,
    "CreateConferenceRequest": CreateConferenceRequest,
    "Dequeue": Dequeue,
    "Enqueue": Enqueue,
    "EnqueueAllOf": EnqueueAllOf,
    "FilterLogsRequest": FilterLogsRequest,
    "GetDigits": GetDigits,
    "GetDigitsAllOf": GetDigitsAllOf,
    "GetSpeech": GetSpeech,
    "GetSpeechAllOf": GetSpeechAllOf,
    "Hangup": Hangup,
    "HangupAllOf": HangupAllOf,
    "IncomingNumberList": IncomingNumberList,
    "IncomingNumberListAllOf": IncomingNumberListAllOf,
    "IncomingNumberRequest": IncomingNumberRequest,
    "IncomingNumberResult": IncomingNumberResult,
    "IncomingNumberResultAllOf": IncomingNumberResultAllOf,
    "LogList": LogList,
    "LogListAllOf": LogListAllOf,
    "LogResult": LogResult,
    "MakeCallRequest": MakeCallRequest,
    "MessageRequest": MessageRequest,
    "MessageRequestAllOf": MessageRequestAllOf,
    "MessageResult": MessageResult,
    "MessageResultAllOf": MessageResultAllOf,
    "MessagesList": MessagesList,
    "MessagesListAllOf": MessagesListAllOf,
    "MutableResourceModel": MutableResourceModel,
    "OutDial": OutDial,
    "OutDialAllOf": OutDialAllOf,
    "PaginationModel": PaginationModel,
    "Park": Park,
    "ParkAllOf": ParkAllOf,
    "Pause": Pause,
    "PauseAllOf": PauseAllOf,
    "PerclCommand": PerclCommand,
    "PerclScript": PerclScript,
    "Play": Play,
    "PlayAllOf": PlayAllOf,
    "PlayEarlyMedia": PlayEarlyMedia,
    "PlayEarlyMediaAllOf": PlayEarlyMediaAllOf,
    "QueueList": QueueList,
    "QueueListAllOf": QueueListAllOf,
    "QueueMember": QueueMember,
    "QueueMemberList": QueueMemberList,
    "QueueMemberListAllOf": QueueMemberListAllOf,
    "QueueRequest": QueueRequest,
    "QueueResult": QueueResult,
    "QueueResultAllOf": QueueResultAllOf,
    "RecordUtterance": RecordUtterance,
    "RecordUtteranceAllOf": RecordUtteranceAllOf,
    "RecordingList": RecordingList,
    "RecordingListAllOf": RecordingListAllOf,
    "RecordingResult": RecordingResult,
    "RecordingResultAllOf": RecordingResultAllOf,
    "Redirect": Redirect,
    "RedirectAllOf": RedirectAllOf,
    "Reject": Reject,
    "RejectAllOf": RejectAllOf,
    "RemoveFromConference": RemoveFromConference,
    "RemoveFromConferenceAllOf": RemoveFromConferenceAllOf,
    "Say": Say,
    "SayAllOf": SayAllOf,
    "SendDigits": SendDigits,
    "SendDigitsAllOf": SendDigitsAllOf,
    "SetListen": SetListen,
    "SetListenAllOf": SetListenAllOf,
    "SetTalk": SetTalk,
    "SetTalkAllOf": SetTalkAllOf,
    "Sms": Sms,
    "SmsAllOf": SmsAllOf,
    "StartRecordCall": StartRecordCall,
    "TerminateConference": TerminateConference,
    "TerminateConferenceAllOf": TerminateConferenceAllOf,
    "Unpark": Unpark,
    "UpdateCallRequest": UpdateCallRequest,
    "UpdateConferenceParticipantRequest": UpdateConferenceParticipantRequest,
    "UpdateConferenceRequest": UpdateConferenceRequest,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type](data);
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
