import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("ExportResult", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.ExportResult;
    let model: freeclimb.ExportResult = new freeclimb.ExportResult({
      accountId: "test_accountId",
      uri: "test_uri",
      dateCreated: "test_dateCreated",
      dateUpdated: "test_dateUpdated",
      revision: 1,
      exportId: "test_exportId",

      status: freeclimb.ExportStatus.INTAKING,
      size: 1,

      resourceType: freeclimb.ExportResourceType.MESSAGES,
      query: {},
      format: [],
      output: {},
    });
    describe("ExportResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.ExportResult);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_accountId";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".uri", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_uri";
        expect(model.uri).toBe(value);
      });
    });
    describe(".dateCreated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_dateCreated";
        expect(model.dateCreated).toBe(value);
      });
    });
    describe(".dateUpdated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_dateUpdated";
        expect(model.dateUpdated).toBe(value);
      });
    });
    describe(".revision", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.revision).toBe(value);
      });
    });
    describe(".exportId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_exportId";
        expect(model.exportId).toBe(value);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "intaking";
        expect(model.status).toBe(value);
      });
    });
    describe(".size", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.size).toBe(value);
      });
    });
    describe(".resourceType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "Messages";
        expect(model.resourceType).toBe(value);
      });
    });
    describe(".query", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model.query).toStrictEqual(value);
      });
    });
    describe(".format", () => {
      it("resolves to particular value on initialization", () => {
        const value: any[] = [];
        expect(model.format).toStrictEqual(value);
      });
    });
    describe(".output", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model.output).toStrictEqual(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.ExportResult;
    let model: freeclimb.ExportResult = new freeclimb.ExportResult({
      accountId: "",
      uri: "",
      dateCreated: "",
      dateUpdated: "",
      revision: 0,
      exportId: "",

      status: freeclimb.ExportStatus.INTAKING,
      size: 0,

      resourceType: freeclimb.ExportResourceType.MESSAGES,
      query: {},
      format: [],
      output: {},
    });
    describe("ExportResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.ExportResult);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".uri", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.uri).toBe(value);
      });
    });
    describe(".dateCreated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.dateCreated).toBe(value);
      });
    });
    describe(".dateUpdated", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.dateUpdated).toBe(value);
      });
    });
    describe(".revision", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.revision).toBe(value);
      });
    });
    describe(".exportId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.exportId).toBe(value);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "intaking";
        expect(model.status).toBe(value);
      });
    });
    describe(".size", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.size).toBe(value);
      });
    });
    describe(".resourceType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "Messages";
        expect(model.resourceType).toBe(value);
      });
    });
    describe(".query", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model.query).toStrictEqual(value);
      });
    });
    describe(".format", () => {
      it("resolves to particular value on initialization", () => {
        const value: any[] = [];
        expect(model.format).toStrictEqual(value);
      });
    });
    describe(".output", () => {
      it("resolves to particular value on initialization", () => {
        const value = {};
        expect(model.output).toStrictEqual(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.ExportResult;
    let constructorArguments = {
      accountId: "test_accountId",
      uri: "test_uri",
      dateCreated: "test_dateCreated",
      dateUpdated: "test_dateUpdated",
      revision: 1,
      exportId: "test_exportId",

      status: freeclimb.ExportStatus.INTAKING,
      size: 1,

      resourceType: freeclimb.ExportResourceType.MESSAGES,
      query: {},
      format: [],
      output: {},
    };
    let model: freeclimb.ExportResult = new freeclimb.ExportResult(
      constructorArguments,
    );

    describe("#accountId", () => {
      it("resolves to initialization value", () => {
        expect(model.accountId).toBe(constructorArguments["accountId"]);
      });
    });
    describe("#uri", () => {
      it("resolves to initialization value", () => {
        expect(model.uri).toBe(constructorArguments["uri"]);
      });
    });
    describe("#dateCreated", () => {
      it("resolves to initialization value", () => {
        expect(model.dateCreated).toBe(constructorArguments["dateCreated"]);
      });
    });
    describe("#dateUpdated", () => {
      it("resolves to initialization value", () => {
        expect(model.dateUpdated).toBe(constructorArguments["dateUpdated"]);
      });
    });
    describe("#revision", () => {
      it("resolves to initialization value", () => {
        expect(model.revision).toBe(constructorArguments["revision"]);
      });
    });
    describe("#exportId", () => {
      it("resolves to initialization value", () => {
        expect(model.exportId).toBe(constructorArguments["exportId"]);
      });
    });
    describe("#status", () => {
      it("resolves to initialization value", () => {
        expect(model.status).toBe(constructorArguments["status"]);
      });
    });
    describe("#size", () => {
      it("resolves to initialization value", () => {
        expect(model.size).toBe(constructorArguments["size"]);
      });
    });
    describe("#resourceType", () => {
      it("resolves to initialization value", () => {
        expect(model.resourceType).toBe(constructorArguments["resourceType"]);
      });
    });
    describe("#query", () => {
      it("resolves to initialization value", () => {
        expect(model.query).toBe(constructorArguments["query"]);
      });
    });
    describe("#format", () => {
      it("resolves to initialization value", () => {
        expect(model.format).toBe(constructorArguments["format"]);
      });
    });
    describe("#output", () => {
      it("resolves to initialization value", () => {
        expect(model.output).toBe(constructorArguments["output"]);
      });
    });
  });
});
