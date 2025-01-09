# freeclimb.DefaultApi

All URIs are relative to *https://www.freeclimb.com/apiserver*

| Method                                                                           | HTTP request                                                                      | Description                             |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------- |
| [**buyAPhoneNumber**](DefaultApi.md#buyAPhoneNumber)                             | **POST** /Accounts/{accountId}/IncomingPhoneNumbers                               | Buy a Phone Number                      |
| [**createAConference**](DefaultApi.md#createAConference)                         | **POST** /Accounts/{accountId}/Conferences                                        | Create a Conference                     |
| [**createAQueue**](DefaultApi.md#createAQueue)                                   | **POST** /Accounts/{accountId}/Queues                                             | Create a Queue                          |
| [**createAnApplication**](DefaultApi.md#createAnApplication)                     | **POST** /Accounts/{accountId}/Applications                                       | Create an application                   |
| [**createKnowledgeBaseCompletion**](DefaultApi.md#createKnowledgeBaseCompletion) | **POST** /Accounts/{accountId}/KnowledgeBases/{knowledgeBaseId}/Completion        | Query the knowledge base                |
| [**deleteARecording**](DefaultApi.md#deleteARecording)                           | **DELETE** /Accounts/{accountId}/Recordings/{recordingId}                         | Delete a Recording                      |
| [**deleteAnApplication**](DefaultApi.md#deleteAnApplication)                     | **DELETE** /Accounts/{accountId}/Applications/{applicationId}                     | Delete an application                   |
| [**deleteAnIncomingNumber**](DefaultApi.md#deleteAnIncomingNumber)               | **DELETE** /Accounts/{accountId}/IncomingPhoneNumbers/{phoneNumberId}             | Delete an Incoming Number               |
| [**dequeueAMember**](DefaultApi.md#dequeueAMember)                               | **POST** /Accounts/{accountId}/Queues/{queueId}/Members/{callId}                  | Dequeue a Member                        |
| [**dequeueHeadMember**](DefaultApi.md#dequeueHeadMember)                         | **POST** /Accounts/{accountId}/Queues/{queueId}/Members/Front                     | Dequeue Head Member                     |
| [**downloadARecordingFile**](DefaultApi.md#downloadARecordingFile)               | **GET** /Accounts/{accountId}/Recordings/{recordingId}/Download                   | Download a Recording File               |
| [**filterLogs**](DefaultApi.md#filterLogs)                                       | **POST** /Accounts/{accountId}/Logs                                               | Filter Logs                             |
| [**getACall**](DefaultApi.md#getACall)                                           | **GET** /Accounts/{accountId}/Calls/{callId}                                      | Get a Call                              |
| [**getAConference**](DefaultApi.md#getAConference)                               | **GET** /Accounts/{accountId}/Conferences/{conferenceId}                          | Get a Conference                        |
| [**getAMember**](DefaultApi.md#getAMember)                                       | **GET** /Accounts/{accountId}/Queues/{queueId}/Members/{callId}                   | Get a Member                            |
| [**getAParticipant**](DefaultApi.md#getAParticipant)                             | **GET** /Accounts/{accountId}/Conferences/{conferenceId}/Participants/{callId}    | Get a Participant                       |
| [**getAQueue**](DefaultApi.md#getAQueue)                                         | **GET** /Accounts/{accountId}/Queues/{queueId}                                    | Get a Queue                             |
| [**getARecording**](DefaultApi.md#getARecording)                                 | **GET** /Accounts/{accountId}/Recordings/{recordingId}                            | Get a Recording                         |
| [**getAnAccount**](DefaultApi.md#getAnAccount)                                   | **GET** /Accounts/{accountId}                                                     | Get an Account                          |
| [**getAnApplication**](DefaultApi.md#getAnApplication)                           | **GET** /Accounts/{accountId}/Applications/{applicationId}                        | Get an Application                      |
| [**getAnIncomingNumber**](DefaultApi.md#getAnIncomingNumber)                     | **GET** /Accounts/{accountId}/IncomingPhoneNumbers/{phoneNumberId}                | Get an Incoming Number                  |
| [**getAnSmsMessage**](DefaultApi.md#getAnSmsMessage)                             | **GET** /Accounts/{accountId}/Messages/{messageId}                                | Get an SMS Message                      |
| [**getHeadMember**](DefaultApi.md#getHeadMember)                                 | **GET** /Accounts/{accountId}/Queues/{queueId}/Members/Front                      | Get Head Member                         |
| [**getTenDLCSmsBrand**](DefaultApi.md#getTenDLCSmsBrand)                         | **GET** /Accounts/{accountId}/Messages/10DLC/Brands/{brandId}                     | Get a 10DLC SMS Brand                   |
| [**getTenDLCSmsBrands**](DefaultApi.md#getTenDLCSmsBrands)                       | **GET** /Accounts/{accountId}/Messages/10DLC/Brands                               | Get list of SMS 10DLC Brands            |
| [**getTenDLCSmsCampaign**](DefaultApi.md#getTenDLCSmsCampaign)                   | **GET** /Accounts/{accountId}/Messages/10DLC/Campaigns/{campaignId}               | Get a 10DLC SMS Campaign                |
| [**getTenDLCSmsCampaigns**](DefaultApi.md#getTenDLCSmsCampaigns)                 | **GET** /Accounts/{accountId}/Messages/10DLC/Campaigns                            | Get list of SMS 10DLC Campaigns         |
| [**getTenDLCSmsPartnerCampaign**](DefaultApi.md#getTenDLCSmsPartnerCampaign)     | **GET** /Accounts/{accountId}/Messages/10DLC/PartnerCampaigns/{campaignId}        | Get a 10DLC SMS Partner Campaign        |
| [**getTenDLCSmsPartnerCampaigns**](DefaultApi.md#getTenDLCSmsPartnerCampaigns)   | **GET** /Accounts/{accountId}/Messages/10DLC/PartnerCampaigns                     | Get list of SMS 10DLC Partner Campaigns |
| [**getTollFreeSmsCampaign**](DefaultApi.md#getTollFreeSmsCampaign)               | **GET** /Accounts/{accountId}/Messages/TollFree/Campaigns/{campaignId}            | Get a TollFree SMS Campaign             |
| [**getTollFreeSmsCampaigns**](DefaultApi.md#getTollFreeSmsCampaigns)             | **GET** /Accounts/{accountId}/Messages/TollFree/Campaigns                         | Get list of TollFree Campaigns          |
| [**listActiveQueues**](DefaultApi.md#listActiveQueues)                           | **GET** /Accounts/{accountId}/Queues                                              | List Active Queues                      |
| [**listAllAccountLogs**](DefaultApi.md#listAllAccountLogs)                       | **GET** /Accounts/{accountId}/Logs                                                | List All Account Logs                   |
| [**listApplications**](DefaultApi.md#listApplications)                           | **GET** /Accounts/{accountId}/Applications                                        | List applications                       |
| [**listAvailableNumbers**](DefaultApi.md#listAvailableNumbers)                   | **GET** /AvailablePhoneNumbers                                                    | List available numbers                  |
| [**listCallLogs**](DefaultApi.md#listCallLogs)                                   | **GET** /Accounts/{accountId}/Calls/{callId}/Logs                                 | List Call Logs                          |
| [**listCallRecordings**](DefaultApi.md#listCallRecordings)                       | **GET** /Accounts/{accountId}/Calls/{callId}/Recordings                           | List Call Recordings                    |
| [**listCalls**](DefaultApi.md#listCalls)                                         | **GET** /Accounts/{accountId}/Calls                                               | List Calls                              |
| [**listConferenceRecordings**](DefaultApi.md#listConferenceRecordings)           | **GET** /Accounts/{accountId}/Conferences/{conferenceId}/Recordings               | List Conference Recordings              |
| [**listConferences**](DefaultApi.md#listConferences)                             | **GET** /Accounts/{accountId}/Conferences                                         | List Conferences                        |
| [**listIncomingNumbers**](DefaultApi.md#listIncomingNumbers)                     | **GET** /Accounts/{accountId}/IncomingPhoneNumbers                                | List Incoming Numbers                   |
| [**listMembers**](DefaultApi.md#listMembers)                                     | **GET** /Accounts/{accountId}/Queues/{queueId}/Members                            | List Members                            |
| [**listParticipants**](DefaultApi.md#listParticipants)                           | **GET** /Accounts/{accountId}/Conferences/{conferenceId}/Participants             | List Participants                       |
| [**listRecordings**](DefaultApi.md#listRecordings)                               | **GET** /Accounts/{accountId}/Recordings                                          | List Recordings                         |
| [**listSmsMessages**](DefaultApi.md#listSmsMessages)                             | **GET** /Accounts/{accountId}/Messages                                            | List SMS Messages                       |
| [**makeACall**](DefaultApi.md#makeACall)                                         | **POST** /Accounts/{accountId}/Calls                                              | Make a Call                             |
| [**makeAWebrtcJwt**](DefaultApi.md#makeAWebrtcJwt)                               | **POST** /Accounts/{accountId}/Calls/WebRTC/Token                                 | Make a JWT for WebRTC calling           |
| [**removeAParticipant**](DefaultApi.md#removeAParticipant)                       | **DELETE** /Accounts/{accountId}/Conferences/{conferenceId}/Participants/{callId} | Remove a Participant                    |
| [**sendAnSmsMessage**](DefaultApi.md#sendAnSmsMessage)                           | **POST** /Accounts/{accountId}/Messages                                           | Send an SMS Message                     |
| [**streamARecordingFile**](DefaultApi.md#streamARecordingFile)                   | **GET** /Accounts/{accountId}/Recordings/{recordingId}/Stream                     | Stream a Recording File                 |
| [**updateAConference**](DefaultApi.md#updateAConference)                         | **POST** /Accounts/{accountId}/Conferences/{conferenceId}                         | Update a Conference                     |
| [**updateALiveCall**](DefaultApi.md#updateALiveCall)                             | **POST** /Accounts/{accountId}/Calls/{callId}                                     | Update a Live Call                      |
| [**updateAParticipant**](DefaultApi.md#updateAParticipant)                       | **POST** /Accounts/{accountId}/Conferences/{conferenceId}/Participants/{callId}   | Update a Participant                    |
| [**updateAQueue**](DefaultApi.md#updateAQueue)                                   | **POST** /Accounts/{accountId}/Queues/{queueId}                                   | Update a Queue                          |
| [**updateAnAccount**](DefaultApi.md#updateAnAccount)                             | **POST** /Accounts/{accountId}                                                    | Manage an account                       |
| [**updateAnApplication**](DefaultApi.md#updateAnApplication)                     | **POST** /Accounts/{accountId}/Applications/{applicationId}                       | Update an application                   |
| [**updateAnIncomingNumber**](DefaultApi.md#updateAnIncomingNumber)               | **POST** /Accounts/{accountId}/IncomingPhoneNumbers/{phoneNumberId}               | Update an Incoming Number               |
| [**getNextPage**](DefaultApi.md#getNextPage)                                     | **GET** /Accounts/{accountId}/{nextPageUri}                                       | Get Next Page of Resource Data          |

# **buyAPhoneNumber**

> IncomingNumberResult buyAPhoneNumber(buyIncomingNumberRequest)

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiBuyAPhoneNumberRequest = {
  // BuyIncomingNumberRequest | Incoming Number transaction details
  buyIncomingNumberRequest: {
    phoneNumber: "phoneNumber_example",
    alias: "alias_example",
    applicationId: "applicationId_example",
  },
};

apiInstance
  .buyAPhoneNumber(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                         | Type                         | Description                         | Notes |
| ---------------------------- | ---------------------------- | ----------------------------------- | ----- |
| **buyIncomingNumberRequest** | **BuyIncomingNumberRequest** | Incoming Number transaction details |

### Return type

**IncomingNumberResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                            | Response headers |
| ----------- | -------------------------------------- | ---------------- |
| **200**     | Successful Incoming Number transaction | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createAConference**

> ConferenceResult createAConference()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiCreateAConferenceRequest = {
  // CreateConferenceRequest | Conference to create (optional)
  createConferenceRequest: {
    alias: "alias_example",
    playBeep: "always",
    record: true,
    waitUrl: "waitUrl_example",
    statusCallbackUrl: "statusCallbackUrl_example",
  },
};

apiInstance
  .createAConference(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                        | Type                        | Description          | Notes |
| --------------------------- | --------------------------- | -------------------- | ----- |
| **createConferenceRequest** | **CreateConferenceRequest** | Conference to create |

### Return type

**ConferenceResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                   | Response headers |
| ----------- | ----------------------------- | ---------------- |
| **200**     | Details of created conference | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createAQueue**

> QueueResult createAQueue()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiCreateAQueueRequest = {
  // QueueRequest | Queue details used to create a queue (optional)
  queueRequest: {
    alias: "alias_example",
    maxSize: 100,
  },
};

apiInstance
  .createAQueue(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name             | Type             | Description                          | Notes |
| ---------------- | ---------------- | ------------------------------------ | ----- |
| **queueRequest** | **QueueRequest** | Queue details used to create a queue |

### Return type

**QueueResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description               | Response headers |
| ----------- | ------------------------- | ---------------- |
| **200**     | Successfuly created queue | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createAnApplication**

> ApplicationResult createAnApplication()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiCreateAnApplicationRequest = {
  // ApplicationRequest | Application Details (optional)
  applicationRequest: {
    alias: "alias_example",
    voiceUrl: "voiceUrl_example",
    voiceFallbackUrl: "voiceFallbackUrl_example",
    callConnectUrl: "callConnectUrl_example",
    statusCallbackUrl: "statusCallbackUrl_example",
    smsUrl: "smsUrl_example",
    smsFallbackUrl: "smsFallbackUrl_example",
  },
};

apiInstance
  .createAnApplication(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                   | Type                   | Description         | Notes |
| ---------------------- | ---------------------- | ------------------- | ----- |
| **applicationRequest** | **ApplicationRequest** | Application Details |

### Return type

**ApplicationResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                     | Response headers |
| ----------- | ------------------------------- | ---------------- |
| **201**     | Application successfuly created | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **createKnowledgeBaseCompletion**

> CompletionResult createKnowledgeBaseCompletion()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiCreateKnowledgeBaseCompletionRequest = {
  // string | A string that uniquely identifies the KnowledgeBase resource.
  knowledgeBaseId: "knowledgeBaseId_example",

  // CompletionRequest | Completion request details (optional)
  completionRequest: {
    query: "query_example",
  },
};

apiInstance
  .createKnowledgeBaseCompletion(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                  | Type                  | Description                                                   | Notes                 |
| --------------------- | --------------------- | ------------------------------------------------------------- | --------------------- |
| **completionRequest** | **CompletionRequest** | Completion request details                                    |
| **knowledgeBaseId**   | [**string**]          | A string that uniquely identifies the KnowledgeBase resource. | defaults to undefined |

### Return type

**CompletionResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                        | Response headers |
| ----------- | ---------------------------------- | ---------------- |
| **200**     | KnowledgeaBase completion response | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteARecording**

> void deleteARecording()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiDeleteARecordingRequest = {
  // string | String that uniquely identifies this recording resource.
  recordingId: "recordingId_example",
};

apiInstance
  .deleteARecording(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type         | Description                                              | Notes                 |
| --------------- | ------------ | -------------------------------------------------------- | --------------------- |
| **recordingId** | [**string**] | String that uniquely identifies this recording resource. | defaults to undefined |

### Return type

**void**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **204**     | Recording Deleted | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAnApplication**

> void deleteAnApplication()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiDeleteAnApplicationRequest = {
  // string | String that uniquely identifies this application resource.
  applicationId: "applicationId_example",
};

apiInstance
  .deleteAnApplication(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name              | Type         | Description                                                | Notes                 |
| ----------------- | ------------ | ---------------------------------------------------------- | --------------------- |
| **applicationId** | [**string**] | String that uniquely identifies this application resource. | defaults to undefined |

### Return type

**void**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details

| Status code | Description                     | Response headers |
| ----------- | ------------------------------- | ---------------- |
| **204**     | Successful application deletion | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **deleteAnIncomingNumber**

> void deleteAnIncomingNumber()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiDeleteAnIncomingNumberRequest = {
  // string | String that uniquely identifies this phone number resource.
  phoneNumberId: "phoneNumberId_example",
};

apiInstance
  .deleteAnIncomingNumber(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name              | Type         | Description                                                 | Notes                 |
| ----------------- | ------------ | ----------------------------------------------------------- | --------------------- |
| **phoneNumberId** | [**string**] | String that uniquely identifies this phone number resource. | defaults to undefined |

### Return type

**void**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details

| Status code | Description                          | Response headers |
| ----------- | ------------------------------------ | ---------------- |
| **204**     | Successful Incoming Number deletion. | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dequeueAMember**

> QueueMember dequeueAMember()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiDequeueAMemberRequest = {
  // string | String that uniquely identifies the Queue that the Member belongs to.
  queueId: "queueId_example",

  // string | ID if the Call that the Member belongs to
  callId: "callId_example",
};

apiInstance
  .dequeueAMember(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name        | Type         | Description                                                           | Notes                 |
| ----------- | ------------ | --------------------------------------------------------------------- | --------------------- |
| **queueId** | [**string**] | String that uniquely identifies the Queue that the Member belongs to. | defaults to undefined |
| **callId**  | [**string**] | ID if the Call that the Member belongs to                             | defaults to undefined |

### Return type

**QueueMember**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description              | Response headers |
| ----------- | ------------------------ | ---------------- |
| **202**     | Accepted dequeue request | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **dequeueHeadMember**

> QueueMember dequeueHeadMember()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiDequeueHeadMemberRequest = {
  // string | String that uniquely identifies this queue resource.
  queueId: "queueId_example",
};

apiInstance
  .dequeueHeadMember(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name        | Type         | Description                                          | Notes                 |
| ----------- | ------------ | ---------------------------------------------------- | --------------------- |
| **queueId** | [**string**] | String that uniquely identifies this queue resource. | defaults to undefined |

### Return type

**QueueMember**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description              | Response headers |
| ----------- | ------------------------ | ---------------- |
| **202**     | Accepted dequeue request | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **downloadARecordingFile**

> HttpFile downloadARecordingFile()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiDownloadARecordingFileRequest = {
  // string | String that uniquely identifies this recording resource.
  recordingId: "recordingId_example",
};

apiInstance
  .downloadARecordingFile(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type         | Description                                              | Notes                 |
| --------------- | ------------ | -------------------------------------------------------- | --------------------- |
| **recordingId** | [**string**] | String that uniquely identifies this recording resource. | defaults to undefined |

### Return type

**HttpFile**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: audio/x-wav

### HTTP response details

| Status code | Description                                                      | Response headers |
| ----------- | ---------------------------------------------------------------- | ---------------- |
| **200**     | Download a Recording file represented with audio/x-wav mime-type | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **filterLogs**

> LogList filterLogs(filterLogsRequest)

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiFilterLogsRequest = {
  // FilterLogsRequest | Filter logs request paramters
  filterLogsRequest: {
    pql: "pql_example",
  },
};

apiInstance
  .filterLogs(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                  | Type                  | Description                   | Notes |
| --------------------- | --------------------- | ----------------------------- | ----- |
| **filterLogsRequest** | **FilterLogsRequest** | Filter logs request paramters |

### Return type

**LogList**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                     | Response headers |
| ----------- | ------------------------------- | ---------------- |
| **200**     | Successfully retrieved log list | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getACall**

> CallResult getACall()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetACallRequest = {
  // string | String that uniquely identifies this call resource.
  callId: "callId_example",
};

apiInstance
  .getACall(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name       | Type         | Description                                         | Notes                 |
| ---------- | ------------ | --------------------------------------------------- | --------------------- |
| **callId** | [**string**] | String that uniquely identifies this call resource. | defaults to undefined |

### Return type

**CallResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description   | Response headers |
| ----------- | ------------- | ---------------- |
| **200**     | Call Resource | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAConference**

> ConferenceResult getAConference()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetAConferenceRequest = {
  // string | A string that uniquely identifies this conference resource.
  conferenceId: "conferenceId_example",
};

apiInstance
  .getAConference(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name             | Type         | Description                                                 | Notes                 |
| ---------------- | ------------ | ----------------------------------------------------------- | --------------------- |
| **conferenceId** | [**string**] | A string that uniquely identifies this conference resource. | defaults to undefined |

### Return type

**ConferenceResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                       | Response headers |
| ----------- | --------------------------------- | ---------------- |
| **200**     | Successfully retrieved conference | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAMember**

> QueueMember getAMember()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetAMemberRequest = {
  // string | String that uniquely identifies the Queue that the Member belongs to.
  queueId: "queueId_example",

  // string | ID of the Call that the Member belongs to
  callId: "callId_example",
};

apiInstance
  .getAMember(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name        | Type         | Description                                                           | Notes                 |
| ----------- | ------------ | --------------------------------------------------------------------- | --------------------- |
| **queueId** | [**string**] | String that uniquely identifies the Queue that the Member belongs to. | defaults to undefined |
| **callId**  | [**string**] | ID of the Call that the Member belongs to                             | defaults to undefined |

### Return type

**QueueMember**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                           | Response headers |
| ----------- | ------------------------------------- | ---------------- |
| **200**     | Successfully retrieved a queue member | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAParticipant**

> ConferenceParticipantResult getAParticipant()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetAParticipantRequest = {
  // string | ID of the conference this participant is in.
  conferenceId: "conferenceId_example",

  // string | ID of the Call associated with this participant.
  callId: "callId_example",
};

apiInstance
  .getAParticipant(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name             | Type         | Description                                      | Notes                 |
| ---------------- | ------------ | ------------------------------------------------ | --------------------- |
| **conferenceId** | [**string**] | ID of the conference this participant is in.     | defaults to undefined |
| **callId**       | [**string**] | ID of the Call associated with this participant. | defaults to undefined |

### Return type

**ConferenceParticipantResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                   | Response headers |
| ----------- | --------------------------------------------- | ---------------- |
| **200**     | Successfully retrieved conference participant | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAQueue**

> QueueResult getAQueue()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetAQueueRequest = {
  // string | A string that uniquely identifies this queue resource.
  queueId: "queueId_example",
};

apiInstance
  .getAQueue(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name        | Type         | Description                                            | Notes                 |
| ----------- | ------------ | ------------------------------------------------------ | --------------------- |
| **queueId** | [**string**] | A string that uniquely identifies this queue resource. | defaults to undefined |

### Return type

**QueueResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                  | Response headers |
| ----------- | ---------------------------- | ---------------- |
| **200**     | Successfully retrieved queue | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getARecording**

> RecordingResult getARecording()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetARecordingRequest = {
  // string | String that uniquely identifies this recording resource.
  recordingId: "recordingId_example",
};

apiInstance
  .getARecording(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type         | Description                                              | Notes                 |
| --------------- | ------------ | -------------------------------------------------------- | --------------------- |
| **recordingId** | [**string**] | String that uniquely identifies this recording resource. | defaults to undefined |

### Return type

**RecordingResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     |             | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAnAccount**

> AccountResult getAnAccount()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetAnAccountRequest = {};

apiInstance
  .getAnAccount(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

### Return type

**AccountResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description     | Response headers |
| ----------- | --------------- | ---------------- |
| **200**     | Account Details | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAnApplication**

> ApplicationResult getAnApplication()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetAnApplicationRequest = {
  // string | A string that uniquely identifies this application resource.
  applicationId: "applicationId_example",
};

apiInstance
  .getAnApplication(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name              | Type         | Description                                                  | Notes                 |
| ----------------- | ------------ | ------------------------------------------------------------ | --------------------- |
| **applicationId** | [**string**] | A string that uniquely identifies this application resource. | defaults to undefined |

### Return type

**ApplicationResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description         | Response headers |
| ----------- | ------------------- | ---------------- |
| **200**     | Application Details | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAnIncomingNumber**

> IncomingNumberResult getAnIncomingNumber()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetAnIncomingNumberRequest = {
  // string | String that uniquely identifies this phone number resource.
  phoneNumberId: "phoneNumberId_example",
};

apiInstance
  .getAnIncomingNumber(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name              | Type         | Description                                                 | Notes                 |
| ----------------- | ------------ | ----------------------------------------------------------- | --------------------- |
| **phoneNumberId** | [**string**] | String that uniquely identifies this phone number resource. | defaults to undefined |

### Return type

**IncomingNumberResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                   | Response headers |
| ----------- | ----------------------------- | ---------------- |
| **200**     | Incoming Phone Number result. | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAnSmsMessage**

> MessageResult getAnSmsMessage()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetAnSmsMessageRequest = {
  // string | String that uniquely identifies this Message resource.
  messageId: "messageId_example",
};

apiInstance
  .getAnSmsMessage(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name          | Type         | Description                                            | Notes                 |
| ------------- | ------------ | ------------------------------------------------------ | --------------------- |
| **messageId** | [**string**] | String that uniquely identifies this Message resource. | defaults to undefined |

### Return type

**MessageResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                 | Response headers |
| ----------- | ----------------------------------------------------------- | ---------------- |
| **200**     | The specific SMS message that’s been processed by FreeClimb | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getHeadMember**

> QueueMember getHeadMember()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetHeadMemberRequest = {
  // string | String that uniquely identifies the Queue that the Member belongs to.
  queueId: "queueId_example",
};

apiInstance
  .getHeadMember(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name        | Type         | Description                                                           | Notes                 |
| ----------- | ------------ | --------------------------------------------------------------------- | --------------------- |
| **queueId** | [**string**] | String that uniquely identifies the Queue that the Member belongs to. | defaults to undefined |

### Return type

**QueueMember**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                         | Response headers |
| ----------- | ----------------------------------- | ---------------- |
| **200**     | Successfully retrieved queue member | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTenDLCSmsBrand**

> SMSTenDLCBrand getTenDLCSmsBrand()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetTenDLCSmsBrandRequest = {
  // string | String that uniquely identifies this brand resource.
  brandId: "brandId_example",
};

apiInstance
  .getTenDLCSmsBrand(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name        | Type         | Description                                          | Notes                 |
| ----------- | ------------ | ---------------------------------------------------- | --------------------- |
| **brandId** | [**string**] | String that uniquely identifies this brand resource. | defaults to undefined |

### Return type

**SMSTenDLCBrand**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                     | Response headers |
| ----------- | --------------------------------------------------------------- | ---------------- |
| **200**     | The specific SMS 10DLC Brand that’s been processed by FreeClimb | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTenDLCSmsBrands**

> SMSTenDLCBrandsListResult getTenDLCSmsBrands()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetTenDLCSmsBrandsRequest = {};

apiInstance
  .getTenDLCSmsBrands(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

### Return type

**SMSTenDLCBrandsListResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description               | Response headers |
| ----------- | ------------------------- | ---------------- |
| **200**     | The list SMS 10DLC brands | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTenDLCSmsCampaign**

> SMSTenDLCCampaign getTenDLCSmsCampaign()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetTenDLCSmsCampaignRequest = {
  // string | String that uniquely identifies this campaign resource.
  campaignId: "campaignId_example",
};

apiInstance
  .getTenDLCSmsCampaign(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name           | Type         | Description                                             | Notes                 |
| -------------- | ------------ | ------------------------------------------------------- | --------------------- |
| **campaignId** | [**string**] | String that uniquely identifies this campaign resource. | defaults to undefined |

### Return type

**SMSTenDLCCampaign**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                        | Response headers |
| ----------- | ------------------------------------------------------------------ | ---------------- |
| **200**     | The specific SMS 10DLC Campaign that’s been processed by FreeClimb | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTenDLCSmsCampaigns**

> SMSTenDLCCampaignsListResult getTenDLCSmsCampaigns()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetTenDLCSmsCampaignsRequest = {
  // string | The unique identifier for a brand (optional)
  brandId: "brandId_example",
};

apiInstance
  .getTenDLCSmsCampaigns(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name        | Type         | Description                       | Notes                            |
| ----------- | ------------ | --------------------------------- | -------------------------------- |
| **brandId** | [**string**] | The unique identifier for a brand | (optional) defaults to undefined |

### Return type

**SMSTenDLCCampaignsListResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                  | Response headers |
| ----------- | ---------------------------- | ---------------- |
| **200**     | The list SMS 10DLC campaigns | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTenDLCSmsPartnerCampaign**

> SMSTenDLCPartnerCampaign getTenDLCSmsPartnerCampaign()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetTenDLCSmsPartnerCampaignRequest = {
  // string | String that uniquely identifies this campaign resource.
  campaignId: "campaignId_example",
};

apiInstance
  .getTenDLCSmsPartnerCampaign(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name           | Type         | Description                                             | Notes                 |
| -------------- | ------------ | ------------------------------------------------------- | --------------------- |
| **campaignId** | [**string**] | String that uniquely identifies this campaign resource. | defaults to undefined |

### Return type

**SMSTenDLCPartnerCampaign**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                                | Response headers |
| ----------- | -------------------------------------------------------------------------- | ---------------- |
| **200**     | The specific SMS 10DLC Partner Campaign that’s been processed by FreeClimb | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTenDLCSmsPartnerCampaigns**

> SMSTenDLCPartnerCampaignsListResult getTenDLCSmsPartnerCampaigns()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetTenDLCSmsPartnerCampaignsRequest = {
  // string | The unique identifier for a brand (optional)
  brandId: "brandId_example",
};

apiInstance
  .getTenDLCSmsPartnerCampaigns(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name        | Type         | Description                       | Notes                            |
| ----------- | ------------ | --------------------------------- | -------------------------------- |
| **brandId** | [**string**] | The unique identifier for a brand | (optional) defaults to undefined |

### Return type

**SMSTenDLCPartnerCampaignsListResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                          | Response headers |
| ----------- | ------------------------------------ | ---------------- |
| **200**     | The list SMS 10DLC partner campaigns | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTollFreeSmsCampaign**

> SMSTollFreeCampaign getTollFreeSmsCampaign()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetTollFreeSmsCampaignRequest = {
  // string | String that uniquely identifies this TollFree Campaign resource.
  campaignId: "campaignId_example",
};

apiInstance
  .getTollFreeSmsCampaign(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name           | Type         | Description                                                      | Notes                 |
| -------------- | ------------ | ---------------------------------------------------------------- | --------------------- |
| **campaignId** | [**string**] | String that uniquely identifies this TollFree Campaign resource. | defaults to undefined |

### Return type

**SMSTollFreeCampaign**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                                           | Response headers |
| ----------- | --------------------------------------------------------------------- | ---------------- |
| **200**     | The specific SMS TollFree Campaign that’s been processed by FreeClimb | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getTollFreeSmsCampaigns**

> SMSTollFreeCampaignsListResult getTollFreeSmsCampaigns()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiGetTollFreeSmsCampaignsRequest = {};

apiInstance
  .getTollFreeSmsCampaigns(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

### Return type

**SMSTollFreeCampaignsListResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                  | Response headers |
| ----------- | ---------------------------- | ---------------- |
| **200**     | The list toll-free campaigns | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listActiveQueues**

> QueueList listActiveQueues()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiListActiveQueuesRequest = {
  // string | Return only the Queue resources with aliases that exactly match this name. (optional)
  alias: "alias_example",
};

apiInstance
  .listActiveQueues(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name      | Type         | Description                                                                | Notes                            |
| --------- | ------------ | -------------------------------------------------------------------------- | -------------------------------- |
| **alias** | [**string**] | Return only the Queue resources with aliases that exactly match this name. | (optional) defaults to undefined |

### Return type

**QueueList**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                      | Response headers |
| ----------- | -------------------------------- | ---------------- |
| **200**     | Successfuly retrieved queue list | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAllAccountLogs**

> LogList listAllAccountLogs()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiListAllAccountLogsRequest = {};

apiInstance
  .listAllAccountLogs(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

### Return type

**LogList**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                     | Response headers |
| ----------- | ------------------------------- | ---------------- |
| **200**     | Successfully retrieved log list | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listApplications**

> ApplicationList listApplications()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiListApplicationsRequest = {
  // string | Return only applications with aliases that exactly match this value. (optional)
  alias: "alias_example",
};

apiInstance
  .listApplications(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name      | Type         | Description                                                          | Notes                            |
| --------- | ------------ | -------------------------------------------------------------------- | -------------------------------- |
| **alias** | [**string**] | Return only applications with aliases that exactly match this value. | (optional) defaults to undefined |

### Return type

**ApplicationList**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | List of Applications | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAvailableNumbers**

> AvailableNumberList listAvailableNumbers()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiListAvailableNumbersRequest = {
  // string | PCRE-compatible regular expression to filter against `phoneNumber` field, which is in E.164 format. (optional)
  phoneNumber: "phoneNumber_example",

  // string | State or province of this phone number. (optional)
  region: "region_example",

  // string | Country of this phone number. (optional)
  country: "country_example",

  // boolean | Indicates whether the phone number can handle Calls. Typically set to true for all numbers. (optional)
  voiceEnabled: true,

  // boolean | Indication of whether the phone number can handle sending and receiving SMS messages. Typically set to true for all numbers. (optional)
  smsEnabled: true,

  // boolean |  (optional)
  capabilitiesVoice: true,

  // boolean |  (optional)
  capabilitiesSms: true,

  // boolean |  (optional)
  capabilitiesTollFree: true,

  // boolean |  (optional)
  capabilitiesTenDLC: true,

  // boolean |  (optional)
  capabilitiesShortCode: true,
};

apiInstance
  .listAvailableNumbers(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                      | Type          | Description                                                                                                                  | Notes                            |
| ------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **phoneNumber**           | [**string**]  | PCRE-compatible regular expression to filter against &#x60;phoneNumber&#x60; field, which is in E.164 format.                | (optional) defaults to undefined |
| **region**                | [**string**]  | State or province of this phone number.                                                                                      | (optional) defaults to undefined |
| **country**               | [**string**]  | Country of this phone number.                                                                                                | (optional) defaults to undefined |
| **voiceEnabled**          | [**boolean**] | Indicates whether the phone number can handle Calls. Typically set to true for all numbers.                                  | (optional) defaults to true      |
| **smsEnabled**            | [**boolean**] | Indication of whether the phone number can handle sending and receiving SMS messages. Typically set to true for all numbers. | (optional) defaults to true      |
| **capabilitiesVoice**     | [**boolean**] |                                                                                                                              | (optional) defaults to undefined |
| **capabilitiesSms**       | [**boolean**] |                                                                                                                              | (optional) defaults to undefined |
| **capabilitiesTollFree**  | [**boolean**] |                                                                                                                              | (optional) defaults to undefined |
| **capabilitiesTenDLC**    | [**boolean**] |                                                                                                                              | (optional) defaults to undefined |
| **capabilitiesShortCode** | [**boolean**] |                                                                                                                              | (optional) defaults to undefined |

### Return type

**AvailableNumberList**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description            | Response headers |
| ----------- | ---------------------- | ---------------- |
| **200**     | Available Numbers List | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCallLogs**

> LogList listCallLogs()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiListCallLogsRequest = {
  // string | String that uniquely identifies this call resource.
  callId: "callId_example",
};

apiInstance
  .listCallLogs(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name       | Type         | Description                                         | Notes                 |
| ---------- | ------------ | --------------------------------------------------- | --------------------- |
| **callId** | [**string**] | String that uniquely identifies this call resource. | defaults to undefined |

### Return type

**LogList**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | Logs for this call | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCallRecordings**

> RecordingList listCallRecordings()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiListCallRecordingsRequest = {
  // string | String that uniquely identifies this call resource.
  callId: "callId_example",

  // string | Only show recordings created on the specified date, in the form *YYYY-MM-DD*. (optional)
  dateCreated: "dateCreated_example",
};

apiInstance
  .listCallRecordings(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type         | Description                                                                   | Notes                            |
| --------------- | ------------ | ----------------------------------------------------------------------------- | -------------------------------- |
| **callId**      | [**string**] | String that uniquely identifies this call resource.                           | defaults to undefined            |
| **dateCreated** | [**string**] | Only show recordings created on the specified date, in the form _YYYY-MM-DD_. | (optional) defaults to undefined |

### Return type

**RecordingList**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                   | Response headers |
| ----------- | ----------------------------- | ---------------- |
| **200**     | List of recordings for a call | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listCalls**

> CallList listCalls()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiListCallsRequest = {
  // boolean | If active is set to true then all calls of the nature queued, ringing, inProgress are returned in the query. (optional)
  active: false,

  // string | Only show Calls to this phone number. (optional)
  to: "to_example",

  // string | Only show Calls from this phone number. (optional)
  _from: "from_example",

  // CallStatus | Only show Calls currently in this status. May be `queued`, `ringing`, `inProgress`, `canceled`, `completed`, `failed`, `busy`, or `noAnswer`. (optional)
  status: "queued",

  // string | Only show Calls that started at or after this time, given as YYYY-MM-DD hh:mm:ss. (optional)
  startTime: "startTime_example",

  // string | Only show Calls that ended at or before this time, given as YYYY-MM- DD hh:mm:ss. (optional)
  endTime: "endTime_example",

  // string | Only show Calls spawned by the call with this ID. (optional)
  parentCallId: "parentCallId_example",

  // Array<string> | Only show calls belonging to the given applicationId. This parameter can be repeated to return calls from multiple Applications. (optional)
  applicationId: ["AP62ECB020842930cc01FFCCfeEe150AC32DcAEc8a"],
};

apiInstance
  .listCalls(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name              | Type                    | Description                                                                                                                                                                                                                   | Notes                            |
| ----------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **active**        | [**boolean**]           | If active is set to true then all calls of the nature queued, ringing, inProgress are returned in the query.                                                                                                                  | (optional) defaults to false     |
| **to**            | [**string**]            | Only show Calls to this phone number.                                                                                                                                                                                         | (optional) defaults to undefined |
| **\_from**        | [**string**]            | Only show Calls from this phone number.                                                                                                                                                                                       | (optional) defaults to undefined |
| **status**        | **CallStatus**          | Only show Calls currently in this status. May be &#x60;queued&#x60;, &#x60;ringing&#x60;, &#x60;inProgress&#x60;, &#x60;canceled&#x60;, &#x60;completed&#x60;, &#x60;failed&#x60;, &#x60;busy&#x60;, or &#x60;noAnswer&#x60;. | (optional) defaults to undefined |
| **startTime**     | [**string**]            | Only show Calls that started at or after this time, given as YYYY-MM-DD hh:mm:ss.                                                                                                                                             | (optional) defaults to undefined |
| **endTime**       | [**string**]            | Only show Calls that ended at or before this time, given as YYYY-MM- DD hh:mm:ss.                                                                                                                                             | (optional) defaults to undefined |
| **parentCallId**  | [**string**]            | Only show Calls spawned by the call with this ID.                                                                                                                                                                             | (optional) defaults to undefined |
| **applicationId** | **Array&lt;string&gt;** | Only show calls belonging to the given applicationId. This parameter can be repeated to return calls from multiple Applications.                                                                                              | (optional) defaults to undefined |

### Return type

**CallList**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                    | Response headers |
| ----------- | ------------------------------ | ---------------- |
| **200**     | Successful retrieved call list | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listConferenceRecordings**

> RecordingList listConferenceRecordings()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiListConferenceRecordingsRequest = {
  // string | Show only Recordings made during the conference with this ID.
  conferenceId: "conferenceId_example",

  // string | Show only Recordings made during the Call with this ID. (optional)
  callId: "callId_example",

  // string | Only show Recordings created on this date, formatted as *YYYY-MM-DD*. (optional)
  dateCreated: "dateCreated_example",
};

apiInstance
  .listConferenceRecordings(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name             | Type         | Description                                                           | Notes                            |
| ---------------- | ------------ | --------------------------------------------------------------------- | -------------------------------- |
| **conferenceId** | [**string**] | Show only Recordings made during the conference with this ID.         | defaults to undefined            |
| **callId**       | [**string**] | Show only Recordings made during the Call with this ID.               | (optional) defaults to undefined |
| **dateCreated**  | [**string**] | Only show Recordings created on this date, formatted as _YYYY-MM-DD_. | (optional) defaults to undefined |

### Return type

**RecordingList**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | List of Recordings | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listConferences**

> ConferenceList listConferences()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiListConferencesRequest = {
  // string | Only show conferences that currently have the specified status. Valid values: `empty`, `populated`, `inProgress`, or `terminated`. (optional)
  status: "status_example",

  // string | List Conferences whose alias exactly matches this string. (optional)
  alias: "alias_example",

  // string | Only show Conferences that were created on the specified date, in the form *YYYY-MM-DD*. (optional)
  dateCreated: "dateCreated_example",

  // string | Only show Conferences that were last updated on the specified date, in the form *YYYY-MM-DD*. (optional)
  dateUpdated: "dateUpdated_example",
};

apiInstance
  .listConferences(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type         | Description                                                                                                                                                                | Notes                            |
| --------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **status**      | [**string**] | Only show conferences that currently have the specified status. Valid values: &#x60;empty&#x60;, &#x60;populated&#x60;, &#x60;inProgress&#x60;, or &#x60;terminated&#x60;. | (optional) defaults to undefined |
| **alias**       | [**string**] | List Conferences whose alias exactly matches this string.                                                                                                                  | (optional) defaults to undefined |
| **dateCreated** | [**string**] | Only show Conferences that were created on the specified date, in the form _YYYY-MM-DD_.                                                                                   | (optional) defaults to undefined |
| **dateUpdated** | [**string**] | Only show Conferences that were last updated on the specified date, in the form _YYYY-MM-DD_.                                                                              | (optional) defaults to undefined |

### Return type

**ConferenceList**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description         | Response headers |
| ----------- | ------------------- | ---------------- |
| **200**     | List of Conferences | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listIncomingNumbers**

> IncomingNumberList listIncomingNumbers()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiListIncomingNumbersRequest = {
  // string | Only show incoming phone number resources that match this PCRE-compatible regular expression. (optional)
  phoneNumber: "phoneNumber_example",

  // string | Only show incoming phone numbers with aliases that exactly match this value. (optional)
  alias: "alias_example",

  // string | State or province of this phone number. (optional)
  region: "region_example",

  // string | Country of this phone number. (optional)
  country: "country_example",

  // string | ID of the Application that FreeClimb should contact if a Call or SMS arrives for this phone number or a Call from this number is placed. An incoming phone number is not useful until associated with an applicationId. (optional)
  applicationId: "applicationId_example",

  // boolean | Indication of whether the phone number has an application linked to it. (optional)
  hasApplication: false,

  // boolean | Indicates whether the phone number can handle Calls. Typically set to true for all numbers. (optional)
  voiceEnabled: true,

  // boolean | Indication of whether the phone number can handle sending and receiving SMS messages. Typically set to true for all numbers. (optional)
  smsEnabled: true,

  // boolean | Indication of whether the phone number has a campaign associated with it (optional)
  hasCampaign: true,

  // boolean |  (optional)
  capabilitiesVoice: true,

  // boolean |  (optional)
  capabilitiesSms: true,

  // boolean |  (optional)
  capabilitiesTollFree: true,

  // boolean |  (optional)
  capabilitiesTenDLC: true,

  // boolean |  (optional)
  capabilitiesShortCode: true,

  // string | Only show incoming phone number resources that have been assigned to the provided TFNCampaign ID. (optional)
  tfnCampaignId: "tfn.campaignId_example",

  // boolean | Indication of whether the phone number was registered as an offnet number. This field will be rendered only for requests to the IncomingPhone number resource. (optional)
  offnet: true,
};

apiInstance
  .listIncomingNumbers(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                      | Type          | Description                                                                                                                                                                                                             | Notes                            |
| ------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **phoneNumber**           | [**string**]  | Only show incoming phone number resources that match this PCRE-compatible regular expression.                                                                                                                           | (optional) defaults to undefined |
| **alias**                 | [**string**]  | Only show incoming phone numbers with aliases that exactly match this value.                                                                                                                                            | (optional) defaults to undefined |
| **region**                | [**string**]  | State or province of this phone number.                                                                                                                                                                                 | (optional) defaults to undefined |
| **country**               | [**string**]  | Country of this phone number.                                                                                                                                                                                           | (optional) defaults to undefined |
| **applicationId**         | [**string**]  | ID of the Application that FreeClimb should contact if a Call or SMS arrives for this phone number or a Call from this number is placed. An incoming phone number is not useful until associated with an applicationId. | (optional) defaults to undefined |
| **hasApplication**        | [**boolean**] | Indication of whether the phone number has an application linked to it.                                                                                                                                                 | (optional) defaults to false     |
| **voiceEnabled**          | [**boolean**] | Indicates whether the phone number can handle Calls. Typically set to true for all numbers.                                                                                                                             | (optional) defaults to true      |
| **smsEnabled**            | [**boolean**] | Indication of whether the phone number can handle sending and receiving SMS messages. Typically set to true for all numbers.                                                                                            | (optional) defaults to true      |
| **hasCampaign**           | [**boolean**] | Indication of whether the phone number has a campaign associated with it                                                                                                                                                | (optional) defaults to undefined |
| **capabilitiesVoice**     | [**boolean**] |                                                                                                                                                                                                                         | (optional) defaults to undefined |
| **capabilitiesSms**       | [**boolean**] |                                                                                                                                                                                                                         | (optional) defaults to undefined |
| **capabilitiesTollFree**  | [**boolean**] |                                                                                                                                                                                                                         | (optional) defaults to undefined |
| **capabilitiesTenDLC**    | [**boolean**] |                                                                                                                                                                                                                         | (optional) defaults to undefined |
| **capabilitiesShortCode** | [**boolean**] |                                                                                                                                                                                                                         | (optional) defaults to undefined |
| **tfnCampaignId**         | [**string**]  | Only show incoming phone number resources that have been assigned to the provided TFNCampaign ID.                                                                                                                       | (optional) defaults to undefined |
| **offnet**                | [**boolean**] | Indication of whether the phone number was registered as an offnet number. This field will be rendered only for requests to the IncomingPhone number resource.                                                          | (optional) defaults to undefined |

### Return type

**IncomingNumberList**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                    | Response headers |
| ----------- | ------------------------------ | ---------------- |
| **200**     | List of Incoming Phone Numbers | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listMembers**

> QueueMemberList listMembers()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiListMembersRequest = {
  // string | String that uniquely identifies the Queue that the Member belongs to.
  queueId: "queueId_example",
};

apiInstance
  .listMembers(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name        | Type         | Description                                                           | Notes                 |
| ----------- | ------------ | --------------------------------------------------------------------- | --------------------- |
| **queueId** | [**string**] | String that uniquely identifies the Queue that the Member belongs to. | defaults to undefined |

### Return type

**QueueMemberList**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                              | Response headers |
| ----------- | ---------------------------------------- | ---------------- |
| **200**     | Successfully retrieved queue member list | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listParticipants**

> ConferenceParticipantList listParticipants()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiListParticipantsRequest = {
  // string | ID of the conference this participant is in.
  conferenceId: "conferenceId_example",

  // boolean | Only show Participants with the talk privilege. (optional)
  talk: true,

  // boolean | Only show Participants with the listen privilege. (optional)
  listen: true,

  // boolean | Only show Participants with the dtmfPassThrough privilege. (optional)
  dtmfPassThrough: true,
};

apiInstance
  .listParticipants(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                | Type          | Description                                                | Notes                            |
| ------------------- | ------------- | ---------------------------------------------------------- | -------------------------------- |
| **conferenceId**    | [**string**]  | ID of the conference this participant is in.               | defaults to undefined            |
| **talk**            | [**boolean**] | Only show Participants with the talk privilege.            | (optional) defaults to undefined |
| **listen**          | [**boolean**] | Only show Participants with the listen privilege.          | (optional) defaults to undefined |
| **dtmfPassThrough** | [**boolean**] | Only show Participants with the dtmfPassThrough privilege. | (optional) defaults to undefined |

### Return type

**ConferenceParticipantList**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                                        | Response headers |
| ----------- | -------------------------------------------------- | ---------------- |
| **200**     | Successfully retrieved conference participant list | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listRecordings**

> RecordingList listRecordings()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiListRecordingsRequest = {
  // string | Show only Recordings made during the Call with this ID. (optional)
  callId: "callId_example",

  // string | Show only Recordings made during the conference with this ID. (optional)
  conferenceId: "conferenceId_example",

  // string | Only show Recordings created on this date, formatted as *YYYY-MM-DD*. (optional)
  dateCreated: "dateCreated_example",
};

apiInstance
  .listRecordings(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name             | Type         | Description                                                           | Notes                            |
| ---------------- | ------------ | --------------------------------------------------------------------- | -------------------------------- |
| **callId**       | [**string**] | Show only Recordings made during the Call with this ID.               | (optional) defaults to undefined |
| **conferenceId** | [**string**] | Show only Recordings made during the conference with this ID.         | (optional) defaults to undefined |
| **dateCreated**  | [**string**] | Only show Recordings created on this date, formatted as _YYYY-MM-DD_. | (optional) defaults to undefined |

### Return type

**RecordingList**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | List of Recordings | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listSmsMessages**

> MessagesList listSmsMessages()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiListSmsMessagesRequest = {
  // string | Only show Messages to this phone number. (optional)
  to: "to_example",

  // string | Only show Messages from this phone number. (optional)
  _from: "from_example",

  // string | Only show Messages sent at or after this time (GMT), given as *YYYY-MM-DD hh:mm:ss*. (optional)
  beginTime: "beginTime_example",

  // string | Only show messages sent at or before this time (GMT), given as *YYYY-MM-DD hh:mm*.. (optional)
  endTime: "endTime_example",

  // MessageDirection | Either `inbound` or `outbound`. Only show Messages that were either *sent from* or *received by* FreeClimb. (optional)
  direction: "inbound",

  // string | Only show messages associated with this campaign ID. (optional)
  campaignId: "campaignId_example",

  // string | Only show messages associated with this brand ID (optional)
  brandId: "brandId_example",

  // boolean | Only show messages that were sent as part of a 10DLC campaign. (optional)
  is10DLC: true,
};

apiInstance
  .listSmsMessages(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name           | Type                 | Description                                                                                                                     | Notes                            |
| -------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **to**         | [**string**]         | Only show Messages to this phone number.                                                                                        | (optional) defaults to undefined |
| **\_from**     | [**string**]         | Only show Messages from this phone number.                                                                                      | (optional) defaults to undefined |
| **beginTime**  | [**string**]         | Only show Messages sent at or after this time (GMT), given as _YYYY-MM-DD hh:mm:ss_.                                            | (optional) defaults to undefined |
| **endTime**    | [**string**]         | Only show messages sent at or before this time (GMT), given as _YYYY-MM-DD hh:mm_..                                             | (optional) defaults to undefined |
| **direction**  | **MessageDirection** | Either &#x60;inbound&#x60; or &#x60;outbound&#x60;. Only show Messages that were either _sent from_ or _received by_ FreeClimb. | (optional) defaults to undefined |
| **campaignId** | [**string**]         | Only show messages associated with this campaign ID.                                                                            | (optional) defaults to undefined |
| **brandId**    | [**string**]         | Only show messages associated with this brand ID                                                                                | (optional) defaults to undefined |
| **is10DLC**    | [**boolean**]        | Only show messages that were sent as part of a 10DLC campaign.                                                                  | (optional) defaults to undefined |

### Return type

**MessagesList**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description      | Response headers |
| ----------- | ---------------- | ---------------- |
| **200**     | List of messages | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **makeACall**

> CallResult makeACall()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiMakeACallRequest = {
  // MakeCallRequest | Call details for making a call (optional)
  makeCallRequest: {
    _from: "_from_example",
    to: "to_example",
    applicationId: "applicationId_example",
    sendDigits: "sendDigits_example",
    ifMachine: "ifMachine_example",
    ifMachineUrl: "ifMachineUrl_example",
    timeout: 30,
    parentCallId: "parentCallId_example",
    privacyMode: true,
    callConnectUrl: "callConnectUrl_example",
  },
};

apiInstance
  .makeACall(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                | Type                | Description                    | Notes |
| ------------------- | ------------------- | ------------------------------ | ----- |
| **makeCallRequest** | **MakeCallRequest** | Call details for making a call |

### Return type

**CallResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description           | Response headers |
| ----------- | --------------------- | ---------------- |
| **200**     | Call that was created | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **makeAWebrtcJwt**

> string makeAWebrtcJwt(createWebRTCToken)

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiMakeAWebrtcJwtRequest = {
  // CreateWebRTCToken | Information needed to craft a JWT compatible with the platforms WebRTC APIs
  createWebRTCToken: {
    to: "to_example",
    _from: "_from_example",
    uses: 1,
  },
};

apiInstance
  .makeAWebrtcJwt(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                  | Type                  | Description                                                                 | Notes |
| --------------------- | --------------------- | --------------------------------------------------------------------------- | ----- |
| **createWebRTCToken** | **CreateWebRTCToken** | Information needed to craft a JWT compatible with the platforms WebRTC APIs |

### Return type

**string**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/plain

### HTTP response details

| Status code | Description     | Response headers |
| ----------- | --------------- | ---------------- |
| **200**     | The created JWT | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **removeAParticipant**

> void removeAParticipant()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiRemoveAParticipantRequest = {
  // string | ID of the conference this participant is in.
  conferenceId: "conferenceId_example",

  // string | ID of the Call associated with this participant.
  callId: "callId_example",
};

apiInstance
  .removeAParticipant(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name             | Type         | Description                                      | Notes                 |
| ---------------- | ------------ | ------------------------------------------------ | --------------------- |
| **conferenceId** | [**string**] | ID of the conference this participant is in.     | defaults to undefined |
| **callId**       | [**string**] | ID of the Call associated with this participant. | defaults to undefined |

### Return type

**void**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

### HTTP response details

| Status code | Description                                 | Response headers |
| ----------- | ------------------------------------------- | ---------------- |
| **204**     | Successfully deleted conference participant | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendAnSmsMessage**

> MessageResult sendAnSmsMessage(messageRequest)

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiSendAnSmsMessageRequest = {
  // MessageRequest | Details to create a message
  messageRequest: null,
};

apiInstance
  .sendAnSmsMessage(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name               | Type               | Description                 | Notes |
| ------------------ | ------------------ | --------------------------- | ----- |
| **messageRequest** | **MessageRequest** | Details to create a message |

### Return type

**MessageResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                    | Response headers |
| ----------- | ------------------------------ | ---------------- |
| **202**     | The message has been accepted. | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **streamARecordingFile**

> HttpFile streamARecordingFile()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiStreamARecordingFileRequest = {
  // string | String that uniquely identifies this recording resource.
  recordingId: "recordingId_example",
};

apiInstance
  .streamARecordingFile(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type         | Description                                              | Notes                 |
| --------------- | ------------ | -------------------------------------------------------- | --------------------- |
| **recordingId** | [**string**] | String that uniquely identifies this recording resource. | defaults to undefined |

### Return type

**HttpFile**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: audio/x-wav

### HTTP response details

| Status code | Description                                                  | Response headers |
| ----------- | ------------------------------------------------------------ | ---------------- |
| **200**     | Streaming a Recording represented with audio/x-wav mime-type | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAConference**

> void updateAConference()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiUpdateAConferenceRequest = {
  // string | String that uniquely identifies this conference resource.
  conferenceId: "conferenceId_example",

  // UpdateConferenceRequest | Conference Details to update (optional)
  updateConferenceRequest: {
    alias: "alias_example",
    playBeep: "always",
    status: "empty",
  },
};

apiInstance
  .updateAConference(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                        | Type                        | Description                                               | Notes                 |
| --------------------------- | --------------------------- | --------------------------------------------------------- | --------------------- |
| **updateConferenceRequest** | **UpdateConferenceRequest** | Conference Details to update                              |
| **conferenceId**            | [**string**]                | String that uniquely identifies this conference resource. | defaults to undefined |

### Return type

**void**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description                          | Response headers |
| ----------- | ------------------------------------ | ---------------- |
| **204**     | Successful conference details update | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateALiveCall**

> void updateALiveCall(updateCallRequest)

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiUpdateALiveCallRequest = {
  // string | String that uniquely identifies this call resource.
  callId: "callId_example",

  // UpdateCallRequest | Call details to update
  updateCallRequest: {
    status: "canceled",
  },
};

apiInstance
  .updateALiveCall(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                  | Type                  | Description                                         | Notes                 |
| --------------------- | --------------------- | --------------------------------------------------- | --------------------- |
| **updateCallRequest** | **UpdateCallRequest** | Call details to update                              |
| **callId**            | [**string**]          | String that uniquely identifies this call resource. | defaults to undefined |

### Return type

**void**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description              | Response headers |
| ----------- | ------------------------ | ---------------- |
| **202**     | Successfully queued call | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAParticipant**

> ConferenceParticipantResult updateAParticipant()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiUpdateAParticipantRequest = {
  // string | ID of the conference this participant is in.
  conferenceId: "conferenceId_example",

  // string | ID of the Call associated with this participant.
  callId: "callId_example",

  // UpdateConferenceParticipantRequest | Conference participant details to update (optional)
  updateConferenceParticipantRequest: {
    talk: true,
    listen: true,
    dtmfPassThrough: true,
  },
};

apiInstance
  .updateAParticipant(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                                   | Type                                   | Description                                      | Notes                 |
| -------------------------------------- | -------------------------------------- | ------------------------------------------------ | --------------------- |
| **updateConferenceParticipantRequest** | **UpdateConferenceParticipantRequest** | Conference participant details to update         |
| **conferenceId**                       | [**string**]                           | ID of the conference this participant is in.     | defaults to undefined |
| **callId**                             | [**string**]                           | ID of the Call associated with this participant. | defaults to undefined |

### Return type

**ConferenceParticipantResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                                   | Response headers |
| ----------- | --------------------------------------------- | ---------------- |
| **200**     | Successfully retrieved conference participant | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAQueue**

> QueueResult updateAQueue()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiUpdateAQueueRequest = {
  // string | A string that uniquely identifies this Queue resource.
  queueId: "queueId_example",

  // QueueRequest | Queue Details to update (optional)
  queueRequest: {
    alias: "alias_example",
    maxSize: 100,
  },
};

apiInstance
  .updateAQueue(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name             | Type             | Description                                            | Notes                 |
| ---------------- | ---------------- | ------------------------------------------------------ | --------------------- |
| **queueRequest** | **QueueRequest** | Queue Details to update                                |
| **queueId**      | [**string**]     | A string that uniquely identifies this Queue resource. | defaults to undefined |

### Return type

**QueueResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                | Response headers |
| ----------- | -------------------------- | ---------------- |
| **200**     | Successfully updated queue | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAnAccount**

> void updateAnAccount()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiUpdateAnAccountRequest = {
  // AccountRequest | Account details to update (optional)
  accountRequest: {
    alias: "alias_example",
    label: "label_example",
  },
};

apiInstance
  .updateAnAccount(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name               | Type               | Description               | Notes |
| ------------------ | ------------------ | ------------------------- | ----- |
| **accountRequest** | **AccountRequest** | Account details to update |

### Return type

**void**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

### HTTP response details

| Status code | Description               | Response headers |
| ----------- | ------------------------- | ---------------- |
| **204**     | Successful Account update | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAnApplication**

> ApplicationResult updateAnApplication()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiUpdateAnApplicationRequest = {
  // string | A string that uniquely identifies this application resource.
  applicationId: "applicationId_example",

  // ApplicationRequest | Application details to update. (optional)
  applicationRequest: {
    alias: "alias_example",
    voiceUrl: "voiceUrl_example",
    voiceFallbackUrl: "voiceFallbackUrl_example",
    callConnectUrl: "callConnectUrl_example",
    statusCallbackUrl: "statusCallbackUrl_example",
    smsUrl: "smsUrl_example",
    smsFallbackUrl: "smsFallbackUrl_example",
  },
};

apiInstance
  .updateAnApplication(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                   | Type                   | Description                                                  | Notes                 |
| ---------------------- | ---------------------- | ------------------------------------------------------------ | --------------------- |
| **applicationRequest** | **ApplicationRequest** | Application details to update.                               |
| **applicationId**      | [**string**]           | A string that uniquely identifies this application resource. | defaults to undefined |

### Return type

**ApplicationResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description        | Response headers |
| ----------- | ------------------ | ---------------- |
| **200**     | Update Application | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateAnIncomingNumber**

> IncomingNumberResult updateAnIncomingNumber()

### Example

```typescript
import { freeclimb } from "@freeclimb/sdk";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiUpdateAnIncomingNumberRequest = {
  // string | String that uniquely identifies this phone number resource.
  phoneNumberId: "phoneNumberId_example",

  // IncomingNumberRequest | Incoming Number details to update (optional)
  incomingNumberRequest: {
    applicationId: "applicationId_example",
    alias: "alias_example",
    campaignId: "campaignId_example",
  },
};

apiInstance
  .updateAnIncomingNumber(body)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                      | Type                      | Description                                                 | Notes                 |
| ------------------------- | ------------------------- | ----------------------------------------------------------- | --------------------- |
| **incomingNumberRequest** | **IncomingNumberRequest** | Incoming Number details to update                           |
| **phoneNumberId**         | [**string**]              | String that uniquely identifies this phone number resource. | defaults to undefined |

### Return type

**IncomingNumberResult**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description                   | Response headers |
| ----------- | ----------------------------- | ---------------- |
| **200**     | Updated Incoming Phone Number | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNextPage**

> PaginationModel<T> getNextPage<T>()

### Example

```typescript
import { freeclimb } from "@freeclimb";
import * as fs from "fs";

const configuration = freeclimb.createConfiguration({
  accountId: "YOUR_ACCOUNT_ID",
  apiKey: "YOUR_API_KEY",
});
const apiInstance = new freeclimb.DefaultApi(configuration);

let body: freeclimb.DefaultApiListCallRecordingsRequest = {
  // string | String that uniquely identifies this call resource.
  callId: "callId_example",

  // string | Only show recordings created on the specified date, in the form *YYYY-MM-DD*. (optional)
  dateCreated: "dateCreated_example",
};

const recordingsResponse = await apiInstance.listCallRecordings(body);

await apiInstance
  .getNextPage(recordingsResponse)
  .then((data: any) => {
    console.log("Next page fetched succesfully. Returned data: " + data);
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name               | Type                     | Description                                    | Notes                 |
| ------------------ | ------------------------ | ---------------------------------------------- | --------------------- |
| **responseObject** | [**PaginationModel<T>**] | Response from resource used to fetch next page | defaults to undefined |

### Return type

**PaginationModel<T>**

### Authorization

[fc](README.md#fc)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description                | Response headers |
| ----------- | -------------------------- | ---------------- |
| **200**     | Next page of resource data | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
