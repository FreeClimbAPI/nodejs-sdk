import { describe, expect, test, beforeAll } from "@jest/globals";
import { SignatureInformation } from "../../utils/SignatureInformation";
import * as moment from "moment";

describe("SignatureInformation", () => {
  const timestamp: number = 1679944186;
  let instance: SignatureInformation;
  beforeAll(() => {
    const requestHeader: string =
      "t=" +
      timestamp.toString() +
      ",v1=2f33654710a27e57828fa8556c2ed47c7a324aca88f155e296579e2ae851ce7b,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
    instance = new SignatureInformation(requestHeader);
  });
  describe("#isRequestTimeValid", () => {
    describe("request time is within tolerance threshold", () => {
      test("returns true", () => {
        const requestHeader: string =
          "t=" +
          moment().unix().toString() +
          ",v1=2f33654710a27e57828fa8556c2ed47c7a324aca88f155e296579e2ae851ce7b,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
        let test_instance = new SignatureInformation(requestHeader);
        const tolerance: number = 5 * 60;
        const isRequestTimeValid: boolean =
          test_instance.isRequestTimeValid(tolerance);
        expect(isRequestTimeValid).toBe(true);
      });
      test("returns false", () => {
        const requestTimestamp: number = moment().unix() - 600 * 60;
        const requestHeader: string =
          "t=" +
          requestTimestamp.toString() +
          ",v1=2f33654710a27e57828fa8556c2ed47c7a324aca88f155e296579e2ae851ce7b,v1=1ba18712726898fbbe48cd862dd096a709f7ad761a5bab14bda9ac24d963a6a8";
        let test_instance = new SignatureInformation(requestHeader);
        const tolerance: number = 500 * 60;
        const isRequestTimeValid: boolean =
          test_instance.isRequestTimeValid(tolerance);
        expect(isRequestTimeValid).toBe(false);
      });
    });
  });

  describe("#isSignatureSafe", () => {
    describe("signingSecret exists in signature array", () => {
      test("returns true", () => {
        const requestBody: string =
          '{"accountId":"AC0123456789abcdefABCDEF0123456789abcdef00","callId":"CA0123456789abcdefABCDEF0123456789abcdef00","callStatus":"ringing","conferenceId":null,"direction":"inbound","from":"+13121000109","parentCallId":null,"queueId":null,"requestType":"inboundCall","to":"+13121000096"}';
        const signingSecret: string =
          "sigsec_ead6d3b6904196c60835d039e91b3341c77a7793";
        const isSignatureSafe: boolean = instance.isSignatureSafe(
          requestBody,
          signingSecret,
        );
        expect(isSignatureSafe).toBe(true);
      });
      test("returns false", () => {
        const requestBody: string =
          '{"accountId":"AC0123456789abcdefABCDEF0123456789abcdef00","callId":"CA0123456789abcdefABCDEF0123456789abcdef00","callStatus":"ringing","conferenceId":null,"direction":"inbound","from":"+13121000109","parentCallId":null,"queueId":null,"requestType":"inboundCall","to":"+13121000096"}';
        const signingSecret: string =
          "sigsec_ead6d3b6904196c60835d039e91b3341c77a7794";
        const isSignatureSafe: boolean = instance.isSignatureSafe(
          requestBody,
          signingSecret,
        );
        expect(isSignatureSafe).toBe(false);
      });
    });
  });
});
