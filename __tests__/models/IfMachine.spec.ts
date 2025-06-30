import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("IfMachine", () => {
  describe("Test with true values", () => {
    describe(".REDIRECT", () => {
      it("resolves to correct value for REDIRECT enum property", () => {
        expect(freeclimb.IfMachine.REDIRECT).toBe("redirect");
      });
    });
    describe(".HANGUP", () => {
      it("resolves to correct value for HANGUP enum property", () => {
        expect(freeclimb.IfMachine.HANGUP).toBe("hangup");
      });
    });
  });
});
