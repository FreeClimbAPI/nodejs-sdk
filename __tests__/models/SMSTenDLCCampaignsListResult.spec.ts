import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SMSTenDLCCampaignsListResult", () => {
  let model: freeclimb.SMSTenDLCCampaignsListResult =
    new freeclimb.SMSTenDLCCampaignsListResult({
      total: 1,
      start: 1,
      end: 1,
      page: 1,
      numPages: 1,
      pageSize: 1,
      nextPageUri: "test_nextPageUri",
      campaigns: [],
    });
  describe("SMSTenDLCCampaignsListResult class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.SMSTenDLCCampaignsListResult);
    });
  });
  describe(".total", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.total).toBe(value);
    });
  });
  describe(".start", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.start).toBe(value);
    });
  });
  describe(".end", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.end).toBe(value);
    });
  });
  describe(".page", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.page).toBe(value);
    });
  });
  describe(".numPages", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.numPages).toBe(value);
    });
  });
  describe(".pageSize", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.pageSize).toBe(value);
    });
  });
  describe(".nextPageUri", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_nextPageUri";
      expect(model.nextPageUri).toBe(value);
    });
  });
  describe(".campaigns", () => {
    it("resolves to particular value on initialization", () => {
      const value: freeclimb.SMSTenDLCCampaign[] = [];
      expect(model.campaigns).toStrictEqual(value);
    });
  });
});
