import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("TranscribeUtteranceRecord", () => {
  let model: freeclimb.TranscribeUtteranceRecord =
    new freeclimb.TranscribeUtteranceRecord({
      saveRecording: true,
      maxLengthSec: 1,
      rcrdTerminationSilenceTimeMs: 1,
    });
  describe("TranscribeUtteranceRecord class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.TranscribeUtteranceRecord);
    });
  });
  describe(".saveRecording", () => {
    it("resolves to particular value on initialization", () => {
      const value = true;
      expect(model.saveRecording).toBe(value);
    });
  });
  describe(".maxLengthSec", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.maxLengthSec).toBe(value);
    });
  });
  describe(".rcrdTerminationSilenceTimeMs", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.rcrdTerminationSilenceTimeMs).toBe(value);
    });
  });
});
