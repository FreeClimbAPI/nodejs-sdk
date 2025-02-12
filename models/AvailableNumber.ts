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

import { Capabilities } from "./../models/Capabilities";
import { HttpFile } from "../http/http";

interface AttributeType {
  name: string;
  baseName: string;
  type: string;
  format: string;
  defaultValue: any;
}
interface ArgumentsType {
  capabilities?: Capabilities;
  campaignId?: string;
  phoneNumber?: string;
  voiceEnabled?: boolean;
  smsEnabled?: boolean;
  region?: string;
  country?: string;
}
export class AvailableNumber {
  "capabilities"?: Capabilities;
  /**
   * The campaign ID generated by the campaign registry
   */
  "campaignId"?: string;
  /**
   * The phone number, in E.164 format (+ country code and phone number: +18003608245).
   */
  "phoneNumber"?: string;
  /**
   * Typically set to true for all numbers.
   */
  "voiceEnabled"?: boolean;
  /**
   * Indicates whether the phone number can send and receive SMS messages.
   */
  "smsEnabled"?: boolean;
  /**
   * The state or province of this phone number.
   */
  "region"?: string;
  /**
   * The country of this phone number.
   */
  "country"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: AttributeType[] = [
    {
      name: "capabilities",
      baseName: "capabilities",
      type: "Capabilities",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "campaignId",
      baseName: "campaignId",
      type: "string",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "phoneNumber",
      baseName: "phoneNumber",
      type: "string",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "voiceEnabled",
      baseName: "voiceEnabled",
      type: "boolean",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "smsEnabled",
      baseName: "smsEnabled",
      type: "boolean",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "region",
      baseName: "region",
      type: "string",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "country",
      baseName: "country",
      type: "string",
      format: "",

      defaultValue: undefined,
    },
  ];

  static getAttributeTypeMap(): AttributeType[] {
    return AvailableNumber.attributeTypeMap;
  }
  public constructor(args: ArgumentsType) {
    const assign = <T>(attribute: keyof ArgumentsType): T => {
      return (args[attribute] ??
        AvailableNumber.attributeTypeMap.find((attr) => attr.name === attribute)
          ?.defaultValue) as T;
    };
    if (args["capabilities"]) {
      this["capabilities"] = assign<Capabilities>("capabilities");
    }
    if (args["campaignId"]) {
      this["campaignId"] = assign<string>("campaignId");
    }
    if (args["phoneNumber"]) {
      this["phoneNumber"] = assign<string>("phoneNumber");
    }
    if (args["voiceEnabled"]) {
      this["voiceEnabled"] = assign<boolean>("voiceEnabled");
    }
    if (args["smsEnabled"]) {
      this["smsEnabled"] = assign<boolean>("smsEnabled");
    }
    if (args["region"]) {
      this["region"] = assign<string>("region");
    }
    if (args["country"]) {
      this["country"] = assign<string>("country");
    }
  }
}
