import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("PerclCommand", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.PerclCommand;
    let model: freeclimb.PerclCommand = new freeclimb.PerclCommand({});
    describe("PerclCommand class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.PerclCommand);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.PerclCommand;
    let model: freeclimb.PerclCommand = new freeclimb.PerclCommand({});
    describe("PerclCommand class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.PerclCommand);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.PerclCommand;
    let constructorArguments = {};
    let model: freeclimb.PerclCommand = new freeclimb.PerclCommand(
      constructorArguments,
    );

    describe("#command", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "command",
        )?.defaultValue;
        expect(model.command).toBe(value);
      });
    });
  });
});
