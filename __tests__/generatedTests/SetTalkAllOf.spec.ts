import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SetTalkAllOf", () => {
  let model: freeclimb.SetTalkAllOf = new freeclimb.SetTalkAllOf({
    talk: true,
  });
  describe("SetTalkAllOf class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.SetTalkAllOf);
    });
  });
  describe(".talk", () => {
    it("resolves to particular value on initialization", () => {
      const value = true;
      expect(model.talk).toBe(value);
    });
  });
});
