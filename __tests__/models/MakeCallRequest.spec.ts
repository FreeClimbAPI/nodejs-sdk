import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("MakeCallRequest", () => {
  let model: freeclimb.MakeCallRequest = new freeclimb.MakeCallRequest({
    from: "test_from",
    to: "test_to",
    applicationId: "test_applicationId",
    sendDigits: "test_sendDigits",
    ifMachine: "test_ifMachine",
    ifMachineUrl: "https://123.abc",
    timeout: 1,
    parentCallId: "test_parentCallId",
    privacyMode: true,
    callConnectUrl: "https://123.abc",
  });
  describe("MakeCallRequest class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.MakeCallRequest);
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
  describe(".applicationId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_applicationId";
      expect(model.applicationId).toBe(value);
    });
  });
  describe(".sendDigits", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_sendDigits";
      expect(model.sendDigits).toBe(value);
    });
  });
  describe(".ifMachine", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_ifMachine";
      expect(model.ifMachine).toBe(value);
    });
  });
  describe(".ifMachineUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.ifMachineUrl).toBe(value);
    });
  });
  describe(".timeout", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.timeout).toBe(value);
    });
  });
  describe(".parentCallId", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_parentCallId";
      expect(model.parentCallId).toBe(value);
    });
  });
  describe(".privacyMode", () => {
    it("resolves to particular value on initialization", () => {
      const value = true;
      expect(model.privacyMode).toBe(value);
    });
  });
  describe(".callConnectUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.callConnectUrl).toBe(value);
    });
  });
});
