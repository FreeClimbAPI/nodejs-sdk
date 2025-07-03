import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("TFN", () => {
  const Klass = freeclimb.TFN;
  describe("Test with truthy values", () => {
    let model: freeclimb.TFN = new freeclimb.TFN({
      campaignId: "test_campaignId",
    });
    describe("TFN class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.TFN);
      });
    });
    describe(".campaignId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_campaignId";
        expect(model.campaignId).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.TFN = new freeclimb.TFN({
      campaignId: "",
    });
    describe("TFN class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.TFN);
      });
    });
    describe(".campaignId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.campaignId).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {
      campaignId: "test_campaignId",
    };
    let model: freeclimb.TFN = new freeclimb.TFN(constructorArguments);

    describe("#campaignId", () => {
      it("resolves to initialization value", () => {
        expect(model.campaignId).toBe(constructorArguments["campaignId"]);
      });
    });
  });
});
