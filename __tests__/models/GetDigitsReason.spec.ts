import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("GetDigitsReason", () => {
  describe("Test with true values", () => {
    describe(".FINISH_KEY", () => {
      it("resolves to correct value for FINISH_KEY enum property", () => {
        expect(freeclimb.GetDigitsReason.FINISH_KEY).toBe("finishKey");
      });
    });
    describe(".TIMEOUT", () => {
      it("resolves to correct value for TIMEOUT enum property", () => {
        expect(freeclimb.GetDigitsReason.TIMEOUT).toBe("timeout");
      });
    });
    describe(".MAX_DIGITS", () => {
      it("resolves to correct value for MAX_DIGITS enum property", () => {
        expect(freeclimb.GetDigitsReason.MAX_DIGITS).toBe("maxDigits");
      });
    });
    describe(".TONE", () => {
      it("resolves to correct value for TONE enum property", () => {
        expect(freeclimb.GetDigitsReason.TONE).toBe("tone");
      });
    });
  });
});
