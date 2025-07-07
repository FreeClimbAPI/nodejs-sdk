import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("RecordWebhook", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.RecordWebhook;
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
  describe("Test with falsy values", () => {
    const Klass = freeclimb.RecordWebhook;
    let model: freeclimb.RecordWebhook = new freeclimb.RecordWebhook({
      requestType: "",
      accountId: "",
      callId: "",
      from: "",
      to: "",

      callStatus: freeclimb.CallStatus.QUEUED,

      direction: freeclimb.CallDirection.INBOUND,
      conferenceId: "",
      queueId: "",
      recordingId: "",
      recordingUrl: "",
      recordingSize: "",
      recordingFormat: "",
      recordingDurationSec: 0,

      termReason: freeclimb.RecordUtteranceTermReason.FINISH_KEY,
      parentCallId: "",
      privacyMode: false,
    });
    describe("RecordWebhook class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.RecordWebhook);
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
        const value = "";
        expect(model.recordingSize).toBe(value);
      });
    });
    describe(".recordingFormat", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.recordingFormat).toBe(value);
      });
    });
    describe(".recordingDurationSec", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
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
        const value = "";
        expect(model.parentCallId).toBe(value);
      });
    });
    describe(".privacyMode", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
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
  describe("Test with only required values", () => {
    let constructorArguments = {};
    let model: freeclimb.RecordWebhook = new freeclimb.RecordWebhook(
      constructorArguments,
    );

    describe("#requestType", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "requestType",
        )?.defaultValue;
        expect(model.requestType).toBe(value);
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
    describe("#callId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "callId",
        )?.defaultValue;
        expect(model.callId).toBe(value);
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
    describe("#recordingId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "recordingId",
        )?.defaultValue;
        expect(model.recordingId).toBe(value);
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
    describe("#recordingSize", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "recordingSize",
        )?.defaultValue;
        expect(model.recordingSize).toBe(value);
      });
    });
    describe("#recordingFormat", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "recordingFormat",
        )?.defaultValue;
        expect(model.recordingFormat).toBe(value);
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
    describe("#termReason", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "termReason",
        )?.defaultValue;
        expect(model.termReason).toBe(value);
      });
    });
    describe("#parentCallId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "parentCallId",
        )?.defaultValue;
        expect(model.parentCallId).toBe(value);
      });
    });
    describe("#privacyMode", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "privacyMode",
        )?.defaultValue;
        expect(model.privacyMode).toBe(value);
      });
    });
  });
});
