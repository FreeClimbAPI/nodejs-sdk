import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("ApplicationResult", () => {
  let model: freeclimb.ApplicationResult = new freeclimb.ApplicationResult({
    uri: "test_uri",
    dateCreated: "test_dateCreated",
    dateUpdated: "test_dateUpdated",
    revision: 1,
    accountId: "test_accountId",
    applicationId: "test_applicationId",
    alias: "test_alias",
    voiceUrl: "https://123.abc",
    voiceFallbackUrl: "https://123.abc",
    callConnectUrl: "https://123.abc",
    statusCallbackUrl: "https://123.abc",
    smsUrl: "https://123.abc",
    smsFallbackUrl: "https://123.abc",
  });
  describe("ApplicationResult class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.ApplicationResult);
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
  describe(".voiceUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.voiceUrl).toBe(value);
    });
  });
  describe(".voiceFallbackUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.voiceFallbackUrl).toBe(value);
    });
  });
  describe(".callConnectUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.callConnectUrl).toBe(value);
    });
  });
  describe(".statusCallbackUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.statusCallbackUrl).toBe(value);
    });
  });
  describe(".smsUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.smsUrl).toBe(value);
    });
  });
  describe(".smsFallbackUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.smsFallbackUrl).toBe(value);
    });
  });
});
