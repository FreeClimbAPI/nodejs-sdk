import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("Dequeue", () => {
  const Klass = freeclimb.Dequeue;
  describe("Test with truthy values", () => {
    let model: freeclimb.Dequeue = new freeclimb.Dequeue({});
    describe("Dequeue class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Dequeue);
      });
    });
  });
  describe("Test with falsy values", () => {
    let model: freeclimb.Dequeue = new freeclimb.Dequeue({});
    describe("Dequeue class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.Dequeue);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {};
    let model: freeclimb.Dequeue = new freeclimb.Dequeue(constructorArguments);
  });
});
