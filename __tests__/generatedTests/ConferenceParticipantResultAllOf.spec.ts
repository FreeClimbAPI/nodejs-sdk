import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("ConferenceParticipantResultAllOf", () => {
  let model: freeclimb.ConferenceParticipantResultAllOf =
    new freeclimb.ConferenceParticipantResultAllOf({
      accountId: "test_accountId",
      conferenceId: "test_conferenceId",
      callId: "test_callId",
      talk: true,
      listen: true,
      dtmfPassThrough: true,
      startConfOnEnter: true,
    });
  describe("ConferenceParticipantResultAllOf class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.ConferenceParticipantResultAllOf);
    });
  });
  describe(".accountId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_accountId";
      expect(model.accountId).toBe(value);
    });
  });
  describe(".conferenceId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_conferenceId";
      expect(model.conferenceId).toBe(value);
    });
  });
  describe(".callId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_callId";
      expect(model.callId).toBe(value);
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
  describe(".startConfOnEnter", () => {
    it("resolves to particular value on initialization", () => {
      const value = true;
      expect(model.startConfOnEnter).toBe(value);
    });
  });
});
