import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("PerclCommand", () => {
  describe("Test with true values", () => {
    let model: freeclimb.PerclCommand = new freeclimb.PerclCommand({});
    describe("PerclCommand class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.PerclCommand);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.PerclCommand = new freeclimb.PerclCommand({});
    describe("PerclCommand class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.PerclCommand);
      });
    });
  });
});
