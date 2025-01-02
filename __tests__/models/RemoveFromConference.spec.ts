import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("RemoveFromConference", () => {
  let model: freeclimb.RemoveFromConference =
    new freeclimb.RemoveFromConference({});
  describe("RemoveFromConference class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.RemoveFromConference);
    });
  });
});
