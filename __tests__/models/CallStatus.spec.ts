import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("CallStatus", () => {
  describe(".QUEUED", () => {
    it("resolves to correct value for QUEUED enum property", () => {
      expect(freeclimb.CallStatus.QUEUED).toBe("queued");
    });
  });
  describe(".RINGING", () => {
    it("resolves to correct value for RINGING enum property", () => {
      expect(freeclimb.CallStatus.RINGING).toBe("ringing");
    });
  });
  describe(".IN_PROGRESS", () => {
    it("resolves to correct value for IN_PROGRESS enum property", () => {
      expect(freeclimb.CallStatus.IN_PROGRESS).toBe("inProgress");
    });
  });
  describe(".CANCELED", () => {
    it("resolves to correct value for CANCELED enum property", () => {
      expect(freeclimb.CallStatus.CANCELED).toBe("canceled");
    });
  });
  describe(".COMPLETED", () => {
    it("resolves to correct value for COMPLETED enum property", () => {
      expect(freeclimb.CallStatus.COMPLETED).toBe("completed");
    });
  });
  describe(".FAILED", () => {
    it("resolves to correct value for FAILED enum property", () => {
      expect(freeclimb.CallStatus.FAILED).toBe("failed");
    });
  });
  describe(".BUSY", () => {
    it("resolves to correct value for BUSY enum property", () => {
      expect(freeclimb.CallStatus.BUSY).toBe("busy");
    });
  });
  describe(".NO_ANSWER", () => {
    it("resolves to correct value for NO_ANSWER enum property", () => {
      expect(freeclimb.CallStatus.NO_ANSWER).toBe("noAnswer");
    });
  });
});
