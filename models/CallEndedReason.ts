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

import { HttpFile } from "../http/http";

/**
 * Enhanced status for the Call with additional information where available.
 */
export enum CallEndedReason {
  BUSY = "busy",
  FAILED = "failed",
  NO_ANSWER = "noAnswer",
  CALL_CANCELED = "callCanceled",
  FAR_END_HANGUP = "farEndHangup",
  APP_HANGUP = "appHangup",
  APP_REJECT = "appReject",
  APP_NO_PERCL = "appNoPercl",
  APP_INVALID_PERCL = "appInvalidPercl",
  CONFERENCE_TERMINATED = "conferenceTerminated",
  CONFERENCE_EMPTIED = "conferenceEmptied",
  REMOVED_FROM_CONFERENCE = "removedFromConference",
  MACHINE_DETECTED = "machineDetected",
  WEBHOOK_FAILED = "webhookFailed",
  WEBHOOK_INVALID_RESPONSE = "webhookInvalidResponse",
  VOICE_DISABLED = "voiceDisabled",
  CONFIG_ERROR_NO_APPLICATION = "configErrorNoApplication",
  CONFIG_ERROR_NO_VOICE_URL = "configErrorNoVoiceUrl",
  MAX_REDIRECTS_ERROR = "maxRedirectsError",
  PERCL_PROCESSING_ERROR = "perclProcessingError",
  INTERNAL_ERROR = "internalError",
  GRPC_HANGUP = "grpcHangup",
  MAX_DURATION = "maxDuration",
}
