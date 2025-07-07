import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("StartRecordCall", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.StartRecordCall;
    let model: freeclimb.StartRecordCall = new freeclimb.StartRecordCall({});
    describe("StartRecordCall class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.StartRecordCall);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.StartRecordCall;
    let model: freeclimb.StartRecordCall = new freeclimb.StartRecordCall({});
    describe("StartRecordCall class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.StartRecordCall);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.StartRecordCall;
    let constructorArguments = {};
    let model: freeclimb.StartRecordCall = new freeclimb.StartRecordCall(
      constructorArguments,
    );
  });
});
