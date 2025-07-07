import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("CallControlWebhook", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.CallControlWebhook;
    let model: freeclimb.CallControlWebhook = new freeclimb.CallControlWebhook({
      requestType: "test_requestType",
      callId: "test_callId",
      accountId: "test_accountId",
      conferenceId: "test_conferenceId",
      digits: "test_digits",
    });
    describe("CallControlWebhook class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.CallControlWebhook);
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
    describe(".conferenceId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_conferenceId";
        expect(model.conferenceId).toBe(value);
      });
    });
    describe(".digits", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_digits";
        expect(model.digits).toBe(value);
      });
    });
    describe(".deserialize", () => {
      it("returns an instance of CallControlWebhook", () => {
        expect(
          freeclimb.CallControlWebhook.deserialize(
            '{ "requestType": "callControl"}',
          ),
        ).toBeInstanceOf(freeclimb.CallControlWebhook);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.CallControlWebhook;
    let model: freeclimb.CallControlWebhook = new freeclimb.CallControlWebhook({
      requestType: "",
      callId: "",
      accountId: "",
      conferenceId: "",
      digits: "",
    });
    describe("CallControlWebhook class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.CallControlWebhook);
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
    describe(".conferenceId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.conferenceId).toBe(value);
      });
    });
    describe(".digits", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.digits).toBe(value);
      });
    });
    describe(".deserialize", () => {
      it("returns an instance of CallControlWebhook", () => {
        expect(
          freeclimb.CallControlWebhook.deserialize(
            '{ "requestType": "callControl"}',
          ),
        ).toBeInstanceOf(freeclimb.CallControlWebhook);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.CallControlWebhook;
    let constructorArguments = {};
    let model: freeclimb.CallControlWebhook = new freeclimb.CallControlWebhook(
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
    describe("#conferenceId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "conferenceId",
        )?.defaultValue;
        expect(model.conferenceId).toBe(value);
      });
    });
    describe("#digits", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "digits",
        )?.defaultValue;
        expect(model.digits).toBe(value);
      });
    });
  });
});
