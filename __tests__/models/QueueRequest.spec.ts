import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("QueueRequest", () => {
  describe("Test with true values", () => {
    let model: freeclimb.QueueRequest = new freeclimb.QueueRequest({
      alias: "test_alias",
      maxSize: 1,
    });
    describe("QueueRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.QueueRequest);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_alias";
        expect(model.alias).toBe(value);
      });
    });
    describe(".maxSize", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.maxSize).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.QueueRequest = new freeclimb.QueueRequest({
      alias: "",
      maxSize: 0,
    });
    describe("QueueRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.QueueRequest);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.alias).toBe(value);
      });
    });
    describe(".maxSize", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.maxSize).toBe(value);
      });
    });
  });
});
