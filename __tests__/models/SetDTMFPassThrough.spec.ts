import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SetDTMFPassThrough", () => {
  describe("Test with truthy values", () => {
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
  describe("Test with falsy values", () => {
    let model: freeclimb.SetDTMFPassThrough = new freeclimb.SetDTMFPassThrough({
      dtmfPassThrough: false,
    });
    describe("SetDTMFPassThrough class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.SetDTMFPassThrough);
      });
    });

    describe(".dtmfPassThrough", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.dtmfPassThrough).toBe(value);
      });
    });
  });
});
