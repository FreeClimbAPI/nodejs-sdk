import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("StartRecordCall", () => {
  let model: freeclimb.StartRecordCall = new freeclimb.StartRecordCall({});
  describe("StartRecordCall class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.StartRecordCall);
    });
  });
});
