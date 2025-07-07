import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("MessageStatus", () => {
  describe("Test with truthy values", () => {
    describe(".NEW", () => {
      it("resolves to correct value for NEW enum property", () => {
        expect(freeclimb.MessageStatus.NEW).toBe("new");
      });
    });
    describe(".QUEUED", () => {
      it("resolves to correct value for QUEUED enum property", () => {
        expect(freeclimb.MessageStatus.QUEUED).toBe("queued");
      });
    });
    describe(".REJECTED", () => {
      it("resolves to correct value for REJECTED enum property", () => {
        expect(freeclimb.MessageStatus.REJECTED).toBe("rejected");
      });
    });
    describe(".SENDING", () => {
      it("resolves to correct value for SENDING enum property", () => {
        expect(freeclimb.MessageStatus.SENDING).toBe("sending");
      });
    });
    describe(".SENT", () => {
      it("resolves to correct value for SENT enum property", () => {
        expect(freeclimb.MessageStatus.SENT).toBe("sent");
      });
    });
    describe(".FAILED", () => {
      it("resolves to correct value for FAILED enum property", () => {
        expect(freeclimb.MessageStatus.FAILED).toBe("failed");
      });
    });
    describe(".RECEIVED", () => {
      it("resolves to correct value for RECEIVED enum property", () => {
        expect(freeclimb.MessageStatus.RECEIVED).toBe("received");
      });
    });
    describe(".UNDELIVERED", () => {
      it("resolves to correct value for UNDELIVERED enum property", () => {
        expect(freeclimb.MessageStatus.UNDELIVERED).toBe("undelivered");
      });
    });
    describe(".EXPIRED", () => {
      it("resolves to correct value for EXPIRED enum property", () => {
        expect(freeclimb.MessageStatus.EXPIRED).toBe("expired");
      });
    });
    describe(".DELETED", () => {
      it("resolves to correct value for DELETED enum property", () => {
        expect(freeclimb.MessageStatus.DELETED).toBe("deleted");
      });
    });
    describe(".UNKNOWN", () => {
      it("resolves to correct value for UNKNOWN enum property", () => {
        expect(freeclimb.MessageStatus.UNKNOWN).toBe("unknown");
      });
    });
  });
});
