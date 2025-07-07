import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("PlayEarlyMedia", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.PlayEarlyMedia;
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
    const Klass = freeclimb.PlayEarlyMedia;
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
  describe("Test with only required values", () => {
    const Klass = freeclimb.PlayEarlyMedia;
    let constructorArguments = {
      file: "test_file",
    };
    let model: freeclimb.PlayEarlyMedia = new freeclimb.PlayEarlyMedia(
      constructorArguments,
    );

    describe("#file", () => {
      it("resolves to initialization value", () => {
        expect(model.file).toBe(constructorArguments["file"]);
      });
    });
  });
});
