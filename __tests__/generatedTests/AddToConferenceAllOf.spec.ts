import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("AddToConferenceAllOf", () => {
  let model: freeclimb.AddToConferenceAllOf =
    new freeclimb.AddToConferenceAllOf({
      allowCallControl: true,
      callControlSequence: "test_callControlSequence",
      callControlUrl: "test_callControlUrl",
      conferenceId: "test_conferenceId",
      leaveConferenceUrl: "test_leaveConferenceUrl",
      listen: true,
      notificationUrl: "test_notificationUrl",
      startConfOnEnter: true,
      talk: true,
      dtmfPassThrough: true,
    });
  describe("AddToConferenceAllOf class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.AddToConferenceAllOf);
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
      const value = "test_callControlUrl";
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
      const value = "test_leaveConferenceUrl";
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
      const value = "test_notificationUrl";
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
