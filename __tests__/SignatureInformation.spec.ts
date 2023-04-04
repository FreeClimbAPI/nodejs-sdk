import { describe, expect, test, beforeAll } from "@jest/globals";
import { SignatureInformation } from '../utils/SignatureInformation'

describe("SignatureInformation", () => {
    let instance: SignatureInformation
    beforeAll(() => {
        const requestHeader: string = "t=1679944186,v1=c3957749baf61df4b1506802579cc69a74c77a1ae21447b930e5a704f9ec4120,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
        instance = new SignatureInformation(requestHeader);
    });
    describe("#isRequestTimeValid", () => {
        describe("request time is within tolerance threshold", () => {
            test("returns true", () => {
                const tolerance: number = 5 * 60;
                const isRequestTimeValid: boolean = instance.isRequestTimeValid(tolerance);
                expect(isRequestTimeValid).toBe(true)
            })
            test("returns false", () => {
                const tolerance: number = 5 * 60 * 10000;
                const isRequestTimeValid: boolean = instance.isRequestTimeValid(tolerance);
                expect(isRequestTimeValid).toBe(false)
            })
        })
    })

    describe("#isSignatureSafe", () => {
        describe("signingSecret exists in signature array", () => {
            test("returns true", () => {
                const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
                const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
                const isSignatureSafe: boolean = instance.isSignatureSafe(requestBody, signingSecret);
                expect(isSignatureSafe).toBe(true)
            })
            test("returns false", () => {
                const requestBody: string = "{\"accountId\":\"AC1334ffb694cd8d969f51cddf5f7c9b478546d50c\",\"callId\":\"CAccb0b00506553cda09b51c5477f672a49e0b2213\",\"callStatus\":\"ringing\",\"conferenceId\":null,\"direction\":\"inbound\",\"from\":\"+13121000109\",\"parentCallId\":null,\"queueId\":null,\"requestType\":\"inboundCall\",\"to\":\"+13121000096\"}"
                const signingSecret: string = "sigsec_ead6d3b6904196c60835d039e91b3341c77a7794";
                const isSignatureSafe: boolean = instance.isSignatureSafe(requestBody, signingSecret);
                expect(isSignatureSafe).toBe(false)
            })
        })
    })
})