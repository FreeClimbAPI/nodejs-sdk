import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("QueueMemberList", () => {
  let model: freeclimb.QueueMemberList = new freeclimb.QueueMemberList({
    total: 1,
    start: 1,
    end: 1,
    page: 1,
    numPages: 1,
    pageSize: 1,
    nextPageUri: "test_nextPageUri",
    queueMembers: [],
  });
  describe("QueueMemberList class test", () => {
    it("resolves to the class type upon initialization", () => {
      expect(model).toBeInstanceOf(freeclimb.QueueMemberList);
    });
  });
  describe(".total", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.total).toBe(value);
    });
  });
  describe(".start", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.start).toBe(value);
    });
  });
  describe(".end", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.end).toBe(value);
    });
  });
  describe(".page", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.page).toBe(value);
    });
  });
  describe(".numPages", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.numPages).toBe(value);
    });
  });
  describe(".pageSize", () => {
    it("resolves to particular value on initialization", () => {
      const value = 1;
      expect(model.pageSize).toBe(value);
    });
  });
  describe(".nextPageUri", () => {
    it("resolves to particular value on initialization", () => {
      const value = "test_nextPageUri";
      expect(model.nextPageUri).toBe(value);
    });
  });
  describe(".queueMembers", () => {
    it("resolves to particular value on initialization", () => {
      const value: freeclimb.QueueMember[] = [];
      expect(model.queueMembers).toStrictEqual(value);
    });
  });
});
