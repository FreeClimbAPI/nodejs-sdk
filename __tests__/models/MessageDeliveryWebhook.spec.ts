import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("MessageDeliveryWebhook", () => {
  let model: freeclimb.MessageDeliveryWebhook =
    new freeclimb.MessageDeliveryWebhook({
      requestType: "test_requestType",
      accountId: "test_accountId",
      from: "test_from",
      to: "test_to",
      text: "test_text",
      direction: "test_direction",
      applicationId: "test_applicationId",
      status: "test_status",
      phoneNumberId: "test_phoneNumberId",
      uri: "test_uri",
    });
  describe("MessageDeliveryWebhook class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.MessageDeliveryWebhook);
    });
  });

  describe(".requestType", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_requestType";
      expect(model.requestType).toBe(value);
    });
  });
  describe(".accountId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_accountId";
      expect(model.accountId).toBe(value);
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
  describe(".direction", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_direction";
      expect(model.direction).toBe(value);
    });
  });
  describe(".applicationId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_applicationId";
      expect(model.applicationId).toBe(value);
    });
  });
  describe(".status", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_status";
      expect(model.status).toBe(value);
    });
  });
  describe(".phoneNumberId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_phoneNumberId";
      expect(model.phoneNumberId).toBe(value);
    });
  });
  describe(".uri", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_uri";
      expect(model.uri).toBe(value);
    });
  });
  describe(".deserialize", () => {
    it("returns an instance of MessageDeliveryWebhook", () => {
      expect(
        freeclimb.MessageDeliveryWebhook.deserialize(
          '{ "requestType": "messageDelivery"}',
        ),
      ).toBeInstanceOf(freeclimb.MessageDeliveryWebhook);
    });
  });
});
