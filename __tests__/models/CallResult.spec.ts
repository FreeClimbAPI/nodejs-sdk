import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("CallResult", () => {
  let model: freeclimb.CallResult = new freeclimb.CallResult({
    uri: "test_uri",
    dateCreated: "test_dateCreated",
    dateUpdated: "test_dateUpdated",
    revision: 1,
    callId: "test_callId",
    parentCallId: "test_parentCallId",
    accountId: "test_accountId",
    from: "test_from",
    to: "test_to",
    phoneNumberId: "test_phoneNumberId",

    callStatus: freeclimb.CallStatus.QUEUED,
    startTime: "test_startTime",
    connectTime: "test_connectTime",
    endTime: "test_endTime",
    duration: 1,
    connectDuration: 1,

    direction: freeclimb.CallDirection.INBOUND,

    answeredBy: freeclimb.AnsweredBy.HUMAN,
    subresourceUris: {},
    applicationId: "test_applicationId",
  });
  describe("CallResult class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.CallResult);
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
  describe(".callId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_callId";
      expect(model.callId).toBe(value);
    });
  });
  describe(".parentCallId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_parentCallId";
      expect(model.parentCallId).toBe(value);
    });
  });
  describe(".accountId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_accountId";
      expect(model.accountId).toBe(value);
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
  describe(".phoneNumberId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_phoneNumberId";
      expect(model.phoneNumberId).toBe(value);
    });
  });
  describe(".callStatus", () => {
    it("resolves to particular value on initialization", () => {
      const value = "queued";
      expect(model.callStatus).toBe(value);
    });
  });
  describe(".startTime", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_startTime";
      expect(model.startTime).toBe(value);
    });
  });
  describe(".connectTime", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_connectTime";
      expect(model.connectTime).toBe(value);
    });
  });
  describe(".endTime", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_endTime";
      expect(model.endTime).toBe(value);
    });
  });
  describe(".duration", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.duration).toBe(value);
    });
  });
  describe(".connectDuration", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.connectDuration).toBe(value);
    });
  });
  describe(".direction", () => {
    it("resolves to particular value on initialization", () => {
      const value = "inbound";
      expect(model.direction).toBe(value);
    });
  });
  describe(".answeredBy", () => {
    it("resolves to particular value on initialization", () => {
      const value = "human";
      expect(model.answeredBy).toBe(value);
    });
  });
  describe(".subresourceUris", () => {
    it("resolves to particular value on initialization", () => {
      const value = {};
      expect(model.subresourceUris).toStrictEqual(value);
    });
  });
  describe(".applicationId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_applicationId";
      expect(model.applicationId).toBe(value);
    });
  });
});
