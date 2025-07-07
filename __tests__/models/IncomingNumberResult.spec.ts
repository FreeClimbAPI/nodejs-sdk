import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("IncomingNumberResult", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.IncomingNumberResult;
    let model: freeclimb.IncomingNumberResult =
      new freeclimb.IncomingNumberResult({
        uri: "test_uri",
        dateCreated: "test_dateCreated",
        dateUpdated: "test_dateUpdated",
        revision: 1,

        capabilities: new freeclimb.Capabilities({
          voice: null as any,
          sms: null as any,
          tollFree: null as any,
          tenDLC: null as any,
          shortCode: null as any,
        }),
        campaignId: "test_campaignId",
        phoneNumberId: "test_phoneNumberId",
        accountId: "test_accountId",
        applicationId: "test_applicationId",
        phoneNumber: "test_phoneNumber",
        alias: "test_alias",
        region: "test_region",
        country: "test_country",
        voiceEnabled: true,
        smsEnabled: true,
        offnet: true,

        tfn: new freeclimb.TFN({
          campaignId: null as any,
        }),
      });
    describe("IncomingNumberResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.IncomingNumberResult);
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
    describe(".capabilities", () => {
      it("resolves to particular value on initialization", () => {
        const value = new freeclimb.Capabilities({
          voice: null as any,
          sms: null as any,
          tollFree: null as any,
          tenDLC: null as any,
          shortCode: null as any,
        });
        expect(model.capabilities).toStrictEqual(value);
      });
    });
    describe(".campaignId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_campaignId";
        expect(model.campaignId).toBe(value);
      });
    });
    describe(".phoneNumberId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_phoneNumberId";
        expect(model.phoneNumberId).toBe(value);
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
    describe(".phoneNumber", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_phoneNumber";
        expect(model.phoneNumber).toBe(value);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_alias";
        expect(model.alias).toBe(value);
      });
    });
    describe(".region", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_region";
        expect(model.region).toBe(value);
      });
    });
    describe(".country", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_country";
        expect(model.country).toBe(value);
      });
    });
    describe(".voiceEnabled", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.voiceEnabled).toBe(value);
      });
    });
    describe(".smsEnabled", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.smsEnabled).toBe(value);
      });
    });
    describe(".offnet", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.offnet).toBe(value);
      });
    });
    describe(".tfn", () => {
      it("resolves to particular value on initialization", () => {
        const value = new freeclimb.TFN({
          campaignId: null as any,
        });
        expect(model.tfn).toStrictEqual(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.IncomingNumberResult;
    let model: freeclimb.IncomingNumberResult =
      new freeclimb.IncomingNumberResult({
        uri: "",
        dateCreated: "",
        dateUpdated: "",
        revision: 0,

        capabilities: new freeclimb.Capabilities({
          voice: null as any,
          sms: null as any,
          tollFree: null as any,
          tenDLC: null as any,
          shortCode: null as any,
        }),
        campaignId: "",
        phoneNumberId: "",
        accountId: "",
        applicationId: "",
        phoneNumber: "",
        alias: "",
        region: "",
        country: "",
        voiceEnabled: false,
        smsEnabled: false,
        offnet: false,

        tfn: new freeclimb.TFN({
          campaignId: null as any,
        }),
      });
    describe("IncomingNumberResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.IncomingNumberResult);
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
    describe(".capabilities", () => {
      it("resolves to particular value on initialization", () => {
        const value = new freeclimb.Capabilities({
          voice: null as any,
          sms: null as any,
          tollFree: null as any,
          tenDLC: null as any,
          shortCode: null as any,
        });
        expect(model.capabilities).toStrictEqual(value);
      });
    });
    describe(".campaignId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.campaignId).toBe(value);
      });
    });
    describe(".phoneNumberId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.phoneNumberId).toBe(value);
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
    describe(".phoneNumber", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.phoneNumber).toBe(value);
      });
    });
    describe(".alias", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.alias).toBe(value);
      });
    });
    describe(".region", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.region).toBe(value);
      });
    });
    describe(".country", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.country).toBe(value);
      });
    });
    describe(".voiceEnabled", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.voiceEnabled).toBe(value);
      });
    });
    describe(".smsEnabled", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.smsEnabled).toBe(value);
      });
    });
    describe(".offnet", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.offnet).toBe(value);
      });
    });
    describe(".tfn", () => {
      it("resolves to particular value on initialization", () => {
        const value = new freeclimb.TFN({
          campaignId: null as any,
        });
        expect(model.tfn).toStrictEqual(value);
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
    let model: freeclimb.IncomingNumberResult =
      new freeclimb.IncomingNumberResult(constructorArguments);

    describe("#capabilities", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "capabilities",
        )?.defaultValue;
        expect(model.capabilities).toBe(value);
      });
    });
    describe("#campaignId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "campaignId",
        )?.defaultValue;
        expect(model.campaignId).toBe(value);
      });
    });
    describe("#phoneNumberId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "phoneNumberId",
        )?.defaultValue;
        expect(model.phoneNumberId).toBe(value);
      });
    });
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
    describe("#phoneNumber", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "phoneNumber",
        )?.defaultValue;
        expect(model.phoneNumber).toBe(value);
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
    describe("#region", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "region",
        )?.defaultValue;
        expect(model.region).toBe(value);
      });
    });
    describe("#country", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "country",
        )?.defaultValue;
        expect(model.country).toBe(value);
      });
    });
    describe("#voiceEnabled", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "voiceEnabled",
        )?.defaultValue;
        expect(model.voiceEnabled).toBe(value);
      });
    });
    describe("#smsEnabled", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "smsEnabled",
        )?.defaultValue;
        expect(model.smsEnabled).toBe(value);
      });
    });
    describe("#offnet", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "offnet",
        )?.defaultValue;
        expect(model.offnet).toBe(value);
      });
    });
    describe("#tfn", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "tfn",
        )?.defaultValue;
        expect(model.tfn).toBe(value);
      });
    });
  });
});
