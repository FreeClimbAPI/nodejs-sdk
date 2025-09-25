import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("ExportRequestOutput", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.ExportRequestOutput;
    let model: freeclimb.ExportRequestOutput =
      new freeclimb.ExportRequestOutput({
        type: freeclimb.ExportOutputType.CSV,
      });
    describe("ExportRequestOutput class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.ExportRequestOutput);
      });
    });
    describe(".type", () => {
      it("resolves to particular value on initialization", () => {
        const value = "csv";
        expect(model.type).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.ExportRequestOutput;
    let model: freeclimb.ExportRequestOutput =
      new freeclimb.ExportRequestOutput({
        type: freeclimb.ExportOutputType.CSV,
      });
    describe("ExportRequestOutput class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.ExportRequestOutput);
      });
    });
    describe(".type", () => {
      it("resolves to particular value on initialization", () => {
        const value = "csv";
        expect(model.type).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.ExportRequestOutput;
    let constructorArguments = {
      type: freeclimb.ExportOutputType.CSV,
    };
    let model: freeclimb.ExportRequestOutput =
      new freeclimb.ExportRequestOutput(constructorArguments);

    describe("#type", () => {
      it("resolves to initialization value", () => {
        expect(model.type).toBe(constructorArguments["type"]);
      });
    });
  });
});
