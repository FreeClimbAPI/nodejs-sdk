import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("ExportResourceType", () => {
  describe("Test with truthy values", () => {
    describe(".MESSAGES", () => {
      it("resolves to correct value for MESSAGES enum property", () => {
        expect(freeclimb.ExportResourceType.MESSAGES).toBe("Messages");
      });
    });
    describe(".CALLS", () => {
      it("resolves to correct value for CALLS enum property", () => {
        expect(freeclimb.ExportResourceType.CALLS).toBe("Calls");
      });
    });
  });
});
