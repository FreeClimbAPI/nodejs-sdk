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

import { PlayBeep } from "./../models/PlayBeep";
import { HttpFile } from "../http/http";

interface AttributeType {
  name: string;
  baseName: string;
  type: string;
  format: string;
  defaultValue: any;
}
interface ArgumentsType {
  alias?: string;
  playBeep?: PlayBeep;
  record?: boolean;
  waitUrl?: string;
  statusCallbackUrl: string;
}
export class CreateConferenceRequest {
  /**
   * A description for this Conference. Maximum 64 characters.
   */
  "alias"?: string;
  "playBeep"?: PlayBeep;
  /**
   * Setting to `true` records the entire Conference.
   */
  "record"?: boolean;
  /**
   * If specified, a URL for the audio file that provides custom hold music for the Conference when it is in the populated state. Otherwise, FreeClimb uses a system default audio file. This is always fetched using HTTP GET and is fetched just once &mdash; when the Conference is created.
   */
  "waitUrl"?: string;
  /**
   * This URL is invoked when the status of the Conference changes. For more information, see **statusCallbackUrl** (below).
   */
  "statusCallbackUrl": string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: AttributeType[] = [
    {
      name: "alias",
      baseName: "alias",
      type: "string",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "playBeep",
      baseName: "playBeep",
      type: "PlayBeep",
      format: "",

      defaultValue: PlayBeep.ALWAYS,
    },
    {
      name: "record",
      baseName: "record",
      type: "boolean",
      format: "",

      defaultValue: undefined,
    },
    {
      name: "waitUrl",
      baseName: "waitUrl",
      type: "string",
      format: "uri",

      defaultValue: undefined,
    },
    {
      name: "statusCallbackUrl",
      baseName: "statusCallbackUrl",
      type: "string",
      format: "uri",

      defaultValue: undefined,
    },
  ];

  static getAttributeTypeMap(): AttributeType[] {
    return CreateConferenceRequest.attributeTypeMap;
  }
  public constructor(args: ArgumentsType) {
    const assign = <T>(attribute: keyof ArgumentsType): T => {
      return (args[attribute] ??
        CreateConferenceRequest.attributeTypeMap.find(
          (attr) => attr.name === attribute,
        )?.defaultValue) as T;
    };
    if (args["alias"]) {
      this["alias"] = assign<string>("alias");
    }
    if (args["playBeep"]) {
      this["playBeep"] = assign<PlayBeep>("playBeep");
    }
    if (args["record"]) {
      this["record"] = assign<boolean>("record");
    }
    if (args["waitUrl"]) {
      this["waitUrl"] = assign<string>("waitUrl");
    }
    if (args["statusCallbackUrl"]) {
      this["statusCallbackUrl"] = assign<string>("statusCallbackUrl");
    }
  }
}
