import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("MachineType", () => {
  describe(".ANSWERING_MACHINE", () => {
    it("resolves to correct value for ANSWERING_MACHINE enum property", () => {
      expect(freeclimb.MachineType.ANSWERING_MACHINE).toBe("answering machine");
    });
  });
  describe(".FAX_MODEM", () => {
    it("resolves to correct value for FAX_MODEM enum property", () => {
      expect(freeclimb.MachineType.FAX_MODEM).toBe("fax modem");
    });
  });
});
