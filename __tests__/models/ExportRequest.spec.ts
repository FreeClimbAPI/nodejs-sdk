import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("ExportRequest", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.ExportRequest;
    let model: freeclimb.ExportRequest = new freeclimb.ExportRequest({
      resourceType: freeclimb.ExportResourceType.MESSAGES,
      format: [],

      output: new freeclimb.ExportRequestOutput({
        type: null as any,
      }),
      query: {},
    });
    describe("ExportRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.ExportRequest);
      });
    });
    describe(".resourceType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "Messages";
        expect(model.resourceType).toBe(value);
      });
    });
    describe(".format", () => {
      it("resolves to particular value on initialization", () => {
        const value: any[] = [];
        expect(model.format).toStrictEqual(value);
      });
    });
    describe(".output", () => {
      it("resolves to particular value on initialization", () => {
        const value = new freeclimb.ExportRequestOutput({
          type: null as any,
        });
        expect(model.output).toStrictEqual(value);
      });
    });
    describe(".query", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model.query).toStrictEqual(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.ExportRequest;
    let model: freeclimb.ExportRequest = new freeclimb.ExportRequest({
      resourceType: freeclimb.ExportResourceType.MESSAGES,
      format: [],

      output: new freeclimb.ExportRequestOutput({
        type: null as any,
      }),
      query: {},
    });
    describe("ExportRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.ExportRequest);
      });
    });
    describe(".resourceType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "Messages";
        expect(model.resourceType).toBe(value);
      });
    });
    describe(".format", () => {
      it("resolves to particular value on initialization", () => {
        const value: any[] = [];
        expect(model.format).toStrictEqual(value);
      });
    });
    describe(".output", () => {
      it("resolves to particular value on initialization", () => {
        const value = new freeclimb.ExportRequestOutput({
          type: null as any,
        });
        expect(model.output).toStrictEqual(value);
      });
    });
    describe(".query", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model.query).toStrictEqual(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.ExportRequest;
    let constructorArguments = {
      resourceType: freeclimb.ExportResourceType.MESSAGES,

      output: new freeclimb.ExportRequestOutput({
        type: null as any,
      }),
    };
    let model: freeclimb.ExportRequest = new freeclimb.ExportRequest(
      constructorArguments,
    );

    describe("#resourceType", () => {
      it("resolves to initialization value", () => {
        expect(model.resourceType).toBe(constructorArguments["resourceType"]);
      });
    });
    describe("#format", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "format",
        )?.defaultValue;
        expect(model.format).toBe(value);
      });
    });
    describe("#output", () => {
      it("resolves to initialization value", () => {
        expect(model.output).toBe(constructorArguments["output"]);
      });
    });
    describe("#query", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "query",
        )?.defaultValue;
        expect(model.query).toBe(value);
      });
    });
  });
});
