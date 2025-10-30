import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("UpdateConferenceRequest", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.UpdateConferenceRequest;
    let model: freeclimb.UpdateConferenceRequest =
      new freeclimb.UpdateConferenceRequest({
        ["alias"]: "test_alias",

        ["playBeep"]: freeclimb.PlayBeep.ALWAYS,

        ["status"]: freeclimb.UpdateConferenceRequestStatus.EMPTY,
      });
    describe("UpdateConferenceRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.UpdateConferenceRequest);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_alias";
        expect(model["alias"]).toBe(value);
      });
    });
    describe(".playBeep", () => {
      it("resolves to particular value on initialization", () => {
        const value = "always";
        expect(model["playBeep"]).toBe(value);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "empty";
        expect(model["status"]).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.UpdateConferenceRequest;
    let model: freeclimb.UpdateConferenceRequest =
      new freeclimb.UpdateConferenceRequest({
        ["alias"]: "",

        ["playBeep"]: freeclimb.PlayBeep.ALWAYS,

        ["status"]: freeclimb.UpdateConferenceRequestStatus.EMPTY,
      });
    describe("UpdateConferenceRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.UpdateConferenceRequest);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["alias"]).toBe(value);
      });
    });
    describe(".playBeep", () => {
      it("resolves to particular value on initialization", () => {
        const value = "always";
        expect(model["playBeep"]).toBe(value);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "empty";
        expect(model["status"]).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.UpdateConferenceRequest;
    let constructorArguments = {};
    let model: freeclimb.UpdateConferenceRequest =
      new freeclimb.UpdateConferenceRequest(constructorArguments);

    describe("#alias", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "alias",
        )?.defaultValue;
        expect(model["alias"]).toBe(value);
      });
    });
    describe("#playBeep", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "playBeep",
        )?.defaultValue;
        expect(model["playBeep"]).toBe(value);
      });
    });
    describe("#status", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "status",
        )?.defaultValue;
        expect(model["status"]).toBe(value);
      });
    });
  });
});
