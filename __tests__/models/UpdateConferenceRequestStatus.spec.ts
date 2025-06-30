import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("UpdateConferenceRequestStatus", () => {
  describe("Test with true values", () => {
    describe(".EMPTY", () => {
      it("resolves to correct value for EMPTY enum property", () => {
        expect(freeclimb.UpdateConferenceRequestStatus.EMPTY).toBe("empty");
      });
    });
    describe(".TERMINATED", () => {
      it("resolves to correct value for TERMINATED enum property", () => {
        expect(freeclimb.UpdateConferenceRequestStatus.TERMINATED).toBe(
          "terminated",
        );
      });
    });
  });
});
