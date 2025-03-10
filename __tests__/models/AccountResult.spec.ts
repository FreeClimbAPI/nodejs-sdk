import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("AccountResult", () => {
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
