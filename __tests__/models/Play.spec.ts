import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Play", () => {
  describe("Test with truthy values", () => {
    let model: freeclimb.Play = new freeclimb.Play({
      file: "test_file",
      loop: 1,
      privacyMode: true,
    });
    describe("Play class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Play);
      });
    });

    describe(".file", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_file";
        expect(model.file).toBe(value);
      });
    });
    describe(".loop", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.loop).toBe(value);
      });
    });
    describe(".privacyMode", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.privacyMode).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.Play = new freeclimb.Play({
      file: "",
      loop: 0,
      privacyMode: false,
    });
    describe("Play class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Play);
      });
    });

    describe(".file", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.file).toBe(value);
      });
    });
    describe(".loop", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.loop).toBe(value);
      });
    });
    describe(".privacyMode", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.privacyMode).toBe(value);
      });
    });
  });
});
