import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("ConferenceParticipantListAllOf", () => {
  let model: freeclimb.ConferenceParticipantListAllOf =
    new freeclimb.ConferenceParticipantListAllOf({
      participants: [],
    });
  describe("ConferenceParticipantListAllOf class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.ConferenceParticipantListAllOf);
    });
  });
  describe(".participants", () => {
    it("resolves to particular value on initialization", () => {
      const value: freeclimb.ConferenceParticipantResult[] = [];
      expect(model.participants).toStrictEqual(value);
    });
  });
});
