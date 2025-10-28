import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("CreateConference", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.CreateConference;
    let model: freeclimb.CreateConference = new freeclimb.CreateConference({
      ["actionUrl"]: "https://123.abc",
      ["alias"]: "test_alias",

      ["playBeep"]: freeclimb.PlayBeep.ALWAYS,
      ["record"]: true,
      ["statusCallbackUrl"]: "https://123.abc",
      ["waitUrl"]: "https://123.abc",
      ["parentCallId"]: "test_parentCallId",
    });
    describe("CreateConference class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.CreateConference);
      });
    });

    describe(".actionUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model["actionUrl"]).toBe(value);
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
    describe(".record", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model["record"]).toBe(value);
      });
    });
    describe(".statusCallbackUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model["statusCallbackUrl"]).toBe(value);
      });
    });
    describe(".waitUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model["waitUrl"]).toBe(value);
      });
    });
    describe(".parentCallId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_parentCallId";
        expect(model["parentCallId"]).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.CreateConference;
    let model: freeclimb.CreateConference = new freeclimb.CreateConference({
      ["actionUrl"]: "",
      ["alias"]: "",

      ["playBeep"]: freeclimb.PlayBeep.ALWAYS,
      ["record"]: false,
      ["statusCallbackUrl"]: "",
      ["waitUrl"]: "",
      ["parentCallId"]: "",
    });
    describe("CreateConference class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.CreateConference);
      });
    });

    describe(".actionUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["actionUrl"]).toBe(value);
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
    describe(".record", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model["record"]).toBe(value);
      });
    });
    describe(".statusCallbackUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["statusCallbackUrl"]).toBe(value);
      });
    });
    describe(".waitUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["waitUrl"]).toBe(value);
      });
    });
    describe(".parentCallId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["parentCallId"]).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.CreateConference;
    let constructorArguments = {
      ["actionUrl"]: "https://123.abc",
    };
    let model: freeclimb.CreateConference = new freeclimb.CreateConference(
      constructorArguments,
    );

    describe("#actionUrl", () => {
      it("resolves to initialization value", () => {
        expect(model["actionUrl"]).toBe(constructorArguments["actionUrl"]);
      });
    });
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
    describe("#record", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "record",
        )?.defaultValue;
        expect(model["record"]).toBe(value);
      });
    });
    describe("#statusCallbackUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "statusCallbackUrl",
        )?.defaultValue;
        expect(model["statusCallbackUrl"]).toBe(value);
      });
    });
    describe("#waitUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "waitUrl",
        )?.defaultValue;
        expect(model["waitUrl"]).toBe(value);
      });
    });
    describe("#parentCallId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "parentCallId",
        )?.defaultValue;
        expect(model["parentCallId"]).toBe(value);
      });
    });
  });
});
