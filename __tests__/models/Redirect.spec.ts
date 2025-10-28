import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Redirect", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.Redirect;
    let model: freeclimb.Redirect = new freeclimb.Redirect({
      ["actionUrl"]: "https://123.abc",
    });
    describe("Redirect class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Redirect);
      });
    });

    describe(".actionUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model["actionUrl"]).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.Redirect;
    let model: freeclimb.Redirect = new freeclimb.Redirect({
      ["actionUrl"]: "",
    });
    describe("Redirect class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Redirect);
      });
    });

    describe(".actionUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["actionUrl"]).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.Redirect;
    let constructorArguments = {
      ["actionUrl"]: "https://123.abc",
    };
    let model: freeclimb.Redirect = new freeclimb.Redirect(
      constructorArguments,
    );

    describe("#actionUrl", () => {
      it("resolves to initialization value", () => {
        expect(model["actionUrl"]).toBe(constructorArguments["actionUrl"]);
      });
    });
  });
});
