import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("CallStatusWebhook", () => {
  let model: freeclimb.CallStatusWebhook = new freeclimb.CallStatusWebhook({
    requestType: "test_requestType",
    callId: "test_callId",
    accountId: "test_accountId",
    from: "test_from",
    to: "test_to",

    callStatus: freeclimb.CallStatus.QUEUED,

    callEndedReason: freeclimb.CallEndedReason.BUSY,

    direction: freeclimb.CallDirection.INBOUND,
    conferenceId: "test_conferenceId",
    queueId: "test_queueId",
  });
  describe("CallStatusWebhook class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.CallStatusWebhook);
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
  describe(".callEndedReason", () => {
    it("resolves to particular value on initialization", () => {
      const value = "busy";
      expect(model.callEndedReason).toBe(value);
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
  describe(".deserialize", () => {
    it("returns an instance of CallStatusWebhook", () => {
      expect(
        freeclimb.CallStatusWebhook.deserialize(
          '{ "requestType": "callStatus"}',
        ),
      ).toBeInstanceOf(freeclimb.CallStatusWebhook);
    });
  });
});
