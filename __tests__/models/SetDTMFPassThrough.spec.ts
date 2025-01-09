import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SetDTMFPassThrough", () => {
  let model: freeclimb.SetDTMFPassThrough = new freeclimb.SetDTMFPassThrough({
    dtmfPassThrough: true,
  });
  describe("SetDTMFPassThrough class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.SetDTMFPassThrough);
    });
  });

  describe(".dtmfPassThrough", () => {
    it("resolves to particular value on initialization", () => {
      const value = true;
      expect(model.dtmfPassThrough).toBe(value);
    });
  });
});
