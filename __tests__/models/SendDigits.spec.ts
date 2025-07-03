import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SendDigits", () => {
  const Klass = freeclimb.SendDigits;
  describe("Test with truthy values", () => {
    let model: freeclimb.SendDigits = new freeclimb.SendDigits({
      digits: "test_digits",
      pauseMs: 1,
      privacyMode: true,
    });
    describe("SendDigits class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.SendDigits);
      });
    });

    describe(".digits", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_digits";
        expect(model.digits).toBe(value);
      });
    });
    describe(".pauseMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.pauseMs).toBe(value);
      });
    });
    describe(".privacyMode", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.privacyMode).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.SendDigits = new freeclimb.SendDigits({
      digits: "",
      pauseMs: 0,
      privacyMode: false,
    });
    describe("SendDigits class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.SendDigits);
      });
    });

    describe(".digits", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.digits).toBe(value);
      });
    });
    describe(".pauseMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.pauseMs).toBe(value);
      });
    });
    describe(".privacyMode", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.privacyMode).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {
      digits: "test_digits",
    };
    let model: freeclimb.SendDigits = new freeclimb.SendDigits(
      constructorArguments,
    );

    describe("#digits", () => {
      it("resolves to initialization value", () => {
        expect(model.digits).toBe(constructorArguments["digits"]);
      });
    });
    describe("#pauseMs", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "pauseMs",
        )?.defaultValue;
        expect(model.pauseMs).toBe(value);
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
  });
});
