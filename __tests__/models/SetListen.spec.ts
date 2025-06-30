import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SetListen", () => {
  describe("Test with truthy values", () => {
    let model: freeclimb.SetListen = new freeclimb.SetListen({
      listen: true,
    });
    describe("SetListen class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.SetListen);
      });
    });

    describe(".listen", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.listen).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.SetListen = new freeclimb.SetListen({
      listen: false,
    });
    describe("SetListen class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.SetListen);
      });
    });

    describe(".listen", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.listen).toBe(value);
      });
    });
  });
});
