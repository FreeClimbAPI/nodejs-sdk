import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("CreateConference", () => {
  let model: freeclimb.CreateConference = new freeclimb.CreateConference({
    actionUrl: "https://123.abc",
    alias: true,

    playBeep: freeclimb.PlayBeep.ALWAYS,
    record: true,
    statusCallbackUrl: "https://123.abc",
    waitUrl: "https://123.abc",
  });
  describe("CreateConference class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.CreateConference);
    });
  });

  describe(".actionUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.actionUrl).toBe(value);
    });
  });
  describe(".alias", () => {
    it("resolves to particular value on initialization", () => {
      const value = true;
      expect(model.alias).toBe(value);
    });
  });
  describe(".playBeep", () => {
    it("resolves to particular value on initialization", () => {
      const value = "always";
      expect(model.playBeep).toBe(value);
    });
  });
  describe(".record", () => {
    it("resolves to particular value on initialization", () => {
      const value = true;
      expect(model.record).toBe(value);
    });
  });
  describe(".statusCallbackUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.statusCallbackUrl).toBe(value);
    });
  });
  describe(".waitUrl", () => {
    it("resolves to particular value on initialization", () => {
      const value = "https://123.abc";
      expect(model.waitUrl).toBe(value);
    });
  });
});
