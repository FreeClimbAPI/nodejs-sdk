import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("LogResult", () => {
  const Klass = freeclimb.LogResult;
  describe("Test with truthy values", () => {
    let model: freeclimb.LogResult = new freeclimb.LogResult({
      timestamp: 1,

      level: freeclimb.LogLevel.INFO,
      requestId: "test_requestId",
      accountId: "test_accountId",
      callId: "test_callId",
      message: "test_message",
      metadata: {},
    });
    describe("LogResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.LogResult);
      });
    });
    describe(".timestamp", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.timestamp).toBe(value);
      });
    });
    describe(".level", () => {
      it("resolves to particular value on initialization", () => {
        const value = "info";
        expect(model.level).toBe(value);
      });
    });
    describe(".requestId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_requestId";
        expect(model.requestId).toBe(value);
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
    describe(".message", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_message";
        expect(model.message).toBe(value);
      });
    });
    describe(".metadata", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model.metadata).toStrictEqual(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.LogResult = new freeclimb.LogResult({
      timestamp: 0,

      level: freeclimb.LogLevel.INFO,
      requestId: "",
      accountId: "",
      callId: "",
      message: "",
      metadata: {},
    });
    describe("LogResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.LogResult);
      });
    });
    describe(".timestamp", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.timestamp).toBe(value);
      });
    });
    describe(".level", () => {
      it("resolves to particular value on initialization", () => {
        const value = "info";
        expect(model.level).toBe(value);
      });
    });
    describe(".requestId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.requestId).toBe(value);
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
    describe(".message", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.message).toBe(value);
      });
    });
    describe(".metadata", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model.metadata).toStrictEqual(value);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {};
    let model: freeclimb.LogResult = new freeclimb.LogResult(
      constructorArguments,
    );

    describe("#timestamp", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "timestamp",
        )?.defaultValue;
        expect(model.timestamp).toBe(value);
      });
    });
    describe("#level", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "level",
        )?.defaultValue;
        expect(model.level).toBe(value);
      });
    });
    describe("#requestId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "requestId",
        )?.defaultValue;
        expect(model.requestId).toBe(value);
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
    describe("#message", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "message",
        )?.defaultValue;
        expect(model.message).toBe(value);
      });
    });
    describe("#metadata", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "metadata",
        )?.defaultValue;
        expect(model.metadata).toBe(value);
      });
    });
  });
});
