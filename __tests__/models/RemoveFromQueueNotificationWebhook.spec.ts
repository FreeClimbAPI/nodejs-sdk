import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("RemoveFromQueueNotificationWebhook", () => {
  let model: freeclimb.RemoveFromQueueNotificationWebhook =
    new freeclimb.RemoveFromQueueNotificationWebhook({
      requestType: "test_requestType",
      accountId: "test_accountId",
      callId: "test_callId",
      from: "test_from",
      to: "test_to",

      callStatus: freeclimb.CallStatus.QUEUED,

      direction: freeclimb.CallDirection.INBOUND,
      conferenceId: "test_conferenceId",
      queueId: "test_queueId",

      queueResult: freeclimb.QueueResultStatus.QUEUE_FULL,
      queueTime: 1,
    });
  describe("RemoveFromQueueNotificationWebhook class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(
        freeclimb.RemoveFromQueueNotificationWebhook,
      );
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
  describe(".queueResult", () => {
    it("resolves to particular value on initialization", () => {
      const value = "queueFull";
      expect(model.queueResult).toBe(value);
    });
  });
  describe(".queueTime", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.queueTime).toBe(value);
    });
  });
  describe(".deserialize", () => {
    it("returns an instance of RemoveFromQueueNotificationWebhook", () => {
      expect(
        freeclimb.RemoveFromQueueNotificationWebhook.deserialize(
          '{ "requestType": "removeFromQueueNotification"}',
        ),
      ).toBeInstanceOf(freeclimb.RemoveFromQueueNotificationWebhook);
    });
  });
});
