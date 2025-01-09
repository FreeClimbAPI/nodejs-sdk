import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("AccountStatus", () => {
  describe(".CLOSED", () => {
    it("resolves to correct value for CLOSED enum property", () => {
      expect(freeclimb.AccountStatus.CLOSED).toBe("closed");
    });
  });
  describe(".SUSPENDED", () => {
    it("resolves to correct value for SUSPENDED enum property", () => {
      expect(freeclimb.AccountStatus.SUSPENDED).toBe("suspended");
    });
  });
  describe(".ACTIVE", () => {
    it("resolves to correct value for ACTIVE enum property", () => {
      expect(freeclimb.AccountStatus.ACTIVE).toBe("active");
    });
  });
});
