import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("TranscribeReason", () => {
  describe(".INTERNAL_ERROR", () => {
    it("resolves to correct value for INTERNAL_ERROR enum property", () => {
      expect(freeclimb.TranscribeReason.INTERNAL_ERROR).toBe("internalError");
    });
  });
  describe(".HANGUP", () => {
    it("resolves to correct value for HANGUP enum property", () => {
      expect(freeclimb.TranscribeReason.HANGUP).toBe("hangup");
    });
  });
  describe(".MAX_LENGTH", () => {
    it("resolves to correct value for MAX_LENGTH enum property", () => {
      expect(freeclimb.TranscribeReason.MAX_LENGTH).toBe("maxLength");
    });
  });
  describe(".DIGIT", () => {
    it("resolves to correct value for DIGIT enum property", () => {
      expect(freeclimb.TranscribeReason.DIGIT).toBe("digit");
    });
  });
  describe(".NO_INPUT", () => {
    it("resolves to correct value for NO_INPUT enum property", () => {
      expect(freeclimb.TranscribeReason.NO_INPUT).toBe("noInput");
    });
  });
});
