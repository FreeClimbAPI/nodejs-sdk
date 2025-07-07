import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Unpark", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.Unpark;
    let model: freeclimb.Unpark = new freeclimb.Unpark({});
    describe("Unpark class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Unpark);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.Unpark;
    let model: freeclimb.Unpark = new freeclimb.Unpark({});
    describe("Unpark class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Unpark);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.Unpark;
    let constructorArguments = {};
    let model: freeclimb.Unpark = new freeclimb.Unpark(constructorArguments);
  });
});
