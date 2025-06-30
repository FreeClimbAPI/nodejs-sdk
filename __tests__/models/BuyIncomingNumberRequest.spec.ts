import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("BuyIncomingNumberRequest", () => {
  describe("Test with truthy values", () => {
    let model: freeclimb.BuyIncomingNumberRequest =
      new freeclimb.BuyIncomingNumberRequest({
        phoneNumber: "test_phoneNumber",
        alias: "test_alias",
        applicationId: "test_applicationId",
      });
    describe("BuyIncomingNumberRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.BuyIncomingNumberRequest);
      });
    });
    describe(".phoneNumber", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_phoneNumber";
        expect(model.phoneNumber).toBe(value);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_alias";
        expect(model.alias).toBe(value);
      });
    });
    describe(".applicationId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_applicationId";
        expect(model.applicationId).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.BuyIncomingNumberRequest =
      new freeclimb.BuyIncomingNumberRequest({
        phoneNumber: "",
        alias: "",
        applicationId: "",
      });
    describe("BuyIncomingNumberRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.BuyIncomingNumberRequest);
      });
    });
    describe(".phoneNumber", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.phoneNumber).toBe(value);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.alias).toBe(value);
      });
    });
    describe(".applicationId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.applicationId).toBe(value);
      });
    });
  });
});
