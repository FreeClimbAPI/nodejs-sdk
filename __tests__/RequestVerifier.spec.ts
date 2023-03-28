import { describe, expect, test, beforeAll } from "@jest/globals";
import * as moment from 'moment';
import { RequestVerifier } from '../utils/RequestVerifier'

describe("Request Verifier Class Tests", () => {
    let instance: RequestVerifier
    beforeAll(() => {
        instance = new RequestVerifier();
    });

    test("checkRequestBodyTest", () => {
        const tolerance: number = 5 * 60
        const requestBody: string = "";
        const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
        const requestHeader: string = "t=1679944186,v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
        expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Request Body cannot be empty or null");
    })
    test("checkRequestHeaderTest", () => {
        const tolerance: number = 5 * 60
        const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
        const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
        const requestHeader: string = "t=1679944186,";
        expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Error with request header, signatures are not present");
    })
    test("checkRequestHeaderTest 2", () => {
        const tolerance: number = 5 * 60
        const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
        const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
        const requestHeader: string = "v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
        expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Error with request header, timestamp is not present");
    })
    test("checkRequestHeaderTest 3", () => {
        const tolerance: number = 5 * 60
        const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
        const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
        const requestHeader: string = "" 
        expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Error with request header, Request header is empty");
    })

    test("checkSigningSecretTest", () => {
        const tolerance: number = 5 * 60
        const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
        const signingSecret: string = "";
        const requestHeader: string = "t=1679944186,v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
        expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Signing secret cannot be empty or null");
    })

    test("checkToleranceTest", () => {
        const tolerance: number = NaN
        const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
        const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
        const requestHeader: string = "t=1679944186,v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
        expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Tolerance value must be a positive integer");
    })
    test("checkToleranceTest 2", () => {
        const tolerance: number = -5
        const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
        const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
        const requestHeader: string = "t=1679944186,v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
        expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Tolerance value must be a positive integer");
    })
    test("checkToleranceTest 3", () => {
        const tolerance: number = 0
        const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
        const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
        const requestHeader: string = "t=1679944186,v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
        expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Tolerance value must be a positive integer");
    })

    test("verifyToleranceTest", () => {
        const currentTime = moment().unix();
        const tolerance: number = 5 * 60
        const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
        const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
        const requestHeader: string = "t=1900871395,v1=1d798c86e977ff734dec3a8b8d67fe8621dcc1df46ef4212e0bfe2e122b01bfd,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
        expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Request time exceeded tolerance threshold. Request: 1900871395" 
        + ", CurrentTime: " + String(currentTime) + ", tolerance: " + tolerance);
    })

    test("verifySignatureTest", () => {
        const tolerance: number = 5 * 60
        const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
        const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7794";
        const requestHeader: string = "t=1679944186,v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8"
        expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Unverified signature request, If this request was unexpected, it may be from a bad actor. Please proceed with caution. If the request was exepected, please check any typos or issues with the signingSecret");
    })

    test("verifyRequestSignatureTest", () => {
        const tolerance: number = 5 * 60
        const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
        const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
        const requestHeader: string = "t=1679944186,v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8"
        expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).not.toThrow();
    })
})