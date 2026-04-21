import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("AudioStream", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.AudioStream;
    let model: freeclimb.AudioStream = new freeclimb.AudioStream({
      ["location"]: "https://123.abc",
      ["actionUrl"]: "https://123.abc",
      ["contentType"]: "test_contentType",
      ["metaData"]: [],
      ["privacyMode"]: true,
    });
    describe("AudioStream class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.AudioStream);
      });
    });

    describe(".location", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model["location"]).toBe(value);
      });
    });
    describe(".actionUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model["actionUrl"]).toBe(value);
      });
    });
    describe(".contentType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_contentType";
        expect(model["contentType"]).toBe(value);
      });
    });
    describe(".metaData", () => {
      it("resolves to particular value on initialization", () => {
        const value: any[] = [];
        expect(model["metaData"]).toStrictEqual(value);
      });
    });
    describe(".privacyMode", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model["privacyMode"]).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.AudioStream;
    let model: freeclimb.AudioStream = new freeclimb.AudioStream({
      ["location"]: "",
      ["actionUrl"]: "",
      ["contentType"]: "",
      ["metaData"]: [],
      ["privacyMode"]: false,
    });
    describe("AudioStream class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.AudioStream);
      });
    });

    describe(".location", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["location"]).toBe(value);
      });
    });
    describe(".actionUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["actionUrl"]).toBe(value);
      });
    });
    describe(".contentType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["contentType"]).toBe(value);
      });
    });
    describe(".metaData", () => {
      it("resolves to particular value on initialization", () => {
        const value: any[] = [];
        expect(model["metaData"]).toStrictEqual(value);
      });
    });
    describe(".privacyMode", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model["privacyMode"]).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.AudioStream;
    let constructorArguments = {
      ["location"]: "https://123.abc",
    };
    let model: freeclimb.AudioStream = new freeclimb.AudioStream(
      constructorArguments,
    );

    describe("#location", () => {
      it("resolves to initialization value", () => {
        expect(model["location"]).toBe(constructorArguments["location"]);
      });
    });
    describe("#actionUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "actionUrl",
        )?.defaultValue;
        expect(model["actionUrl"]).toBe(value);
      });
    });
    describe("#contentType", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "contentType",
        )?.defaultValue;
        expect(model["contentType"]).toBe(value);
      });
    });
    describe("#metaData", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "metaData",
        )?.defaultValue;
        expect(model["metaData"]).toBe(value);
      });
    });
    describe("#privacyMode", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "privacyMode",
        )?.defaultValue;
        expect(model["privacyMode"]).toBe(value);
      });
    });
  });
});
