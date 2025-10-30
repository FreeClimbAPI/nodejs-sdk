// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import { Configuration } from "../configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
  HttpFile,
} from "../http/http";
import * as FormData from "form-data";
import { URLSearchParams } from "url";
import { ObjectSerializer, PaginationModel } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { canConsumeForm, isCodeInRange } from "../util";
import { SecurityAuthentication } from "../auth/auth";

import { AccountRequest } from "../models/AccountRequest";
import { AccountResult } from "../models/AccountResult";
import { ApplicationList } from "../models/ApplicationList";
import { ApplicationRequest } from "../models/ApplicationRequest";
import { ApplicationResult } from "../models/ApplicationResult";
import { AvailableNumberList } from "../models/AvailableNumberList";
import { BlobListResponse } from "../models/BlobListResponse";
import { BlobResult } from "../models/BlobResult";
import { BuyIncomingNumberRequest } from "../models/BuyIncomingNumberRequest";
import { CallList } from "../models/CallList";
import { CallResult } from "../models/CallResult";
import { CallStatus } from "../models/CallStatus";
import { CompletionRequest } from "../models/CompletionRequest";
import { CompletionResult } from "../models/CompletionResult";
import { ConferenceList } from "../models/ConferenceList";
import { ConferenceParticipantList } from "../models/ConferenceParticipantList";
import { ConferenceParticipantResult } from "../models/ConferenceParticipantResult";
import { ConferenceResult } from "../models/ConferenceResult";
import { CreateBlobRequest } from "../models/CreateBlobRequest";
import { CreateConferenceRequest } from "../models/CreateConferenceRequest";
import { CreateWebRTCToken } from "../models/CreateWebRTCToken";
import { ExportList } from "../models/ExportList";
import { ExportRequest } from "../models/ExportRequest";
import { ExportResult } from "../models/ExportResult";
import { ExportStatus } from "../models/ExportStatus";
import { FilterLogsRequest } from "../models/FilterLogsRequest";
import { IncomingNumberList } from "../models/IncomingNumberList";
import { IncomingNumberRequest } from "../models/IncomingNumberRequest";
import { IncomingNumberResult } from "../models/IncomingNumberResult";
import { LogList } from "../models/LogList";
import { MakeCallRequest } from "../models/MakeCallRequest";
import { MessageDirection } from "../models/MessageDirection";
import { MessageRequest } from "../models/MessageRequest";
import { MessageResult } from "../models/MessageResult";
import { MessagesList } from "../models/MessagesList";
import { ModifyBlobRequest } from "../models/ModifyBlobRequest";
import { PlatformError } from "../models/PlatformError";
import { QueueList } from "../models/QueueList";
import { QueueMember } from "../models/QueueMember";
import { QueueMemberList } from "../models/QueueMemberList";
import { QueueRequest } from "../models/QueueRequest";
import { QueueResult } from "../models/QueueResult";
import { RecordingList } from "../models/RecordingList";
import { RecordingResult } from "../models/RecordingResult";
import { ReplaceBlobRequest } from "../models/ReplaceBlobRequest";
import { SMSTenDLCBrand } from "../models/SMSTenDLCBrand";
import { SMSTenDLCBrandsListResult } from "../models/SMSTenDLCBrandsListResult";
import { SMSTenDLCCampaign } from "../models/SMSTenDLCCampaign";
import { SMSTenDLCCampaignsListResult } from "../models/SMSTenDLCCampaignsListResult";
import { SMSTenDLCPartnerCampaign } from "../models/SMSTenDLCPartnerCampaign";
import { SMSTenDLCPartnerCampaignsListResult } from "../models/SMSTenDLCPartnerCampaignsListResult";
import { SMSTollFreeCampaign } from "../models/SMSTollFreeCampaign";
import { SMSTollFreeCampaignsListResult } from "../models/SMSTollFreeCampaignsListResult";
import { UpdateCallRequest } from "../models/UpdateCallRequest";
import { UpdateConferenceParticipantRequest } from "../models/UpdateConferenceParticipantRequest";
import { UpdateConferenceRequest } from "../models/UpdateConferenceRequest";

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {
  /**
     * Buy a Phone Number
     
     * @param buyIncomingNumberRequest Incoming Number transaction details
     */
  public async buyAPhoneNumber(
    buyIncomingNumberRequest: BuyIncomingNumberRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'buyIncomingNumberRequest' is not null or undefined
    if (
      buyIncomingNumberRequest === null ||
      buyIncomingNumberRequest === undefined
    ) {
      throw new RequiredError(
        "DefaultApi",
        "buyAPhoneNumber",
        "buyIncomingNumberRequest",
      );
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/IncomingPhoneNumbers".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        buyIncomingNumberRequest,
        "BuyIncomingNumberRequest",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Create a Conference
     
     * @param createConferenceRequest Conference to create
     */
  public async createAConference(
    createConferenceRequest?: CreateConferenceRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}/Conferences".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        createConferenceRequest,
        "CreateConferenceRequest",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Create a Queue
     
     * @param queueRequest Queue details used to create a queue
     */
  public async createAQueue(
    queueRequest?: QueueRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}/Queues".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(queueRequest, "QueueRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Create an application
     
     * @param applicationRequest Application Details
     */
  public async createAnApplication(
    applicationRequest?: ApplicationRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}/Applications".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(applicationRequest, "ApplicationRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Create a new Blob belonging to the requesting account.
     * Create a Blob
     
     * @param createBlobRequest An object defining a new blob. A request body must be provided but the blob may be empty.
     */
  public async createBlob(
    createBlobRequest: CreateBlobRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'createBlobRequest' is not null or undefined
    if (createBlobRequest === null || createBlobRequest === undefined) {
      throw new RequiredError("DefaultApi", "createBlob", "createBlobRequest");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Blobs".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(createBlobRequest, "CreateBlobRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Create an Export
     
     * @param exportRequest A JSON object containing export creation parameters
     */
  public async createExport(
    exportRequest?: ExportRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}/Exports".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(exportRequest, "ExportRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Query the knowledge base
     
     * @param knowledgeBaseId A string that uniquely identifies the KnowledgeBase resource.
     * @param completionRequest Completion request details
     */
  public async createKnowledgeBaseCompletion(
    knowledgeBaseId: string,
    completionRequest?: CompletionRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'knowledgeBaseId' is not null or undefined
    if (knowledgeBaseId === null || knowledgeBaseId === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "createKnowledgeBaseCompletion",
        "knowledgeBaseId",
      );
    }
    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/KnowledgeBases/{knowledgeBaseId}/Completion"
        .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
        .replace(
          "{" + "knowledgeBaseId" + "}",
          encodeURIComponent(String(knowledgeBaseId)),
        );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(completionRequest, "CompletionRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Delete a Recording
     
     * @param recordingId String that uniquely identifies this recording resource.
     */
  public async deleteARecording(
    recordingId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'recordingId' is not null or undefined
    if (recordingId === null || recordingId === undefined) {
      throw new RequiredError("DefaultApi", "deleteARecording", "recordingId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Recordings/{recordingId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace(
        "{" + "recordingId" + "}",
        encodeURIComponent(String(recordingId)),
      );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Delete an application
     
     * @param applicationId String that uniquely identifies this application resource.
     */
  public async deleteAnApplication(
    applicationId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'applicationId' is not null or undefined
    if (applicationId === null || applicationId === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "deleteAnApplication",
        "applicationId",
      );
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Applications/{applicationId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace(
        "{" + "applicationId" + "}",
        encodeURIComponent(String(applicationId)),
      );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Delete an Export
     
     * @param exportId A string that uniquely identifies this export resource.
     */
  public async deleteAnExport(
    exportId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'exportId' is not null or undefined
    if (exportId === null || exportId === undefined) {
      throw new RequiredError("DefaultApi", "deleteAnExport", "exportId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Exports/{exportId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "exportId" + "}", encodeURIComponent(String(exportId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Delete an Incoming Number
     
     * @param phoneNumberId String that uniquely identifies this phone number resource.
     */
  public async deleteAnIncomingNumber(
    phoneNumberId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'phoneNumberId' is not null or undefined
    if (phoneNumberId === null || phoneNumberId === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "deleteAnIncomingNumber",
        "phoneNumberId",
      );
    }
    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/IncomingPhoneNumbers/{phoneNumberId}"
        .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
        .replace(
          "{" + "phoneNumberId" + "}",
          encodeURIComponent(String(phoneNumberId)),
        );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Deletes a blob or specific keys from a blob. If no keys are specified in the request body, the entire blob is deleted (returns 204). If specific keys are provided, only those keys are removed and the remaining blob is returned (returns 200).
     * Delete Blob
     
     * @param blobId String that uniquely identifies this Blob resource.
     */
  public async deleteBlob(
    blobId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'blobId' is not null or undefined
    if (blobId === null || blobId === undefined) {
      throw new RequiredError("DefaultApi", "deleteBlob", "blobId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Blobs/{blobId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "blobId" + "}", encodeURIComponent(String(blobId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Dequeue a Member
     
     * @param queueId String that uniquely identifies the Queue that the Member belongs to.
     * @param callId ID if the Call that the Member belongs to
     */
  public async dequeueAMember(
    queueId: string,
    callId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError("DefaultApi", "dequeueAMember", "queueId");
    }
    // verify required parameter 'callId' is not null or undefined
    if (callId === null || callId === undefined) {
      throw new RequiredError("DefaultApi", "dequeueAMember", "callId");
    }
    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/Queues/{queueId}/Members/{callId}"
        .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
        .replace("{" + "queueId" + "}", encodeURIComponent(String(queueId)))
        .replace("{" + "callId" + "}", encodeURIComponent(String(callId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Dequeue Head Member
     
     * @param queueId String that uniquely identifies this queue resource.
     */
  public async dequeueHeadMember(
    queueId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError("DefaultApi", "dequeueHeadMember", "queueId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Queues/{queueId}/Members/Front"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "queueId" + "}", encodeURIComponent(String(queueId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Download a Recording File
     
     * @param recordingId String that uniquely identifies this recording resource.
     */
  public async downloadARecordingFile(
    recordingId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'recordingId' is not null or undefined
    if (recordingId === null || recordingId === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "downloadARecordingFile",
        "recordingId",
      );
    }
    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/Recordings/{recordingId}/Download"
        .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
        .replace(
          "{" + "recordingId" + "}",
          encodeURIComponent(String(recordingId)),
        );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Download an Export
     
     * @param exportId A string that uniquely identifies this export resource.
     */
  public async downloadAnExport(
    exportId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'exportId' is not null or undefined
    if (exportId === null || exportId === undefined) {
      throw new RequiredError("DefaultApi", "downloadAnExport", "exportId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Exports/{exportId}/Download"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "exportId" + "}", encodeURIComponent(String(exportId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Filter Logs
     
     * @param filterLogsRequest Filter logs request paramters
     */
  public async filterLogs(
    filterLogsRequest: FilterLogsRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'filterLogsRequest' is not null or undefined
    if (filterLogsRequest === null || filterLogsRequest === undefined) {
      throw new RequiredError("DefaultApi", "filterLogs", "filterLogsRequest");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Logs".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(filterLogsRequest, "FilterLogsRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get a Call
     
     * @param callId String that uniquely identifies this call resource.
     */
  public async getACall(
    callId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'callId' is not null or undefined
    if (callId === null || callId === undefined) {
      throw new RequiredError("DefaultApi", "getACall", "callId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Calls/{callId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "callId" + "}", encodeURIComponent(String(callId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get a Conference
     
     * @param conferenceId A string that uniquely identifies this conference resource.
     */
  public async getAConference(
    conferenceId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'conferenceId' is not null or undefined
    if (conferenceId === null || conferenceId === undefined) {
      throw new RequiredError("DefaultApi", "getAConference", "conferenceId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Conferences/{conferenceId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace(
        "{" + "conferenceId" + "}",
        encodeURIComponent(String(conferenceId)),
      );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get a Member
     
     * @param queueId String that uniquely identifies the Queue that the Member belongs to.
     * @param callId ID of the Call that the Member belongs to
     */
  public async getAMember(
    queueId: string,
    callId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError("DefaultApi", "getAMember", "queueId");
    }
    // verify required parameter 'callId' is not null or undefined
    if (callId === null || callId === undefined) {
      throw new RequiredError("DefaultApi", "getAMember", "callId");
    }
    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/Queues/{queueId}/Members/{callId}"
        .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
        .replace("{" + "queueId" + "}", encodeURIComponent(String(queueId)))
        .replace("{" + "callId" + "}", encodeURIComponent(String(callId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get a Participant
     
     * @param conferenceId ID of the conference this participant is in.
     * @param callId ID of the Call associated with this participant.
     */
  public async getAParticipant(
    conferenceId: string,
    callId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'conferenceId' is not null or undefined
    if (conferenceId === null || conferenceId === undefined) {
      throw new RequiredError("DefaultApi", "getAParticipant", "conferenceId");
    }
    // verify required parameter 'callId' is not null or undefined
    if (callId === null || callId === undefined) {
      throw new RequiredError("DefaultApi", "getAParticipant", "callId");
    }
    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/Conferences/{conferenceId}/Participants/{callId}"
        .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
        .replace(
          "{" + "conferenceId" + "}",
          encodeURIComponent(String(conferenceId)),
        )
        .replace("{" + "callId" + "}", encodeURIComponent(String(callId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get a Queue
     
     * @param queueId A string that uniquely identifies this queue resource.
     */
  public async getAQueue(
    queueId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError("DefaultApi", "getAQueue", "queueId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Queues/{queueId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "queueId" + "}", encodeURIComponent(String(queueId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get a Recording
     
     * @param recordingId String that uniquely identifies this recording resource.
     */
  public async getARecording(
    recordingId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'recordingId' is not null or undefined
    if (recordingId === null || recordingId === undefined) {
      throw new RequiredError("DefaultApi", "getARecording", "recordingId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Recordings/{recordingId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace(
        "{" + "recordingId" + "}",
        encodeURIComponent(String(recordingId)),
      );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get an Account
     
     */
  public async getAnAccount(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get an Application
     
     * @param applicationId A string that uniquely identifies this application resource.
     */
  public async getAnApplication(
    applicationId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'applicationId' is not null or undefined
    if (applicationId === null || applicationId === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "getAnApplication",
        "applicationId",
      );
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Applications/{applicationId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace(
        "{" + "applicationId" + "}",
        encodeURIComponent(String(applicationId)),
      );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get an Export
     
     * @param exportId A string that uniquely identifies this export resource.
     */
  public async getAnExport(
    exportId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'exportId' is not null or undefined
    if (exportId === null || exportId === undefined) {
      throw new RequiredError("DefaultApi", "getAnExport", "exportId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Exports/{exportId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "exportId" + "}", encodeURIComponent(String(exportId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get an Incoming Number
     
     * @param phoneNumberId String that uniquely identifies this phone number resource.
     */
  public async getAnIncomingNumber(
    phoneNumberId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'phoneNumberId' is not null or undefined
    if (phoneNumberId === null || phoneNumberId === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "getAnIncomingNumber",
        "phoneNumberId",
      );
    }
    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/IncomingPhoneNumbers/{phoneNumberId}"
        .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
        .replace(
          "{" + "phoneNumberId" + "}",
          encodeURIComponent(String(phoneNumberId)),
        );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get an SMS Message
     
     * @param messageId String that uniquely identifies this Message resource.
     */
  public async getAnSmsMessage(
    messageId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'messageId' is not null or undefined
    if (messageId === null || messageId === undefined) {
      throw new RequiredError("DefaultApi", "getAnSmsMessage", "messageId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Messages/{messageId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "messageId" + "}", encodeURIComponent(String(messageId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Retrieves a specified blob
     * Get Blob
     
     * @param blobId String that uniquely identifies this Blob resource.
     */
  public async getBlob(
    blobId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'blobId' is not null or undefined
    if (blobId === null || blobId === undefined) {
      throw new RequiredError("DefaultApi", "getBlob", "blobId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Blobs/{blobId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "blobId" + "}", encodeURIComponent(String(blobId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get Head Member
     
     * @param queueId String that uniquely identifies the Queue that the Member belongs to.
     */
  public async getHeadMember(
    queueId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError("DefaultApi", "getHeadMember", "queueId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Queues/{queueId}/Members/Front"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "queueId" + "}", encodeURIComponent(String(queueId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get a 10DLC SMS Brand
     
     * @param brandId String that uniquely identifies this brand resource.
     */
  public async getTenDLCSmsBrand(
    brandId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'brandId' is not null or undefined
    if (brandId === null || brandId === undefined) {
      throw new RequiredError("DefaultApi", "getTenDLCSmsBrand", "brandId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Messages/10DLC/Brands/{brandId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "brandId" + "}", encodeURIComponent(String(brandId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get list of SMS 10DLC Brands
     
     */
  public async getTenDLCSmsBrands(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}/Messages/10DLC/Brands".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get a 10DLC SMS Campaign
     
     * @param campaignId String that uniquely identifies this campaign resource.
     */
  public async getTenDLCSmsCampaign(
    campaignId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'campaignId' is not null or undefined
    if (campaignId === null || campaignId === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "getTenDLCSmsCampaign",
        "campaignId",
      );
    }
    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/Messages/10DLC/Campaigns/{campaignId}"
        .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
        .replace(
          "{" + "campaignId" + "}",
          encodeURIComponent(String(campaignId)),
        );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get list of SMS 10DLC Campaigns
     
     * @param brandId The unique identifier for a brand
     */
  public async getTenDLCSmsCampaigns(
    brandId?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/Messages/10DLC/Campaigns".replace(
        "{" + "accountId" + "}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    // Query Params
    if (brandId !== undefined) {
      requestContext.setQueryParam(
        "brandId",
        ObjectSerializer.serialize(brandId, "string", ""),
      );
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get a 10DLC SMS Partner Campaign
     
     * @param campaignId String that uniquely identifies this campaign resource.
     */
  public async getTenDLCSmsPartnerCampaign(
    campaignId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'campaignId' is not null or undefined
    if (campaignId === null || campaignId === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "getTenDLCSmsPartnerCampaign",
        "campaignId",
      );
    }
    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/Messages/10DLC/PartnerCampaigns/{campaignId}"
        .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
        .replace(
          "{" + "campaignId" + "}",
          encodeURIComponent(String(campaignId)),
        );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get list of SMS 10DLC Partner Campaigns
     
     * @param brandId The unique identifier for a brand
     */
  public async getTenDLCSmsPartnerCampaigns(
    brandId?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/Messages/10DLC/PartnerCampaigns".replace(
        "{" + "accountId" + "}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    // Query Params
    if (brandId !== undefined) {
      requestContext.setQueryParam(
        "brandId",
        ObjectSerializer.serialize(brandId, "string", ""),
      );
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get a TollFree SMS Campaign
     
     * @param campaignId String that uniquely identifies this TollFree Campaign resource.
     */
  public async getTollFreeSmsCampaign(
    campaignId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'campaignId' is not null or undefined
    if (campaignId === null || campaignId === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "getTollFreeSmsCampaign",
        "campaignId",
      );
    }
    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/Messages/TollFree/Campaigns/{campaignId}"
        .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
        .replace(
          "{" + "campaignId" + "}",
          encodeURIComponent(String(campaignId)),
        );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Get list of TollFree Campaigns
     
     */
  public async getTollFreeSmsCampaigns(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/Messages/TollFree/Campaigns".replace(
        "{" + "accountId" + "}",
        encodeURIComponent(String(accountId)),
      );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * List Active Queues
     
     * @param alias Return only the Queue resources with aliases that exactly match this name.
     */
  public async listActiveQueues(
    alias?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}/Queues".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    // Query Params
    if (alias !== undefined) {
      requestContext.setQueryParam(
        "alias",
        ObjectSerializer.serialize(alias, "string", ""),
      );
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * List All Account Logs
     
     */
  public async listAllAccountLogs(
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}/Logs".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * List applications
     
     * @param alias Return only applications with aliases that exactly match this value.
     */
  public async listApplications(
    alias?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}/Applications".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    // Query Params
    if (alias !== undefined) {
      requestContext.setQueryParam(
        "alias",
        ObjectSerializer.serialize(alias, "string", ""),
      );
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
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
  public async listAvailableNumbers(
    phoneNumber?: string,
    region?: string,
    country?: string,
    voiceEnabled?: boolean,
    smsEnabled?: boolean,
    capabilitiesVoice?: boolean,
    capabilitiesSms?: boolean,
    capabilitiesTollFree?: boolean,
    capabilitiesTenDLC?: boolean,
    capabilitiesShortCode?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/AvailablePhoneNumbers";

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    // Query Params
    if (phoneNumber !== undefined) {
      requestContext.setQueryParam(
        "phoneNumber",
        ObjectSerializer.serialize(phoneNumber, "string", ""),
      );
    }
    // Query Params
    if (region !== undefined) {
      requestContext.setQueryParam(
        "region",
        ObjectSerializer.serialize(region, "string", ""),
      );
    }
    // Query Params
    if (country !== undefined) {
      requestContext.setQueryParam(
        "country",
        ObjectSerializer.serialize(country, "string", ""),
      );
    }
    // Query Params
    if (voiceEnabled !== undefined) {
      requestContext.setQueryParam(
        "voiceEnabled",
        ObjectSerializer.serialize(voiceEnabled, "boolean", ""),
      );
    }
    // Query Params
    if (smsEnabled !== undefined) {
      requestContext.setQueryParam(
        "smsEnabled",
        ObjectSerializer.serialize(smsEnabled, "boolean", ""),
      );
    }
    // Query Params
    if (capabilitiesVoice !== undefined) {
      requestContext.setQueryParam(
        "capabilities.voice",
        ObjectSerializer.serialize(capabilitiesVoice, "boolean", ""),
      );
    }
    // Query Params
    if (capabilitiesSms !== undefined) {
      requestContext.setQueryParam(
        "capabilities.sms",
        ObjectSerializer.serialize(capabilitiesSms, "boolean", ""),
      );
    }
    // Query Params
    if (capabilitiesTollFree !== undefined) {
      requestContext.setQueryParam(
        "capabilities.tollFree",
        ObjectSerializer.serialize(capabilitiesTollFree, "boolean", ""),
      );
    }
    // Query Params
    if (capabilitiesTenDLC !== undefined) {
      requestContext.setQueryParam(
        "capabilities.tenDLC",
        ObjectSerializer.serialize(capabilitiesTenDLC, "boolean", ""),
      );
    }
    // Query Params
    if (capabilitiesShortCode !== undefined) {
      requestContext.setQueryParam(
        "capabilities.shortCode",
        ObjectSerializer.serialize(capabilitiesShortCode, "boolean", ""),
      );
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * List Blobs belonging to an account. Results are returned in paginated lists mirroring other listing features in the API.
     * List Blobs belonging to an account.
     
     */
  public async listBlobs(_options?: Configuration): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}/Blobs".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * List Call Logs
     
     * @param callId String that uniquely identifies this call resource.
     */
  public async listCallLogs(
    callId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'callId' is not null or undefined
    if (callId === null || callId === undefined) {
      throw new RequiredError("DefaultApi", "listCallLogs", "callId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Calls/{callId}/Logs"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "callId" + "}", encodeURIComponent(String(callId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * List Call Recordings
     
     * @param callId String that uniquely identifies this call resource.
     * @param dateCreated Only show recordings created on the specified date, in the form *YYYY-MM-DD*.
     */
  public async listCallRecordings(
    callId: string,
    dateCreated?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'callId' is not null or undefined
    if (callId === null || callId === undefined) {
      throw new RequiredError("DefaultApi", "listCallRecordings", "callId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Calls/{callId}/Recordings"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "callId" + "}", encodeURIComponent(String(callId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    // Query Params
    if (dateCreated !== undefined) {
      requestContext.setQueryParam(
        "dateCreated",
        ObjectSerializer.serialize(dateCreated, "string", ""),
      );
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
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
     * @param riskScoreMin The minimum riskScore that should be included in the list.
     * @param riskScoreMax The maximum riskScore that should be included in the list.
     */
  public async listCalls(
    active?: boolean,
    to?: string,
    _from?: string,
    status?: CallStatus,
    startTime?: string,
    endTime?: string,
    parentCallId?: string,
    applicationId?: Array<string>,
    riskScoreMin?: number,
    riskScoreMax?: number,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}/Calls".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    // Query Params
    if (active !== undefined) {
      requestContext.setQueryParam(
        "active",
        ObjectSerializer.serialize(active, "boolean", ""),
      );
    }
    // Query Params
    if (to !== undefined) {
      requestContext.setQueryParam(
        "to",
        ObjectSerializer.serialize(to, "string", ""),
      );
    }
    // Query Params
    if (_from !== undefined) {
      requestContext.setQueryParam(
        "from",
        ObjectSerializer.serialize(_from, "string", ""),
      );
    }
    // Query Params
    if (status !== undefined) {
      requestContext.setQueryParam(
        "status",
        ObjectSerializer.serialize(status, "CallStatus", ""),
      );
    }
    // Query Params
    if (startTime !== undefined) {
      requestContext.setQueryParam(
        "startTime",
        ObjectSerializer.serialize(startTime, "string", ""),
      );
    }
    // Query Params
    if (endTime !== undefined) {
      requestContext.setQueryParam(
        "endTime",
        ObjectSerializer.serialize(endTime, "string", ""),
      );
    }
    // Query Params
    if (parentCallId !== undefined) {
      requestContext.setQueryParam(
        "parentCallId",
        ObjectSerializer.serialize(parentCallId, "string", ""),
      );
    }
    // Query Params
    if (applicationId !== undefined) {
      requestContext.setQueryParam(
        "applicationId",
        ObjectSerializer.serialize(applicationId, "Array<string>", ""),
      );
    }
    // Query Params
    if (riskScoreMin !== undefined) {
      requestContext.setQueryParam(
        "riskScoreMin",
        ObjectSerializer.serialize(riskScoreMin, "number", ""),
      );
    }
    // Query Params
    if (riskScoreMax !== undefined) {
      requestContext.setQueryParam(
        "riskScoreMax",
        ObjectSerializer.serialize(riskScoreMax, "number", ""),
      );
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * List Conference Recordings
     
     * @param conferenceId Show only Recordings made during the conference with this ID.
     * @param callId Show only Recordings made during the Call with this ID.
     * @param dateCreated Only show Recordings created on this date, formatted as *YYYY-MM-DD*.
     */
  public async listConferenceRecordings(
    conferenceId: string,
    callId?: string,
    dateCreated?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'conferenceId' is not null or undefined
    if (conferenceId === null || conferenceId === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "listConferenceRecordings",
        "conferenceId",
      );
    }
    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/Conferences/{conferenceId}/Recordings"
        .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
        .replace(
          "{" + "conferenceId" + "}",
          encodeURIComponent(String(conferenceId)),
        );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    // Query Params
    if (callId !== undefined) {
      requestContext.setQueryParam(
        "callId",
        ObjectSerializer.serialize(callId, "string", ""),
      );
    }
    // Query Params
    if (dateCreated !== undefined) {
      requestContext.setQueryParam(
        "dateCreated",
        ObjectSerializer.serialize(dateCreated, "string", ""),
      );
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * List Conferences
     
     * @param status Only show conferences that currently have the specified status. Valid values: &#x60;empty&#x60;, &#x60;populated&#x60;, &#x60;inProgress&#x60;, or &#x60;terminated&#x60;.
     * @param alias List Conferences whose alias exactly matches this string.
     * @param dateCreated Only show Conferences that were created on the specified date, in the form *YYYY-MM-DD*.
     * @param dateUpdated Only show Conferences that were last updated on the specified date, in the form *YYYY-MM-DD*.
     */
  public async listConferences(
    status?: string,
    alias?: string,
    dateCreated?: string,
    dateUpdated?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}/Conferences".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    // Query Params
    if (status !== undefined) {
      requestContext.setQueryParam(
        "status",
        ObjectSerializer.serialize(status, "string", ""),
      );
    }
    // Query Params
    if (alias !== undefined) {
      requestContext.setQueryParam(
        "alias",
        ObjectSerializer.serialize(alias, "string", ""),
      );
    }
    // Query Params
    if (dateCreated !== undefined) {
      requestContext.setQueryParam(
        "dateCreated",
        ObjectSerializer.serialize(dateCreated, "string", ""),
      );
    }
    // Query Params
    if (dateUpdated !== undefined) {
      requestContext.setQueryParam(
        "dateUpdated",
        ObjectSerializer.serialize(dateUpdated, "string", ""),
      );
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * List Exports
     
     * @param status Status of export
     * @param cursor Used to reference pages of a list of exports
     */
  public async listExports(
    status?: ExportStatus,
    cursor?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}/Exports".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    // Query Params
    if (status !== undefined) {
      requestContext.setQueryParam(
        "status",
        ObjectSerializer.serialize(status, "ExportStatus", ""),
      );
    }
    // Query Params
    if (cursor !== undefined) {
      requestContext.setQueryParam(
        "cursor",
        ObjectSerializer.serialize(cursor, "string", ""),
      );
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * List Incoming Numbers
     
     * @param phoneNumber Only show incoming phone number resources that match this PCRE-compatible regular expression.
     * @param alias Only show incoming phone numbers with aliases that exactly match this value.
     * @param region State or province of this phone number.
     * @param country Country of this phone number.
     * @param applicationId ID of the Application that FreeClimb should contact if a Call or SMS arrives for this phone number or a Call from this number is placed. An incoming phone number is not useful until associated with an applicationId.
     * @param hasApplication Indication of whether the phone number has an application linked to it.
     * @param hasCampaign Indication of whether the phone number has a campaign associated with it
     * @param capabilitiesVoice 
     * @param capabilitiesSms 
     * @param capabilitiesTollFree 
     * @param capabilitiesTenDLC 
     * @param capabilitiesShortCode 
     * @param tfnCampaignId Only show incoming phone number resources that have been assigned to the provided TFNCampaign ID.
     * @param offnet Indication of whether the phone number was registered as an offnet number. This field will be rendered only for requests to the IncomingPhone number resource.
     */
  public async listIncomingNumbers(
    phoneNumber?: string,
    alias?: string,
    region?: string,
    country?: string,
    applicationId?: string,
    hasApplication?: boolean,
    hasCampaign?: boolean,
    capabilitiesVoice?: boolean,
    capabilitiesSms?: boolean,
    capabilitiesTollFree?: boolean,
    capabilitiesTenDLC?: boolean,
    capabilitiesShortCode?: boolean,
    tfnCampaignId?: string,
    offnet?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}/IncomingPhoneNumbers".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    // Query Params
    if (phoneNumber !== undefined) {
      requestContext.setQueryParam(
        "phoneNumber",
        ObjectSerializer.serialize(phoneNumber, "string", ""),
      );
    }
    // Query Params
    if (alias !== undefined) {
      requestContext.setQueryParam(
        "alias",
        ObjectSerializer.serialize(alias, "string", ""),
      );
    }
    // Query Params
    if (region !== undefined) {
      requestContext.setQueryParam(
        "region",
        ObjectSerializer.serialize(region, "string", ""),
      );
    }
    // Query Params
    if (country !== undefined) {
      requestContext.setQueryParam(
        "country",
        ObjectSerializer.serialize(country, "string", ""),
      );
    }
    // Query Params
    if (applicationId !== undefined) {
      requestContext.setQueryParam(
        "applicationId",
        ObjectSerializer.serialize(applicationId, "string", ""),
      );
    }
    // Query Params
    if (hasApplication !== undefined) {
      requestContext.setQueryParam(
        "hasApplication",
        ObjectSerializer.serialize(hasApplication, "boolean", ""),
      );
    }
    // Query Params
    if (hasCampaign !== undefined) {
      requestContext.setQueryParam(
        "hasCampaign",
        ObjectSerializer.serialize(hasCampaign, "boolean", ""),
      );
    }
    // Query Params
    if (capabilitiesVoice !== undefined) {
      requestContext.setQueryParam(
        "capabilities.voice",
        ObjectSerializer.serialize(capabilitiesVoice, "boolean", ""),
      );
    }
    // Query Params
    if (capabilitiesSms !== undefined) {
      requestContext.setQueryParam(
        "capabilities.sms",
        ObjectSerializer.serialize(capabilitiesSms, "boolean", ""),
      );
    }
    // Query Params
    if (capabilitiesTollFree !== undefined) {
      requestContext.setQueryParam(
        "capabilities.tollFree",
        ObjectSerializer.serialize(capabilitiesTollFree, "boolean", ""),
      );
    }
    // Query Params
    if (capabilitiesTenDLC !== undefined) {
      requestContext.setQueryParam(
        "capabilities.tenDLC",
        ObjectSerializer.serialize(capabilitiesTenDLC, "boolean", ""),
      );
    }
    // Query Params
    if (capabilitiesShortCode !== undefined) {
      requestContext.setQueryParam(
        "capabilities.shortCode",
        ObjectSerializer.serialize(capabilitiesShortCode, "boolean", ""),
      );
    }
    // Query Params
    if (tfnCampaignId !== undefined) {
      requestContext.setQueryParam(
        "tfn.campaignId",
        ObjectSerializer.serialize(tfnCampaignId, "string", ""),
      );
    }
    // Query Params
    if (offnet !== undefined) {
      requestContext.setQueryParam(
        "offnet",
        ObjectSerializer.serialize(offnet, "boolean", ""),
      );
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * List Members
     
     * @param queueId String that uniquely identifies the Queue that the Member belongs to.
     */
  public async listMembers(
    queueId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError("DefaultApi", "listMembers", "queueId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Queues/{queueId}/Members"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "queueId" + "}", encodeURIComponent(String(queueId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * List Participants
     
     * @param conferenceId ID of the conference this participant is in.
     * @param talk Only show Participants with the talk privilege.
     * @param listen Only show Participants with the listen privilege.
     * @param dtmfPassThrough Only show Participants with the dtmfPassThrough privilege.
     */
  public async listParticipants(
    conferenceId: string,
    talk?: boolean,
    listen?: boolean,
    dtmfPassThrough?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'conferenceId' is not null or undefined
    if (conferenceId === null || conferenceId === undefined) {
      throw new RequiredError("DefaultApi", "listParticipants", "conferenceId");
    }
    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/Conferences/{conferenceId}/Participants"
        .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
        .replace(
          "{" + "conferenceId" + "}",
          encodeURIComponent(String(conferenceId)),
        );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    // Query Params
    if (talk !== undefined) {
      requestContext.setQueryParam(
        "talk",
        ObjectSerializer.serialize(talk, "boolean", ""),
      );
    }
    // Query Params
    if (listen !== undefined) {
      requestContext.setQueryParam(
        "listen",
        ObjectSerializer.serialize(listen, "boolean", ""),
      );
    }
    // Query Params
    if (dtmfPassThrough !== undefined) {
      requestContext.setQueryParam(
        "dtmfPassThrough",
        ObjectSerializer.serialize(dtmfPassThrough, "boolean", ""),
      );
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * List Recordings
     
     * @param callId Show only Recordings made during the Call with this ID.
     * @param conferenceId Show only Recordings made during the conference with this ID.
     * @param dateCreated Only show Recordings created on this date, formatted as *YYYY-MM-DD*.
     */
  public async listRecordings(
    callId?: string,
    conferenceId?: string,
    dateCreated?: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}/Recordings".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    // Query Params
    if (callId !== undefined) {
      requestContext.setQueryParam(
        "callId",
        ObjectSerializer.serialize(callId, "string", ""),
      );
    }
    // Query Params
    if (conferenceId !== undefined) {
      requestContext.setQueryParam(
        "conferenceId",
        ObjectSerializer.serialize(conferenceId, "string", ""),
      );
    }
    // Query Params
    if (dateCreated !== undefined) {
      requestContext.setQueryParam(
        "dateCreated",
        ObjectSerializer.serialize(dateCreated, "string", ""),
      );
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
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
  public async listSmsMessages(
    to?: string,
    _from?: string,
    beginTime?: string,
    endTime?: string,
    direction?: MessageDirection,
    campaignId?: string,
    brandId?: string,
    is10DLC?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}/Messages".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    // Query Params
    if (to !== undefined) {
      requestContext.setQueryParam(
        "to",
        ObjectSerializer.serialize(to, "string", ""),
      );
    }
    // Query Params
    if (_from !== undefined) {
      requestContext.setQueryParam(
        "from",
        ObjectSerializer.serialize(_from, "string", ""),
      );
    }
    // Query Params
    if (beginTime !== undefined) {
      requestContext.setQueryParam(
        "beginTime",
        ObjectSerializer.serialize(beginTime, "string", ""),
      );
    }
    // Query Params
    if (endTime !== undefined) {
      requestContext.setQueryParam(
        "endTime",
        ObjectSerializer.serialize(endTime, "string", ""),
      );
    }
    // Query Params
    if (direction !== undefined) {
      requestContext.setQueryParam(
        "direction",
        ObjectSerializer.serialize(direction, "MessageDirection", ""),
      );
    }
    // Query Params
    if (campaignId !== undefined) {
      requestContext.setQueryParam(
        "campaignId",
        ObjectSerializer.serialize(campaignId, "string", ""),
      );
    }
    // Query Params
    if (brandId !== undefined) {
      requestContext.setQueryParam(
        "brandId",
        ObjectSerializer.serialize(brandId, "string", ""),
      );
    }
    // Query Params
    if (is10DLC !== undefined) {
      requestContext.setQueryParam(
        "is10DLC",
        ObjectSerializer.serialize(is10DLC, "boolean", ""),
      );
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Make a Call
     
     * @param makeCallRequest Call details for making a call
     */
  public async makeACall(
    makeCallRequest?: MakeCallRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}/Calls".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(makeCallRequest, "MakeCallRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Make a JWT for WebRTC calling
     
     * @param createWebRTCToken Information needed to craft a JWT compatible with the platforms WebRTC APIs
     */
  public async makeAWebrtcJwt(
    createWebRTCToken: CreateWebRTCToken,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'createWebRTCToken' is not null or undefined
    if (createWebRTCToken === null || createWebRTCToken === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "makeAWebrtcJwt",
        "createWebRTCToken",
      );
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Calls/WebRTC/Token".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(createWebRTCToken, "CreateWebRTCToken", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Modifys a pre existing blob by either adding new fields, or modifying existing fields
     * Modify Blob
     
     * @param blobId String that uniquely identifies this Blob resource.
     * @param modifyBlobRequest Request body to specify keys to modify. Or new keys to add onto the already existing blob
     */
  public async modifyBlob(
    blobId: string,
    modifyBlobRequest: ModifyBlobRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'blobId' is not null or undefined
    if (blobId === null || blobId === undefined) {
      throw new RequiredError("DefaultApi", "modifyBlob", "blobId");
    }
    // verify required parameter 'modifyBlobRequest' is not null or undefined
    if (modifyBlobRequest === null || modifyBlobRequest === undefined) {
      throw new RequiredError("DefaultApi", "modifyBlob", "modifyBlobRequest");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Blobs/{blobId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "blobId" + "}", encodeURIComponent(String(blobId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(modifyBlobRequest, "ModifyBlobRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Remove a Participant
     
     * @param conferenceId ID of the conference this participant is in.
     * @param callId ID of the Call associated with this participant.
     */
  public async removeAParticipant(
    conferenceId: string,
    callId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'conferenceId' is not null or undefined
    if (conferenceId === null || conferenceId === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "removeAParticipant",
        "conferenceId",
      );
    }
    // verify required parameter 'callId' is not null or undefined
    if (callId === null || callId === undefined) {
      throw new RequiredError("DefaultApi", "removeAParticipant", "callId");
    }
    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/Conferences/{conferenceId}/Participants/{callId}"
        .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
        .replace(
          "{" + "conferenceId" + "}",
          encodeURIComponent(String(conferenceId)),
        )
        .replace("{" + "callId" + "}", encodeURIComponent(String(callId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Replaces the blob content with the provided values.
     * Replace Blob
     
     * @param blobId String that uniquely identifies this Blob resource.
     * @param replaceBlobRequest JSON object containing blob key the contents of which will be used to override the enitre blob contents.
     */
  public async replaceBlob(
    blobId: string,
    replaceBlobRequest: ReplaceBlobRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'blobId' is not null or undefined
    if (blobId === null || blobId === undefined) {
      throw new RequiredError("DefaultApi", "replaceBlob", "blobId");
    }
    // verify required parameter 'replaceBlobRequest' is not null or undefined
    if (replaceBlobRequest === null || replaceBlobRequest === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "replaceBlob",
        "replaceBlobRequest",
      );
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Blobs/{blobId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "blobId" + "}", encodeURIComponent(String(blobId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(replaceBlobRequest, "ReplaceBlobRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Send an SMS Message
     
     * @param messageRequest Details to create a message
     */
  public async sendAnSmsMessage(
    messageRequest: MessageRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'messageRequest' is not null or undefined
    if (messageRequest === null || messageRequest === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "sendAnSmsMessage",
        "messageRequest",
      );
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Messages".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(messageRequest, "MessageRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Stream a Recording File
     
     * @param recordingId String that uniquely identifies this recording resource.
     */
  public async streamARecordingFile(
    recordingId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'recordingId' is not null or undefined
    if (recordingId === null || recordingId === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "streamARecordingFile",
        "recordingId",
      );
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Recordings/{recordingId}/Stream"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace(
        "{" + "recordingId" + "}",
        encodeURIComponent(String(recordingId)),
      );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Update a Conference
     
     * @param conferenceId String that uniquely identifies this conference resource.
     * @param updateConferenceRequest Conference Details to update
     */
  public async updateAConference(
    conferenceId: string,
    updateConferenceRequest?: UpdateConferenceRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'conferenceId' is not null or undefined
    if (conferenceId === null || conferenceId === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "updateAConference",
        "conferenceId",
      );
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Conferences/{conferenceId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace(
        "{" + "conferenceId" + "}",
        encodeURIComponent(String(conferenceId)),
      );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        updateConferenceRequest,
        "UpdateConferenceRequest",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Update a Live Call
     
     * @param callId String that uniquely identifies this call resource.
     * @param updateCallRequest Call details to update
     */
  public async updateALiveCall(
    callId: string,
    updateCallRequest: UpdateCallRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'callId' is not null or undefined
    if (callId === null || callId === undefined) {
      throw new RequiredError("DefaultApi", "updateALiveCall", "callId");
    }
    // verify required parameter 'updateCallRequest' is not null or undefined
    if (updateCallRequest === null || updateCallRequest === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "updateALiveCall",
        "updateCallRequest",
      );
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Calls/{callId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "callId" + "}", encodeURIComponent(String(callId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(updateCallRequest, "UpdateCallRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Update a Participant
     
     * @param conferenceId ID of the conference this participant is in.
     * @param callId ID of the Call associated with this participant.
     * @param updateConferenceParticipantRequest Conference participant details to update
     */
  public async updateAParticipant(
    conferenceId: string,
    callId: string,
    updateConferenceParticipantRequest?: UpdateConferenceParticipantRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'conferenceId' is not null or undefined
    if (conferenceId === null || conferenceId === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "updateAParticipant",
        "conferenceId",
      );
    }
    // verify required parameter 'callId' is not null or undefined
    if (callId === null || callId === undefined) {
      throw new RequiredError("DefaultApi", "updateAParticipant", "callId");
    }
    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/Conferences/{conferenceId}/Participants/{callId}"
        .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
        .replace(
          "{" + "conferenceId" + "}",
          encodeURIComponent(String(conferenceId)),
        )
        .replace("{" + "callId" + "}", encodeURIComponent(String(callId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        updateConferenceParticipantRequest,
        "UpdateConferenceParticipantRequest",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Update a Queue
     
     * @param queueId A string that uniquely identifies this Queue resource.
     * @param queueRequest Queue Details to update
     */
  public async updateAQueue(
    queueId: string,
    queueRequest?: QueueRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'queueId' is not null or undefined
    if (queueId === null || queueId === undefined) {
      throw new RequiredError("DefaultApi", "updateAQueue", "queueId");
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Queues/{queueId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace("{" + "queueId" + "}", encodeURIComponent(String(queueId)));

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(queueRequest, "QueueRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Manage an account
     
     * @param accountRequest Account details to update
     */
  public async updateAnAccount(
    accountRequest?: AccountRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // Path Params
    const localVarPath = "/Accounts/{accountId}".replace(
      "{" + "accountId" + "}",
      encodeURIComponent(String(accountId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(accountRequest, "AccountRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Update an application
     
     * @param applicationId A string that uniquely identifies this application resource.
     * @param applicationRequest Application details to update.
     */
  public async updateAnApplication(
    applicationId: string,
    applicationRequest?: ApplicationRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'applicationId' is not null or undefined
    if (applicationId === null || applicationId === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "updateAnApplication",
        "applicationId",
      );
    }
    // Path Params
    const localVarPath = "/Accounts/{accountId}/Applications/{applicationId}"
      .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
      .replace(
        "{" + "applicationId" + "}",
        encodeURIComponent(String(applicationId)),
      );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(applicationRequest, "ApplicationRequest", ""),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  /**
     * Update an Incoming Number
     
     * @param phoneNumberId String that uniquely identifies this phone number resource.
     * @param incomingNumberRequest Incoming Number details to update
     */
  public async updateAnIncomingNumber(
    phoneNumberId: string,
    incomingNumberRequest?: IncomingNumberRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    const { accountId } = this.configuration;

    // verify required parameter 'phoneNumberId' is not null or undefined
    if (phoneNumberId === null || phoneNumberId === undefined) {
      throw new RequiredError(
        "DefaultApi",
        "updateAnIncomingNumber",
        "phoneNumberId",
      );
    }
    // Path Params
    const localVarPath =
      "/Accounts/{accountId}/IncomingPhoneNumbers/{phoneNumberId}"
        .replace("{" + "accountId" + "}", encodeURIComponent(String(accountId)))
        .replace(
          "{" + "phoneNumberId" + "}",
          encodeURIComponent(String(phoneNumberId)),
        );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        incomingNumberRequest,
        "IncomingNumberRequest",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);
    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }

  public async getNextPage<T extends PaginationModel>(
    responseObject: T,
    _options?: Configuration,
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;
    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      responseObject.nextPageUri!,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["fc"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }
    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }
    return requestContext;
  }
}

export class DefaultApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to buyAPhoneNumber
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async buyAPhoneNumber(
    response: ResponseContext,
  ): Promise<IncomingNumberResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IncomingNumberResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncomingNumberResult",
        "",
      ) as IncomingNumberResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncomingNumberResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncomingNumberResult",
        "",
      ) as IncomingNumberResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAConference
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAConference(
    response: ResponseContext,
  ): Promise<ConferenceResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: ConferenceResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ConferenceResult",
        "",
      ) as ConferenceResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ConferenceResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ConferenceResult",
        "",
      ) as ConferenceResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAQueue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAQueue(response: ResponseContext): Promise<QueueResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: QueueResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueResult",
        "",
      ) as QueueResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: QueueResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueResult",
        "",
      ) as QueueResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createAnApplication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createAnApplication(
    response: ResponseContext,
  ): Promise<ApplicationResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: ApplicationResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ApplicationResult",
        "",
      ) as ApplicationResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ApplicationResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ApplicationResult",
        "",
      ) as ApplicationResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createBlob
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createBlob(response: ResponseContext): Promise<BlobResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("201", response.httpStatusCode)) {
      const body: BlobResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BlobResult",
        "",
      ) as BlobResult;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        400,
        "Generic platform bad request.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("409", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        409,
        "A blob with the provided alias already exists oln the requesting account and so this new blob is rejected as there cannot be duplicate alises.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("413", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        413,
        "The blob exceeded one of the size limits. Either it itself is too large or it would push the total sum of all blobs over the account\&#39;s limit.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("422", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        422,
        "Generic platform unprocessible entity response.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        500,
        "Generic platform internal error.",
        body,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: BlobResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BlobResult",
        "",
      ) as BlobResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createExport
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createExport(response: ResponseContext): Promise<ExportResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: ExportResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExportResult",
        "",
      ) as ExportResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ExportResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExportResult",
        "",
      ) as ExportResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createKnowledgeBaseCompletion
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createKnowledgeBaseCompletion(
    response: ResponseContext,
  ): Promise<CompletionResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: CompletionResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CompletionResult",
        "",
      ) as CompletionResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CompletionResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CompletionResult",
        "",
      ) as CompletionResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteARecording
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteARecording(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        "",
      ) as void;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteAnApplication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAnApplication(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        "",
      ) as void;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteAnExport
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAnExport(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        "",
      ) as void;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteAnIncomingNumber
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteAnIncomingNumber(
    response: ResponseContext,
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        "",
      ) as void;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteBlob
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteBlob(
    response: ResponseContext,
  ): Promise<void | BlobResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: BlobResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BlobResult",
        "",
      ) as BlobResult;
      return body;
    }
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        404,
        "Generic platform not found error.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("422", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        422,
        "Generic platform unprocessible entity response.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        500,
        "Generic platform internal error.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("504", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        504,
        "gateway timeout error",
        body,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void | BlobResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void | BlobResult",
        "",
      ) as void | BlobResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to dequeueAMember
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async dequeueAMember(response: ResponseContext): Promise<QueueMember> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: QueueMember = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueMember",
        "",
      ) as QueueMember;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: QueueMember = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueMember",
        "",
      ) as QueueMember;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to dequeueHeadMember
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async dequeueHeadMember(
    response: ResponseContext,
  ): Promise<QueueMember> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: QueueMember = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueMember",
        "",
      ) as QueueMember;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: QueueMember = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueMember",
        "",
      ) as QueueMember;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to downloadARecordingFile
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async downloadARecordingFile(
    response: ResponseContext,
  ): Promise<HttpFile> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: HttpFile =
        (await response.getBodyAsFile()) as any as HttpFile;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HttpFile = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HttpFile",
        "binary",
      ) as HttpFile;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to downloadAnExport
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async downloadAnExport(response: ResponseContext): Promise<string> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: string = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "string",
        "",
      ) as string;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: string = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "string",
        "",
      ) as string;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to filterLogs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async filterLogs(response: ResponseContext): Promise<LogList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: LogList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogList",
        "",
      ) as LogList;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: LogList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogList",
        "",
      ) as LogList;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getACall
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getACall(response: ResponseContext): Promise<CallResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: CallResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CallResult",
        "",
      ) as CallResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CallResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CallResult",
        "",
      ) as CallResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAConference
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAConference(
    response: ResponseContext,
  ): Promise<ConferenceResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: ConferenceResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ConferenceResult",
        "",
      ) as ConferenceResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ConferenceResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ConferenceResult",
        "",
      ) as ConferenceResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAMember
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAMember(response: ResponseContext): Promise<QueueMember> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: QueueMember = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueMember",
        "",
      ) as QueueMember;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: QueueMember = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueMember",
        "",
      ) as QueueMember;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAParticipant
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAParticipant(
    response: ResponseContext,
  ): Promise<ConferenceParticipantResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: ConferenceParticipantResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ConferenceParticipantResult",
        "",
      ) as ConferenceParticipantResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ConferenceParticipantResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ConferenceParticipantResult",
        "",
      ) as ConferenceParticipantResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAQueue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAQueue(response: ResponseContext): Promise<QueueResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: QueueResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueResult",
        "",
      ) as QueueResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: QueueResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueResult",
        "",
      ) as QueueResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getARecording
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getARecording(
    response: ResponseContext,
  ): Promise<RecordingResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: RecordingResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RecordingResult",
        "",
      ) as RecordingResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RecordingResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RecordingResult",
        "",
      ) as RecordingResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAnAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAnAccount(response: ResponseContext): Promise<AccountResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: AccountResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AccountResult",
        "",
      ) as AccountResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AccountResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AccountResult",
        "",
      ) as AccountResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAnApplication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAnApplication(
    response: ResponseContext,
  ): Promise<ApplicationResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: ApplicationResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ApplicationResult",
        "",
      ) as ApplicationResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ApplicationResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ApplicationResult",
        "",
      ) as ApplicationResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAnExport
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAnExport(response: ResponseContext): Promise<ExportResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: ExportResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExportResult",
        "",
      ) as ExportResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ExportResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExportResult",
        "",
      ) as ExportResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAnIncomingNumber
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAnIncomingNumber(
    response: ResponseContext,
  ): Promise<IncomingNumberResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IncomingNumberResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncomingNumberResult",
        "",
      ) as IncomingNumberResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncomingNumberResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncomingNumberResult",
        "",
      ) as IncomingNumberResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getAnSmsMessage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getAnSmsMessage(
    response: ResponseContext,
  ): Promise<MessageResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: MessageResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MessageResult",
        "",
      ) as MessageResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MessageResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MessageResult",
        "",
      ) as MessageResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getBlob
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getBlob(response: ResponseContext): Promise<BlobResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: BlobResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BlobResult",
        "",
      ) as BlobResult;
      return body;
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        404,
        "Generic platform not found error.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        500,
        "Generic platform internal error.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("504", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        504,
        "gateway timeout error",
        body,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: BlobResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BlobResult",
        "",
      ) as BlobResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getHeadMember
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getHeadMember(response: ResponseContext): Promise<QueueMember> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: QueueMember = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueMember",
        "",
      ) as QueueMember;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: QueueMember = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueMember",
        "",
      ) as QueueMember;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getTenDLCSmsBrand
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTenDLCSmsBrand(
    response: ResponseContext,
  ): Promise<SMSTenDLCBrand> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SMSTenDLCBrand = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SMSTenDLCBrand",
        "",
      ) as SMSTenDLCBrand;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SMSTenDLCBrand = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SMSTenDLCBrand",
        "",
      ) as SMSTenDLCBrand;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getTenDLCSmsBrands
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTenDLCSmsBrands(
    response: ResponseContext,
  ): Promise<SMSTenDLCBrandsListResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SMSTenDLCBrandsListResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SMSTenDLCBrandsListResult",
        "",
      ) as SMSTenDLCBrandsListResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SMSTenDLCBrandsListResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SMSTenDLCBrandsListResult",
        "",
      ) as SMSTenDLCBrandsListResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getTenDLCSmsCampaign
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTenDLCSmsCampaign(
    response: ResponseContext,
  ): Promise<SMSTenDLCCampaign> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SMSTenDLCCampaign = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SMSTenDLCCampaign",
        "",
      ) as SMSTenDLCCampaign;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SMSTenDLCCampaign = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SMSTenDLCCampaign",
        "",
      ) as SMSTenDLCCampaign;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getTenDLCSmsCampaigns
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTenDLCSmsCampaigns(
    response: ResponseContext,
  ): Promise<SMSTenDLCCampaignsListResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SMSTenDLCCampaignsListResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SMSTenDLCCampaignsListResult",
        "",
      ) as SMSTenDLCCampaignsListResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SMSTenDLCCampaignsListResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SMSTenDLCCampaignsListResult",
        "",
      ) as SMSTenDLCCampaignsListResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getTenDLCSmsPartnerCampaign
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTenDLCSmsPartnerCampaign(
    response: ResponseContext,
  ): Promise<SMSTenDLCPartnerCampaign> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SMSTenDLCPartnerCampaign = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SMSTenDLCPartnerCampaign",
        "",
      ) as SMSTenDLCPartnerCampaign;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SMSTenDLCPartnerCampaign = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SMSTenDLCPartnerCampaign",
        "",
      ) as SMSTenDLCPartnerCampaign;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getTenDLCSmsPartnerCampaigns
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTenDLCSmsPartnerCampaigns(
    response: ResponseContext,
  ): Promise<SMSTenDLCPartnerCampaignsListResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SMSTenDLCPartnerCampaignsListResult =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SMSTenDLCPartnerCampaignsListResult",
          "",
        ) as SMSTenDLCPartnerCampaignsListResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SMSTenDLCPartnerCampaignsListResult =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "SMSTenDLCPartnerCampaignsListResult",
          "",
        ) as SMSTenDLCPartnerCampaignsListResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getTollFreeSmsCampaign
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTollFreeSmsCampaign(
    response: ResponseContext,
  ): Promise<SMSTollFreeCampaign> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SMSTollFreeCampaign = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SMSTollFreeCampaign",
        "",
      ) as SMSTollFreeCampaign;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SMSTollFreeCampaign = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SMSTollFreeCampaign",
        "",
      ) as SMSTollFreeCampaign;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getTollFreeSmsCampaigns
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getTollFreeSmsCampaigns(
    response: ResponseContext,
  ): Promise<SMSTollFreeCampaignsListResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: SMSTollFreeCampaignsListResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SMSTollFreeCampaignsListResult",
        "",
      ) as SMSTollFreeCampaignsListResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: SMSTollFreeCampaignsListResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "SMSTollFreeCampaignsListResult",
        "",
      ) as SMSTollFreeCampaignsListResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listActiveQueues
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listActiveQueues(response: ResponseContext): Promise<QueueList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: QueueList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueList",
        "",
      ) as QueueList;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: QueueList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueList",
        "",
      ) as QueueList;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listAllAccountLogs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAllAccountLogs(response: ResponseContext): Promise<LogList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: LogList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogList",
        "",
      ) as LogList;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: LogList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogList",
        "",
      ) as LogList;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listApplications
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listApplications(
    response: ResponseContext,
  ): Promise<ApplicationList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: ApplicationList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ApplicationList",
        "",
      ) as ApplicationList;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ApplicationList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ApplicationList",
        "",
      ) as ApplicationList;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listAvailableNumbers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listAvailableNumbers(
    response: ResponseContext,
  ): Promise<AvailableNumberList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: AvailableNumberList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AvailableNumberList",
        "",
      ) as AvailableNumberList;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: AvailableNumberList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "AvailableNumberList",
        "",
      ) as AvailableNumberList;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listBlobs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listBlobs(response: ResponseContext): Promise<BlobListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: BlobListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BlobListResponse",
        "",
      ) as BlobListResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        400,
        "Generic platform bad request.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        500,
        "Generic platform internal error.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("504", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        504,
        "gateway timeout error",
        body,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: BlobListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BlobListResponse",
        "",
      ) as BlobListResponse;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listCallLogs
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCallLogs(response: ResponseContext): Promise<LogList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: LogList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogList",
        "",
      ) as LogList;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: LogList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "LogList",
        "",
      ) as LogList;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listCallRecordings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCallRecordings(
    response: ResponseContext,
  ): Promise<RecordingList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: RecordingList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RecordingList",
        "",
      ) as RecordingList;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RecordingList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RecordingList",
        "",
      ) as RecordingList;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listCalls
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listCalls(response: ResponseContext): Promise<CallList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: CallList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CallList",
        "",
      ) as CallList;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CallList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CallList",
        "",
      ) as CallList;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listConferenceRecordings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listConferenceRecordings(
    response: ResponseContext,
  ): Promise<RecordingList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: RecordingList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RecordingList",
        "",
      ) as RecordingList;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RecordingList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RecordingList",
        "",
      ) as RecordingList;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listConferences
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listConferences(
    response: ResponseContext,
  ): Promise<ConferenceList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: ConferenceList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ConferenceList",
        "",
      ) as ConferenceList;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ConferenceList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ConferenceList",
        "",
      ) as ConferenceList;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listExports
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listExports(response: ResponseContext): Promise<ExportList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: ExportList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExportList",
        "",
      ) as ExportList;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ExportList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ExportList",
        "",
      ) as ExportList;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listIncomingNumbers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listIncomingNumbers(
    response: ResponseContext,
  ): Promise<IncomingNumberList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IncomingNumberList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncomingNumberList",
        "",
      ) as IncomingNumberList;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncomingNumberList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncomingNumberList",
        "",
      ) as IncomingNumberList;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listMembers
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listMembers(
    response: ResponseContext,
  ): Promise<QueueMemberList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: QueueMemberList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueMemberList",
        "",
      ) as QueueMemberList;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: QueueMemberList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueMemberList",
        "",
      ) as QueueMemberList;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listParticipants
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listParticipants(
    response: ResponseContext,
  ): Promise<ConferenceParticipantList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: ConferenceParticipantList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ConferenceParticipantList",
        "",
      ) as ConferenceParticipantList;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ConferenceParticipantList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ConferenceParticipantList",
        "",
      ) as ConferenceParticipantList;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listRecordings
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listRecordings(
    response: ResponseContext,
  ): Promise<RecordingList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: RecordingList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RecordingList",
        "",
      ) as RecordingList;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: RecordingList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "RecordingList",
        "",
      ) as RecordingList;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listSmsMessages
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listSmsMessages(
    response: ResponseContext,
  ): Promise<MessagesList> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: MessagesList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MessagesList",
        "",
      ) as MessagesList;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MessagesList = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MessagesList",
        "",
      ) as MessagesList;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to makeACall
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async makeACall(response: ResponseContext): Promise<CallResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: CallResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CallResult",
        "",
      ) as CallResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CallResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "CallResult",
        "",
      ) as CallResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to makeAWebrtcJwt
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async makeAWebrtcJwt(response: ResponseContext): Promise<string> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: string = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "string",
        "",
      ) as string;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: string = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "string",
        "",
      ) as string;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to modifyBlob
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async modifyBlob(response: ResponseContext): Promise<BlobResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: BlobResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BlobResult",
        "",
      ) as BlobResult;
      return body;
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        404,
        "Generic platform not found error.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("409", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        409,
        "Generic platform status conflict error.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("413", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        413,
        "Generic platform status request entity too large.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        500,
        "Generic platform internal error.",
        body,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: BlobResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BlobResult",
        "",
      ) as BlobResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to removeAParticipant
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async removeAParticipant(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        "",
      ) as void;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to replaceBlob
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async replaceBlob(response: ResponseContext): Promise<BlobResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: BlobResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BlobResult",
        "",
      ) as BlobResult;
      return body;
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        404,
        "Generic platform not found error.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("409", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        409,
        "Generic platform status conflict error.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("413", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        413,
        "Generic platform status request entity too large.",
        body,
        response.headers,
      );
    }
    if (isCodeInRange("500", response.httpStatusCode)) {
      const body: PlatformError = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "PlatformError",
        "",
      ) as PlatformError;
      throw new ApiException<PlatformError>(
        500,
        "Generic platform internal error.",
        body,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: BlobResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "BlobResult",
        "",
      ) as BlobResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to sendAnSmsMessage
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async sendAnSmsMessage(
    response: ResponseContext,
  ): Promise<MessageResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: MessageResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MessageResult",
        "",
      ) as MessageResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MessageResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MessageResult",
        "",
      ) as MessageResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to streamARecordingFile
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async streamARecordingFile(
    response: ResponseContext,
  ): Promise<HttpFile> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: HttpFile =
        (await response.getBodyAsFile()) as any as HttpFile;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: HttpFile = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "HttpFile",
        "binary",
      ) as HttpFile;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateAConference
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAConference(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        "",
      ) as void;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateALiveCall
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateALiveCall(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("202", response.httpStatusCode)) {
      return;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        "",
      ) as void;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateAParticipant
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAParticipant(
    response: ResponseContext,
  ): Promise<ConferenceParticipantResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: ConferenceParticipantResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ConferenceParticipantResult",
        "",
      ) as ConferenceParticipantResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ConferenceParticipantResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ConferenceParticipantResult",
        "",
      ) as ConferenceParticipantResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateAQueue
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAQueue(response: ResponseContext): Promise<QueueResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: QueueResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueResult",
        "",
      ) as QueueResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: QueueResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "QueueResult",
        "",
      ) as QueueResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateAnAccount
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAnAccount(response: ResponseContext): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        "",
      ) as void;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateAnApplication
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAnApplication(
    response: ResponseContext,
  ): Promise<ApplicationResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: ApplicationResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ApplicationResult",
        "",
      ) as ApplicationResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: ApplicationResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "ApplicationResult",
        "",
      ) as ApplicationResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateAnIncomingNumber
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateAnIncomingNumber(
    response: ResponseContext,
  ): Promise<IncomingNumberResult> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: IncomingNumberResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncomingNumberResult",
        "",
      ) as IncomingNumberResult;
      return body;
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IncomingNumberResult = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IncomingNumberResult",
        "",
      ) as IncomingNumberResult;
      return body;
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  public async getNextPage<T extends PaginationModel>(
    response: ResponseContext,
  ): Promise<T> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: T = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "T",
        "",
      ) as T;
      return body;
    }
    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: T = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "T",
        "",
      ) as T;
      return body;
    }
    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }
}
