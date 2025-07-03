import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SMSTenDLCCampaignStatus", () => {
  const Klass = freeclimb.SMSTenDLCCampaignStatus;
  describe("Test with truthy values", () => {
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
