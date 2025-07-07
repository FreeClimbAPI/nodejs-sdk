import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Pause", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.Pause;
    let model: freeclimb.Pause = new freeclimb.Pause({
      length: 1,
    });
    describe("Pause class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Pause);
      });
    });

    describe(".length", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.length).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.Pause;
    let model: freeclimb.Pause = new freeclimb.Pause({
      length: 0,
    });
    describe("Pause class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Pause);
      });
    });

    describe(".length", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.length).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.Pause;
    let constructorArguments = {
      length: 1,
    };
    let model: freeclimb.Pause = new freeclimb.Pause(constructorArguments);

    describe("#length", () => {
      it("resolves to initialization value", () => {
        expect(model.length).toBe(constructorArguments["length"]);
      });
    });
  });
});
