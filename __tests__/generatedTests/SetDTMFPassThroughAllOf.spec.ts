import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SetDTMFPassThroughAllOf", () => {
  let model: freeclimb.SetDTMFPassThroughAllOf =
    new freeclimb.SetDTMFPassThroughAllOf({
      dtmfPassThrough: true,
    });
  describe("SetDTMFPassThroughAllOf class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.SetDTMFPassThroughAllOf);
    });
  });
  describe(".dtmfPassThrough", () => {
    it("resolves to particular value on initialization", () => {
      const value = true;
      expect(model.dtmfPassThrough).toBe(value);
    });
  });
});
