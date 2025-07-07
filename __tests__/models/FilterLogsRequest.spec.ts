import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("FilterLogsRequest", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.FilterLogsRequest;
    let model: freeclimb.FilterLogsRequest = new freeclimb.FilterLogsRequest({
      pql: "test_pql",
    });
    describe("FilterLogsRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.FilterLogsRequest);
      });
    });
    describe(".pql", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_pql";
        expect(model.pql).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.FilterLogsRequest;
    let model: freeclimb.FilterLogsRequest = new freeclimb.FilterLogsRequest({
      pql: "",
    });
    describe("FilterLogsRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.FilterLogsRequest);
      });
    });
    describe(".pql", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.pql).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {
      pql: "test_pql",
    };
    let model: freeclimb.FilterLogsRequest = new freeclimb.FilterLogsRequest(
      constructorArguments,
    );

    describe("#pql", () => {
      it("resolves to initialization value", () => {
        expect(model.pql).toBe(constructorArguments["pql"]);
      });
    });
  });
});
