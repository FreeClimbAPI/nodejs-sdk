import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("ApplicationListAllOf", () => {
  let model: freeclimb.ApplicationListAllOf =
    new freeclimb.ApplicationListAllOf({
      applications: [],
    });
  describe("ApplicationListAllOf class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.ApplicationListAllOf);
    });
  });
  describe(".applications", () => {
    it("resolves to particular value on initialization", () => {
      const value: freeclimb.ApplicationResult[] = [];
      expect(model.applications).toStrictEqual(value);
    });
  });
});
