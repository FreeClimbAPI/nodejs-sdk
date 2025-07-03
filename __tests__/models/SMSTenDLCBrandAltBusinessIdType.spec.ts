import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SMSTenDLCBrandAltBusinessIdType", () => {
  const Klass = freeclimb.SMSTenDLCBrandAltBusinessIdType;
  describe("Test with truthy values", () => {
    describe(".NONE", () => {
      it("resolves to correct value for NONE enum property", () => {
        expect(freeclimb.SMSTenDLCBrandAltBusinessIdType.NONE).toBe("NONE");
      });
    });
    describe(".DUNS", () => {
      it("resolves to correct value for DUNS enum property", () => {
        expect(freeclimb.SMSTenDLCBrandAltBusinessIdType.DUNS).toBe("DUNS");
      });
    });
    describe(".GIIN", () => {
      it("resolves to correct value for GIIN enum property", () => {
        expect(freeclimb.SMSTenDLCBrandAltBusinessIdType.GIIN).toBe("GIIN");
      });
    });
    describe(".LEI", () => {
      it("resolves to correct value for LEI enum property", () => {
        expect(freeclimb.SMSTenDLCBrandAltBusinessIdType.LEI).toBe("LEI");
      });
    });
  });
});
