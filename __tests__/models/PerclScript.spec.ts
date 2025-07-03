import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("PerclScript", () => {
  const Klass = freeclimb.PerclScript;
  describe("Test with truthy values", () => {
    let model: freeclimb.PerclScript = new freeclimb.PerclScript({
      commands: [],
    });
    describe("PerclScript class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.PerclScript);
      });
    });
    describe(".commands", () => {
      it("resolves to particular value on initialization", () => {
        const value: freeclimb.PerclCommand[] = [];
        expect(model.commands).toStrictEqual(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.PerclScript = new freeclimb.PerclScript({
      commands: [],
    });
    describe("PerclScript class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.PerclScript);
      });
    });
    describe(".commands", () => {
      it("resolves to particular value on initialization", () => {
        const value: freeclimb.PerclCommand[] = [];
        expect(model.commands).toStrictEqual(value);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {};
    let model: freeclimb.PerclScript = new freeclimb.PerclScript(
      constructorArguments,
    );

    describe("#commands", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "commands",
        )?.defaultValue;
        expect(model.commands).toBe(value);
      });
    });
  });
});
