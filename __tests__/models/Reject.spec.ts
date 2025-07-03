import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Reject", () => {
  const Klass = freeclimb.Reject;
  describe("Test with truthy values", () => {
    let model: freeclimb.Reject = new freeclimb.Reject({
      reason: "test_reason",
    });
    describe("Reject class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Reject);
      });
    });

    describe(".reason", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_reason";
        expect(model.reason).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.Reject = new freeclimb.Reject({
      reason: "",
    });
    describe("Reject class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Reject);
      });
    });

    describe(".reason", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.reason).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {};
    let model: freeclimb.Reject = new freeclimb.Reject(constructorArguments);

    describe("#reason", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "reason",
        )?.defaultValue;
        expect(model.reason).toBe(value);
      });
    });
  });
});
