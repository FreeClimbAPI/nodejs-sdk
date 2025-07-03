import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("GrammarType", () => {
  const Klass = freeclimb.GrammarType;
  describe("Test with truthy values", () => {
    describe(".URL", () => {
      it("resolves to correct value for URL enum property", () => {
        expect(freeclimb.GrammarType.URL).toBe("URL");
      });
    });
    describe(".BUILT_IN", () => {
      it("resolves to correct value for BUILT_IN enum property", () => {
        expect(freeclimb.GrammarType.BUILT_IN).toBe("BUILTIN");
      });
    });
  });
});
