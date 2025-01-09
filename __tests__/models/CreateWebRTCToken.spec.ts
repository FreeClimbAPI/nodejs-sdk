import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("CreateWebRTCToken", () => {
  let model: freeclimb.CreateWebRTCToken = new freeclimb.CreateWebRTCToken({
    to: "test_to",
    from: "test_from",
    uses: 1,
  });
  describe("CreateWebRTCToken class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.CreateWebRTCToken);
    });
  });
  describe(".to", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_to";
      expect(model.to).toBe(value);
    });
  });
  describe(".from", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_from";
      expect(model.from).toBe(value);
    });
  });
  describe(".uses", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.uses).toBe(value);
    });
  });
});
