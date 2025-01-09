import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("ConferenceResult", () => {
  let model: freeclimb.ConferenceResult = new freeclimb.ConferenceResult({
    uri: "test_uri",
    dateCreated: "test_dateCreated",
    dateUpdated: "test_dateUpdated",
    revision: 1,
    conferenceId: "test_conferenceId",
    accountId: "test_accountId",
    alias: "test_alias",

    playBeep: freeclimb.PlayBeep.ALWAYS,
    record: true,

    status: freeclimb.ConferenceStatus.EMPTY,
    waitUrl: "https://123.abc",
    actionUrl: "https://123.abc",
    statusCallbackUrl: "https://123.abc",
    subresourceUris: {},
  });
  describe("ConferenceResult class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.ConferenceResult);
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
  describe(".conferenceId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_conferenceId";
      expect(model.conferenceId).toBe(value);
    });
  });
  describe(".accountId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_accountId";
      expect(model.accountId).toBe(value);
    });
  });
  describe(".alias", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_alias";
      expect(model.alias).toBe(value);
    });
  });
  describe(".playBeep", () => {
    it("resolves to particular value on initialization", () => {
      const value = "always";
      expect(model.playBeep).toBe(value);
    });
  });
  describe(".record", () => {
    it("resolves to particular value on initialization", () => {
      const value = true;
      expect(model.record).toBe(value);
    });
  });
  describe(".status", () => {
    it("resolves to particular value on initialization", () => {
      const value = "empty";
      expect(model.status).toBe(value);
    });
  });
  describe(".waitUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.waitUrl).toBe(value);
    });
  });
  describe(".actionUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.actionUrl).toBe(value);
    });
  });
  describe(".statusCallbackUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.statusCallbackUrl).toBe(value);
    });
  });
  describe(".subresourceUris", () => {
    it("resolves to particular value on initialization", () => {
      const value = {};
      expect(model.subresourceUris).toStrictEqual(value);
    });
  });
});
