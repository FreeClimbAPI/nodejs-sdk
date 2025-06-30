import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SMSTenDLCCampaignStatus", () => {
  describe("Test with true values", () => {
    describe(".ACTIVE", () => {
      it("resolves to correct value for ACTIVE enum property", () => {
        expect(freeclimb.SMSTenDLCCampaignStatus.ACTIVE).toBe("ACTIVE");
      });
    });
    describe(".EXPIRED", () => {
      it("resolves to correct value for EXPIRED enum property", () => {
        expect(freeclimb.SMSTenDLCCampaignStatus.EXPIRED).toBe("EXPIRED");
      });
    });
  });
});
