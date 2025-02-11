import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("QueueResult", () => {
  let model: freeclimb.QueueResult = new freeclimb.QueueResult({
    uri: "test_uri",
    dateCreated: "test_dateCreated",
    dateUpdated: "test_dateUpdated",
    revision: 1,
    accountId: "test_accountId",
    queueId: "test_queueId",
    alias: "test_alias",
    maxSize: 1,
    currentSize: 1,
    averageQueueRemovalTime: 1,
    subresourceUris: {},
  });
  describe("QueueResult class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.QueueResult);
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
  describe(".queueId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_queueId";
      expect(model.queueId).toBe(value);
    });
  });
  describe(".alias", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_alias";
      expect(model.alias).toBe(value);
    });
  });
  describe(".maxSize", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.maxSize).toBe(value);
    });
  });
  describe(".currentSize", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.currentSize).toBe(value);
    });
  });
  describe(".averageQueueRemovalTime", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.averageQueueRemovalTime).toBe(value);
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
