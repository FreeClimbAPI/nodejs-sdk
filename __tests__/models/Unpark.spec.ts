import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Unpark", () => {
  describe("Test with truthy values", () => {
    let model: freeclimb.Unpark = new freeclimb.Unpark({});
    describe("Unpark class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Unpark);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.Unpark = new freeclimb.Unpark({});
    describe("Unpark class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Unpark);
      });
    });
  });
});
