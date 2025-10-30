import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("QueueResult", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.QueueResult;
    let model: freeclimb.QueueResult = new freeclimb.QueueResult({
      ["uri"]: "test_uri",
      ["dateCreated"]: "test_dateCreated",
      ["dateUpdated"]: "test_dateUpdated",
      ["revision"]: 1,
      ["accountId"]: "test_accountId",
      ["queueId"]: "test_queueId",
      ["alias"]: "test_alias",
      ["maxSize"]: 1,
      ["currentSize"]: 1,
      ["averageQueueRemovalTime"]: 1,
      ["subresourceUris"]: {},
    });
    describe("QueueResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.QueueResult);
      });
    });
    describe(".uri", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_uri";
        expect(model["uri"]).toBe(value);
      });
    });
    describe(".dateCreated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_dateCreated";
        expect(model["dateCreated"]).toBe(value);
      });
    });
    describe(".dateUpdated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_dateUpdated";
        expect(model["dateUpdated"]).toBe(value);
      });
    });
    describe(".revision", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model["revision"]).toBe(value);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_accountId";
        expect(model["accountId"]).toBe(value);
      });
    });
    describe(".queueId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_queueId";
        expect(model["queueId"]).toBe(value);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_alias";
        expect(model["alias"]).toBe(value);
      });
    });
    describe(".maxSize", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model["maxSize"]).toBe(value);
      });
    });
    describe(".currentSize", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model["currentSize"]).toBe(value);
      });
    });
    describe(".averageQueueRemovalTime", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model["averageQueueRemovalTime"]).toBe(value);
      });
    });
    describe(".subresourceUris", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        const receivedValue: any = model["subresourceUris"];
        expect(receivedValue).toStrictEqual(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.QueueResult;
    let model: freeclimb.QueueResult = new freeclimb.QueueResult({
      ["uri"]: "",
      ["dateCreated"]: "",
      ["dateUpdated"]: "",
      ["revision"]: 0,
      ["accountId"]: "",
      ["queueId"]: "",
      ["alias"]: "",
      ["maxSize"]: 0,
      ["currentSize"]: 0,
      ["averageQueueRemovalTime"]: 0,
      ["subresourceUris"]: {},
    });
    describe("QueueResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.QueueResult);
      });
    });
    describe(".uri", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["uri"]).toBe(value);
      });
    });
    describe(".dateCreated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["dateCreated"]).toBe(value);
      });
    });
    describe(".dateUpdated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["dateUpdated"]).toBe(value);
      });
    });
    describe(".revision", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model["revision"]).toBe(value);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["accountId"]).toBe(value);
      });
    });
    describe(".queueId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["queueId"]).toBe(value);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["alias"]).toBe(value);
      });
    });
    describe(".maxSize", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model["maxSize"]).toBe(value);
      });
    });
    describe(".currentSize", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model["currentSize"]).toBe(value);
      });
    });
    describe(".averageQueueRemovalTime", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model["averageQueueRemovalTime"]).toBe(value);
      });
    });
    describe(".subresourceUris", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        const receivedValue: any = model["subresourceUris"];
        expect(receivedValue).toStrictEqual(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.QueueResult;
    let constructorArguments = {
      ["uri"]: "test_uri",
      ["dateCreated"]: "test_dateCreated",
      ["dateUpdated"]: "test_dateUpdated",
      ["revision"]: 1,
    };
    let model: freeclimb.QueueResult = new freeclimb.QueueResult(
      constructorArguments,
    );

    describe("#accountId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "accountId",
        )?.defaultValue;
        expect(model["accountId"]).toBe(value);
      });
    });
    describe("#queueId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "queueId",
        )?.defaultValue;
        expect(model["queueId"]).toBe(value);
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
    describe("#maxSize", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "maxSize",
        )?.defaultValue;
        expect(model["maxSize"]).toBe(value);
      });
    });
    describe("#currentSize", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "currentSize",
        )?.defaultValue;
        expect(model["currentSize"]).toBe(value);
      });
    });
    describe("#averageQueueRemovalTime", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "averageQueueRemovalTime",
        )?.defaultValue;
        expect(model["averageQueueRemovalTime"]).toBe(value);
      });
    });
    describe("#subresourceUris", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "subresourceUris",
        )?.defaultValue;
        expect(model["subresourceUris"]).toBe(value);
      });
    });
  });
});
