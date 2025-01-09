import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Redirect", () => {
  let model: freeclimb.Redirect = new freeclimb.Redirect({
    actionUrl: "https://123.abc",
  });
  describe("Redirect class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.Redirect);
    });
  });

  describe(".actionUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.actionUrl).toBe(value);
    });
  });
});
