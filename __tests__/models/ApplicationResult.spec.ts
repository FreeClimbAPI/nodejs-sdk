import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("ApplicationResult", () => {
  const Klass = freeclimb.ApplicationResult;
  describe("Test with truthy values", () => {
    let model: freeclimb.ApplicationResult = new freeclimb.ApplicationResult({
      uri: "test_uri",
      dateCreated: "test_dateCreated",
      dateUpdated: "test_dateUpdated",
      revision: 1,
      accountId: "test_accountId",
      applicationId: "test_applicationId",
      alias: "test_alias",
      voiceUrl: "https://123.abc",
      voiceFallbackUrl: "https://123.abc",
      callConnectUrl: "https://123.abc",
      statusCallbackUrl: "https://123.abc",
      smsUrl: "https://123.abc",
      smsFallbackUrl: "https://123.abc",
    });
    describe("ApplicationResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.ApplicationResult);
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
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_accountId";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".applicationId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_applicationId";
        expect(model.applicationId).toBe(value);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_alias";
        expect(model.alias).toBe(value);
      });
    });
    describe(".voiceUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.voiceUrl).toBe(value);
      });
    });
    describe(".voiceFallbackUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.voiceFallbackUrl).toBe(value);
      });
    });
    describe(".callConnectUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.callConnectUrl).toBe(value);
      });
    });
    describe(".statusCallbackUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.statusCallbackUrl).toBe(value);
      });
    });
    describe(".smsUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.smsUrl).toBe(value);
      });
    });
    describe(".smsFallbackUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.smsFallbackUrl).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.ApplicationResult = new freeclimb.ApplicationResult({
      uri: "",
      dateCreated: "",
      dateUpdated: "",
      revision: 0,
      accountId: "",
      applicationId: "",
      alias: "",
      voiceUrl: "",
      voiceFallbackUrl: "",
      callConnectUrl: "",
      statusCallbackUrl: "",
      smsUrl: "",
      smsFallbackUrl: "",
    });
    describe("ApplicationResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.ApplicationResult);
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
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".applicationId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.applicationId).toBe(value);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.alias).toBe(value);
      });
    });
    describe(".voiceUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.voiceUrl).toBe(value);
      });
    });
    describe(".voiceFallbackUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.voiceFallbackUrl).toBe(value);
      });
    });
    describe(".callConnectUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.callConnectUrl).toBe(value);
      });
    });
    describe(".statusCallbackUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.statusCallbackUrl).toBe(value);
      });
    });
    describe(".smsUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.smsUrl).toBe(value);
      });
    });
    describe(".smsFallbackUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.smsFallbackUrl).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {
      uri: "test_uri",
      dateCreated: "test_dateCreated",
      dateUpdated: "test_dateUpdated",
      revision: 1,
    };
    let model: freeclimb.ApplicationResult = new freeclimb.ApplicationResult(
      constructorArguments,
    );

    describe("#accountId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "accountId",
        )?.defaultValue;
        expect(model.accountId).toBe(value);
      });
    });
    describe("#applicationId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "applicationId",
        )?.defaultValue;
        expect(model.applicationId).toBe(value);
      });
    });
    describe("#alias", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "alias",
        )?.defaultValue;
        expect(model.alias).toBe(value);
      });
    });
    describe("#voiceUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "voiceUrl",
        )?.defaultValue;
        expect(model.voiceUrl).toBe(value);
      });
    });
    describe("#voiceFallbackUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "voiceFallbackUrl",
        )?.defaultValue;
        expect(model.voiceFallbackUrl).toBe(value);
      });
    });
    describe("#callConnectUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "callConnectUrl",
        )?.defaultValue;
        expect(model.callConnectUrl).toBe(value);
      });
    });
    describe("#statusCallbackUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "statusCallbackUrl",
        )?.defaultValue;
        expect(model.statusCallbackUrl).toBe(value);
      });
    });
    describe("#smsUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "smsUrl",
        )?.defaultValue;
        expect(model.smsUrl).toBe(value);
      });
    });
    describe("#smsFallbackUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "smsFallbackUrl",
        )?.defaultValue;
        expect(model.smsFallbackUrl).toBe(value);
      });
    });
  });
});
