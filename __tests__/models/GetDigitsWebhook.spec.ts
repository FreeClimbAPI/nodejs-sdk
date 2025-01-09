import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("GetDigitsWebhook", () => {
  let model: freeclimb.GetDigitsWebhook = new freeclimb.GetDigitsWebhook({
    requestType: "test_requestType",
    callId: "test_callId",
    accountId: "test_accountId",
    from: "test_from",
    to: "test_to",

    callStatus: freeclimb.CallStatus.QUEUED,

    direction: freeclimb.CallDirection.INBOUND,
    conferenceId: "test_conferenceId",
    queueId: "test_queueId",
    digits: "test_digits",

    reason: freeclimb.GetDigitsReason.FINISH_KEY,
    parentCallId: "test_parentCallId",
  });
  describe("GetDigitsWebhook class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.GetDigitsWebhook);
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
  describe(".digits", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_digits";
      expect(model.digits).toBe(value);
    });
  });
  describe(".reason", () => {
    it("resolves to particular value on initialization", () => {
      const value = "finishKey";
      expect(model.reason).toBe(value);
    });
  });
  describe(".parentCallId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_parentCallId";
      expect(model.parentCallId).toBe(value);
    });
  });
  describe(".deserialize", () => {
    it("returns an instance of GetDigitsWebhook", () => {
      expect(
        freeclimb.GetDigitsWebhook.deserialize('{ "requestType": "getDigits"}'),
      ).toBeInstanceOf(freeclimb.GetDigitsWebhook);
    });
  });
});
