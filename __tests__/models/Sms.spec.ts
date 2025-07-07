import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Sms", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.Sms;
    let model: freeclimb.Sms = new freeclimb.Sms({
      to: "test_to",
      from: "test_from",
      text: "test_text",
      notificationUrl: "https://123.abc",
    });
    describe("Sms class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Sms);
      });
    });

    describe(".to", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_to";
        expect(model.to).toBe(value);
      });
    });
    describe(".from", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_from";
        expect(model.from).toBe(value);
      });
    });
    describe(".text", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_text";
        expect(model.text).toBe(value);
      });
    });
    describe(".notificationUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.notificationUrl).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.Sms;
    let model: freeclimb.Sms = new freeclimb.Sms({
      to: "",
      from: "",
      text: "",
      notificationUrl: "",
    });
    describe("Sms class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Sms);
      });
    });

    describe(".to", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.to).toBe(value);
      });
    });
    describe(".from", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.from).toBe(value);
      });
    });
    describe(".text", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.text).toBe(value);
      });
    });
    describe(".notificationUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.notificationUrl).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.Sms;
    let constructorArguments = {
      to: "test_to",
      from: "test_from",
      text: "test_text",
    };
    let model: freeclimb.Sms = new freeclimb.Sms(constructorArguments);

    describe("#to", () => {
      it("resolves to initialization value", () => {
        expect(model.to).toBe(constructorArguments["to"]);
      });
    });
    describe("#from", () => {
      it("resolves to initialization value", () => {
        expect(model.from).toBe(constructorArguments["from"]);
      });
    });
    describe("#text", () => {
      it("resolves to initialization value", () => {
        expect(model.text).toBe(constructorArguments["text"]);
      });
    });
    describe("#notificationUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "notificationUrl",
        )?.defaultValue;
        expect(model.notificationUrl).toBe(value);
      });
    });
  });
});
