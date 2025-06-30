import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SMSTenDLCBrandRelationship", () => {
  describe("Test with true values", () => {
    describe(".BASIC_ACCOUNT", () => {
      it("resolves to correct value for BASIC_ACCOUNT enum property", () => {
        expect(freeclimb.SMSTenDLCBrandRelationship.BASIC_ACCOUNT).toBe(
          "BASIC_ACCOUNT",
        );
      });
    });
    describe(".SMALL_ACCOUNT", () => {
      it("resolves to correct value for SMALL_ACCOUNT enum property", () => {
        expect(freeclimb.SMSTenDLCBrandRelationship.SMALL_ACCOUNT).toBe(
          "SMALL_ACCOUNT",
        );
      });
    });
    describe(".MEDIUM_ACCOUNT", () => {
      it("resolves to correct value for MEDIUM_ACCOUNT enum property", () => {
        expect(freeclimb.SMSTenDLCBrandRelationship.MEDIUM_ACCOUNT).toBe(
          "MEDIUM_ACCOUNT",
        );
      });
    });
    describe(".LARGE_ACCOUNT", () => {
      it("resolves to correct value for LARGE_ACCOUNT enum property", () => {
        expect(freeclimb.SMSTenDLCBrandRelationship.LARGE_ACCOUNT).toBe(
          "LARGE_ACCOUNT",
        );
      });
    });
    describe(".KEY_ACCOUNT", () => {
      it("resolves to correct value for KEY_ACCOUNT enum property", () => {
        expect(freeclimb.SMSTenDLCBrandRelationship.KEY_ACCOUNT).toBe(
          "KEY_ACCOUNT",
        );
      });
    });
  });
});
