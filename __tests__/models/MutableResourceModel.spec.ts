import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("MutableResourceModel", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.MutableResourceModel;
    let model: freeclimb.MutableResourceModel =
      new freeclimb.MutableResourceModel({
        uri: "test_uri",
        dateCreated: "test_dateCreated",
        dateUpdated: "test_dateUpdated",
        revision: 1,
      });
    describe("MutableResourceModel class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.MutableResourceModel);
      });
    });
    describe(".uri", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_uri";
        expect(model.uri).toBe(value);
      });
    });
    describe(".dateCreated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_dateCreated";
        expect(model.dateCreated).toBe(value);
      });
    });
    describe(".dateUpdated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_dateUpdated";
        expect(model.dateUpdated).toBe(value);
      });
    });
    describe(".revision", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.revision).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.MutableResourceModel;
    let model: freeclimb.MutableResourceModel =
      new freeclimb.MutableResourceModel({
        uri: "",
        dateCreated: "",
        dateUpdated: "",
        revision: 0,
      });
    describe("MutableResourceModel class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.MutableResourceModel);
      });
    });
    describe(".uri", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.uri).toBe(value);
      });
    });
    describe(".dateCreated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.dateCreated).toBe(value);
      });
    });
    describe(".dateUpdated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.dateUpdated).toBe(value);
      });
    });
    describe(".revision", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.revision).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.MutableResourceModel;
    let constructorArguments = {};
    let model: freeclimb.MutableResourceModel =
      new freeclimb.MutableResourceModel(constructorArguments);

    describe("#uri", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "uri",
        )?.defaultValue;
        expect(model.uri).toBe(value);
      });
    });
    describe("#dateCreated", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "dateCreated",
        )?.defaultValue;
        expect(model.dateCreated).toBe(value);
      });
    });
    describe("#dateUpdated", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "dateUpdated",
        )?.defaultValue;
        expect(model.dateUpdated).toBe(value);
      });
    });
    describe("#revision", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "revision",
        )?.defaultValue;
        expect(model.revision).toBe(value);
      });
    });
  });
});
