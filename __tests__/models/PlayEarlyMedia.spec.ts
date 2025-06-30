import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("PlayEarlyMedia", () => {
  describe("Test with truthy values", () => {
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
  describe("Test with falsy values", () => {
    let model: freeclimb.PlayEarlyMedia = new freeclimb.PlayEarlyMedia({
      file: "",
    });
    describe("PlayEarlyMedia class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.PlayEarlyMedia);
      });
    });

    describe(".file", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.file).toBe(value);
      });
    });
  });
});
