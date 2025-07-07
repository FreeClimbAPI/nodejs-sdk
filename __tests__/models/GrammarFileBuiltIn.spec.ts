import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("GrammarFileBuiltIn", () => {
  describe("Test with truthy values", () => {
    describe(".ALPHNUM6", () => {
      it("resolves to correct value for ALPHNUM6 enum property", () => {
        expect(freeclimb.GrammarFileBuiltIn.ALPHNUM6).toBe("ALPHNUM6");
      });
    });
    describe(".ANY_DIG", () => {
      it("resolves to correct value for ANY_DIG enum property", () => {
        expect(freeclimb.GrammarFileBuiltIn.ANY_DIG).toBe("ANY_DIG");
      });
    });
    describe(".DIG1", () => {
      it("resolves to correct value for DIG1 enum property", () => {
        expect(freeclimb.GrammarFileBuiltIn.DIG1).toBe("DIG1");
      });
    });
    describe(".DIG2", () => {
      it("resolves to correct value for DIG2 enum property", () => {
        expect(freeclimb.GrammarFileBuiltIn.DIG2).toBe("DIG2");
      });
    });
    describe(".DIG3", () => {
      it("resolves to correct value for DIG3 enum property", () => {
        expect(freeclimb.GrammarFileBuiltIn.DIG3).toBe("DIG3");
      });
    });
    describe(".DIG4", () => {
      it("resolves to correct value for DIG4 enum property", () => {
        expect(freeclimb.GrammarFileBuiltIn.DIG4).toBe("DIG4");
      });
    });
    describe(".DIG5", () => {
      it("resolves to correct value for DIG5 enum property", () => {
        expect(freeclimb.GrammarFileBuiltIn.DIG5).toBe("DIG5");
      });
    });
    describe(".DIG6", () => {
      it("resolves to correct value for DIG6 enum property", () => {
        expect(freeclimb.GrammarFileBuiltIn.DIG6).toBe("DIG6");
      });
    });
    describe(".DIG7", () => {
      it("resolves to correct value for DIG7 enum property", () => {
        expect(freeclimb.GrammarFileBuiltIn.DIG7).toBe("DIG7");
      });
    });
    describe(".DIG8", () => {
      it("resolves to correct value for DIG8 enum property", () => {
        expect(freeclimb.GrammarFileBuiltIn.DIG8).toBe("DIG8");
      });
    });
    describe(".DIG9", () => {
      it("resolves to correct value for DIG9 enum property", () => {
        expect(freeclimb.GrammarFileBuiltIn.DIG9).toBe("DIG9");
      });
    });
    describe(".DIG10", () => {
      it("resolves to correct value for DIG10 enum property", () => {
        expect(freeclimb.GrammarFileBuiltIn.DIG10).toBe("DIG10");
      });
    });
    describe(".DIG11", () => {
      it("resolves to correct value for DIG11 enum property", () => {
        expect(freeclimb.GrammarFileBuiltIn.DIG11).toBe("DIG11");
      });
    });
    describe(".UP_TO_20_DIGIT_SEQUENCE", () => {
      it("resolves to correct value for UP_TO_20_DIGIT_SEQUENCE enum property", () => {
        expect(freeclimb.GrammarFileBuiltIn.UP_TO_20_DIGIT_SEQUENCE).toBe(
          "UP_TO_20_DIGIT_SEQUENCE",
        );
      });
    });
    describe(".VERSAY_YESNO", () => {
      it("resolves to correct value for VERSAY_YESNO enum property", () => {
        expect(freeclimb.GrammarFileBuiltIn.VERSAY_YESNO).toBe("VERSAY_YESNO");
      });
    });
  });
});
