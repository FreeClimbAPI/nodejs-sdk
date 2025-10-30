import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("TTSEngineName", () => {
  describe("Test with truthy values", () => {
    describe(".FREECLIMB_STANDARD", () => {
      it("resolves to correct value for FREECLIMB_STANDARD enum property", () => {
        expect(freeclimb.TTSEngineName.FREECLIMB_STANDARD).toBe(
          "freeclimb.standard",
        );
      });
    });
    describe(".FREECLIMB_NEURAL", () => {
      it("resolves to correct value for FREECLIMB_NEURAL enum property", () => {
        expect(freeclimb.TTSEngineName.FREECLIMB_NEURAL).toBe(
          "freeclimb.neural",
        );
      });
    });
    describe(".ELEVEN_LABS", () => {
      it("resolves to correct value for ELEVEN_LABS enum property", () => {
        expect(freeclimb.TTSEngineName.ELEVEN_LABS).toBe("ElevenLabs");
      });
    });
  });
});
