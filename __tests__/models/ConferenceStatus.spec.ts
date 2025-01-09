import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("ConferenceStatus", () => {
  describe(".EMPTY", () => {
    it("resolves to correct value for EMPTY enum property", () => {
      expect(freeclimb.ConferenceStatus.EMPTY).toBe("empty");
    });
  });
  describe(".POPULATED", () => {
    it("resolves to correct value for POPULATED enum property", () => {
      expect(freeclimb.ConferenceStatus.POPULATED).toBe("populated");
    });
  });
  describe(".IN_PROGRESS", () => {
    it("resolves to correct value for IN_PROGRESS enum property", () => {
      expect(freeclimb.ConferenceStatus.IN_PROGRESS).toBe("inProgress");
    });
  });
  describe(".TERMINATED", () => {
    it("resolves to correct value for TERMINATED enum property", () => {
      expect(freeclimb.ConferenceStatus.TERMINATED).toBe("terminated");
    });
  });
});
