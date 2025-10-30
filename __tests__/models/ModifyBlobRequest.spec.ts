import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("ModifyBlobRequest", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.ModifyBlobRequest;
    let model: freeclimb.ModifyBlobRequest = new freeclimb.ModifyBlobRequest({
      ["blob"]: {},
      ["alias"]: "test_alias",
    });
    describe("ModifyBlobRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.ModifyBlobRequest);
      });
    });
    describe(".blob", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model["blob"]).toStrictEqual(value);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_alias";
        expect(model["alias"]).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.ModifyBlobRequest;
    let model: freeclimb.ModifyBlobRequest = new freeclimb.ModifyBlobRequest({
      ["blob"]: {},
      ["alias"]: "",
    });
    describe("ModifyBlobRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.ModifyBlobRequest);
      });
    });
    describe(".blob", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model["blob"]).toStrictEqual(value);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["alias"]).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.ModifyBlobRequest;
    let constructorArguments = {
      ["blob"]: {},
    };
    let model: freeclimb.ModifyBlobRequest = new freeclimb.ModifyBlobRequest(
      constructorArguments,
    );

    describe("#blob", () => {
      it("resolves to initialization value", () => {
        expect(model["blob"]).toBe(constructorArguments["blob"]);
      });
    });
    describe("#alias", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "alias",
        )?.defaultValue;
        expect(model["alias"]).toBe(value);
      });
    });
  });
});
