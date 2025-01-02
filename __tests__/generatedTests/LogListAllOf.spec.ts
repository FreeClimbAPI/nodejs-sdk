import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("LogListAllOf", () => {
  let model: freeclimb.LogListAllOf = new freeclimb.LogListAllOf({
    logs: [],
  });
  describe("LogListAllOf class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.LogListAllOf);
    });
  });
  describe(".logs", () => {
    it("resolves to particular value on initialization", () => {
      const value: freeclimb.LogResult[] = [];
      expect(model.logs).toStrictEqual(value);
    });
  });
});
