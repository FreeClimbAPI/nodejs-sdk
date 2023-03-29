import { describe, expect, test, beforeAll } from "@jest/globals";
import * as moment from 'moment';
import { RequestVerifier } from '../utils/RequestVerifier'

describe("RequestVerifier", () => {
    let instance: RequestVerifier
    beforeAll(() => {
        instance = new RequestVerifier();
    });
    describe("#checkRequestBody", () => {
        describe("Request Body is empty or null", () => {
            test("throws 'Request Body cannot be empty or null'", () => {
                const tolerance: number = 5 * 60
                const requestBody: string = "";
                const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
                const requestHeader: string = "t=1679944186,v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
                expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Request Body cannot be empty or null");
            })
        }) 
    })

    describe("#checkRequestHeader", () => {
        describe("signatures are not present", () => {
            test("throws 'Error with request header, signatures are not present'", () => {
                const tolerance: number = 5 * 60
                const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
                const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
                const requestHeader: string = "t=1679944186,";
                expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Error with request header, signatures are not present");
            }) 
        })
        describe("timestamp is not present", () => {
            test("throws 'Error with request header, timestamp is not present'", () => {
                const tolerance: number = 5 * 60
                const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
                const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
                const requestHeader: string = "v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
                expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Error with request header, timestamp is not present");
            }) 
        })
        describe("Request header is empty or null", () => {
            test("throws 'Error with request header, Request header is empty'", () => {
                const tolerance: number = 5 * 60
                const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
                const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
                const requestHeader: string = "" 
                expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Error with request header, Request header is empty");
            }) 
        })  
    })
    describe("#checkSigningSecret", () => {
        describe("Signing secret is empty or null", () => {
            test("throws 'Signing secret cannot be empty or null'", () => {
                const tolerance: number = 5 * 60
                const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
                const signingSecret: string = "";
                const requestHeader: string = "t=1679944186,v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
                expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Signing secret cannot be empty or null");
            })
        }) 
    })

    describe("#checkTolerance", () => {
        describe("Tolerance value is NaN", () => {
            test("throws 'Tolerance value must be a positive integer'", () => {
                const tolerance: number = NaN
                const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
                const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
                const requestHeader: string = "t=1679944186,v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
                expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Tolerance value must be a positive integer");
            })
        })
        describe("Tolerance value is a negative value", () => {
            test("throws 'Tolerance value must be a positive integer'", () => {
                const tolerance: number = -5
                const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
                const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
                const requestHeader: string = "t=1679944186,v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
                expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Tolerance value must be a positive integer");
            })
        })
        describe("Tolerance value is 0", () => {
            test("throws 'Tolerance value must be a positive integer'", () => {
                const tolerance: number = 0
                const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
                const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
                const requestHeader: string = "t=1679944186,v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
                expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Tolerance value must be a positive integer");
            })
        })
        describe("Tolerance value is greater than allowed limit", () => {
            test("throws 'Tolerance value must be a positive integer'", () => {
                const tolerance: number = Number.MAX_SAFE_INTEGER
                const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
                const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
                const requestHeader: string = "t=1679944186,v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
                expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Tolerance value must be a positive integer");
            })
        })    
    })

    describe("#verifyTolerance", () => {
        describe("Request plus tolerance is not less than the current datetime", () => {
            test("throws 'Request time exceeded tolerance threshold. Request: 1900871395, CurrentTime: currentTimeValue, tolerance, toleranceValue'", () => {
                const currentTime = moment().unix();
                const tolerance: number = 5 * 60
                const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
                const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
                const requestHeader: string = "t=1900871395,v1=1d798c86e977ff734dec3a8b8d67fe8621dcc1df46ef4212e0bfe2e122b01bfd,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
                expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Request time exceeded tolerance threshold. Request: 1900871395" 
                + ", CurrentTime: " + String(currentTime) + ", tolerance: " + tolerance)
            })
        }) 
    })

    describe("#verifySignature", () => {
        describe("Signature request is unverified, signing secret does not exist in signatures, potential typo", () => {
            test("throws 'Unverified signature request, If this request was unexpected, it may be from a bad actor. Please proceed with caution. If the request was exepected, please check any typos or issues with the signingSecret'", () => {
                const tolerance: number = 5 * 60
                const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
                const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7794";
                const requestHeader: string = "t=1679944186,v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8"
                expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).toThrow("Unverified signature request, If this request was unexpected, it may be from a bad actor. Please proceed with caution. If the request was exepected, please check any typos or issues with the signingSecret");
            })
        }) 
    })

    describe("#verifyRequestSignature", () => {
        describe("Request is valid", () => {
            test("No errors are thrown", () => {
                const tolerance: number = 5 * 60
                const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
                const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
                const requestHeader: string = "t=1679944186,v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8"
                expect(() => {instance.verifyRequestSignature(requestBody, requestHeader, signingSecret, tolerance)}).not.toThrow();
            })
        }) 
    }) 
})