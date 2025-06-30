import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Hangup", () => {
  describe("Test with truthy values", () => {
    let model: freeclimb.Hangup = new freeclimb.Hangup({
      reason: "test_reason",
    });
    describe("Hangup class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Hangup);
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
    let model: freeclimb.Hangup = new freeclimb.Hangup({
      reason: "",
    });
    describe("Hangup class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Hangup);
      });
    });

    describe(".reason", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.reason).toBe(value);
      });
    });
  });
});
