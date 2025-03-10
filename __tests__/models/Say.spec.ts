import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Say", () => {
  let model: freeclimb.Say = new freeclimb.Say({
    text: "test_text",
    language: "test_language",
    loop: 1,
    privacyMode: true,
  });
  describe("Say class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.Say);
    });
  });

  describe(".text", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_text";
      expect(model.text).toBe(value);
    });
  });
  describe(".language", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_language";
      expect(model.language).toBe(value);
    });
  });
  describe(".loop", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.loop).toBe(value);
    });
  });
  describe(".privacyMode", () => {
    it("resolves to particular value on initialization", () => {
      const value = true;
      expect(model.privacyMode).toBe(value);
    });
  });
});
