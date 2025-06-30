import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("GetSpeechWebhook", () => {
  describe("Test with true values", () => {
    let model: freeclimb.GetSpeechWebhook = new freeclimb.GetSpeechWebhook({
      requestType: "test_requestType",
      callId: "test_callId",
      accountId: "test_accountId",
      from: "test_from",
      to: "test_to",

      callStatus: freeclimb.CallStatus.QUEUED,

      direction: freeclimb.CallDirection.INBOUND,
      conferenceId: "test_conferenceId",
      queueId: "test_queueId",

      reason: freeclimb.GetSpeechReason.ERROR,
      recognitionResult: "test_recognitionResult",
      confidence: 1,
      parentCallId: "test_parentCallId",
      completionReason: "test_completionReason",
      completionCause: "test_completionCause",
      mrcpCode: 1,
      mrcpDiagnostic: "test_mrcpDiagnostic",
    });
    describe("GetSpeechWebhook class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.GetSpeechWebhook);
      });
    });

    describe(".requestType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_requestType";
        expect(model.requestType).toBe(value);
      });
    });
    describe(".callId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_callId";
        expect(model.callId).toBe(value);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_accountId";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".from", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_from";
        expect(model.from).toBe(value);
      });
    });
    describe(".to", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_to";
        expect(model.to).toBe(value);
      });
    });
    describe(".callStatus", () => {
      it("resolves to particular value on initialization", () => {
        const value = "queued";
        expect(model.callStatus).toBe(value);
      });
    });
    describe(".direction", () => {
      it("resolves to particular value on initialization", () => {
        const value = "inbound";
        expect(model.direction).toBe(value);
      });
    });
    describe(".conferenceId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_conferenceId";
        expect(model.conferenceId).toBe(value);
      });
    });
    describe(".queueId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_queueId";
        expect(model.queueId).toBe(value);
      });
    });
    describe(".reason", () => {
      it("resolves to particular value on initialization", () => {
        const value = "error";
        expect(model.reason).toBe(value);
      });
    });
    describe(".recognitionResult", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_recognitionResult";
        expect(model.recognitionResult).toBe(value);
      });
    });
    describe(".confidence", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.confidence).toBe(value);
      });
    });
    describe(".parentCallId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_parentCallId";
        expect(model.parentCallId).toBe(value);
      });
    });
    describe(".completionReason", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_completionReason";
        expect(model.completionReason).toBe(value);
      });
    });
    describe(".completionCause", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_completionCause";
        expect(model.completionCause).toBe(value);
      });
    });
    describe(".mrcpCode", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.mrcpCode).toBe(value);
      });
    });
    describe(".mrcpDiagnostic", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_mrcpDiagnostic";
        expect(model.mrcpDiagnostic).toBe(value);
      });
    });
    describe(".deserialize", () => {
      it("returns an instance of GetSpeechWebhook", () => {
        expect(
          freeclimb.GetSpeechWebhook.deserialize(
            '{ "requestType": "getSpeech"}',
          ),
        ).toBeInstanceOf(freeclimb.GetSpeechWebhook);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.GetSpeechWebhook = new freeclimb.GetSpeechWebhook({
      requestType: "",
      callId: "",
      accountId: "",
      from: "",
      to: "",

      callStatus: freeclimb.CallStatus.QUEUED,

      direction: freeclimb.CallDirection.INBOUND,
      conferenceId: "",
      queueId: "",

      reason: freeclimb.GetSpeechReason.ERROR,
      recognitionResult: "",
      confidence: 0,
      parentCallId: "",
      completionReason: "",
      completionCause: "",
      mrcpCode: 0,
      mrcpDiagnostic: "",
    });
    describe("GetSpeechWebhook class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.GetSpeechWebhook);
      });
    });

    describe(".requestType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.requestType).toBe(value);
      });
    });
    describe(".callId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.callId).toBe(value);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".from", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.from).toBe(value);
      });
    });
    describe(".to", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.to).toBe(value);
      });
    });
    describe(".callStatus", () => {
      it("resolves to particular value on initialization", () => {
        const value = "queued";
        expect(model.callStatus).toBe(value);
      });
    });
    describe(".direction", () => {
      it("resolves to particular value on initialization", () => {
        const value = "inbound";
        expect(model.direction).toBe(value);
      });
    });
    describe(".conferenceId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.conferenceId).toBe(value);
      });
    });
    describe(".queueId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.queueId).toBe(value);
      });
    });
    describe(".reason", () => {
      it("resolves to particular value on initialization", () => {
        const value = "error";
        expect(model.reason).toBe(value);
      });
    });
    describe(".recognitionResult", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.recognitionResult).toBe(value);
      });
    });
    describe(".confidence", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.confidence).toBe(value);
      });
    });
    describe(".parentCallId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.parentCallId).toBe(value);
      });
    });
    describe(".completionReason", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.completionReason).toBe(value);
      });
    });
    describe(".completionCause", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.completionCause).toBe(value);
      });
    });
    describe(".mrcpCode", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.mrcpCode).toBe(value);
      });
    });
    describe(".mrcpDiagnostic", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.mrcpDiagnostic).toBe(value);
      });
    });
    describe(".deserialize", () => {
      it("returns an instance of GetSpeechWebhook", () => {
        expect(
          freeclimb.GetSpeechWebhook.deserialize(
            '{ "requestType": "getSpeech"}',
          ),
        ).toBeInstanceOf(freeclimb.GetSpeechWebhook);
      });
    });
  });
});
