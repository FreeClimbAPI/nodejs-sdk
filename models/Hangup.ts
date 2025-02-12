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
 * The `Hangup` command terminates a Call. If `Hangup` is used as the first action in a PerCL response, it does not prevent FreeClimb from answering the Call and billing your account. See the `Reject` command to hang up at no charge.
 */

interface AttributeType {
  name: string;
  baseName: string;
  type: string;
  format: string;
  defaultValue: any;
}
interface ArgumentsType {
  reason?: string;
}
export class Hangup extends PerclCommand {
  /**
   * The user defined reason for the hangup. In general, applications should use a set of enumerated values that are predefined to cover all exit points of the Call flows for the given application.
   */
  "reason"?: string;

  static readonly discriminator: string | undefined = "command";

  static readonly attributeTypeMap: AttributeType[] = [
    {
      name: "reason",
      baseName: "reason",
      type: "string",
      format: "",

      defaultValue: undefined,
    },
  ];

  static getAttributeTypeMap(): AttributeType[] {
    return super.getAttributeTypeMap().concat(Hangup.attributeTypeMap);
  }
  public constructor(args: ArgumentsType) {
    super({ command: "Hangup" });
    const assign = <T>(attribute: keyof ArgumentsType): T => {
      return (args[attribute] ??
        Hangup.attributeTypeMap.find((attr) => attr.name === attribute)
          ?.defaultValue) as T;
    };
    if (args["reason"]) {
      this["reason"] = assign<string>("reason");
    }
  }
}
