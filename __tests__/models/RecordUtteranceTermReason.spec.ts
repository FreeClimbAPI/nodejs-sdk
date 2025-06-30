import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("RecordUtteranceTermReason", () => {
  describe("Test with true values", () => {
    describe(".FINISH_KEY", () => {
      it("resolves to correct value for FINISH_KEY enum property", () => {
        expect(freeclimb.RecordUtteranceTermReason.FINISH_KEY).toBe(
          "finishKey",
        );
      });
    });
    describe(".TIMEOUT", () => {
      it("resolves to correct value for TIMEOUT enum property", () => {
        expect(freeclimb.RecordUtteranceTermReason.TIMEOUT).toBe("timeout");
      });
    });
    describe(".HANGUP", () => {
      it("resolves to correct value for HANGUP enum property", () => {
        expect(freeclimb.RecordUtteranceTermReason.HANGUP).toBe("hangup");
      });
    });
    describe(".MAX_LENGTH", () => {
      it("resolves to correct value for MAX_LENGTH enum property", () => {
        expect(freeclimb.RecordUtteranceTermReason.MAX_LENGTH).toBe(
          "maxLength",
        );
      });
    });
  });
});
