import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("PerclScript", () => {
  let model: freeclimb.PerclScript = new freeclimb.PerclScript({
    commands: [],
  });
  describe("PerclScript class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.PerclScript);
    });
  });
  describe(".commands", () => {
    it("resolves to particular value on initialization", () => {
      const value: freeclimb.PerclCommand[] = [];
      expect(model.commands).toStrictEqual(value);
    });
  });
});
