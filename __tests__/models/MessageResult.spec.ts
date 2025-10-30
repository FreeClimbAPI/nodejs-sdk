import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("MessageResult", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.MessageResult;
    let model: freeclimb.MessageResult = new freeclimb.MessageResult({
      ["uri"]: "test_uri",
      ["dateCreated"]: "test_dateCreated",
      ["dateUpdated"]: "test_dateUpdated",
      ["revision"]: 1,
      ["accountId"]: "test_accountId",
      ["messageId"]: "test_messageId",

      ["status"]: freeclimb.MessageStatus.NEW,
      ["from"]: "test_from",
      ["to"]: "test_to",
      ["text"]: "test_text",
      ["direction"]: "test_direction",
      ["notificationUrl"]: "https://123.abc",
      ["brandId"]: "test_brandId",
      ["campaignId"]: "test_campaignId",
      ["segmentCount"]: 1.0,
      ["mediaUrls"]: [],

      ["tfn"]: new freeclimb.TFN({
        ["campaignId"]: null as any,
      }),
      ["phoneNumberId"]: "test_phoneNumberId",
      ["applicationId"]: "test_applicationId",
    });
    describe("MessageResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.MessageResult);
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
    describe(".messageId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_messageId";
        expect(model["messageId"]).toBe(value);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "new";
        expect(model["status"]).toBe(value);
      });
    });
    describe(".from", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_from";
        expect(model["from"]).toBe(value);
      });
    });
    describe(".to", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_to";
        expect(model["to"]).toBe(value);
      });
    });
    describe(".text", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_text";
        expect(model["text"]).toBe(value);
      });
    });
    describe(".direction", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_direction";
        expect(model["direction"]).toBe(value);
      });
    });
    describe(".notificationUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model["notificationUrl"]).toBe(value);
      });
    });
    describe(".brandId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_brandId";
        expect(model["brandId"]).toBe(value);
      });
    });
    describe(".campaignId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_campaignId";
        expect(model["campaignId"]).toBe(value);
      });
    });
    describe(".segmentCount", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1.0;
        expect(model["segmentCount"]).toBe(value);
      });
    });
    describe(".mediaUrls", () => {
      it("resolves to particular value on initialization", () => {
        const value: any[] = [];
        expect(model["mediaUrls"]).toStrictEqual(value);
      });
    });
    describe(".tfn", () => {
      it("resolves to particular value on initialization", () => {
        const value = new freeclimb.TFN({
          campaignId: null as any,
        });
        expect(model["tfn"]).toStrictEqual(value);
      });
    });
    describe(".phoneNumberId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_phoneNumberId";
        expect(model["phoneNumberId"]).toBe(value);
      });
    });
    describe(".applicationId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_applicationId";
        expect(model["applicationId"]).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.MessageResult;
    let model: freeclimb.MessageResult = new freeclimb.MessageResult({
      ["uri"]: "",
      ["dateCreated"]: "",
      ["dateUpdated"]: "",
      ["revision"]: 0,
      ["accountId"]: "",
      ["messageId"]: "",

      ["status"]: freeclimb.MessageStatus.NEW,
      ["from"]: "",
      ["to"]: "",
      ["text"]: "",
      ["direction"]: "",
      ["notificationUrl"]: "",
      ["brandId"]: "",
      ["campaignId"]: "",
      ["segmentCount"]: 0.0,
      ["mediaUrls"]: [],

      ["tfn"]: new freeclimb.TFN({
        ["campaignId"]: null as any,
      }),
      ["phoneNumberId"]: "",
      ["applicationId"]: "",
    });
    describe("MessageResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.MessageResult);
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
    describe(".messageId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["messageId"]).toBe(value);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "new";
        expect(model["status"]).toBe(value);
      });
    });
    describe(".from", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["from"]).toBe(value);
      });
    });
    describe(".to", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["to"]).toBe(value);
      });
    });
    describe(".text", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["text"]).toBe(value);
      });
    });
    describe(".direction", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["direction"]).toBe(value);
      });
    });
    describe(".notificationUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["notificationUrl"]).toBe(value);
      });
    });
    describe(".brandId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["brandId"]).toBe(value);
      });
    });
    describe(".campaignId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["campaignId"]).toBe(value);
      });
    });
    describe(".segmentCount", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0.0;
        expect(model["segmentCount"]).toBe(value);
      });
    });
    describe(".mediaUrls", () => {
      it("resolves to particular value on initialization", () => {
        const value: any[] = [];
        expect(model["mediaUrls"]).toStrictEqual(value);
      });
    });
    describe(".tfn", () => {
      it("resolves to particular value on initialization", () => {
        const value = new freeclimb.TFN({
          ["campaignId"]: null as any,
        });
        expect(model["tfn"]).toStrictEqual(value);
      });
    });
    describe(".phoneNumberId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["phoneNumberId"]).toBe(value);
      });
    });
    describe(".applicationId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["applicationId"]).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.MessageResult;
    let constructorArguments = {
      ["uri"]: "test_uri",
      ["dateCreated"]: "test_dateCreated",
      ["dateUpdated"]: "test_dateUpdated",
      ["revision"]: 1,
    };
    let model: freeclimb.MessageResult = new freeclimb.MessageResult(
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
    describe("#messageId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "messageId",
        )?.defaultValue;
        expect(model["messageId"]).toBe(value);
      });
    });
    describe("#status", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "status",
        )?.defaultValue;
        expect(model["status"]).toBe(value);
      });
    });
    describe("#from", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "from",
        )?.defaultValue;
        expect(model["from"]).toBe(value);
      });
    });
    describe("#to", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "to",
        )?.defaultValue;
        expect(model["to"]).toBe(value);
      });
    });
    describe("#text", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "text",
        )?.defaultValue;
        expect(model["text"]).toBe(value);
      });
    });
    describe("#direction", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "direction",
        )?.defaultValue;
        expect(model["direction"]).toBe(value);
      });
    });
    describe("#notificationUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "notificationUrl",
        )?.defaultValue;
        expect(model["notificationUrl"]).toBe(value);
      });
    });
    describe("#brandId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "brandId",
        )?.defaultValue;
        expect(model["brandId"]).toBe(value);
      });
    });
    describe("#campaignId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "campaignId",
        )?.defaultValue;
        expect(model["campaignId"]).toBe(value);
      });
    });
    describe("#segmentCount", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "segmentCount",
        )?.defaultValue;
        expect(model["segmentCount"]).toBe(value);
      });
    });
    describe("#mediaUrls", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "mediaUrls",
        )?.defaultValue;
        expect(model["mediaUrls"]).toBe(value);
      });
    });
    describe("#tfn", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "tfn",
        )?.defaultValue;
        expect(model["tfn"]).toBe(value);
      });
    });
    describe("#phoneNumberId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "phoneNumberId",
        )?.defaultValue;
        expect(model["phoneNumberId"]).toBe(value);
      });
    });
    describe("#applicationId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "applicationId",
        )?.defaultValue;
        expect(model["applicationId"]).toBe(value);
      });
    });
  });
});
