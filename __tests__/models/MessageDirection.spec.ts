import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("MessageDirection", () => {
  describe("Test with truthy values", () => {
    describe(".INBOUND", () => {
      it("resolves to correct value for INBOUND enum property", () => {
        expect(freeclimb.MessageDirection.INBOUND).toBe("inbound");
      });
    });
    describe(".OUTBOUND", () => {
      it("resolves to correct value for OUTBOUND enum property", () => {
        expect(freeclimb.MessageDirection.OUTBOUND).toBe("outbound");
      });
    });
  });
});
