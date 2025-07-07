import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("CreateConferenceRequest", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.CreateConferenceRequest;
    let model: freeclimb.CreateConferenceRequest =
      new freeclimb.CreateConferenceRequest({
        alias: "test_alias",

        playBeep: freeclimb.PlayBeep.ALWAYS,
        record: true,
        waitUrl: "https://123.abc",
        statusCallbackUrl: "https://123.abc",
      });
    describe("CreateConferenceRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.CreateConferenceRequest);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_alias";
        expect(model.alias).toBe(value);
      });
    });
    describe(".playBeep", () => {
      it("resolves to particular value on initialization", () => {
        const value = "always";
        expect(model.playBeep).toBe(value);
      });
    });
    describe(".record", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.record).toBe(value);
      });
    });
    describe(".waitUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.waitUrl).toBe(value);
      });
    });
    describe(".statusCallbackUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.statusCallbackUrl).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.CreateConferenceRequest;
    let model: freeclimb.CreateConferenceRequest =
      new freeclimb.CreateConferenceRequest({
        alias: "",

        playBeep: freeclimb.PlayBeep.ALWAYS,
        record: false,
        waitUrl: "",
        statusCallbackUrl: "",
      });
    describe("CreateConferenceRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.CreateConferenceRequest);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.alias).toBe(value);
      });
    });
    describe(".playBeep", () => {
      it("resolves to particular value on initialization", () => {
        const value = "always";
        expect(model.playBeep).toBe(value);
      });
    });
    describe(".record", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.record).toBe(value);
      });
    });
    describe(".waitUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.waitUrl).toBe(value);
      });
    });
    describe(".statusCallbackUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.statusCallbackUrl).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {
      statusCallbackUrl: "https://123.abc",
    };
    let model: freeclimb.CreateConferenceRequest =
      new freeclimb.CreateConferenceRequest(constructorArguments);

    describe("#alias", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "alias",
        )?.defaultValue;
        expect(model.alias).toBe(value);
      });
    });
    describe("#playBeep", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "playBeep",
        )?.defaultValue;
        expect(model.playBeep).toBe(value);
      });
    });
    describe("#record", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "record",
        )?.defaultValue;
        expect(model.record).toBe(value);
      });
    });
    describe("#waitUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "waitUrl",
        )?.defaultValue;
        expect(model.waitUrl).toBe(value);
      });
    });
    describe("#statusCallbackUrl", () => {
      it("resolves to initialization value", () => {
        expect(model.statusCallbackUrl).toBe(
          constructorArguments["statusCallbackUrl"],
        );
      });
    });
  });
});
