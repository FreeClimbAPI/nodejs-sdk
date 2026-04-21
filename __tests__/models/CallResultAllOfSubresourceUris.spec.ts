import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("CallResultAllOfSubresourceUris", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.CallResultAllOfSubresourceUris;
    let model: freeclimb.CallResultAllOfSubresourceUris =
      new freeclimb.CallResultAllOfSubresourceUris({
        ["logs"]: "test_logs",
        ["recordings"]: "test_recordings",
      });
    describe("CallResultAllOfSubresourceUris class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.CallResultAllOfSubresourceUris);
      });
    });
    describe(".logs", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_logs";
        expect(model["logs"]).toBe(value);
      });
    });
    describe(".recordings", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_recordings";
        expect(model["recordings"]).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.CallResultAllOfSubresourceUris;
    let model: freeclimb.CallResultAllOfSubresourceUris =
      new freeclimb.CallResultAllOfSubresourceUris({
        ["logs"]: "",
        ["recordings"]: "",
      });
    describe("CallResultAllOfSubresourceUris class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.CallResultAllOfSubresourceUris);
      });
    });
    describe(".logs", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["logs"]).toBe(value);
      });
    });
    describe(".recordings", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["recordings"]).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.CallResultAllOfSubresourceUris;
    let constructorArguments = {};
    let model: freeclimb.CallResultAllOfSubresourceUris =
      new freeclimb.CallResultAllOfSubresourceUris(constructorArguments);

    describe("#logs", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "logs",
        )?.defaultValue;
        expect(model["logs"]).toBe(value);
      });
    });
    describe("#recordings", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "recordings",
        )?.defaultValue;
        expect(model["recordings"]).toBe(value);
      });
    });
  });
});
