import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("OutDial", () => {
  let model: freeclimb.OutDial = new freeclimb.OutDial({
    actionUrl: "https://123.abc",
    callConnectUrl: "https://123.abc",
    callingNumber: "test_callingNumber",
    destination: "test_destination",

    ifMachine: freeclimb.IfMachine.REDIRECT,
    ifMachineUrl: "https://123.abc",
    sendDigits: "test_sendDigits",
    statusCallbackUrl: "https://123.abc",
    timeout: 1,
    privacyMode: true,
  });
  describe("OutDial class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.OutDial);
    });
  });

  describe(".actionUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.actionUrl).toBe(value);
    });
  });
  describe(".callConnectUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.callConnectUrl).toBe(value);
    });
  });
  describe(".callingNumber", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_callingNumber";
      expect(model.callingNumber).toBe(value);
    });
  });
  describe(".destination", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_destination";
      expect(model.destination).toBe(value);
    });
  });
  describe(".ifMachine", () => {
    it("resolves to particular value on initialization", () => {
      const value = "redirect";
      expect(model.ifMachine).toBe(value);
    });
  });
  describe(".ifMachineUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.ifMachineUrl).toBe(value);
    });
  });
  describe(".sendDigits", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_sendDigits";
      expect(model.sendDigits).toBe(value);
    });
  });
  describe(".statusCallbackUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.statusCallbackUrl).toBe(value);
    });
  });
  describe(".timeout", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.timeout).toBe(value);
    });
  });
  describe(".privacyMode", () => {
    it("resolves to particular value on initialization", () => {
      const value = true;
      expect(model.privacyMode).toBe(value);
    });
  });
});
