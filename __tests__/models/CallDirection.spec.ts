import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("CallDirection", () => {
  describe("Test with truthy values", () => {
    describe(".INBOUND", () => {
      it("resolves to correct value for INBOUND enum property", () => {
        expect(freeclimb.CallDirection.INBOUND).toBe("inbound");
      });
    });
    describe(".OUTBOUND_API", () => {
      it("resolves to correct value for OUTBOUND_API enum property", () => {
        expect(freeclimb.CallDirection.OUTBOUND_API).toBe("outboundAPI");
      });
    });
    describe(".OUTBOUND_DIAL", () => {
      it("resolves to correct value for OUTBOUND_DIAL enum property", () => {
        expect(freeclimb.CallDirection.OUTBOUND_DIAL).toBe("outboundDial");
      });
    });
  });
});
