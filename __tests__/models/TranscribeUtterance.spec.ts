import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("TranscribeUtterance", () => {
  describe("Test with true values", () => {
    let model: freeclimb.TranscribeUtterance =
      new freeclimb.TranscribeUtterance({
        actionUrl: "https://123.abc",
        playBeep: true,

        privacyForLogging: true,
        privacyForRecording: true,
        prompts: [],
      });
    describe("TranscribeUtterance class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.TranscribeUtterance);
      });
    });

    describe(".actionUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.actionUrl).toBe(value);
      });
    });
    describe(".playBeep", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.playBeep).toBe(value);
      });
    });
    describe(".record", () => {
      it("resolves to particular value on initialization", () => {});
    });
    describe(".privacyForLogging", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.privacyForLogging).toBe(value);
      });
    });
    describe(".privacyForRecording", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.privacyForRecording).toBe(value);
      });
    });
    describe(".prompts", () => {
      it("resolves to particular value on initialization", () => {
        const value: freeclimb.PerclCommand[] = [];
        expect(model.prompts).toStrictEqual(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.TranscribeUtterance =
      new freeclimb.TranscribeUtterance({
        actionUrl: "",
        playBeep: false,

        privacyForLogging: false,
        privacyForRecording: false,
        prompts: [],
      });
    describe("TranscribeUtterance class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.TranscribeUtterance);
      });
    });

    describe(".actionUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.actionUrl).toBe(value);
      });
    });
    describe(".playBeep", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.playBeep).toBe(value);
      });
    });
    describe(".record", () => {
      it("resolves to particular value on initialization", () => {});
    });
    describe(".privacyForLogging", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.privacyForLogging).toBe(value);
      });
    });
    describe(".privacyForRecording", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.privacyForRecording).toBe(value);
      });
    });
    describe(".prompts", () => {
      it("resolves to particular value on initialization", () => {
        const value: freeclimb.PerclCommand[] = [];
        expect(model.prompts).toStrictEqual(value);
      });
    });
  });
});
