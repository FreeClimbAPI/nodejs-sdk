import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("AccountType", () => {
  describe("Test with truthy values", () => {
    describe(".TRIAL", () => {
      it("resolves to correct value for TRIAL enum property", () => {
        expect(freeclimb.AccountType.TRIAL).toBe("trial");
      });
    });
    describe(".FULL", () => {
      it("resolves to correct value for FULL enum property", () => {
        expect(freeclimb.AccountType.FULL).toBe("full");
      });
    });
  });
});
