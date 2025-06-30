import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("RecordingResult", () => {
  describe("Test with truthy values", () => {
    let model: freeclimb.RecordingResult = new freeclimb.RecordingResult({
      uri: "test_uri",
      dateCreated: "test_dateCreated",
      dateUpdated: "test_dateUpdated",
      revision: 1,
      recordingId: "test_recordingId",
      accountId: "test_accountId",
      callId: "test_callId",
      durationSec: 1,
      conferenceId: "test_conferenceId",
    });
    describe("RecordingResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.RecordingResult);
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
    describe(".recordingId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_recordingId";
        expect(model.recordingId).toBe(value);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_accountId";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".callId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_callId";
        expect(model.callId).toBe(value);
      });
    });
    describe(".durationSec", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.durationSec).toBe(value);
      });
    });
    describe(".conferenceId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_conferenceId";
        expect(model.conferenceId).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.RecordingResult = new freeclimb.RecordingResult({
      uri: "",
      dateCreated: "",
      dateUpdated: "",
      revision: 0,
      recordingId: "",
      accountId: "",
      callId: "",
      durationSec: 0,
      conferenceId: "",
    });
    describe("RecordingResult class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.RecordingResult);
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
    describe(".recordingId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.recordingId).toBe(value);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".callId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.callId).toBe(value);
      });
    });
    describe(".durationSec", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.durationSec).toBe(value);
      });
    });
    describe(".conferenceId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.conferenceId).toBe(value);
      });
    });
  });
});
