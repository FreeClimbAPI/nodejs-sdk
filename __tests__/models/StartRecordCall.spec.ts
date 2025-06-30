import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("StartRecordCall", () => {
  describe("Test with truthy values", () => {
    let model: freeclimb.StartRecordCall = new freeclimb.StartRecordCall({});
    describe("StartRecordCall class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.StartRecordCall);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.StartRecordCall = new freeclimb.StartRecordCall({});
    describe("StartRecordCall class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.StartRecordCall);
      });
    });
  });
});
