import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("RedirectWebhook", () => {
  describe("Test with true values", () => {
    let model: freeclimb.RedirectWebhook = new freeclimb.RedirectWebhook({
      requestType: "test_requestType",
      accountId: "test_accountId",
      callId: "test_callId",
      from: "test_from",
      to: "test_to",

      callStatus: freeclimb.CallStatus.QUEUED,

      direction: freeclimb.CallDirection.INBOUND,
      conferenceId: "test_conferenceId",
      queueId: "test_queueId",
      parentCallId: "test_parentCallId",
    });
    describe("RedirectWebhook class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.RedirectWebhook);
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
    describe(".callStatus", () => {
      it("resolves to particular value on initialization", () => {
        const value = "queued";
        expect(model.callStatus).toBe(value);
      });
    });
    describe(".direction", () => {
      it("resolves to particular value on initialization", () => {
        const value = "inbound";
        expect(model.direction).toBe(value);
      });
    });
    describe(".conferenceId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_conferenceId";
        expect(model.conferenceId).toBe(value);
      });
    });
    describe(".queueId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_queueId";
        expect(model.queueId).toBe(value);
      });
    });
    describe(".parentCallId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_parentCallId";
        expect(model.parentCallId).toBe(value);
      });
    });
    describe(".deserialize", () => {
      it("returns an instance of RedirectWebhook", () => {
        expect(
          freeclimb.RedirectWebhook.deserialize('{ "requestType": "redirect"}'),
        ).toBeInstanceOf(freeclimb.RedirectWebhook);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.RedirectWebhook = new freeclimb.RedirectWebhook({
      requestType: "",
      accountId: "",
      callId: "",
      from: "",
      to: "",

      callStatus: freeclimb.CallStatus.QUEUED,

      direction: freeclimb.CallDirection.INBOUND,
      conferenceId: "",
      queueId: "",
      parentCallId: "",
    });
    describe("RedirectWebhook class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.RedirectWebhook);
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
    describe(".callStatus", () => {
      it("resolves to particular value on initialization", () => {
        const value = "queued";
        expect(model.callStatus).toBe(value);
      });
    });
    describe(".direction", () => {
      it("resolves to particular value on initialization", () => {
        const value = "inbound";
        expect(model.direction).toBe(value);
      });
    });
    describe(".conferenceId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.conferenceId).toBe(value);
      });
    });
    describe(".queueId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.queueId).toBe(value);
      });
    });
    describe(".parentCallId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.parentCallId).toBe(value);
      });
    });
    describe(".deserialize", () => {
      it("returns an instance of RedirectWebhook", () => {
        expect(
          freeclimb.RedirectWebhook.deserialize('{ "requestType": "redirect"}'),
        ).toBeInstanceOf(freeclimb.RedirectWebhook);
      });
    });
  });
});
