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

import { PerclCommand } from "./../models/PerclCommand";
import { HttpFile } from "../http/http";

/**
 * The `Park` command allows a caller to be put on hold.  You can provide hold music,messages,etc until ready to resume the call. Park is a terminal command.  Actions performed on the Call while on hold are provided in a PerCL script in response to the waitUrl property. Actions performed on the Call after it has been unparked (resumed) will be provided in a PerCL script in response to the actionUrl provided. A Call can be resumed in two ways -- REST API invocation or the Unpark percl command. No actions can be nested within Park and Park cannot be nested in any other actions.
 */

interface AttributeType {
  name: string;
  baseName: string;
  type: string;
  format: string;
  defaultValue: any;
}
interface ArgumentsType {
  waitUrl: string;
  actionUrl: string;
  notificationUrl?: string;
}
export class Park extends PerclCommand {
  /**
   * Specifies a URL pointing to a PerCL script containing actions to be executed while the caller is Parked. Once the script returned by the waitUrl runs out of commands to execute, FreeClimb will re-request the waitUrl and start over, essentially looping the script requests indefinitely.
   */
  "waitUrl": string;
  /**
   * A request is made to this URL when the Call is resumed, which can occur if the Call is resumed via the Unpark command, the REST API (POST to Call resource), or the caller hangs up. The PerCL script returned in response to the actionUrl will be executed on the resumed call.
   */
  "actionUrl": string;
  /**
   * URL to be invoked when the Call is parked. The request to the URL contains the standard request parameters.
   */
  "notificationUrl"?: string;

  static readonly discriminator: string | undefined = "command";

  static readonly attributeTypeMap: AttributeType[] = [
    {
      name: "waitUrl",
      baseName: "waitUrl",
      type: "string",
      format: "uri",

      defaultValue: undefined,
    },
    {
      name: "actionUrl",
      baseName: "actionUrl",
      type: "string",
      format: "uri",

      defaultValue: undefined,
    },
    {
      name: "notificationUrl",
      baseName: "notificationUrl",
      type: "string",
      format: "uri",

      defaultValue: undefined,
    },
  ];

  static getAttributeTypeMap(): AttributeType[] {
    return super.getAttributeTypeMap().concat(Park.attributeTypeMap);
  }
  public constructor(args: ArgumentsType) {
    super({ command: "Park" });
    const assign = <T>(attribute: keyof ArgumentsType): T => {
      return (args[attribute] ??
        Park.attributeTypeMap.find((attr) => attr.name === attribute)
          ?.defaultValue) as T;
    };
    if (args["waitUrl"]) {
      this["waitUrl"] = assign<string>("waitUrl");
    }
    if (args["actionUrl"]) {
      this["actionUrl"] = assign<string>("actionUrl");
    }
    if (args["notificationUrl"]) {
      this["notificationUrl"] = assign<string>("notificationUrl");
    }
  }
}
