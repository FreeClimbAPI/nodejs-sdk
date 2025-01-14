import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("AccountRequest", () => {
  let model: freeclimb.AccountRequest = new freeclimb.AccountRequest({
    alias: "test_alias",
    label: "test_label",
  });
  describe("AccountRequest class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.AccountRequest);
    });
  });
  describe(".alias", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_alias";
      expect(model.alias).toBe(value);
    });
  });
  describe(".label", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_label";
      expect(model.label).toBe(value);
    });
  });
});
