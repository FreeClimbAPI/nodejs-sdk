import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("QueueMember", () => {
  describe("Test with true values", () => {
    let model: freeclimb.QueueMember = new freeclimb.QueueMember({
      uri: "test_uri",
      callId: "test_callId",
      waitTime: 1,
      position: 1,
      dateEnqueued: "test_dateEnqueued",
    });
    describe("QueueMember class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.QueueMember);
      });
    });
    describe(".uri", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_uri";
        expect(model.uri).toBe(value);
      });
    });
    describe(".callId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_callId";
        expect(model.callId).toBe(value);
      });
    });
    describe(".waitTime", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.waitTime).toBe(value);
      });
    });
    describe(".position", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model.position).toBe(value);
      });
    });
    describe(".dateEnqueued", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_dateEnqueued";
        expect(model.dateEnqueued).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.QueueMember = new freeclimb.QueueMember({
      uri: "",
      callId: "",
      waitTime: 0,
      position: 0,
      dateEnqueued: "",
    });
    describe("QueueMember class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.QueueMember);
      });
    });
    describe(".uri", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.uri).toBe(value);
      });
    });
    describe(".callId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.callId).toBe(value);
      });
    });
    describe(".waitTime", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.waitTime).toBe(value);
      });
    });
    describe(".position", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model.position).toBe(value);
      });
    });
    describe(".dateEnqueued", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.dateEnqueued).toBe(value);
      });
    });
  });
});
