import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("PlayBeep", () => {
  const Klass = freeclimb.PlayBeep;
  describe("Test with truthy values", () => {
    describe(".ALWAYS", () => {
      it("resolves to correct value for ALWAYS enum property", () => {
        expect(freeclimb.PlayBeep.ALWAYS).toBe("always");
      });
    });
    describe(".NEVER", () => {
      it("resolves to correct value for NEVER enum property", () => {
        expect(freeclimb.PlayBeep.NEVER).toBe("never");
      });
    });
    describe(".ENTRY_ONLY", () => {
      it("resolves to correct value for ENTRY_ONLY enum property", () => {
        expect(freeclimb.PlayBeep.ENTRY_ONLY).toBe("entryOnly");
      });
    });
    describe(".EXIT_ONLY", () => {
      it("resolves to correct value for EXIT_ONLY enum property", () => {
        expect(freeclimb.PlayBeep.EXIT_ONLY).toBe("exitOnly");
      });
    });
  });
});
