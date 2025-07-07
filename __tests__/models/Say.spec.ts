import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Say", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.Say;
    let model: freeclimb.Say = new freeclimb.Say({
      text: "test_text",
      language: "test_language",
      loop: 1,
      privacyMode: true,
    });
    describe("Say class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Say);
      });
    });

    describe(".text", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_text";
        expect(model.text).toBe(value);
      });
    });
    describe(".language", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_language";
        expect(model.language).toBe(value);
      });
    });
    describe(".loop", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.loop).toBe(value);
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
    const Klass = freeclimb.Say;
    let model: freeclimb.Say = new freeclimb.Say({
      text: "",
      language: "",
      loop: 0,
      privacyMode: false,
    });
    describe("Say class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Say);
      });
    });

    describe(".text", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.text).toBe(value);
      });
    });
    describe(".language", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.language).toBe(value);
      });
    });
    describe(".loop", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.loop).toBe(value);
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
    const Klass = freeclimb.Say;
    let constructorArguments = {
      text: "test_text",
    };
    let model: freeclimb.Say = new freeclimb.Say(constructorArguments);

    describe("#text", () => {
      it("resolves to initialization value", () => {
        expect(model.text).toBe(constructorArguments["text"]);
      });
    });
    describe("#language", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "language",
        )?.defaultValue;
        expect(model.language).toBe(value);
      });
    });
    describe("#loop", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "loop",
        )?.defaultValue;
        expect(model.loop).toBe(value);
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
