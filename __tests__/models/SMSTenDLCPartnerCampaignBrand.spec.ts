import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SMSTenDLCPartnerCampaignBrand", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.SMSTenDLCPartnerCampaignBrand;
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
  describe("Test with falsy values", () => {
    const Klass = freeclimb.SMSTenDLCPartnerCampaignBrand;
    let model: freeclimb.SMSTenDLCPartnerCampaignBrand =
      new freeclimb.SMSTenDLCPartnerCampaignBrand({
        accountId: "",
        brandId: "",
        firstName: "",
        lastName: "",
        displayName: "",
        companyName: "",
        phone: "",
        email: "",
        website: "",

        evpVettingScore: 0,
      });
    describe("SMSTenDLCPartnerCampaignBrand class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.SMSTenDLCPartnerCampaignBrand);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".brandId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.brandId).toBe(value);
      });
    });
    describe(".firstName", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.firstName).toBe(value);
      });
    });
    describe(".lastName", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.lastName).toBe(value);
      });
    });
    describe(".displayName", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.displayName).toBe(value);
      });
    });
    describe(".companyName", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.companyName).toBe(value);
      });
    });
    describe(".phone", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.phone).toBe(value);
      });
    });
    describe(".email", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.email).toBe(value);
      });
    });
    describe(".website", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.website).toBe(value);
      });
    });
    describe(".optionalAttributes", () => {
      it("resolves to particular value on initialization", () => {});
    });
    describe(".evpVettingScore", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.evpVettingScore).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {
      phone: "test_phone",
      email: "test_email",
    };
    let model: freeclimb.SMSTenDLCPartnerCampaignBrand =
      new freeclimb.SMSTenDLCPartnerCampaignBrand(constructorArguments);

    describe("#accountId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "accountId",
        )?.defaultValue;
        expect(model.accountId).toBe(value);
      });
    });
    describe("#brandId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "brandId",
        )?.defaultValue;
        expect(model.brandId).toBe(value);
      });
    });
    describe("#firstName", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "firstName",
        )?.defaultValue;
        expect(model.firstName).toBe(value);
      });
    });
    describe("#lastName", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "lastName",
        )?.defaultValue;
        expect(model.lastName).toBe(value);
      });
    });
    describe("#displayName", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "displayName",
        )?.defaultValue;
        expect(model.displayName).toBe(value);
      });
    });
    describe("#companyName", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "companyName",
        )?.defaultValue;
        expect(model.companyName).toBe(value);
      });
    });
    describe("#phone", () => {
      it("resolves to initialization value", () => {
        expect(model.phone).toBe(constructorArguments["phone"]);
      });
    });
    describe("#email", () => {
      it("resolves to initialization value", () => {
        expect(model.email).toBe(constructorArguments["email"]);
      });
    });
    describe("#website", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "website",
        )?.defaultValue;
        expect(model.website).toBe(value);
      });
    });
    describe("#optionalAttributes", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "optionalAttributes",
        )?.defaultValue;
        expect(model.optionalAttributes).toBe(value);
      });
    });
    describe("#evpVettingScore", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "evpVettingScore",
        )?.defaultValue;
        expect(model.evpVettingScore).toBe(value);
      });
    });
  });
});
