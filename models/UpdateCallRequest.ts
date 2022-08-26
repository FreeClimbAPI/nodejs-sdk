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

import { HttpFile } from '../http/http';

export enum UpdateCallRequestStatusEnum {

    CANCELED = 'canceled',
    COMPLETED = 'completed'
}
export class UpdateCallRequest {
    /**
    * Either `canceled` or `completed`.  Specifying `canceled` attempts to hang up calls that are queued without affecting calls already in progress. Specifying `completed` attempts to hang up a call already in progress.
    */
    'status': UpdateCallRequestStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string, defaultValue: any}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UpdateCallRequestStatusEnum",
            "format": "",
            
            
            "defaultValue": undefined

        }    ];

    static getAttributeTypeMap() {
        return UpdateCallRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
