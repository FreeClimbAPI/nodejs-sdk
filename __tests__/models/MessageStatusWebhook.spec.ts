import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("MessageStatusWebhook", () => {
  const Klass = freeclimb.MessageStatusWebhook;
  describe("Test with truthy values", () => {
    let model: freeclimb.MessageStatusWebhook =
      new freeclimb.MessageStatusWebhook({
        requestType: "test_requestType",
        accountId: "test_accountId",
        messageId: "test_messageId",
        callId: "test_callId",
        from: "test_from",
        to: "test_to",
        text: "test_text",
        direction: "test_direction",
        applicationId: "test_applicationId",

        status: freeclimb.MessageStatus.NEW,
        phoneNumberId: "test_phoneNumberId",
      });
    describe("MessageStatusWebhook class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.MessageStatusWebhook);
      });
    });

    describe(".requestType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_requestType";
        expect(model.requestType).toBe(value);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_accountId";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".messageId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_messageId";
        expect(model.messageId).toBe(value);
      });
    });
    describe(".callId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_callId";
        expect(model.callId).toBe(value);
      });
    });
    describe(".from", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_from";
        expect(model.from).toBe(value);
      });
    });
    describe(".to", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_to";
        expect(model.to).toBe(value);
      });
    });
    describe(".text", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_text";
        expect(model.text).toBe(value);
      });
    });
    describe(".direction", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_direction";
        expect(model.direction).toBe(value);
      });
    });
    describe(".applicationId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_applicationId";
        expect(model.applicationId).toBe(value);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "new";
        expect(model.status).toBe(value);
      });
    });
    describe(".phoneNumberId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_phoneNumberId";
        expect(model.phoneNumberId).toBe(value);
      });
    });
    describe(".deserialize", () => {
      it("returns an instance of MessageStatusWebhook", () => {
        expect(
          freeclimb.MessageStatusWebhook.deserialize(
            '{ "requestType": "messageStatus"}',
          ),
        ).toBeInstanceOf(freeclimb.MessageStatusWebhook);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.MessageStatusWebhook =
      new freeclimb.MessageStatusWebhook({
        requestType: "",
        accountId: "",
        messageId: "",
        callId: "",
        from: "",
        to: "",
        text: "",
        direction: "",
        applicationId: "",

        status: freeclimb.MessageStatus.NEW,
        phoneNumberId: "",
      });
    describe("MessageStatusWebhook class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.MessageStatusWebhook);
      });
    });

    describe(".requestType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.requestType).toBe(value);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".messageId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.messageId).toBe(value);
      });
    });
    describe(".callId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.callId).toBe(value);
      });
    });
    describe(".from", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.from).toBe(value);
      });
    });
    describe(".to", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.to).toBe(value);
      });
    });
    describe(".text", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.text).toBe(value);
      });
    });
    describe(".direction", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.direction).toBe(value);
      });
    });
    describe(".applicationId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.applicationId).toBe(value);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "new";
        expect(model.status).toBe(value);
      });
    });
    describe(".phoneNumberId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.phoneNumberId).toBe(value);
      });
    });
    describe(".deserialize", () => {
      it("returns an instance of MessageStatusWebhook", () => {
        expect(
          freeclimb.MessageStatusWebhook.deserialize(
            '{ "requestType": "messageStatus"}',
          ),
        ).toBeInstanceOf(freeclimb.MessageStatusWebhook);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {};
    let model: freeclimb.MessageStatusWebhook =
      new freeclimb.MessageStatusWebhook(constructorArguments);

    describe("#requestType", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "requestType",
        )?.defaultValue;
        expect(model.requestType).toBe(value);
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
    describe("#messageId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "messageId",
        )?.defaultValue;
        expect(model.messageId).toBe(value);
      });
    });
    describe("#callId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "callId",
        )?.defaultValue;
        expect(model.callId).toBe(value);
      });
    });
    describe("#from", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "from",
        )?.defaultValue;
        expect(model.from).toBe(value);
      });
    });
    describe("#to", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "to",
        )?.defaultValue;
        expect(model.to).toBe(value);
      });
    });
    describe("#text", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "text",
        )?.defaultValue;
        expect(model.text).toBe(value);
      });
    });
    describe("#direction", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "direction",
        )?.defaultValue;
        expect(model.direction).toBe(value);
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
    describe("#status", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "status",
        )?.defaultValue;
        expect(model.status).toBe(value);
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
  });
});
