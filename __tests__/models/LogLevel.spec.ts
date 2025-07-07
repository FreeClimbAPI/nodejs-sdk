import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("LogLevel", () => {
  describe("Test with truthy values", () => {
    describe(".INFO", () => {
      it("resolves to correct value for INFO enum property", () => {
        expect(freeclimb.LogLevel.INFO).toBe("info");
      });
    });
    describe(".WARNING", () => {
      it("resolves to correct value for WARNING enum property", () => {
        expect(freeclimb.LogLevel.WARNING).toBe("warning");
      });
    });
    describe(".ERROR", () => {
      it("resolves to correct value for ERROR enum property", () => {
        expect(freeclimb.LogLevel.ERROR).toBe("error");
      });
    });
  });
});
