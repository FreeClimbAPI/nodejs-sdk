import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("AccountRequest", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.AccountRequest;
    let model: freeclimb.AccountRequest = new freeclimb.AccountRequest({
      ["alias"]: "test_alias",
      ["label"]: "test_label",
    });
    describe("AccountRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.AccountRequest);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_alias";
        expect(model["alias"]).toBe(value);
      });
    });
    describe(".label", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_label";
        expect(model["label"]).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.AccountRequest;
    let model: freeclimb.AccountRequest = new freeclimb.AccountRequest({
      ["alias"]: "",
      ["label"]: "",
    });
    describe("AccountRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.AccountRequest);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["alias"]).toBe(value);
      });
    });
    describe(".label", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["label"]).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.AccountRequest;
    let constructorArguments = {};
    let model: freeclimb.AccountRequest = new freeclimb.AccountRequest(
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
    describe("#label", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "label",
        )?.defaultValue;
        expect(model["label"]).toBe(value);
      });
    });
  });
});
