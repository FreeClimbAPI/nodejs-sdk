import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("PlatformError", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.PlatformError;
    let model: freeclimb.PlatformError = new freeclimb.PlatformError({
      ["code"]: 1,
      ["call"]: "test_call",
      ["url"]: "test_url",
      ["details"]: {},
    });
    describe("PlatformError class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.PlatformError);
      });
    });
    describe(".code", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model["code"]).toBe(value);
      });
    });
    describe(".call", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_call";
        expect(model["call"]).toBe(value);
      });
    });
    describe(".url", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_url";
        expect(model["url"]).toBe(value);
      });
    });
    describe(".details", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model["details"]).toStrictEqual(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.PlatformError;
    let model: freeclimb.PlatformError = new freeclimb.PlatformError({
      ["code"]: 0,
      ["call"]: "",
      ["url"]: "",
      ["details"]: {},
    });
    describe("PlatformError class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.PlatformError);
      });
    });
    describe(".code", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model["code"]).toBe(value);
      });
    });
    describe(".call", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["call"]).toBe(value);
      });
    });
    describe(".url", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["url"]).toBe(value);
      });
    });
    describe(".details", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model["details"]).toStrictEqual(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.PlatformError;
    let constructorArguments = {};
    let model: freeclimb.PlatformError = new freeclimb.PlatformError(
      constructorArguments,
    );

    describe("#code", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "code",
        )?.defaultValue;
        expect(model["code"]).toBe(value);
      });
    });
    describe("#call", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "call",
        )?.defaultValue;
        expect(model["call"]).toBe(value);
      });
    });
    describe("#url", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "url",
        )?.defaultValue;
        expect(model["url"]).toBe(value);
      });
    });
    describe("#details", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "details",
        )?.defaultValue;
        expect(model["details"]).toBe(value);
      });
    });
  });
});
