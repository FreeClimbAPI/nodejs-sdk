import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SMSTenDLCBrand", () => {
  describe("Test with truthy values", () => {
    let model: freeclimb.SMSTenDLCBrand = new freeclimb.SMSTenDLCBrand({
      accountId: "test_accountId",

      entityType: freeclimb.SMSTenDLCBrandEntityType.PRIVATE_PROFIT,
      cspId: "test_cspId",
      brandId: "test_brandId",
      firstName: "test_firstName",
      lastName: "test_lastName",
      displayName: "test_displayName",
      companyName: "test_companyName",
      ein: "test_ein",
      einIssuingCountry: "test_einIssuingCountry",
      phone: "test_phone",
      street: "test_street",
      city: "test_city",
      state: "test_state",
      postalCode: "test_postalCode",
      country: "test_country",
      email: "test_email",
      stockSymbol: "test_stockSymbol",

      stockExchange: freeclimb.SMSTenDLCBrandStockExchange.NONE,
      ipAddress: "test_ipAddress",
      website: "test_website",

      brandRelationship: freeclimb.SMSTenDLCBrandRelationship.BASIC_ACCOUNT,
      vertical: "test_vertical",
      altBusinessId: "test_altBusinessId",

      altBusinessIdType: freeclimb.SMSTenDLCBrandAltBusinessIdType.NONE,
      universalEin: "test_universalEin",
      referenceId: "test_referenceId",

      mock: true,

      identityStatus: freeclimb.SMSTenDLCBrandIdentityStatus.SELF_DECLARED,
      createDate: new Date("December 17, 1995 03:24:00"),
    });
    describe("SMSTenDLCBrand class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.SMSTenDLCBrand);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_accountId";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".entityType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "PRIVATE_PROFIT";
        expect(model.entityType).toBe(value);
      });
    });
    describe(".cspId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_cspId";
        expect(model.cspId).toBe(value);
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
    describe(".ein", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_ein";
        expect(model.ein).toBe(value);
      });
    });
    describe(".einIssuingCountry", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_einIssuingCountry";
        expect(model.einIssuingCountry).toBe(value);
      });
    });
    describe(".phone", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_phone";
        expect(model.phone).toBe(value);
      });
    });
    describe(".street", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_street";
        expect(model.street).toBe(value);
      });
    });
    describe(".city", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_city";
        expect(model.city).toBe(value);
      });
    });
    describe(".state", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_state";
        expect(model.state).toBe(value);
      });
    });
    describe(".postalCode", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_postalCode";
        expect(model.postalCode).toBe(value);
      });
    });
    describe(".country", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_country";
        expect(model.country).toBe(value);
      });
    });
    describe(".email", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_email";
        expect(model.email).toBe(value);
      });
    });
    describe(".stockSymbol", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_stockSymbol";
        expect(model.stockSymbol).toBe(value);
      });
    });
    describe(".stockExchange", () => {
      it("resolves to particular value on initialization", () => {
        const value = "NONE";
        expect(model.stockExchange).toBe(value);
      });
    });
    describe(".ipAddress", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_ipAddress";
        expect(model.ipAddress).toBe(value);
      });
    });
    describe(".website", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_website";
        expect(model.website).toBe(value);
      });
    });
    describe(".brandRelationship", () => {
      it("resolves to particular value on initialization", () => {
        const value = "BASIC_ACCOUNT";
        expect(model.brandRelationship).toBe(value);
      });
    });
    describe(".vertical", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_vertical";
        expect(model.vertical).toBe(value);
      });
    });
    describe(".altBusinessId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_altBusinessId";
        expect(model.altBusinessId).toBe(value);
      });
    });
    describe(".altBusinessIdType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "NONE";
        expect(model.altBusinessIdType).toBe(value);
      });
    });
    describe(".universalEin", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_universalEin";
        expect(model.universalEin).toBe(value);
      });
    });
    describe(".referenceId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_referenceId";
        expect(model.referenceId).toBe(value);
      });
    });
    describe(".optionalAttributes", () => {
      it("resolves to particular value on initialization", () => {});
    });
    describe(".mock", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.mock).toBe(value);
      });
    });
    describe(".identityStatus", () => {
      it("resolves to particular value on initialization", () => {
        const value = "SELF_DECLARED";
        expect(model.identityStatus).toBe(value);
      });
    });
    describe(".createDate", () => {
      it("resolves to particular value on initialization", () => {
        const value = new Date("December 17, 1995 03:24:00");
        expect(model.createDate).toStrictEqual(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.SMSTenDLCBrand = new freeclimb.SMSTenDLCBrand({
      accountId: "",

      entityType: freeclimb.SMSTenDLCBrandEntityType.PRIVATE_PROFIT,
      cspId: "",
      brandId: "",
      firstName: "",
      lastName: "",
      displayName: "",
      companyName: "",
      ein: "",
      einIssuingCountry: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      email: "",
      stockSymbol: "",

      stockExchange: freeclimb.SMSTenDLCBrandStockExchange.NONE,
      ipAddress: "",
      website: "",

      brandRelationship: freeclimb.SMSTenDLCBrandRelationship.BASIC_ACCOUNT,
      vertical: "",
      altBusinessId: "",

      altBusinessIdType: freeclimb.SMSTenDLCBrandAltBusinessIdType.NONE,
      universalEin: "",
      referenceId: "",

      mock: false,

      identityStatus: freeclimb.SMSTenDLCBrandIdentityStatus.SELF_DECLARED,
      createDate: undefined,
    });
    describe("SMSTenDLCBrand class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.SMSTenDLCBrand);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".entityType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "PRIVATE_PROFIT";
        expect(model.entityType).toBe(value);
      });
    });
    describe(".cspId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.cspId).toBe(value);
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
    describe(".ein", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.ein).toBe(value);
      });
    });
    describe(".einIssuingCountry", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.einIssuingCountry).toBe(value);
      });
    });
    describe(".phone", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.phone).toBe(value);
      });
    });
    describe(".street", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.street).toBe(value);
      });
    });
    describe(".city", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.city).toBe(value);
      });
    });
    describe(".state", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.state).toBe(value);
      });
    });
    describe(".postalCode", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.postalCode).toBe(value);
      });
    });
    describe(".country", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.country).toBe(value);
      });
    });
    describe(".email", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.email).toBe(value);
      });
    });
    describe(".stockSymbol", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.stockSymbol).toBe(value);
      });
    });
    describe(".stockExchange", () => {
      it("resolves to particular value on initialization", () => {
        const value = "NONE";
        expect(model.stockExchange).toBe(value);
      });
    });
    describe(".ipAddress", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.ipAddress).toBe(value);
      });
    });
    describe(".website", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.website).toBe(value);
      });
    });
    describe(".brandRelationship", () => {
      it("resolves to particular value on initialization", () => {
        const value = "BASIC_ACCOUNT";
        expect(model.brandRelationship).toBe(value);
      });
    });
    describe(".vertical", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.vertical).toBe(value);
      });
    });
    describe(".altBusinessId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.altBusinessId).toBe(value);
      });
    });
    describe(".altBusinessIdType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "NONE";
        expect(model.altBusinessIdType).toBe(value);
      });
    });
    describe(".universalEin", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.universalEin).toBe(value);
      });
    });
    describe(".referenceId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.referenceId).toBe(value);
      });
    });
    describe(".optionalAttributes", () => {
      it("resolves to particular value on initialization", () => {});
    });
    describe(".mock", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.mock).toBe(value);
      });
    });
    describe(".identityStatus", () => {
      it("resolves to particular value on initialization", () => {
        const value = "SELF_DECLARED";
        expect(model.identityStatus).toBe(value);
      });
    });
    describe(".createDate", () => {
      it("resolves to particular value on initialization", () => {
        const value = undefined;
        expect(model.createDate).toStrictEqual(value);
      });
    });
  });
});
