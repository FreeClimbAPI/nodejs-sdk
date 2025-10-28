import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("AvailableNumber", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.AvailableNumber;
    let model: freeclimb.AvailableNumber = new freeclimb.AvailableNumber({
      ["capabilities"]: new freeclimb.Capabilities({
        ["voice"]: null as any,
        ["sms"]: null as any,
        ["tollFree"]: null as any,
        ["tenDLC"]: null as any,
        ["shortCode"]: null as any,
      }),
      ["campaignId"]: "test_campaignId",
      ["phoneNumber"]: "test_phoneNumber",
      ["region"]: "test_region",
      ["country"]: "test_country",
    });
    describe("AvailableNumber class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.AvailableNumber);
      });
    });
    describe(".capabilities", () => {
      it("resolves to particular value on initialization", () => {
        const value = new freeclimb.Capabilities({
          voice: null as any,
          sms: null as any,
          tollFree: null as any,
          tenDLC: null as any,
          shortCode: null as any,
        });
        expect(model["capabilities"]).toStrictEqual(value);
      });
    });
    describe(".campaignId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_campaignId";
        expect(model["campaignId"]).toBe(value);
      });
    });
    describe(".phoneNumber", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_phoneNumber";
        expect(model["phoneNumber"]).toBe(value);
      });
    });
    describe(".region", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_region";
        expect(model["region"]).toBe(value);
      });
    });
    describe(".country", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_country";
        expect(model["country"]).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.AvailableNumber;
    let model: freeclimb.AvailableNumber = new freeclimb.AvailableNumber({
      ["capabilities"]: new freeclimb.Capabilities({
        ["voice"]: null as any,
        ["sms"]: null as any,
        ["tollFree"]: null as any,
        ["tenDLC"]: null as any,
        ["shortCode"]: null as any,
      }),
      ["campaignId"]: "",
      ["phoneNumber"]: "",
      ["region"]: "",
      ["country"]: "",
    });
    describe("AvailableNumber class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.AvailableNumber);
      });
    });
    describe(".capabilities", () => {
      it("resolves to particular value on initialization", () => {
        const value = new freeclimb.Capabilities({
          ["voice"]: null as any,
          ["sms"]: null as any,
          ["tollFree"]: null as any,
          ["tenDLC"]: null as any,
          ["shortCode"]: null as any,
        });
        expect(model["capabilities"]).toStrictEqual(value);
      });
    });
    describe(".campaignId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["campaignId"]).toBe(value);
      });
    });
    describe(".phoneNumber", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["phoneNumber"]).toBe(value);
      });
    });
    describe(".region", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["region"]).toBe(value);
      });
    });
    describe(".country", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["country"]).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.AvailableNumber;
    let constructorArguments = {};
    let model: freeclimb.AvailableNumber = new freeclimb.AvailableNumber(
      constructorArguments,
    );

    describe("#capabilities", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "capabilities",
        )?.defaultValue;
        expect(model["capabilities"]).toBe(value);
      });
    });
    describe("#campaignId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "campaignId",
        )?.defaultValue;
        expect(model["campaignId"]).toBe(value);
      });
    });
    describe("#phoneNumber", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "phoneNumber",
        )?.defaultValue;
        expect(model["phoneNumber"]).toBe(value);
      });
    });
    describe("#region", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "region",
        )?.defaultValue;
        expect(model["region"]).toBe(value);
      });
    });
    describe("#country", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "country",
        )?.defaultValue;
        expect(model["country"]).toBe(value);
      });
    });
  });
});
