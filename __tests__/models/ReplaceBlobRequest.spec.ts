import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("ReplaceBlobRequest", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.ReplaceBlobRequest;
    let model: freeclimb.ReplaceBlobRequest = new freeclimb.ReplaceBlobRequest({
      ["blob"]: {},
    });
    describe("ReplaceBlobRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.ReplaceBlobRequest);
      });
    });
    describe(".blob", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model["blob"]).toStrictEqual(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.ReplaceBlobRequest;
    let model: freeclimb.ReplaceBlobRequest = new freeclimb.ReplaceBlobRequest({
      ["blob"]: {},
    });
    describe("ReplaceBlobRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.ReplaceBlobRequest);
      });
    });
    describe(".blob", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model["blob"]).toStrictEqual(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.ReplaceBlobRequest;
    let constructorArguments = {
      ["blob"]: {},
    };
    let model: freeclimb.ReplaceBlobRequest = new freeclimb.ReplaceBlobRequest(
      constructorArguments,
    );

    describe("#blob", () => {
      it("resolves to initialization value", () => {
        expect(model["blob"]).toBe(constructorArguments["blob"]);
      });
    });
  });
});
