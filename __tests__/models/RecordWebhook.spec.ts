import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("RecordWebhook", () => {
  let model: freeclimb.RecordWebhook = new freeclimb.RecordWebhook({
    requestType: "test_requestType",
    accountId: "test_accountId",
    callId: "test_callId",
    from: "test_from",
    to: "test_to",

    callStatus: freeclimb.CallStatus.QUEUED,

    direction: freeclimb.CallDirection.INBOUND,
    conferenceId: "test_conferenceId",
    queueId: "test_queueId",
    recordingId: "test_recordingId",
    recordingUrl: "https://123.abc",
    recordingSize: "test_recordingSize",
    recordingFormat: "test_recordingFormat",
    recordingDurationSec: 1,

    termReason: freeclimb.RecordUtteranceTermReason.FINISH_KEY,
    parentCallId: "test_parentCallId",
    privacyMode: true,
  });
  describe("RecordWebhook class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.RecordWebhook);
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
      const value = "test_recordingSize";
      expect(model.recordingSize).toBe(value);
    });
  });
  describe(".recordingFormat", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_recordingFormat";
      expect(model.recordingFormat).toBe(value);
    });
  });
  describe(".recordingDurationSec", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.recordingDurationSec).toBe(value);
    });
  });
  describe(".termReason", () => {
    it("resolves to particular value on initialization", () => {
      const value = "finishKey";
      expect(model.termReason).toBe(value);
    });
  });
  describe(".parentCallId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_parentCallId";
      expect(model.parentCallId).toBe(value);
    });
  });
  describe(".privacyMode", () => {
    it("resolves to particular value on initialization", () => {
      const value = true;
      expect(model.privacyMode).toBe(value);
    });
  });
  describe(".deserialize", () => {
    it("returns an instance of RecordWebhook", () => {
      expect(
        freeclimb.RecordWebhook.deserialize('{ "requestType": "record"}'),
      ).toBeInstanceOf(freeclimb.RecordWebhook);
    });
  });
});
