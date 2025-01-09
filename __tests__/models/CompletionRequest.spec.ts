import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("CompletionRequest", () => {
  let model: freeclimb.CompletionRequest = new freeclimb.CompletionRequest({
    query: "test_query",
  });
  describe("CompletionRequest class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.CompletionRequest);
    });
  });
  describe(".query", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_query";
      expect(model.query).toBe(value);
    });
  });
});
