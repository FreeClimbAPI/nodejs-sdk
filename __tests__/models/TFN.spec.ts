import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("TFN", () => {
  describe("Test with true values", () => {
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
});
