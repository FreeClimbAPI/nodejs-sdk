import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("FilterLogsRequest", () => {
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
