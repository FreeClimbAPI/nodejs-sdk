import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SMSTenDLCBrandIdentityStatus", () => {
  describe("Test with true values", () => {
    describe(".SELF_DECLARED", () => {
      it("resolves to correct value for SELF_DECLARED enum property", () => {
        expect(freeclimb.SMSTenDLCBrandIdentityStatus.SELF_DECLARED).toBe(
          "SELF_DECLARED",
        );
      });
    });
    describe(".UNVERIFIED", () => {
      it("resolves to correct value for UNVERIFIED enum property", () => {
        expect(freeclimb.SMSTenDLCBrandIdentityStatus.UNVERIFIED).toBe(
          "UNVERIFIED",
        );
      });
    });
    describe(".VERIFIED", () => {
      it("resolves to correct value for VERIFIED enum property", () => {
        expect(freeclimb.SMSTenDLCBrandIdentityStatus.VERIFIED).toBe(
          "VERIFIED",
        );
      });
    });
    describe(".VETTED_VERIFIED", () => {
      it("resolves to correct value for VETTED_VERIFIED enum property", () => {
        expect(freeclimb.SMSTenDLCBrandIdentityStatus.VETTED_VERIFIED).toBe(
          "VETTED_VERIFIED",
        );
      });
    });
  });
});
