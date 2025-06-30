import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("IncomingNumberRequest", () => {
  describe("Test with true values", () => {
    let model: freeclimb.IncomingNumberRequest =
      new freeclimb.IncomingNumberRequest({
        applicationId: "test_applicationId",
        alias: "test_alias",
        campaignId: "test_campaignId",
      });
    describe("IncomingNumberRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.IncomingNumberRequest);
      });
    });
    describe(".applicationId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_applicationId";
        expect(model.applicationId).toBe(value);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_alias";
        expect(model.alias).toBe(value);
      });
    });
    describe(".campaignId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_campaignId";
        expect(model.campaignId).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.IncomingNumberRequest =
      new freeclimb.IncomingNumberRequest({
        applicationId: "",
        alias: "",
        campaignId: "",
      });
    describe("IncomingNumberRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.IncomingNumberRequest);
      });
    });
    describe(".applicationId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.applicationId).toBe(value);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.alias).toBe(value);
      });
    });
    describe(".campaignId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.campaignId).toBe(value);
      });
    });
  });
});
