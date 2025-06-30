import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("TranscribeWebhook", () => {
  describe("Test with true values", () => {
    let model: freeclimb.TranscribeWebhook = new freeclimb.TranscribeWebhook({
      requestType: "test_requestType",
      accountId: "test_accountId",
      callId: "test_callId",
      from: "test_from",
      to: "test_to",
      recordingId: "test_recordingId",
      recordingUrl: "https://123.abc",
      recordingSize: 1,
      recordingFormat: "test_recordingFormat",
      recordingDurationMs: 1,

      termReason: freeclimb.TranscribeTermReason.ERROR,

      recordTermReason: freeclimb.RecordUtteranceTermReason.FINISH_KEY,
      digit: "test_digit",
      privacyForLogging: true,
      privacyForRecording: true,

      bargeInReason: freeclimb.BargeInReason.NO_BARGE_IN,
      bargedInPromptNo: 1,
      bargedInPromptMs: 1,
      bargedInPromptLoopNo: 1,
      bargeInTimeMs: 1,
      transcript: "test_transcript",

      transcribeReason: freeclimb.TranscribeReason.INTERNAL_ERROR,
      transcriptionDurationMs: 1,
    });
    describe("TranscribeWebhook class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.TranscribeWebhook);
      });
    });

    describe(".requestType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_requestType";
        expect(model.requestType).toBe(value);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_accountId";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".callId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_callId";
        expect(model.callId).toBe(value);
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
    describe(".recordingId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_recordingId";
        expect(model.recordingId).toBe(value);
      });
    });
    describe(".recordingUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.recordingUrl).toBe(value);
      });
    });
    describe(".recordingSize", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.recordingSize).toBe(value);
      });
    });
    describe(".recordingFormat", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_recordingFormat";
        expect(model.recordingFormat).toBe(value);
      });
    });
    describe(".recordingDurationMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.recordingDurationMs).toBe(value);
      });
    });
    describe(".termReason", () => {
      it("resolves to particular value on initialization", () => {
        const value = "error";
        expect(model.termReason).toBe(value);
      });
    });
    describe(".recordTermReason", () => {
      it("resolves to particular value on initialization", () => {
        const value = "finishKey";
        expect(model.recordTermReason).toBe(value);
      });
    });
    describe(".digit", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_digit";
        expect(model.digit).toBe(value);
      });
    });
    describe(".privacyForLogging", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.privacyForLogging).toBe(value);
      });
    });
    describe(".privacyForRecording", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.privacyForRecording).toBe(value);
      });
    });
    describe(".bargeInReason", () => {
      it("resolves to particular value on initialization", () => {
        const value = "noBargeIn";
        expect(model.bargeInReason).toBe(value);
      });
    });
    describe(".bargedInPromptNo", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.bargedInPromptNo).toBe(value);
      });
    });
    describe(".bargedInPromptMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.bargedInPromptMs).toBe(value);
      });
    });
    describe(".bargedInPromptLoopNo", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.bargedInPromptLoopNo).toBe(value);
      });
    });
    describe(".bargeInTimeMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.bargeInTimeMs).toBe(value);
      });
    });
    describe(".transcript", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_transcript";
        expect(model.transcript).toBe(value);
      });
    });
    describe(".transcribeReason", () => {
      it("resolves to particular value on initialization", () => {
        const value = "internalError";
        expect(model.transcribeReason).toBe(value);
      });
    });
    describe(".transcriptionDurationMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.transcriptionDurationMs).toBe(value);
      });
    });
    describe(".deserialize", () => {
      it("returns an instance of TranscribeWebhook", () => {
        expect(
          freeclimb.TranscribeWebhook.deserialize(
            '{ "requestType": "transcribe"}',
          ),
        ).toBeInstanceOf(freeclimb.TranscribeWebhook);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.TranscribeWebhook = new freeclimb.TranscribeWebhook({
      requestType: "",
      accountId: "",
      callId: "",
      from: "",
      to: "",
      recordingId: "",
      recordingUrl: "",
      recordingSize: 0,
      recordingFormat: "",
      recordingDurationMs: 0,

      termReason: freeclimb.TranscribeTermReason.ERROR,

      recordTermReason: freeclimb.RecordUtteranceTermReason.FINISH_KEY,
      digit: "",
      privacyForLogging: false,
      privacyForRecording: false,

      bargeInReason: freeclimb.BargeInReason.NO_BARGE_IN,
      bargedInPromptNo: 0,
      bargedInPromptMs: 0,
      bargedInPromptLoopNo: 0,
      bargeInTimeMs: 0,
      transcript: "",

      transcribeReason: freeclimb.TranscribeReason.INTERNAL_ERROR,
      transcriptionDurationMs: 0,
    });
    describe("TranscribeWebhook class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.TranscribeWebhook);
      });
    });

    describe(".requestType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.requestType).toBe(value);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".callId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.callId).toBe(value);
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
    describe(".recordingId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.recordingId).toBe(value);
      });
    });
    describe(".recordingUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.recordingUrl).toBe(value);
      });
    });
    describe(".recordingSize", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.recordingSize).toBe(value);
      });
    });
    describe(".recordingFormat", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.recordingFormat).toBe(value);
      });
    });
    describe(".recordingDurationMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.recordingDurationMs).toBe(value);
      });
    });
    describe(".termReason", () => {
      it("resolves to particular value on initialization", () => {
        const value = "error";
        expect(model.termReason).toBe(value);
      });
    });
    describe(".recordTermReason", () => {
      it("resolves to particular value on initialization", () => {
        const value = "finishKey";
        expect(model.recordTermReason).toBe(value);
      });
    });
    describe(".digit", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.digit).toBe(value);
      });
    });
    describe(".privacyForLogging", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.privacyForLogging).toBe(value);
      });
    });
    describe(".privacyForRecording", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.privacyForRecording).toBe(value);
      });
    });
    describe(".bargeInReason", () => {
      it("resolves to particular value on initialization", () => {
        const value = "noBargeIn";
        expect(model.bargeInReason).toBe(value);
      });
    });
    describe(".bargedInPromptNo", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.bargedInPromptNo).toBe(value);
      });
    });
    describe(".bargedInPromptMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.bargedInPromptMs).toBe(value);
      });
    });
    describe(".bargedInPromptLoopNo", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.bargedInPromptLoopNo).toBe(value);
      });
    });
    describe(".bargeInTimeMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.bargeInTimeMs).toBe(value);
      });
    });
    describe(".transcript", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.transcript).toBe(value);
      });
    });
    describe(".transcribeReason", () => {
      it("resolves to particular value on initialization", () => {
        const value = "internalError";
        expect(model.transcribeReason).toBe(value);
      });
    });
    describe(".transcriptionDurationMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.transcriptionDurationMs).toBe(value);
      });
    });
    describe(".deserialize", () => {
      it("returns an instance of TranscribeWebhook", () => {
        expect(
          freeclimb.TranscribeWebhook.deserialize(
            '{ "requestType": "transcribe"}',
          ),
        ).toBeInstanceOf(freeclimb.TranscribeWebhook);
      });
    });
  });
});
