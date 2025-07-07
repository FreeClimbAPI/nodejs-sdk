import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SetListen", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.SetListen;
    let model: freeclimb.SetListen = new freeclimb.SetListen({
      listen: true,
    });
    describe("SetListen class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.SetListen);
      });
    });

    describe(".listen", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.listen).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.SetListen;
    let model: freeclimb.SetListen = new freeclimb.SetListen({
      listen: false,
    });
    describe("SetListen class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.SetListen);
      });
    });

    describe(".listen", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.listen).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.SetListen;
    let constructorArguments = {};
    let model: freeclimb.SetListen = new freeclimb.SetListen(
      constructorArguments,
    );

    describe("#listen", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "listen",
        )?.defaultValue;
        expect(model.listen).toBe(value);
      });
    });
  });
});
