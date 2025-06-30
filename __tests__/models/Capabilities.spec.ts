import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Capabilities", () => {
  describe("Test with truthy values", () => {
    let model: freeclimb.Capabilities = new freeclimb.Capabilities({
      voice: true,
      sms: true,
      tollFree: true,
      tenDLC: true,
      shortCode: true,
    });
    describe("Capabilities class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Capabilities);
      });
    });
    describe(".voice", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.voice).toBe(value);
      });
    });
    describe(".sms", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.sms).toBe(value);
      });
    });
    describe(".tollFree", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.tollFree).toBe(value);
      });
    });
    describe(".tenDLC", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.tenDLC).toBe(value);
      });
    });
    describe(".shortCode", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.shortCode).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.Capabilities = new freeclimb.Capabilities({
      voice: false,
      sms: false,
      tollFree: false,
      tenDLC: false,
      shortCode: false,
    });
    describe("Capabilities class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Capabilities);
      });
    });
    describe(".voice", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.voice).toBe(value);
      });
    });
    describe(".sms", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.sms).toBe(value);
      });
    });
    describe(".tollFree", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.tollFree).toBe(value);
      });
    });
    describe(".tenDLC", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.tenDLC).toBe(value);
      });
    });
    describe(".shortCode", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.shortCode).toBe(value);
      });
    });
  });
});
