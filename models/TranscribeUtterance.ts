/**
 * FreeClimb API
 * FreeClimb is a cloud-based application programming interface (API) that puts the power of the Vail platform in your hands. FreeClimb simplifies the process of creating applications that can use a full range of telephony features without requiring specialized or on-site telephony equipment. Using the FreeClimb REST API to write applications is easy! You have the option to use the language of your choice or hit the API directly. Your application can execute a command by issuing a RESTful request to the FreeClimb API. The base URL to send HTTP requests to the FreeClimb REST API is: /apiserver. FreeClimb authenticates and processes your request.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@freeclimb.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TranscribeUtteranceRecord } from './TranscribeUtteranceRecord';
import { HttpFile } from '../http/http';

/**
* The `TranscribeUtterance` command transcribes the caller’s voice and returns transcription of the audio and optionally returns the recording of the audio transcribed.  `TranscribeUtterance` is blocking and is a terminal command. As such, the actionUrl property is required, and control of the Call picks up using the `PerCL` returned in response of the `actionUrl`. Recording and Transcription information is returned in the actionUrl request. If the reason this command ended was due to the call hanging up, any PerCL returned will not execute.
*/

interface AttributeType {
    name: string
    baseName: string
    type: string
    format: string
    defaultValue: any
}
interface ArgumentsType {
    'actionUrl': string;
    'playBeep'?: boolean;
    'record'?: TranscribeUtteranceRecord;
    'privacyForLogging'?: boolean;
    'privacyForRecording'?: boolean;
    'prompts'?: Array<any>;
}
export class TranscribeUtterance {
    'actionUrl': string;
    'playBeep'?: boolean;
    'record'?: TranscribeUtteranceRecord;
    'privacyForLogging'?: boolean;
    'privacyForRecording'?: boolean;
    'prompts'?: Array<any>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: AttributeType[] = [
        {
            "name": "actionUrl",
            "baseName": "actionUrl",
            "type": "string",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "playBeep",
            "baseName": "playBeep",
            "type": "boolean",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "record",
            "baseName": "record",
            "type": "TranscribeUtteranceRecord",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "privacyForLogging",
            "baseName": "privacyForLogging",
            "type": "boolean",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "privacyForRecording",
            "baseName": "privacyForRecording",
            "type": "boolean",
            "format": "",

            
            "defaultValue": undefined
        },
        {
            "name": "prompts",
            "baseName": "prompts",
            "type": "Array<any>",
            "format": "",

            
            "defaultValue": undefined
        }    ];

    static getAttributeTypeMap(): AttributeType[] {
        return TranscribeUtterance.attributeTypeMap;
    }

    public constructor(args: ArgumentsType) {
        const preparedArgs = TranscribeUtterance.attributeTypeMap.reduce((acc: Partial<ArgumentsType>, attr: AttributeType) => {
            const val = args[attr.name as keyof ArgumentsType] ?? attr.defaultValue
            if (val !== undefined) {
                acc[attr.name as keyof ArgumentsType] = val
            }
            return acc
        }, {})
        Object.assign(this, preparedArgs)
    }
}
