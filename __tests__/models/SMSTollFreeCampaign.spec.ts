import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SMSTollFreeCampaign", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.SMSTollFreeCampaign;
    let model: freeclimb.SMSTollFreeCampaign =
      new freeclimb.SMSTollFreeCampaign({
        accountId: "test_accountId",
        campaignId: "test_campaignId",
        useCase: "test_useCase",

        registrationStatus:
          freeclimb.SMSTollFreeCampaignRegistrationStatus.UNREGISTERED,
        dateCreated: "test_dateCreated",
        dateUpdated: "test_dateUpdated",
        revision: 1,
      });
    describe("SMSTollFreeCampaign class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.SMSTollFreeCampaign);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_accountId";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".campaignId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_campaignId";
        expect(model.campaignId).toBe(value);
      });
    });
    describe(".useCase", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_useCase";
        expect(model.useCase).toBe(value);
      });
    });
    describe(".registrationStatus", () => {
      it("resolves to particular value on initialization", () => {
        const value = "UNREGISTERED";
        expect(model.registrationStatus).toBe(value);
      });
    });
    describe(".dateCreated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_dateCreated";
        expect(model.dateCreated).toBe(value);
      });
    });
    describe(".dateUpdated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_dateUpdated";
        expect(model.dateUpdated).toBe(value);
      });
    });
    describe(".revision", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.revision).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.SMSTollFreeCampaign;
    let model: freeclimb.SMSTollFreeCampaign =
      new freeclimb.SMSTollFreeCampaign({
        accountId: "",
        campaignId: "",
        useCase: "",

        registrationStatus:
          freeclimb.SMSTollFreeCampaignRegistrationStatus.UNREGISTERED,
        dateCreated: "",
        dateUpdated: "",
        revision: 0,
      });
    describe("SMSTollFreeCampaign class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.SMSTollFreeCampaign);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".campaignId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.campaignId).toBe(value);
      });
    });
    describe(".useCase", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.useCase).toBe(value);
      });
    });
    describe(".registrationStatus", () => {
      it("resolves to particular value on initialization", () => {
        const value = "UNREGISTERED";
        expect(model.registrationStatus).toBe(value);
      });
    });
    describe(".dateCreated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.dateCreated).toBe(value);
      });
    });
    describe(".dateUpdated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.dateUpdated).toBe(value);
      });
    });
    describe(".revision", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.revision).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {
      accountId: "test_accountId",
      campaignId: "test_campaignId",
      useCase: "test_useCase",

      registrationStatus:
        freeclimb.SMSTollFreeCampaignRegistrationStatus.UNREGISTERED,
      dateCreated: "test_dateCreated",
      dateUpdated: "test_dateUpdated",
      revision: 1,
    };
    let model: freeclimb.SMSTollFreeCampaign =
      new freeclimb.SMSTollFreeCampaign(constructorArguments);

    describe("#accountId", () => {
      it("resolves to initialization value", () => {
        expect(model.accountId).toBe(constructorArguments["accountId"]);
      });
    });
    describe("#campaignId", () => {
      it("resolves to initialization value", () => {
        expect(model.campaignId).toBe(constructorArguments["campaignId"]);
      });
    });
    describe("#useCase", () => {
      it("resolves to initialization value", () => {
        expect(model.useCase).toBe(constructorArguments["useCase"]);
      });
    });
    describe("#registrationStatus", () => {
      it("resolves to initialization value", () => {
        expect(model.registrationStatus).toBe(
          constructorArguments["registrationStatus"],
        );
      });
    });
    describe("#dateCreated", () => {
      it("resolves to initialization value", () => {
        expect(model.dateCreated).toBe(constructorArguments["dateCreated"]);
      });
    });
    describe("#dateUpdated", () => {
      it("resolves to initialization value", () => {
        expect(model.dateUpdated).toBe(constructorArguments["dateUpdated"]);
      });
    });
    describe("#revision", () => {
      it("resolves to initialization value", () => {
        expect(model.revision).toBe(constructorArguments["revision"]);
      });
    });
  });
});
