import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("MessageRequest", () => {
  let model: freeclimb.MessageRequest = new freeclimb.MessageRequest({
    uri: "test_uri",
    dateCreated: "test_dateCreated",
    dateUpdated: "test_dateUpdated",
    revision: 1,
    from: "test_from",
    to: "test_to",
    text: "test_text",
    notificationUrl: "https://123.abc",
    mediaUrls: [],
  });
  describe("MessageRequest class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.MessageRequest);
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
  describe(".from", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_from";
      expect(model.from).toBe(value);
    });
  });
  describe(".to", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_to";
      expect(model.to).toBe(value);
    });
  });
  describe(".text", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_text";
      expect(model.text).toBe(value);
    });
  });
  describe(".notificationUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.notificationUrl).toBe(value);
    });
  });
  describe(".mediaUrls", () => {
    it("resolves to particular value on initialization", () => {
      const value: any[] = [];
      expect(model.mediaUrls).toStrictEqual(value);
    });
  });
});
