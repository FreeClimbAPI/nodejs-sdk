import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("ApplicationRequest", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.ApplicationRequest;
    let model: freeclimb.ApplicationRequest = new freeclimb.ApplicationRequest({
      ["alias"]: "test_alias",
      ["voiceUrl"]: "https://123.abc",
      ["voiceFallbackUrl"]: "https://123.abc",
      ["callConnectUrl"]: "https://123.abc",
      ["statusCallbackUrl"]: "https://123.abc",
      ["smsUrl"]: "https://123.abc",
      ["smsFallbackUrl"]: "https://123.abc",
    });
    describe("ApplicationRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.ApplicationRequest);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_alias";
        expect(model["alias"]).toBe(value);
      });
    });
    describe(".voiceUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model["voiceUrl"]).toBe(value);
      });
    });
    describe(".voiceFallbackUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model["voiceFallbackUrl"]).toBe(value);
      });
    });
    describe(".callConnectUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model["callConnectUrl"]).toBe(value);
      });
    });
    describe(".statusCallbackUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model["statusCallbackUrl"]).toBe(value);
      });
    });
    describe(".smsUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model["smsUrl"]).toBe(value);
      });
    });
    describe(".smsFallbackUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model["smsFallbackUrl"]).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.ApplicationRequest;
    let model: freeclimb.ApplicationRequest = new freeclimb.ApplicationRequest({
      ["alias"]: "",
      ["voiceUrl"]: "",
      ["voiceFallbackUrl"]: "",
      ["callConnectUrl"]: "",
      ["statusCallbackUrl"]: "",
      ["smsUrl"]: "",
      ["smsFallbackUrl"]: "",
    });
    describe("ApplicationRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.ApplicationRequest);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["alias"]).toBe(value);
      });
    });
    describe(".voiceUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["voiceUrl"]).toBe(value);
      });
    });
    describe(".voiceFallbackUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["voiceFallbackUrl"]).toBe(value);
      });
    });
    describe(".callConnectUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["callConnectUrl"]).toBe(value);
      });
    });
    describe(".statusCallbackUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["statusCallbackUrl"]).toBe(value);
      });
    });
    describe(".smsUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["smsUrl"]).toBe(value);
      });
    });
    describe(".smsFallbackUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["smsFallbackUrl"]).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.ApplicationRequest;
    let constructorArguments = {};
    let model: freeclimb.ApplicationRequest = new freeclimb.ApplicationRequest(
      constructorArguments,
    );

    describe("#alias", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "alias",
        )?.defaultValue;
        expect(model["alias"]).toBe(value);
      });
    });
    describe("#voiceUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "voiceUrl",
        )?.defaultValue;
        expect(model["voiceUrl"]).toBe(value);
      });
    });
    describe("#voiceFallbackUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "voiceFallbackUrl",
        )?.defaultValue;
        expect(model["voiceFallbackUrl"]).toBe(value);
      });
    });
    describe("#callConnectUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "callConnectUrl",
        )?.defaultValue;
        expect(model["callConnectUrl"]).toBe(value);
      });
    });
    describe("#statusCallbackUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "statusCallbackUrl",
        )?.defaultValue;
        expect(model["statusCallbackUrl"]).toBe(value);
      });
    });
    describe("#smsUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "smsUrl",
        )?.defaultValue;
        expect(model["smsUrl"]).toBe(value);
      });
    });
    describe("#smsFallbackUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "smsFallbackUrl",
        )?.defaultValue;
        expect(model["smsFallbackUrl"]).toBe(value);
      });
    });
  });
});
