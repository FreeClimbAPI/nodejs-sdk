import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SMSTenDLCBrandEntityType", () => {
  describe("Test with true values", () => {
    describe(".PRIVATE_PROFIT", () => {
      it("resolves to correct value for PRIVATE_PROFIT enum property", () => {
        expect(freeclimb.SMSTenDLCBrandEntityType.PRIVATE_PROFIT).toBe(
          "PRIVATE_PROFIT",
        );
      });
    });
    describe(".PUBLIC_PROFIT", () => {
      it("resolves to correct value for PUBLIC_PROFIT enum property", () => {
        expect(freeclimb.SMSTenDLCBrandEntityType.PUBLIC_PROFIT).toBe(
          "PUBLIC_PROFIT",
        );
      });
    });
    describe(".NON_PROFIT", () => {
      it("resolves to correct value for NON_PROFIT enum property", () => {
        expect(freeclimb.SMSTenDLCBrandEntityType.NON_PROFIT).toBe(
          "NON_PROFIT",
        );
      });
    });
    describe(".GOVERNMENT", () => {
      it("resolves to correct value for GOVERNMENT enum property", () => {
        expect(freeclimb.SMSTenDLCBrandEntityType.GOVERNMENT).toBe(
          "GOVERNMENT",
        );
      });
    });
    describe(".SOLE_PROPRIETOR", () => {
      it("resolves to correct value for SOLE_PROPRIETOR enum property", () => {
        expect(freeclimb.SMSTenDLCBrandEntityType.SOLE_PROPRIETOR).toBe(
          "SOLE_PROPRIETOR",
        );
      });
    });
  });
});
