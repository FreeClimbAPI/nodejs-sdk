import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("TFNCampaign", () => {
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
