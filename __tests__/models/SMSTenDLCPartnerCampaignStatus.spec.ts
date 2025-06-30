import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SMSTenDLCPartnerCampaignStatus", () => {
  describe("Test with true values", () => {
    describe(".ACTIVE", () => {
      it("resolves to correct value for ACTIVE enum property", () => {
        expect(freeclimb.SMSTenDLCPartnerCampaignStatus.ACTIVE).toBe("ACTIVE");
      });
    });
    describe(".EXPIRED", () => {
      it("resolves to correct value for EXPIRED enum property", () => {
        expect(freeclimb.SMSTenDLCPartnerCampaignStatus.EXPIRED).toBe(
          "EXPIRED",
        );
      });
    });
  });
});
