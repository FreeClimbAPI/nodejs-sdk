import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("AddToConferenceNotificationWebhook", () => {
  let model: freeclimb.AddToConferenceNotificationWebhook =
    new freeclimb.AddToConferenceNotificationWebhook({
      requestType: "test_requestType",
      callId: "test_callId",
      accountId: "test_accountId",
      from: "test_from",
      to: "test_to",

      callStatus: freeclimb.CallStatus.QUEUED,

      direction: freeclimb.CallDirection.INBOUND,
      conferenceId: "test_conferenceId",
      queueId: "test_queueId",

      status: freeclimb.ConferenceStatus.EMPTY,
      recordingUrl: "https://123.abc",
      recordingId: "test_recordingId",
      recordingDurationSec: 1,
    });
  describe("AddToConferenceNotificationWebhook class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(
        freeclimb.AddToConferenceNotificationWebhook,
      );
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
  describe(".status", () => {
    it("resolves to particular value on initialization", () => {
      const value = "empty";
      expect(model.status).toBe(value);
    });
  });
  describe(".recordingUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.recordingUrl).toBe(value);
    });
  });
  describe(".recordingId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_recordingId";
      expect(model.recordingId).toBe(value);
    });
  });
  describe(".recordingDurationSec", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.recordingDurationSec).toBe(value);
    });
  });
  describe(".deserialize", () => {
    it("returns an instance of AddToConferenceNotificationWebhook", () => {
      expect(
        freeclimb.AddToConferenceNotificationWebhook.deserialize(
          '{ "requestType": "addToConferenceNotification"}',
        ),
      ).toBeInstanceOf(freeclimb.AddToConferenceNotificationWebhook);
    });
  });
});
