import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("CompletionResultStatus", () => {
  describe("Test with truthy values", () => {
    describe(".SUCCESS", () => {
      it("resolves to correct value for SUCCESS enum property", () => {
        expect(freeclimb.CompletionResultStatus.SUCCESS).toBe("success");
      });
    });
    describe(".NO_CONTEXT", () => {
      it("resolves to correct value for NO_CONTEXT enum property", () => {
        expect(freeclimb.CompletionResultStatus.NO_CONTEXT).toBe("no_context");
      });
    });
  });
});
