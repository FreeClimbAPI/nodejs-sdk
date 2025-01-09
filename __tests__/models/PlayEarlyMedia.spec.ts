import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("PlayEarlyMedia", () => {
  let model: freeclimb.PlayEarlyMedia = new freeclimb.PlayEarlyMedia({
    file: "test_file",
  });
  describe("PlayEarlyMedia class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.PlayEarlyMedia);
    });
  });

  describe(".file", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_file";
      expect(model.file).toBe(value);
    });
  });
});
