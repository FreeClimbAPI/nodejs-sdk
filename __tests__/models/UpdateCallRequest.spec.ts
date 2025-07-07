import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("UpdateCallRequest", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.UpdateCallRequest;
    let model: freeclimb.UpdateCallRequest = new freeclimb.UpdateCallRequest({
      status: freeclimb.UpdateCallRequestStatus.CANCELED,
    });
    describe("UpdateCallRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.UpdateCallRequest);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "canceled";
        expect(model.status).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.UpdateCallRequest;
    let model: freeclimb.UpdateCallRequest = new freeclimb.UpdateCallRequest({
      status: freeclimb.UpdateCallRequestStatus.CANCELED,
    });
    describe("UpdateCallRequest class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.UpdateCallRequest);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "canceled";
        expect(model.status).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {
      status: freeclimb.UpdateCallRequestStatus.CANCELED,
    };
    let model: freeclimb.UpdateCallRequest = new freeclimb.UpdateCallRequest(
      constructorArguments,
    );

    describe("#status", () => {
      it("resolves to initialization value", () => {
        expect(model.status).toBe(constructorArguments["status"]);
      });
    });
  });
});
