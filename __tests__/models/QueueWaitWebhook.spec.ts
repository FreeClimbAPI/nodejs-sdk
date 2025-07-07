import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("QueueWaitWebhook", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.QueueWaitWebhook;
    let model: freeclimb.QueueWaitWebhook = new freeclimb.QueueWaitWebhook({
      requestType: "test_requestType",
      accountId: "test_accountId",
      callId: "test_callId",
      from: "test_from",
      to: "test_to",

      callStatus: freeclimb.CallStatus.QUEUED,

      direction: freeclimb.CallDirection.INBOUND,
      conferenceId: "test_conferenceId",
      queueId: "test_queueId",
      queuePosition: "test_queuePosition",
      queueTime: 1,
      currentQueueSize: 1,
    });
    describe("QueueWaitWebhook class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.QueueWaitWebhook);
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
    describe(".queuePosition", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_queuePosition";
        expect(model.queuePosition).toBe(value);
      });
    });
    describe(".queueTime", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.queueTime).toBe(value);
      });
    });
    describe(".currentQueueSize", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.currentQueueSize).toBe(value);
      });
    });
    describe(".deserialize", () => {
      it("returns an instance of QueueWaitWebhook", () => {
        expect(
          freeclimb.QueueWaitWebhook.deserialize(
            '{ "requestType": "queueWait"}',
          ),
        ).toBeInstanceOf(freeclimb.QueueWaitWebhook);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.QueueWaitWebhook;
    let model: freeclimb.QueueWaitWebhook = new freeclimb.QueueWaitWebhook({
      requestType: "",
      accountId: "",
      callId: "",
      from: "",
      to: "",

      callStatus: freeclimb.CallStatus.QUEUED,

      direction: freeclimb.CallDirection.INBOUND,
      conferenceId: "",
      queueId: "",
      queuePosition: "",
      queueTime: 0,
      currentQueueSize: 0,
    });
    describe("QueueWaitWebhook class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.QueueWaitWebhook);
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
    describe(".queuePosition", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.queuePosition).toBe(value);
      });
    });
    describe(".queueTime", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.queueTime).toBe(value);
      });
    });
    describe(".currentQueueSize", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.currentQueueSize).toBe(value);
      });
    });
    describe(".deserialize", () => {
      it("returns an instance of QueueWaitWebhook", () => {
        expect(
          freeclimb.QueueWaitWebhook.deserialize(
            '{ "requestType": "queueWait"}',
          ),
        ).toBeInstanceOf(freeclimb.QueueWaitWebhook);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.QueueWaitWebhook;
    let constructorArguments = {};
    let model: freeclimb.QueueWaitWebhook = new freeclimb.QueueWaitWebhook(
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
    describe("#queuePosition", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "queuePosition",
        )?.defaultValue;
        expect(model.queuePosition).toBe(value);
      });
    });
    describe("#queueTime", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "queueTime",
        )?.defaultValue;
        expect(model.queueTime).toBe(value);
      });
    });
    describe("#currentQueueSize", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "currentQueueSize",
        )?.defaultValue;
        expect(model.currentQueueSize).toBe(value);
      });
    });
  });
});
