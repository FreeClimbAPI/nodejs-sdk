import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Webhook", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.Webhook;
    let model: freeclimb.Webhook = new freeclimb.Webhook({});
    describe("Webhook class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Webhook);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.Webhook;
    let model: freeclimb.Webhook = new freeclimb.Webhook({});
    describe("Webhook class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Webhook);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {};
    let model: freeclimb.Webhook = new freeclimb.Webhook(constructorArguments);

    describe("#requestType", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "requestType",
        )?.defaultValue;
        expect(model.requestType).toBe(value);
      });
    });
  });
});
