import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("PerclScript", () => {
  describe("Test with true values", () => {
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
});
