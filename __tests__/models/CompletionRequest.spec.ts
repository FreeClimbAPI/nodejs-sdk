import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("CompletionRequest", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.CompletionRequest;
    let model: freeclimb.CompletionRequest = new freeclimb.CompletionRequest({
      ["query"]: "test_query",
    });
    describe("CompletionRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.CompletionRequest);
      });
    });
    describe(".query", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_query";
        expect(model["query"]).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.CompletionRequest;
    let model: freeclimb.CompletionRequest = new freeclimb.CompletionRequest({
      ["query"]: "",
    });
    describe("CompletionRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.CompletionRequest);
      });
    });
    describe(".query", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["query"]).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.CompletionRequest;
    let constructorArguments = {
      ["query"]: "test_query",
    };
    let model: freeclimb.CompletionRequest = new freeclimb.CompletionRequest(
      constructorArguments,
    );

    describe("#query", () => {
      it("resolves to initialization value", () => {
        expect(model["query"]).toBe(constructorArguments["query"]);
      });
    });
  });
});
