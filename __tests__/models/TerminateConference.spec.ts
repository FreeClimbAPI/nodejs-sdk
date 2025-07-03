import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("TerminateConference", () => {
  const Klass = freeclimb.TerminateConference;
  describe("Test with truthy values", () => {
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
  describe("Test with only required values", () => {
    let constructorArguments = {};
    let model: freeclimb.TerminateConference =
      new freeclimb.TerminateConference(constructorArguments);
  });
});
