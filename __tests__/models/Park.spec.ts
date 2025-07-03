import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Park", () => {
  const Klass = freeclimb.Park;
  describe("Test with truthy values", () => {
    let model: freeclimb.Park = new freeclimb.Park({
      waitUrl: "https://123.abc",
      actionUrl: "https://123.abc",
      notificationUrl: "https://123.abc",
    });
    describe("Park class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Park);
      });
    });

    describe(".waitUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.waitUrl).toBe(value);
      });
    });
    describe(".actionUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.actionUrl).toBe(value);
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
    let model: freeclimb.Park = new freeclimb.Park({
      waitUrl: "",
      actionUrl: "",
      notificationUrl: "",
    });
    describe("Park class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Park);
      });
    });

    describe(".waitUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.waitUrl).toBe(value);
      });
    });
    describe(".actionUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.actionUrl).toBe(value);
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
    let constructorArguments = {
      waitUrl: "https://123.abc",
      actionUrl: "https://123.abc",
    };
    let model: freeclimb.Park = new freeclimb.Park(constructorArguments);

    describe("#waitUrl", () => {
      it("resolves to initialization value", () => {
        expect(model.waitUrl).toBe(constructorArguments["waitUrl"]);
      });
    });
    describe("#actionUrl", () => {
      it("resolves to initialization value", () => {
        expect(model.actionUrl).toBe(constructorArguments["actionUrl"]);
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
