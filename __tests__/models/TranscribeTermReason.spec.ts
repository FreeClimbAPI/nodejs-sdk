import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("TranscribeTermReason", () => {
  const Klass = freeclimb.TranscribeTermReason;
  describe("Test with truthy values", () => {
    describe(".ERROR", () => {
      it("resolves to correct value for ERROR enum property", () => {
        expect(freeclimb.TranscribeTermReason.ERROR).toBe("error");
      });
    });
    describe(".COMPLETED", () => {
      it("resolves to correct value for COMPLETED enum property", () => {
        expect(freeclimb.TranscribeTermReason.COMPLETED).toBe("completed");
      });
    });
  });
});
