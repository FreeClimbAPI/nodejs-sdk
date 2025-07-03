import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("CallEndedReason", () => {
  const Klass = freeclimb.CallEndedReason;
  describe("Test with truthy values", () => {
    describe(".BUSY", () => {
      it("resolves to correct value for BUSY enum property", () => {
        expect(freeclimb.CallEndedReason.BUSY).toBe("busy");
      });
    });
    describe(".FAILED", () => {
      it("resolves to correct value for FAILED enum property", () => {
        expect(freeclimb.CallEndedReason.FAILED).toBe("failed");
      });
    });
    describe(".NO_ANSWER", () => {
      it("resolves to correct value for NO_ANSWER enum property", () => {
        expect(freeclimb.CallEndedReason.NO_ANSWER).toBe("noAnswer");
      });
    });
    describe(".CALL_CANCELED", () => {
      it("resolves to correct value for CALL_CANCELED enum property", () => {
        expect(freeclimb.CallEndedReason.CALL_CANCELED).toBe("callCanceled");
      });
    });
    describe(".FAR_END_HANGUP", () => {
      it("resolves to correct value for FAR_END_HANGUP enum property", () => {
        expect(freeclimb.CallEndedReason.FAR_END_HANGUP).toBe("farEndHangup");
      });
    });
    describe(".APP_HANGUP", () => {
      it("resolves to correct value for APP_HANGUP enum property", () => {
        expect(freeclimb.CallEndedReason.APP_HANGUP).toBe("appHangup");
      });
    });
    describe(".APP_REJECT", () => {
      it("resolves to correct value for APP_REJECT enum property", () => {
        expect(freeclimb.CallEndedReason.APP_REJECT).toBe("appReject");
      });
    });
    describe(".APP_NO_PERCL", () => {
      it("resolves to correct value for APP_NO_PERCL enum property", () => {
        expect(freeclimb.CallEndedReason.APP_NO_PERCL).toBe("appNoPercl");
      });
    });
    describe(".APP_INVALID_PERCL", () => {
      it("resolves to correct value for APP_INVALID_PERCL enum property", () => {
        expect(freeclimb.CallEndedReason.APP_INVALID_PERCL).toBe(
          "appInvalidPercl",
        );
      });
    });
    describe(".CONFERENCE_TERMINATED", () => {
      it("resolves to correct value for CONFERENCE_TERMINATED enum property", () => {
        expect(freeclimb.CallEndedReason.CONFERENCE_TERMINATED).toBe(
          "conferenceTerminated",
        );
      });
    });
    describe(".CONFERENCE_EMPTIED", () => {
      it("resolves to correct value for CONFERENCE_EMPTIED enum property", () => {
        expect(freeclimb.CallEndedReason.CONFERENCE_EMPTIED).toBe(
          "conferenceEmptied",
        );
      });
    });
    describe(".REMOVED_FROM_CONFERENCE", () => {
      it("resolves to correct value for REMOVED_FROM_CONFERENCE enum property", () => {
        expect(freeclimb.CallEndedReason.REMOVED_FROM_CONFERENCE).toBe(
          "removedFromConference",
        );
      });
    });
    describe(".MACHINE_DETECTED", () => {
      it("resolves to correct value for MACHINE_DETECTED enum property", () => {
        expect(freeclimb.CallEndedReason.MACHINE_DETECTED).toBe(
          "machineDetected",
        );
      });
    });
    describe(".WEBHOOK_FAILED", () => {
      it("resolves to correct value for WEBHOOK_FAILED enum property", () => {
        expect(freeclimb.CallEndedReason.WEBHOOK_FAILED).toBe("webhookFailed");
      });
    });
    describe(".WEBHOOK_INVALID_RESPONSE", () => {
      it("resolves to correct value for WEBHOOK_INVALID_RESPONSE enum property", () => {
        expect(freeclimb.CallEndedReason.WEBHOOK_INVALID_RESPONSE).toBe(
          "webhookInvalidResponse",
        );
      });
    });
    describe(".VOICE_DISABLED", () => {
      it("resolves to correct value for VOICE_DISABLED enum property", () => {
        expect(freeclimb.CallEndedReason.VOICE_DISABLED).toBe("voiceDisabled");
      });
    });
    describe(".CONFIG_ERROR_NO_APPLICATION", () => {
      it("resolves to correct value for CONFIG_ERROR_NO_APPLICATION enum property", () => {
        expect(freeclimb.CallEndedReason.CONFIG_ERROR_NO_APPLICATION).toBe(
          "configErrorNoApplication",
        );
      });
    });
    describe(".CONFIG_ERROR_NO_VOICE_URL", () => {
      it("resolves to correct value for CONFIG_ERROR_NO_VOICE_URL enum property", () => {
        expect(freeclimb.CallEndedReason.CONFIG_ERROR_NO_VOICE_URL).toBe(
          "configErrorNoVoiceUrl",
        );
      });
    });
    describe(".MAX_REDIRECTS_ERROR", () => {
      it("resolves to correct value for MAX_REDIRECTS_ERROR enum property", () => {
        expect(freeclimb.CallEndedReason.MAX_REDIRECTS_ERROR).toBe(
          "maxRedirectsError",
        );
      });
    });
    describe(".PERCL_PROCESSING_ERROR", () => {
      it("resolves to correct value for PERCL_PROCESSING_ERROR enum property", () => {
        expect(freeclimb.CallEndedReason.PERCL_PROCESSING_ERROR).toBe(
          "perclProcessingError",
        );
      });
    });
    describe(".INTERNAL_ERROR", () => {
      it("resolves to correct value for INTERNAL_ERROR enum property", () => {
        expect(freeclimb.CallEndedReason.INTERNAL_ERROR).toBe("internalError");
      });
    });
    describe(".GRPC_HANGUP", () => {
      it("resolves to correct value for GRPC_HANGUP enum property", () => {
        expect(freeclimb.CallEndedReason.GRPC_HANGUP).toBe("grpcHangup");
      });
    });
    describe(".MAX_DURATION", () => {
      it("resolves to correct value for MAX_DURATION enum property", () => {
        expect(freeclimb.CallEndedReason.MAX_DURATION).toBe("maxDuration");
      });
    });
  });
});
