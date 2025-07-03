import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("RemoveFromConference", () => {
  const Klass = freeclimb.RemoveFromConference;
  describe("Test with truthy values", () => {
    let model: freeclimb.RemoveFromConference =
      new freeclimb.RemoveFromConference({});
    describe("RemoveFromConference class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.RemoveFromConference);
      });
    });
  });
  describe("Test with falsy values", () => {
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
