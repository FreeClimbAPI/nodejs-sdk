import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SendDigits", () => {
  describe("Test with true values", () => {
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
});
