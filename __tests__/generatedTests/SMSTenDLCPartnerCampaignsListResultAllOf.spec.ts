import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SMSTenDLCPartnerCampaignsListResultAllOf", () => {
  let model: freeclimb.SMSTenDLCPartnerCampaignsListResultAllOf =
    new freeclimb.SMSTenDLCPartnerCampaignsListResultAllOf({
      partnerCampaigns: [],
    });
  describe("SMSTenDLCPartnerCampaignsListResultAllOf class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(
        freeclimb.SMSTenDLCPartnerCampaignsListResultAllOf,
      );
    });
  });
  describe(".partnerCampaigns", () => {
    it("resolves to particular value on initialization", () => {
      const value: freeclimb.SMSTenDLCPartnerCampaign[] = [];
      expect(model.partnerCampaigns).toStrictEqual(value);
    });
  });
});
