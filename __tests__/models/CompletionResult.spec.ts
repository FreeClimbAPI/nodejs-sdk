import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("CompletionResult", () => {
  const Klass = freeclimb.CompletionResult;
  describe("Test with truthy values", () => {
    let model: freeclimb.CompletionResult = new freeclimb.CompletionResult({
      response: "test_response",

      status: freeclimb.CompletionResultStatus.SUCCESS,
    });
    describe("CompletionResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.CompletionResult);
      });
    });
    describe(".response", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_response";
        expect(model.response).toBe(value);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "success";
        expect(model.status).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.CompletionResult = new freeclimb.CompletionResult({
      response: "",

      status: freeclimb.CompletionResultStatus.SUCCESS,
    });
    describe("CompletionResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.CompletionResult);
      });
    });
    describe(".response", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.response).toBe(value);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "success";
        expect(model.status).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {
      response: "test_response",

      status: freeclimb.CompletionResultStatus.SUCCESS,
    };
    let model: freeclimb.CompletionResult = new freeclimb.CompletionResult(
      constructorArguments,
    );

    describe("#response", () => {
      it("resolves to initialization value", () => {
        expect(model.response).toBe(constructorArguments["response"]);
      });
    });
    describe("#status", () => {
      it("resolves to initialization value", () => {
        expect(model.status).toBe(constructorArguments["status"]);
      });
    });
  });
});
