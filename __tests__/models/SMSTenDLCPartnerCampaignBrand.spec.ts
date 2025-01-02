import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SMSTenDLCPartnerCampaignBrand", () => {
  let model: freeclimb.SMSTenDLCPartnerCampaignBrand =
    new freeclimb.SMSTenDLCPartnerCampaignBrand({
      accountId: "test_accountId",
      brandId: "test_brandId",
      firstName: "test_firstName",
      lastName: "test_lastName",
      displayName: "test_displayName",
      companyName: "test_companyName",
      phone: "test_phone",
      email: "test_email",
      website: "test_website",

      evpVettingScore: 1,
    });
  describe("SMSTenDLCPartnerCampaignBrand class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.SMSTenDLCPartnerCampaignBrand);
    });
  });
  describe(".accountId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_accountId";
      expect(model.accountId).toBe(value);
    });
  });
  describe(".brandId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_brandId";
      expect(model.brandId).toBe(value);
    });
  });
  describe(".firstName", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_firstName";
      expect(model.firstName).toBe(value);
    });
  });
  describe(".lastName", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_lastName";
      expect(model.lastName).toBe(value);
    });
  });
  describe(".displayName", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_displayName";
      expect(model.displayName).toBe(value);
    });
  });
  describe(".companyName", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_companyName";
      expect(model.companyName).toBe(value);
    });
  });
  describe(".phone", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_phone";
      expect(model.phone).toBe(value);
    });
  });
  describe(".email", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_email";
      expect(model.email).toBe(value);
    });
  });
  describe(".website", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_website";
      expect(model.website).toBe(value);
    });
  });
  describe(".optionalAttributes", () => {
    it("resolves to particular value on initialization", () => {});
  });
  describe(".evpVettingScore", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.evpVettingScore).toBe(value);
    });
  });
});
