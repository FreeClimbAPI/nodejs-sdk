import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("UpdateConferenceParticipantRequest", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.UpdateConferenceParticipantRequest;
    let model: freeclimb.UpdateConferenceParticipantRequest =
      new freeclimb.UpdateConferenceParticipantRequest({
        talk: true,
        listen: true,
        dtmfPassThrough: true,
      });
    describe("UpdateConferenceParticipantRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(
          freeclimb.UpdateConferenceParticipantRequest,
        );
      });
    });
    describe(".talk", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.talk).toBe(value);
      });
    });
    describe(".listen", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.listen).toBe(value);
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
    const Klass = freeclimb.UpdateConferenceParticipantRequest;
    let model: freeclimb.UpdateConferenceParticipantRequest =
      new freeclimb.UpdateConferenceParticipantRequest({
        talk: false,
        listen: false,
        dtmfPassThrough: false,
      });
    describe("UpdateConferenceParticipantRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(
          freeclimb.UpdateConferenceParticipantRequest,
        );
      });
    });
    describe(".talk", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.talk).toBe(value);
      });
    });
    describe(".listen", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.listen).toBe(value);
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
    let constructorArguments = {};
    let model: freeclimb.UpdateConferenceParticipantRequest =
      new freeclimb.UpdateConferenceParticipantRequest(constructorArguments);

    describe("#talk", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "talk",
        )?.defaultValue;
        expect(model.talk).toBe(value);
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
