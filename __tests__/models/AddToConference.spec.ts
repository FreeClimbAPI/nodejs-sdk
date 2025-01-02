import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("AddToConference", () => {
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
