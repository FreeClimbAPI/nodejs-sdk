import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("CreateBlobRequest", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.CreateBlobRequest;
    let model: freeclimb.CreateBlobRequest = new freeclimb.CreateBlobRequest({
      ["alias"]: "test_alias",
      ["expiresAt"]: "test_expiresAt",
      ["blob"]: {},
    });
    describe("CreateBlobRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.CreateBlobRequest);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_alias";
        expect(model["alias"]).toBe(value);
      });
    });
    describe(".expiresAt", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_expiresAt";
        expect(model["expiresAt"]).toBe(value);
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
    const Klass = freeclimb.CreateBlobRequest;
    let model: freeclimb.CreateBlobRequest = new freeclimb.CreateBlobRequest({
      ["alias"]: "",
      ["expiresAt"]: "",
      ["blob"]: {},
    });
    describe("CreateBlobRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.CreateBlobRequest);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["alias"]).toBe(value);
      });
    });
    describe(".expiresAt", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["expiresAt"]).toBe(value);
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
    const Klass = freeclimb.CreateBlobRequest;
    let constructorArguments = {
      ["blob"]: {},
    };
    let model: freeclimb.CreateBlobRequest = new freeclimb.CreateBlobRequest(
      constructorArguments,
    );

    describe("#alias", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "alias",
        )?.defaultValue;
        expect(model["alias"]).toBe(value);
      });
    });
    describe("#expiresAt", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "expiresAt",
        )?.defaultValue;
        expect(model["expiresAt"]).toBe(value);
      });
    });
    describe("#blob", () => {
      it("resolves to initialization value", () => {
        expect(model["blob"]).toBe(constructorArguments["blob"]);
      });
    });
  });
});
