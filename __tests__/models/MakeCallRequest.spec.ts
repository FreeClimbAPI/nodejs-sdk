import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("MakeCallRequest", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.MakeCallRequest;
    let model: freeclimb.MakeCallRequest = new freeclimb.MakeCallRequest({
      from: "test_from",
      to: "test_to",
      applicationId: "test_applicationId",
      sendDigits: "test_sendDigits",
      ifMachine: "test_ifMachine",
      ifMachineUrl: "https://123.abc",
      timeout: 1,
      parentCallId: "test_parentCallId",
      privacyMode: true,
      callConnectUrl: "https://123.abc",
    });
    describe("MakeCallRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.MakeCallRequest);
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
    describe(".applicationId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_applicationId";
        expect(model.applicationId).toBe(value);
      });
    });
    describe(".sendDigits", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_sendDigits";
        expect(model.sendDigits).toBe(value);
      });
    });
    describe(".ifMachine", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_ifMachine";
        expect(model.ifMachine).toBe(value);
      });
    });
    describe(".ifMachineUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.ifMachineUrl).toBe(value);
      });
    });
    describe(".timeout", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.timeout).toBe(value);
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
    describe(".callConnectUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.callConnectUrl).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.MakeCallRequest;
    let model: freeclimb.MakeCallRequest = new freeclimb.MakeCallRequest({
      from: "",
      to: "",
      applicationId: "",
      sendDigits: "",
      ifMachine: "",
      ifMachineUrl: "",
      timeout: 0,
      parentCallId: "",
      privacyMode: false,
      callConnectUrl: "",
    });
    describe("MakeCallRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.MakeCallRequest);
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
    describe(".applicationId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.applicationId).toBe(value);
      });
    });
    describe(".sendDigits", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.sendDigits).toBe(value);
      });
    });
    describe(".ifMachine", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.ifMachine).toBe(value);
      });
    });
    describe(".ifMachineUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.ifMachineUrl).toBe(value);
      });
    });
    describe(".timeout", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.timeout).toBe(value);
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
    describe(".callConnectUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.callConnectUrl).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {
      from: "test_from",
      to: "test_to",
    };
    let model: freeclimb.MakeCallRequest = new freeclimb.MakeCallRequest(
      constructorArguments,
    );

    describe("#from", () => {
      it("resolves to initialization value", () => {
        expect(model.from).toBe(constructorArguments["from"]);
      });
    });
    describe("#to", () => {
      it("resolves to initialization value", () => {
        expect(model.to).toBe(constructorArguments["to"]);
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
    describe("#sendDigits", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "sendDigits",
        )?.defaultValue;
        expect(model.sendDigits).toBe(value);
      });
    });
    describe("#ifMachine", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "ifMachine",
        )?.defaultValue;
        expect(model.ifMachine).toBe(value);
      });
    });
    describe("#ifMachineUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "ifMachineUrl",
        )?.defaultValue;
        expect(model.ifMachineUrl).toBe(value);
      });
    });
    describe("#timeout", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "timeout",
        )?.defaultValue;
        expect(model.timeout).toBe(value);
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
    describe("#callConnectUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "callConnectUrl",
        )?.defaultValue;
        expect(model.callConnectUrl).toBe(value);
      });
    });
  });
});
