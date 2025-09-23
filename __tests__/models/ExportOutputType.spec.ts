import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("ExportOutputType", () => {
  describe("Test with truthy values", () => {
    describe(".CSV", () => {
      it("resolves to correct value for CSV enum property", () => {
        expect(freeclimb.ExportOutputType.CSV).toBe("csv");
      });
    });
  });
});
