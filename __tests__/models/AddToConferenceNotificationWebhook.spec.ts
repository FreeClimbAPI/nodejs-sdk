import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("AddToConferenceNotificationWebhook", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.AddToConferenceNotificationWebhook;
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
  describe("Test with falsy values", () => {
    const Klass = freeclimb.AddToConferenceNotificationWebhook;
    let model: freeclimb.AddToConferenceNotificationWebhook =
      new freeclimb.AddToConferenceNotificationWebhook({
        requestType: "",
        callId: "",
        accountId: "",
        from: "",
        to: "",

        callStatus: freeclimb.CallStatus.QUEUED,

        direction: freeclimb.CallDirection.INBOUND,
        conferenceId: "",
        queueId: "",

        status: freeclimb.ConferenceStatus.EMPTY,
        recordingUrl: "",
        recordingId: "",
        recordingDurationSec: 0,
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
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "empty";
        expect(model.status).toBe(value);
      });
    });
    describe(".recordingUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.recordingUrl).toBe(value);
      });
    });
    describe(".recordingId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.recordingId).toBe(value);
      });
    });
    describe(".recordingDurationSec", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
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
  describe("Test with only required values", () => {
    let constructorArguments = {};
    let model: freeclimb.AddToConferenceNotificationWebhook =
      new freeclimb.AddToConferenceNotificationWebhook(constructorArguments);

    describe("#requestType", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "requestType",
        )?.defaultValue;
        expect(model.requestType).toBe(value);
      });
    });
    describe("#callId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "callId",
        )?.defaultValue;
        expect(model.callId).toBe(value);
      });
    });
    describe("#accountId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "accountId",
        )?.defaultValue;
        expect(model.accountId).toBe(value);
      });
    });
    describe("#from", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "from",
        )?.defaultValue;
        expect(model.from).toBe(value);
      });
    });
    describe("#to", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "to",
        )?.defaultValue;
        expect(model.to).toBe(value);
      });
    });
    describe("#callStatus", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "callStatus",
        )?.defaultValue;
        expect(model.callStatus).toBe(value);
      });
    });
    describe("#direction", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "direction",
        )?.defaultValue;
        expect(model.direction).toBe(value);
      });
    });
    describe("#conferenceId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "conferenceId",
        )?.defaultValue;
        expect(model.conferenceId).toBe(value);
      });
    });
    describe("#queueId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "queueId",
        )?.defaultValue;
        expect(model.queueId).toBe(value);
      });
    });
    describe("#status", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "status",
        )?.defaultValue;
        expect(model.status).toBe(value);
      });
    });
    describe("#recordingUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "recordingUrl",
        )?.defaultValue;
        expect(model.recordingUrl).toBe(value);
      });
    });
    describe("#recordingId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "recordingId",
        )?.defaultValue;
        expect(model.recordingId).toBe(value);
      });
    });
    describe("#recordingDurationSec", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "recordingDurationSec",
        )?.defaultValue;
        expect(model.recordingDurationSec).toBe(value);
      });
    });
  });
});
