import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("ExportResultOutput", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.ExportResultOutput;
    let model: freeclimb.ExportResultOutput = new freeclimb.ExportResultOutput({
      ["type"]: freeclimb.ExportOutputType.CSV,
    });
    describe("ExportResultOutput class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.ExportResultOutput);
      });
    });
    describe(".type", () => {
      it("resolves to particular value on initialization", () => {
        const value = "csv";
        expect(model["type"]).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.ExportResultOutput;
    let model: freeclimb.ExportResultOutput = new freeclimb.ExportResultOutput({
      ["type"]: freeclimb.ExportOutputType.CSV,
    });
    describe("ExportResultOutput class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.ExportResultOutput);
      });
    });
    describe(".type", () => {
      it("resolves to particular value on initialization", () => {
        const value = "csv";
        expect(model["type"]).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.ExportResultOutput;
    let constructorArguments = {
      ["type"]: freeclimb.ExportOutputType.CSV,
    };
    let model: freeclimb.ExportResultOutput = new freeclimb.ExportResultOutput(
      constructorArguments,
    );

    describe("#type", () => {
      it("resolves to initialization value", () => {
        expect(model["type"]).toBe(constructorArguments["type"]);
      });
    });
  });
});
