import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Hangup", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.Hangup;
    let model: freeclimb.Hangup = new freeclimb.Hangup({
      ["reason"]: "test_reason",
    });
    describe("Hangup class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Hangup);
      });
    });

    describe(".reason", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_reason";
        expect(model["reason"]).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.Hangup;
    let model: freeclimb.Hangup = new freeclimb.Hangup({
      ["reason"]: "",
    });
    describe("Hangup class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Hangup);
      });
    });

    describe(".reason", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["reason"]).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.Hangup;
    let constructorArguments = {};
    let model: freeclimb.Hangup = new freeclimb.Hangup(constructorArguments);

    describe("#reason", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "reason",
        )?.defaultValue;
        expect(model["reason"]).toBe(value);
      });
    });
  });
});
