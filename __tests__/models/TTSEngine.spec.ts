import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("TTSEngine", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.TTSEngine;
    let model: freeclimb.TTSEngine = new freeclimb.TTSEngine({
      ["name"]: freeclimb.TTSEngineName.FREECLIMB_STANDARD,
      ["parameters"]: {},
    });
    describe("TTSEngine class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.TTSEngine);
      });
    });
    describe(".name", () => {
      it("resolves to particular value on initialization", () => {
        const value = "freeclimb.standard";
        expect(model["name"]).toBe(value);
      });
    });
    describe(".parameters", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model["parameters"]).toStrictEqual(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.TTSEngine;
    let model: freeclimb.TTSEngine = new freeclimb.TTSEngine({
      ["name"]: freeclimb.TTSEngineName.FREECLIMB_STANDARD,
      ["parameters"]: {},
    });
    describe("TTSEngine class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.TTSEngine);
      });
    });
    describe(".name", () => {
      it("resolves to particular value on initialization", () => {
        const value = "freeclimb.standard";
        expect(model["name"]).toBe(value);
      });
    });
    describe(".parameters", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model["parameters"]).toStrictEqual(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.TTSEngine;
    let constructorArguments = {};
    let model: freeclimb.TTSEngine = new freeclimb.TTSEngine(
      constructorArguments,
    );

    describe("#name", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "name",
        )?.defaultValue;
        expect(model["name"]).toBe(value);
      });
    });
    describe("#parameters", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "parameters",
        )?.defaultValue;
        expect(model["parameters"]).toBe(value);
      });
    });
  });
});
