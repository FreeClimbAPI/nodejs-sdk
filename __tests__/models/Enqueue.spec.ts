import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Enqueue", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.Enqueue;
    let model: freeclimb.Enqueue = new freeclimb.Enqueue({
      actionUrl: "https://123.abc",
      notificationUrl: "https://123.abc",
      queueId: "test_queueId",
      waitUrl: "https://123.abc",
    });
    describe("Enqueue class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Enqueue);
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
    describe(".queueId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_queueId";
        expect(model.queueId).toBe(value);
      });
    });
    describe(".waitUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.waitUrl).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.Enqueue;
    let model: freeclimb.Enqueue = new freeclimb.Enqueue({
      actionUrl: "",
      notificationUrl: "",
      queueId: "",
      waitUrl: "",
    });
    describe("Enqueue class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Enqueue);
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
    describe(".queueId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.queueId).toBe(value);
      });
    });
    describe(".waitUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.waitUrl).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.Enqueue;
    let constructorArguments = {
      actionUrl: "https://123.abc",
      queueId: "test_queueId",
      waitUrl: "https://123.abc",
    };
    let model: freeclimb.Enqueue = new freeclimb.Enqueue(constructorArguments);

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
    describe("#queueId", () => {
      it("resolves to initialization value", () => {
        expect(model.queueId).toBe(constructorArguments["queueId"]);
      });
    });
    describe("#waitUrl", () => {
      it("resolves to initialization value", () => {
        expect(model.waitUrl).toBe(constructorArguments["waitUrl"]);
      });
    });
  });
});
