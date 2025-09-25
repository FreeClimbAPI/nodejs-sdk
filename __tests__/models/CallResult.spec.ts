import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("CallResult", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.CallResult;
    let model: freeclimb.CallResult = new freeclimb.CallResult({
      uri: "test_uri",
      dateCreated: "test_dateCreated",
      dateUpdated: "test_dateUpdated",
      revision: 1,
      callId: "test_callId",
      parentCallId: "test_parentCallId",
      accountId: "test_accountId",
      from: "test_from",
      to: "test_to",
      phoneNumberId: "test_phoneNumberId",

      status: freeclimb.CallStatus.QUEUED,
      startTime: "test_startTime",
      connectTime: "test_connectTime",
      endTime: "test_endTime",
      duration: 1,
      connectDuration: 1,

      direction: freeclimb.CallDirection.INBOUND,

      answeredBy: freeclimb.AnsweredBy.HUMAN,
      subresourceUris: {},

      applicationId: "test_applicationId",
    });
    describe("CallResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.CallResult);
      });
    });
    describe(".uri", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_uri";
        expect(model.uri).toBe(value);
      });
    });
    describe(".dateCreated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_dateCreated";
        expect(model.dateCreated).toBe(value);
      });
    });
    describe(".dateUpdated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_dateUpdated";
        expect(model.dateUpdated).toBe(value);
      });
    });
    describe(".revision", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.revision).toBe(value);
      });
    });
    describe(".callId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_callId";
        expect(model.callId).toBe(value);
      });
    });
    describe(".parentCallId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_parentCallId";
        expect(model.parentCallId).toBe(value);
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
    describe(".phoneNumberId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_phoneNumberId";
        expect(model.phoneNumberId).toBe(value);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "queued";
        expect(model.status).toBe(value);
      });
    });
    describe(".startTime", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_startTime";
        expect(model.startTime).toBe(value);
      });
    });
    describe(".connectTime", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_connectTime";
        expect(model.connectTime).toBe(value);
      });
    });
    describe(".endTime", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_endTime";
        expect(model.endTime).toBe(value);
      });
    });
    describe(".duration", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.duration).toBe(value);
      });
    });
    describe(".connectDuration", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.connectDuration).toBe(value);
      });
    });
    describe(".direction", () => {
      it("resolves to particular value on initialization", () => {
        const value = "inbound";
        expect(model.direction).toBe(value);
      });
    });
    describe(".answeredBy", () => {
      it("resolves to particular value on initialization", () => {
        const value = "human";
        expect(model.answeredBy).toBe(value);
      });
    });
    describe(".subresourceUris", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        const receivedValue: any = model.subresourceUris;
        expect(receivedValue).toStrictEqual(value);
      });
    });
    describe(".applicationId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_applicationId";
        expect(model.applicationId).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.CallResult;
    let model: freeclimb.CallResult = new freeclimb.CallResult({
      uri: "",
      dateCreated: "",
      dateUpdated: "",
      revision: 0,
      callId: "",
      parentCallId: "",
      accountId: "",
      from: "",
      to: "",
      phoneNumberId: "",

      status: freeclimb.CallStatus.QUEUED,
      startTime: "",
      connectTime: "",
      endTime: "",
      duration: 0,
      connectDuration: 0,

      direction: freeclimb.CallDirection.INBOUND,

      answeredBy: freeclimb.AnsweredBy.HUMAN,
      subresourceUris: {},

      applicationId: "",
    });
    describe("CallResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.CallResult);
      });
    });
    describe(".uri", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.uri).toBe(value);
      });
    });
    describe(".dateCreated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.dateCreated).toBe(value);
      });
    });
    describe(".dateUpdated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.dateUpdated).toBe(value);
      });
    });
    describe(".revision", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.revision).toBe(value);
      });
    });
    describe(".callId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.callId).toBe(value);
      });
    });
    describe(".parentCallId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.parentCallId).toBe(value);
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
    describe(".phoneNumberId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.phoneNumberId).toBe(value);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "queued";
        expect(model.status).toBe(value);
      });
    });
    describe(".startTime", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.startTime).toBe(value);
      });
    });
    describe(".connectTime", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.connectTime).toBe(value);
      });
    });
    describe(".endTime", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.endTime).toBe(value);
      });
    });
    describe(".duration", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.duration).toBe(value);
      });
    });
    describe(".connectDuration", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.connectDuration).toBe(value);
      });
    });
    describe(".direction", () => {
      it("resolves to particular value on initialization", () => {
        const value = "inbound";
        expect(model.direction).toBe(value);
      });
    });
    describe(".answeredBy", () => {
      it("resolves to particular value on initialization", () => {
        const value = "human";
        expect(model.answeredBy).toBe(value);
      });
    });
    describe(".subresourceUris", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        const receivedValue: any = model.subresourceUris;
        expect(receivedValue).toStrictEqual(value);
      });
    });
    describe(".applicationId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.applicationId).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.CallResult;
    let constructorArguments = {
      uri: "test_uri",
      dateCreated: "test_dateCreated",
      dateUpdated: "test_dateUpdated",
      revision: 1,
    };
    let model: freeclimb.CallResult = new freeclimb.CallResult(
      constructorArguments,
    );

    describe("#callId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "callId",
        )?.defaultValue;
        expect(model.callId).toBe(value);
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
    describe("#phoneNumberId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "phoneNumberId",
        )?.defaultValue;
        expect(model.phoneNumberId).toBe(value);
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
    describe("#startTime", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "startTime",
        )?.defaultValue;
        expect(model.startTime).toBe(value);
      });
    });
    describe("#connectTime", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "connectTime",
        )?.defaultValue;
        expect(model.connectTime).toBe(value);
      });
    });
    describe("#endTime", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "endTime",
        )?.defaultValue;
        expect(model.endTime).toBe(value);
      });
    });
    describe("#duration", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "duration",
        )?.defaultValue;
        expect(model.duration).toBe(value);
      });
    });
    describe("#connectDuration", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "connectDuration",
        )?.defaultValue;
        expect(model.connectDuration).toBe(value);
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
    describe("#answeredBy", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "answeredBy",
        )?.defaultValue;
        expect(model.answeredBy).toBe(value);
      });
    });
    describe("#subresourceUris", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "subresourceUris",
        )?.defaultValue;
        expect(model.subresourceUris).toBe(value);
      });
    });
    describe("#applicationId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "applicationId",
        )?.defaultValue;
        expect(model.applicationId).toBe(value);
      });
    });
  });
});
