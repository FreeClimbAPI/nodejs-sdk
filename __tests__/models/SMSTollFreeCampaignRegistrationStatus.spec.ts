import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SMSTollFreeCampaignRegistrationStatus", () => {
  const Klass = freeclimb.SMSTollFreeCampaignRegistrationStatus;
  describe("Test with truthy values", () => {
    describe(".UNREGISTERED", () => {
      it("resolves to correct value for UNREGISTERED enum property", () => {
        expect(
          freeclimb.SMSTollFreeCampaignRegistrationStatus.UNREGISTERED,
        ).toBe("UNREGISTERED");
      });
    });
    describe(".INITIATED", () => {
      it("resolves to correct value for INITIATED enum property", () => {
        expect(freeclimb.SMSTollFreeCampaignRegistrationStatus.INITIATED).toBe(
          "INITIATED",
        );
      });
    });
    describe(".PENDING", () => {
      it("resolves to correct value for PENDING enum property", () => {
        expect(freeclimb.SMSTollFreeCampaignRegistrationStatus.PENDING).toBe(
          "PENDING",
        );
      });
    });
    describe(".DECLINED", () => {
      it("resolves to correct value for DECLINED enum property", () => {
        expect(freeclimb.SMSTollFreeCampaignRegistrationStatus.DECLINED).toBe(
          "DECLINED",
        );
      });
    });
    describe(".REGISTERED", () => {
      it("resolves to correct value for REGISTERED enum property", () => {
        expect(freeclimb.SMSTollFreeCampaignRegistrationStatus.REGISTERED).toBe(
          "REGISTERED",
        );
      });
    });
  });
});
