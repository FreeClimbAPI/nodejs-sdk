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

import { CallDirection } from "./../models/CallDirection";
import { CallStatus } from "./../models/CallStatus";
import { MachineType } from "./../models/MachineType";
import { Webhook } from "./../models/Webhook";
import { HttpFile } from "../http/http";

/**
 * An outbound call spawned by OutDial detected an answer by a machine (answering machine or fax/modem machine) and ifMachineUrl is being invoked. A PerCL response is expected.
 */

interface AttributeType {
  name: string;
  baseName: string;
  type: string;
  format: string;
  defaultValue: any;
}
interface ArgumentsType {
  requestType?: string;
  callId?: string;
  accountId?: string;
  from?: string;
  to?: string;
  callStatus?: CallStatus;
  direction?: CallDirection;
  conferenceId?: string;
  queueId?: string;
  parentCallId?: string;
  machineType?: MachineType;
}
export class MachineDetectedWebhook extends Webhook {
  /**
   * Context or reason why this request is being made. Will be machineDetected - An outbound call spawned by OutDial was answered by a machine and the ifMachineUrl is being invoked.
   */
  "requestType"?: string;
  /**
   * Unique ID for this Call, generated by FreeClimb.
   */
  "callId"?: string;
  /**
   * Account ID associated with your account.
   */
  "accountId"?: string;
  /**
   * Phone number of the party that initiated the Call (in E.164 format).
   */
  "from"?: string;
  /**
   * Phone number provisioned to you and to which this Call is directed (in E.164 format).
   */
  "to"?: string;
  "callStatus"?: CallStatus;
  "direction"?: CallDirection;
  /**
   * This is only populated if request pertains to a Conference. Otherwise, it is set to null.
   */
  "conferenceId"?: string;
  /**
   * This is only populated if the request pertains to a Queue. Otherwise, it is set to null.
   */
  "queueId"?: string;
  /**
   * Call ID of the leg which initiated the OutDial.
   */
  "parentCallId"?: string;
  "machineType"?: MachineType;

  static readonly discriminator: string | undefined = "requestType";

  static readonly attributeTypeMap: AttributeType[] = [
    {
      name: "requestType",
      baseName: "requestType",
      type: "string",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "callId",
      baseName: "callId",
      type: "string",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "accountId",
      baseName: "accountId",
      type: "string",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "from",
      baseName: "from",
      type: "string",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "to",
      baseName: "to",
      type: "string",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "callStatus",
      baseName: "callStatus",
      type: "CallStatus",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "direction",
      baseName: "direction",
      type: "CallDirection",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "conferenceId",
      baseName: "conferenceId",
      type: "string",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "queueId",
      baseName: "queueId",
      type: "string",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "parentCallId",
      baseName: "parentCallId",
      type: "string",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "machineType",
      baseName: "machineType",
      type: "MachineType",
      format: "",

      defaultValue: undefined,
    },
  ];

  static getAttributeTypeMap(): AttributeType[] {
    return super
      .getAttributeTypeMap()
      .concat(MachineDetectedWebhook.attributeTypeMap);
  }
  public constructor(args: ArgumentsType) {
    super({ requestType: "machineDetected" });
    const assign = <T>(attribute: keyof ArgumentsType): T => {
      return (args[attribute] ??
        MachineDetectedWebhook.attributeTypeMap.find(
          (attr) => attr.name === attribute,
        )?.defaultValue) as T;
    };
    if (args["requestType"]) {
      this["requestType"] = assign<string>("requestType");
    }
    if (args["callId"]) {
      this["callId"] = assign<string>("callId");
    }
    if (args["accountId"]) {
      this["accountId"] = assign<string>("accountId");
    }
    if (args["from"]) {
      this["from"] = assign<string>("from");
    }
    if (args["to"]) {
      this["to"] = assign<string>("to");
    }
    if (args["callStatus"]) {
      this["callStatus"] = assign<CallStatus>("callStatus");
    }
    if (args["direction"]) {
      this["direction"] = assign<CallDirection>("direction");
    }
    if (args["conferenceId"]) {
      this["conferenceId"] = assign<string>("conferenceId");
    }
    if (args["queueId"]) {
      this["queueId"] = assign<string>("queueId");
    }
    if (args["parentCallId"]) {
      this["parentCallId"] = assign<string>("parentCallId");
    }
    if (args["machineType"]) {
      this["machineType"] = assign<MachineType>("machineType");
    }
  }
  public static deserialize(payload: string): MachineDetectedWebhook {
    return new MachineDetectedWebhook(JSON.parse(payload));
  }
}