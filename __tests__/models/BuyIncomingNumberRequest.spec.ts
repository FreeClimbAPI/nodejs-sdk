import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("BuyIncomingNumberRequest", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.BuyIncomingNumberRequest;
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
    const Klass = freeclimb.BuyIncomingNumberRequest;
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
  describe("Test with only required values", () => {
    let constructorArguments = {
      phoneNumber: "test_phoneNumber",
    };
    let model: freeclimb.BuyIncomingNumberRequest =
      new freeclimb.BuyIncomingNumberRequest(constructorArguments);

    describe("#phoneNumber", () => {
      it("resolves to initialization value", () => {
        expect(model.phoneNumber).toBe(constructorArguments["phoneNumber"]);
      });
    });
    describe("#alias", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "alias",
        )?.defaultValue;
        expect(model.alias).toBe(value);
      });
    });
    describe("#applicationId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "applicationId",
        )?.defaultValue;
        expect(model.applicationId).toBe(value);
      });
    });
  });
});
