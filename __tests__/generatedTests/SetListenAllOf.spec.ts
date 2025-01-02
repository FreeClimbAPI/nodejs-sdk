import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SetListenAllOf", () => {
  let model: freeclimb.SetListenAllOf = new freeclimb.SetListenAllOf({
    listen: true,
  });
  describe("SetListenAllOf class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.SetListenAllOf);
    });
  });
  describe(".listen", () => {
    it("resolves to particular value on initialization", () => {
      const value = true;
      expect(model.listen).toBe(value);
    });
  });
});
