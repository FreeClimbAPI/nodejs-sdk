import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("MessageRequest", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.MessageRequest;
    let model: freeclimb.MessageRequest = new freeclimb.MessageRequest({
      uri: "test_uri",
      dateCreated: "test_dateCreated",
      dateUpdated: "test_dateUpdated",
      revision: 1,
      from: "test_from",
      to: "test_to",
      text: "test_text",
      notificationUrl: "https://123.abc",
      mediaUrls: [],
    });
    describe("MessageRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.MessageRequest);
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
    describe(".notificationUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.notificationUrl).toBe(value);
      });
    });
    describe(".mediaUrls", () => {
      it("resolves to particular value on initialization", () => {
        const value: any[] = [];
        expect(model.mediaUrls).toStrictEqual(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.MessageRequest;
    let model: freeclimb.MessageRequest = new freeclimb.MessageRequest({
      uri: "",
      dateCreated: "",
      dateUpdated: "",
      revision: 0,
      from: "",
      to: "",
      text: "",
      notificationUrl: "",
      mediaUrls: [],
    });
    describe("MessageRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.MessageRequest);
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
    describe(".notificationUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.notificationUrl).toBe(value);
      });
    });
    describe(".mediaUrls", () => {
      it("resolves to particular value on initialization", () => {
        const value: any[] = [];
        expect(model.mediaUrls).toStrictEqual(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.MessageRequest;
    let constructorArguments = {
      uri: "test_uri",
      dateCreated: "test_dateCreated",
      dateUpdated: "test_dateUpdated",
      revision: 1,
      from: "test_from",
      to: "test_to",
      text: "test_text",
    };
    let model: freeclimb.MessageRequest = new freeclimb.MessageRequest(
      constructorArguments,
    );

    describe("#from", () => {
      it("resolves to initialization value", () => {
        expect(model.from).toBe(constructorArguments["from"]);
      });
    });
    describe("#to", () => {
      it("resolves to initialization value", () => {
        expect(model.to).toBe(constructorArguments["to"]);
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
    describe("#mediaUrls", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "mediaUrls",
        )?.defaultValue;
        expect(model.mediaUrls).toBe(value);
      });
    });
  });
});
