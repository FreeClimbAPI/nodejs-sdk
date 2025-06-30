import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("TerminateConference", () => {
  describe("Test with true values", () => {
    let model: freeclimb.TerminateConference =
      new freeclimb.TerminateConference({});
    describe("TerminateConference class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.TerminateConference);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.TerminateConference =
      new freeclimb.TerminateConference({});
    describe("TerminateConference class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.TerminateConference);
      });
    });
  });
});
