import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("TerminateConference", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.TerminateConference;
    let model: freeclimb.TerminateConference =
      new freeclimb.TerminateConference({});
    describe("TerminateConference class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.TerminateConference);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.TerminateConference;
    let model: freeclimb.TerminateConference =
      new freeclimb.TerminateConference({});
    describe("TerminateConference class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.TerminateConference);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.TerminateConference;
    let constructorArguments = {};
    let model: freeclimb.TerminateConference =
      new freeclimb.TerminateConference(constructorArguments);
  });
});
