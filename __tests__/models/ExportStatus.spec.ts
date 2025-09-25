import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("ExportStatus", () => {
  describe("Test with truthy values", () => {
    describe(".INTAKING", () => {
      it("resolves to correct value for INTAKING enum property", () => {
        expect(freeclimb.ExportStatus.INTAKING).toBe("intaking");
      });
    });
    describe(".QUEUED", () => {
      it("resolves to correct value for QUEUED enum property", () => {
        expect(freeclimb.ExportStatus.QUEUED).toBe("queued");
      });
    });
    describe(".IN_PROGRESS", () => {
      it("resolves to correct value for IN_PROGRESS enum property", () => {
        expect(freeclimb.ExportStatus.IN_PROGRESS).toBe("inProgress");
      });
    });
    describe(".COMPLETED", () => {
      it("resolves to correct value for COMPLETED enum property", () => {
        expect(freeclimb.ExportStatus.COMPLETED).toBe("completed");
      });
    });
    describe(".FAILED", () => {
      it("resolves to correct value for FAILED enum property", () => {
        expect(freeclimb.ExportStatus.FAILED).toBe("failed");
      });
    });
    describe(".DELETED", () => {
      it("resolves to correct value for DELETED enum property", () => {
        expect(freeclimb.ExportStatus.DELETED).toBe("deleted");
      });
    });
  });
});
