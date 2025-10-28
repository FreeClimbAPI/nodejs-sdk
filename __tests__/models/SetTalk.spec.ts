import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SetTalk", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.SetTalk;
    let model: freeclimb.SetTalk = new freeclimb.SetTalk({
      ["talk"]: true,
    });
    describe("SetTalk class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.SetTalk);
      });
    });

    describe(".talk", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model["talk"]).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.SetTalk;
    let model: freeclimb.SetTalk = new freeclimb.SetTalk({
      ["talk"]: false,
    });
    describe("SetTalk class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.SetTalk);
      });
    });

    describe(".talk", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model["talk"]).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.SetTalk;
    let constructorArguments = {};
    let model: freeclimb.SetTalk = new freeclimb.SetTalk(constructorArguments);

    describe("#talk", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "talk",
        )?.defaultValue;
        expect(model["talk"]).toBe(value);
      });
    });
  });
});
