import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("LogList", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.LogList;
    let model: freeclimb.LogList = new freeclimb.LogList({
      ["total"]: 1,
      ["start"]: 1,
      ["end"]: 1,
      ["page"]: 1,
      ["numPages"]: 1,
      ["pageSize"]: 1,
      ["nextPageUri"]: "test_nextPageUri",
      ["logs"]: [],
    });
    describe("LogList class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.LogList);
      });
    });
    describe(".total", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model["total"]).toBe(value);
      });
    });
    describe(".start", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model["start"]).toBe(value);
      });
    });
    describe(".end", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model["end"]).toBe(value);
      });
    });
    describe(".page", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model["page"]).toBe(value);
      });
    });
    describe(".numPages", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model["numPages"]).toBe(value);
      });
    });
    describe(".pageSize", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model["pageSize"]).toBe(value);
      });
    });
    describe(".nextPageUri", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_nextPageUri";
        expect(model["nextPageUri"]).toBe(value);
      });
    });
    describe(".logs", () => {
      it("resolves to particular value on initialization", () => {
        const value: freeclimb.LogResult[] = [];
        expect(model["logs"]).toStrictEqual(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.LogList;
    let model: freeclimb.LogList = new freeclimb.LogList({
      ["total"]: 0,
      ["start"]: 0,
      ["end"]: 0,
      ["page"]: 0,
      ["numPages"]: 0,
      ["pageSize"]: 0,
      ["nextPageUri"]: "",
      ["logs"]: [],
    });
    describe("LogList class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.LogList);
      });
    });
    describe(".total", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model["total"]).toBe(value);
      });
    });
    describe(".start", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model["start"]).toBe(value);
      });
    });
    describe(".end", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model["end"]).toBe(value);
      });
    });
    describe(".page", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model["page"]).toBe(value);
      });
    });
    describe(".numPages", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model["numPages"]).toBe(value);
      });
    });
    describe(".pageSize", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model["pageSize"]).toBe(value);
      });
    });
    describe(".nextPageUri", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["nextPageUri"]).toBe(value);
      });
    });
    describe(".logs", () => {
      it("resolves to particular value on initialization", () => {
        const value: freeclimb.LogResult[] = [];
        expect(model["logs"]).toStrictEqual(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.LogList;
    let constructorArguments = {
      ["total"]: 1,
      ["start"]: 1,
      ["end"]: 1,
      ["page"]: 1,
      ["numPages"]: 1,
      ["pageSize"]: 1,
      ["nextPageUri"]: "test_nextPageUri",
    };
    let model: freeclimb.LogList = new freeclimb.LogList(constructorArguments);

    describe("#logs", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "logs",
        )?.defaultValue;
        expect(model["logs"]).toBe(value);
      });
    });
  });
});
