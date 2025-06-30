import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("RecordUtterance", () => {
  describe("Test with true values", () => {
    let model: freeclimb.RecordUtterance = new freeclimb.RecordUtterance({
      actionUrl: "https://123.abc",
      silenceTimeoutMs: 1,
      finishOnKey: "test_finishOnKey",
      maxLengthSec: 1,
      playBeep: true,
      autoStart: true,
      privacyMode: true,
    });
    describe("RecordUtterance class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.RecordUtterance);
      });
    });

    describe(".actionUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.actionUrl).toBe(value);
      });
    });
    describe(".silenceTimeoutMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.silenceTimeoutMs).toBe(value);
      });
    });
    describe(".finishOnKey", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_finishOnKey";
        expect(model.finishOnKey).toBe(value);
      });
    });
    describe(".maxLengthSec", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.maxLengthSec).toBe(value);
      });
    });
    describe(".playBeep", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.playBeep).toBe(value);
      });
    });
    describe(".autoStart", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.autoStart).toBe(value);
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
    let model: freeclimb.RecordUtterance = new freeclimb.RecordUtterance({
      actionUrl: "",
      silenceTimeoutMs: 0,
      finishOnKey: "",
      maxLengthSec: 0,
      playBeep: false,
      autoStart: false,
      privacyMode: false,
    });
    describe("RecordUtterance class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.RecordUtterance);
      });
    });

    describe(".actionUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.actionUrl).toBe(value);
      });
    });
    describe(".silenceTimeoutMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.silenceTimeoutMs).toBe(value);
      });
    });
    describe(".finishOnKey", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.finishOnKey).toBe(value);
      });
    });
    describe(".maxLengthSec", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.maxLengthSec).toBe(value);
      });
    });
    describe(".playBeep", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.playBeep).toBe(value);
      });
    });
    describe(".autoStart", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.autoStart).toBe(value);
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
