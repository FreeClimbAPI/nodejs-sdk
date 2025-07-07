import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("TFNCampaign", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.TFNCampaign;
    let model: freeclimb.TFNCampaign = new freeclimb.TFNCampaign({
      accountId: "test_accountId",
      campaignId: "test_campaignId",

      useCase: "test_useCase",

      registrationStatus:
        freeclimb.SMSTollFreeCampaignRegistrationStatus.UNREGISTERED,
      dateCreated: "test_dateCreated",
      dateUpdated: "test_dateUpdated",
      dateCreatedISO: "test_dateCreatedISO",
      dateUpdatedISO: "test_dateUpdatedISO",
      revision: 1,
    });
    describe("TFNCampaign class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.TFNCampaign);
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
    describe(".dateCreatedISO", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_dateCreatedISO";
        expect(model.dateCreatedISO).toBe(value);
      });
    });
    describe(".dateUpdatedISO", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_dateUpdatedISO";
        expect(model.dateUpdatedISO).toBe(value);
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
    const Klass = freeclimb.TFNCampaign;
    let model: freeclimb.TFNCampaign = new freeclimb.TFNCampaign({
      accountId: "",
      campaignId: "",

      useCase: "",

      registrationStatus:
        freeclimb.SMSTollFreeCampaignRegistrationStatus.UNREGISTERED,
      dateCreated: "",
      dateUpdated: "",
      dateCreatedISO: "",
      dateUpdatedISO: "",
      revision: 0,
    });
    describe("TFNCampaign class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.TFNCampaign);
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
    describe(".dateCreatedISO", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.dateCreatedISO).toBe(value);
      });
    });
    describe(".dateUpdatedISO", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.dateUpdatedISO).toBe(value);
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
    const Klass = freeclimb.TFNCampaign;
    let constructorArguments = {
      accountId: "test_accountId",
      campaignId: "test_campaignId",

      useCase: "test_useCase",

      registrationStatus:
        freeclimb.SMSTollFreeCampaignRegistrationStatus.UNREGISTERED,
      dateCreated: "test_dateCreated",
      dateUpdated: "test_dateUpdated",
      dateCreatedISO: "test_dateCreatedISO",
      dateUpdatedISO: "test_dateUpdatedISO",
      revision: 1,
    };
    let model: freeclimb.TFNCampaign = new freeclimb.TFNCampaign(
      constructorArguments,
    );

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
    describe("#dateCreatedISO", () => {
      it("resolves to initialization value", () => {
        expect(model.dateCreatedISO).toBe(
          constructorArguments["dateCreatedISO"],
        );
      });
    });
    describe("#dateUpdatedISO", () => {
      it("resolves to initialization value", () => {
        expect(model.dateUpdatedISO).toBe(
          constructorArguments["dateUpdatedISO"],
        );
      });
    });
    describe("#revision", () => {
      it("resolves to initialization value", () => {
        expect(model.revision).toBe(constructorArguments["revision"]);
      });
    });
  });
});
