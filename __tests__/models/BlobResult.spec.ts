import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("BlobResult", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.BlobResult;
    let model: freeclimb.BlobResult = new freeclimb.BlobResult({
      ["blobId"]: "test_blobId",

      ["accountId"]: "test_accountId",

      ["alias"]: "test_alias",
      ["revision"]: 1,
      ["dateCreated"]: new Date("December 17, 1995 03:24:00"),
      ["dateUpdated"]: new Date("December 17, 1995 03:24:00"),
      ["expiresAt"]: new Date("December 17, 1995 03:24:00"),
      ["blob"]: {},
    });
    describe("BlobResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.BlobResult);
      });
    });
    describe(".blobId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_blobId";
        expect(model["blobId"]).toBe(value);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_accountId";
        expect(model["accountId"]).toBe(value);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_alias";
        expect(model["alias"]).toBe(value);
      });
    });
    describe(".revision", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model["revision"]).toBe(value);
      });
    });
    describe(".dateCreated", () => {
      it("resolves to particular value on initialization", () => {
        const value = new Date("December 17, 1995 03:24:00");
        expect(model["dateCreated"]).toStrictEqual(value);
      });
    });
    describe(".dateUpdated", () => {
      it("resolves to particular value on initialization", () => {
        const value = new Date("December 17, 1995 03:24:00");
        expect(model["dateUpdated"]).toStrictEqual(value);
      });
    });
    describe(".expiresAt", () => {
      it("resolves to particular value on initialization", () => {
        const value = new Date("December 17, 1995 03:24:00");
        expect(model["expiresAt"]).toStrictEqual(value);
      });
    });
    describe(".blob", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model["blob"]).toStrictEqual(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.BlobResult;
    let model: freeclimb.BlobResult = new freeclimb.BlobResult({
      ["blobId"]: "",

      ["accountId"]: "",

      ["alias"]: "",
      ["revision"]: 0,
      ["dateCreated"]: undefined,
      ["dateUpdated"]: undefined,
      ["expiresAt"]: undefined,
      ["blob"]: {},
    });
    describe("BlobResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.BlobResult);
      });
    });
    describe(".blobId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["blobId"]).toBe(value);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["accountId"]).toBe(value);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["alias"]).toBe(value);
      });
    });
    describe(".revision", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model["revision"]).toBe(value);
      });
    });
    describe(".dateCreated", () => {
      it("resolves to particular value on initialization", () => {
        const value = undefined;
        expect(model["dateCreated"]).toStrictEqual(value);
      });
    });
    describe(".dateUpdated", () => {
      it("resolves to particular value on initialization", () => {
        const value = undefined;
        expect(model["dateUpdated"]).toStrictEqual(value);
      });
    });
    describe(".expiresAt", () => {
      it("resolves to particular value on initialization", () => {
        const value = undefined;
        expect(model["expiresAt"]).toStrictEqual(value);
      });
    });
    describe(".blob", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model["blob"]).toStrictEqual(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.BlobResult;
    let constructorArguments = {};
    let model: freeclimb.BlobResult = new freeclimb.BlobResult(
      constructorArguments,
    );

    describe("#blobId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "blobId",
        )?.defaultValue;
        expect(model["blobId"]).toBe(value);
      });
    });
    describe("#accountId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "accountId",
        )?.defaultValue;
        expect(model["accountId"]).toBe(value);
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
    describe("#revision", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "revision",
        )?.defaultValue;
        expect(model["revision"]).toBe(value);
      });
    });
    describe("#dateCreated", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "dateCreated",
        )?.defaultValue;
        expect(model["dateCreated"]).toBe(value);
      });
    });
    describe("#dateUpdated", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "dateUpdated",
        )?.defaultValue;
        expect(model["dateUpdated"]).toBe(value);
      });
    });
    describe("#expiresAt", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "expiresAt",
        )?.defaultValue;
        expect(model["expiresAt"]).toBe(value);
      });
    });
    describe("#blob", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "blob",
        )?.defaultValue;
        expect(model["blob"]).toBe(value);
      });
    });
  });
});
