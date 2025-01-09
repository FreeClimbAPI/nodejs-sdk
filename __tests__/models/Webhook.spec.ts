import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Webhook", () => {
  let model: freeclimb.Webhook = new freeclimb.Webhook({});
  describe("Webhook class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.Webhook);
    });
  });
});
