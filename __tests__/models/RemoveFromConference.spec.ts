import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("RemoveFromConference", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.RemoveFromConference;
    let model: freeclimb.RemoveFromConference =
      new freeclimb.RemoveFromConference({});
    describe("RemoveFromConference class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.RemoveFromConference);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.RemoveFromConference;
    let model: freeclimb.RemoveFromConference =
      new freeclimb.RemoveFromConference({});
    describe("RemoveFromConference class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.RemoveFromConference);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {};
    let model: freeclimb.RemoveFromConference =
      new freeclimb.RemoveFromConference(constructorArguments);
  });
});
