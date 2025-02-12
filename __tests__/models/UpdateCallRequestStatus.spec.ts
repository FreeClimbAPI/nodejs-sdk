import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("UpdateCallRequestStatus", () => {
  describe(".CANCELED", () => {
    it("resolves to correct value for CANCELED enum property", () => {
      expect(freeclimb.UpdateCallRequestStatus.CANCELED).toBe("canceled");
    });
  });
  describe(".COMPLETED", () => {
    it("resolves to correct value for COMPLETED enum property", () => {
      expect(freeclimb.UpdateCallRequestStatus.COMPLETED).toBe("completed");
    });
  });
});
