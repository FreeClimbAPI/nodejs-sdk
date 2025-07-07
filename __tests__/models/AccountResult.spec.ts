import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("AccountResult", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.AccountResult;
    let model: freeclimb.AccountResult = new freeclimb.AccountResult({
      uri: "test_uri",
      dateCreated: "test_dateCreated",
      dateUpdated: "test_dateUpdated",
      revision: 1,
      accountId: "test_accountId",
      apiKey: "test_apiKey",
      alias: "test_alias",
      label: "test_label",

      type: freeclimb.AccountType.TRIAL,

      status: freeclimb.AccountStatus.CLOSED,
      subresourceUris: {},
    });
    describe("AccountResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.AccountResult);
      });
    });
    describe(".uri", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_uri";
        expect(model.uri).toBe(value);
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
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_accountId";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".apiKey", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_apiKey";
        expect(model.apiKey).toBe(value);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_alias";
        expect(model.alias).toBe(value);
      });
    });
    describe(".label", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_label";
        expect(model.label).toBe(value);
      });
    });
    describe(".type", () => {
      it("resolves to particular value on initialization", () => {
        const value = "trial";
        expect(model.type).toBe(value);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "closed";
        expect(model.status).toBe(value);
      });
    });
    describe(".subresourceUris", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        const receivedValue: any = model.subresourceUris;
        expect(receivedValue).toStrictEqual(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.AccountResult;
    let model: freeclimb.AccountResult = new freeclimb.AccountResult({
      uri: "",
      dateCreated: "",
      dateUpdated: "",
      revision: 0,
      accountId: "",
      apiKey: "",
      alias: "",
      label: "",

      type: freeclimb.AccountType.TRIAL,

      status: freeclimb.AccountStatus.CLOSED,
      subresourceUris: {},
    });
    describe("AccountResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.AccountResult);
      });
    });
    describe(".uri", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.uri).toBe(value);
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
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".apiKey", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.apiKey).toBe(value);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.alias).toBe(value);
      });
    });
    describe(".label", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.label).toBe(value);
      });
    });
    describe(".type", () => {
      it("resolves to particular value on initialization", () => {
        const value = "trial";
        expect(model.type).toBe(value);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "closed";
        expect(model.status).toBe(value);
      });
    });
    describe(".subresourceUris", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        const receivedValue: any = model.subresourceUris;
        expect(receivedValue).toStrictEqual(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.AccountResult;
    let constructorArguments = {
      uri: "test_uri",
      dateCreated: "test_dateCreated",
      dateUpdated: "test_dateUpdated",
      revision: 1,
    };
    let model: freeclimb.AccountResult = new freeclimb.AccountResult(
      constructorArguments,
    );

    describe("#accountId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "accountId",
        )?.defaultValue;
        expect(model.accountId).toBe(value);
      });
    });
    describe("#apiKey", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "apiKey",
        )?.defaultValue;
        expect(model.apiKey).toBe(value);
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
    describe("#label", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "label",
        )?.defaultValue;
        expect(model.label).toBe(value);
      });
    });
    describe("#type", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "type",
        )?.defaultValue;
        expect(model.type).toBe(value);
      });
    });
    describe("#status", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "status",
        )?.defaultValue;
        expect(model.status).toBe(value);
      });
    });
    describe("#subresourceUris", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "subresourceUris",
        )?.defaultValue;
        expect(model.subresourceUris).toBe(value);
      });
    });
  });
});
