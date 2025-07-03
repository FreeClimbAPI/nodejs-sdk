import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("AddToConference", () => {
  const Klass = freeclimb.AddToConference;
  describe("Test with truthy values", () => {
    let model: freeclimb.AddToConference = new freeclimb.AddToConference({
      allowCallControl: true,
      callControlSequence: "test_callControlSequence",
      callControlUrl: "https://123.abc",
      conferenceId: "test_conferenceId",
      leaveConferenceUrl: "https://123.abc",
      listen: true,
      notificationUrl: "https://123.abc",
      startConfOnEnter: true,
      talk: true,
      dtmfPassThrough: true,
    });
    describe("AddToConference class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.AddToConference);
      });
    });

    describe(".allowCallControl", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.allowCallControl).toBe(value);
      });
    });
    describe(".callControlSequence", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_callControlSequence";
        expect(model.callControlSequence).toBe(value);
      });
    });
    describe(".callControlUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.callControlUrl).toBe(value);
      });
    });
    describe(".conferenceId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_conferenceId";
        expect(model.conferenceId).toBe(value);
      });
    });
    describe(".leaveConferenceUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.leaveConferenceUrl).toBe(value);
      });
    });
    describe(".listen", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.listen).toBe(value);
      });
    });
    describe(".notificationUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model.notificationUrl).toBe(value);
      });
    });
    describe(".startConfOnEnter", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.startConfOnEnter).toBe(value);
      });
    });
    describe(".talk", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.talk).toBe(value);
      });
    });
    describe(".dtmfPassThrough", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.dtmfPassThrough).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.AddToConference = new freeclimb.AddToConference({
      allowCallControl: false,
      callControlSequence: "",
      callControlUrl: "",
      conferenceId: "",
      leaveConferenceUrl: "",
      listen: false,
      notificationUrl: "",
      startConfOnEnter: false,
      talk: false,
      dtmfPassThrough: false,
    });
    describe("AddToConference class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.AddToConference);
      });
    });

    describe(".allowCallControl", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.allowCallControl).toBe(value);
      });
    });
    describe(".callControlSequence", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.callControlSequence).toBe(value);
      });
    });
    describe(".callControlUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.callControlUrl).toBe(value);
      });
    });
    describe(".conferenceId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.conferenceId).toBe(value);
      });
    });
    describe(".leaveConferenceUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.leaveConferenceUrl).toBe(value);
      });
    });
    describe(".listen", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.listen).toBe(value);
      });
    });
    describe(".notificationUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.notificationUrl).toBe(value);
      });
    });
    describe(".startConfOnEnter", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.startConfOnEnter).toBe(value);
      });
    });
    describe(".talk", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.talk).toBe(value);
      });
    });
    describe(".dtmfPassThrough", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.dtmfPassThrough).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {
      conferenceId: "test_conferenceId",
    };
    let model: freeclimb.AddToConference = new freeclimb.AddToConference(
      constructorArguments,
    );

    describe("#allowCallControl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "allowCallControl",
        )?.defaultValue;
        expect(model.allowCallControl).toBe(value);
      });
    });
    describe("#callControlSequence", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "callControlSequence",
        )?.defaultValue;
        expect(model.callControlSequence).toBe(value);
      });
    });
    describe("#callControlUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "callControlUrl",
        )?.defaultValue;
        expect(model.callControlUrl).toBe(value);
      });
    });
    describe("#conferenceId", () => {
      it("resolves to initialization value", () => {
        expect(model.conferenceId).toBe(constructorArguments["conferenceId"]);
      });
    });
    describe("#leaveConferenceUrl", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "leaveConferenceUrl",
        )?.defaultValue;
        expect(model.leaveConferenceUrl).toBe(value);
      });
    });
    describe("#listen", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "listen",
        )?.defaultValue;
        expect(model.listen).toBe(value);
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
    describe("#startConfOnEnter", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "startConfOnEnter",
        )?.defaultValue;
        expect(model.startConfOnEnter).toBe(value);
      });
    });
    describe("#talk", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "talk",
        )?.defaultValue;
        expect(model.talk).toBe(value);
      });
    });
    describe("#dtmfPassThrough", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "dtmfPassThrough",
        )?.defaultValue;
        expect(model.dtmfPassThrough).toBe(value);
      });
    });
  });
});
