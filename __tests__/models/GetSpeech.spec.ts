import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("GetSpeech", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.GetSpeech;
    let model: freeclimb.GetSpeech = new freeclimb.GetSpeech({
      ["actionUrl"]: "https://123.abc",

      ["grammarType"]: freeclimb.GrammarType.URL,
      ["grammarFile"]: "test_grammarFile",
      ["grammarRule"]: "test_grammarRule",
      ["playBeep"]: true,
      ["prompts"]: [],
      ["noInputTimeoutMs"]: 1,
      ["recognitionTimeoutMs"]: 1,
      ["confidenceThreshold"]: 1.0,
      ["sensitivityLevel"]: 1.0,
      ["speechCompleteTimeoutMs"]: 1,
      ["speechIncompleteTimeoutMs"]: 1,
      ["privacyMode"]: true,
    });
    describe("GetSpeech class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.GetSpeech);
      });
    });

    describe(".actionUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "https://123.abc";
        expect(model["actionUrl"]).toBe(value);
      });
    });
    describe(".grammarType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "URL";
        expect(model["grammarType"]).toBe(value);
      });
    });
    describe(".grammarFile", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_grammarFile";
        expect(model["grammarFile"]).toBe(value);
      });
    });
    describe(".grammarRule", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_grammarRule";
        expect(model["grammarRule"]).toBe(value);
      });
    });
    describe(".playBeep", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model["playBeep"]).toBe(value);
      });
    });
    describe(".prompts", () => {
      it("resolves to particular value on initialization", () => {
        const value: freeclimb.PerclCommand[] = [];
        expect(model["prompts"]).toStrictEqual(value);
      });
    });
    describe(".noInputTimeoutMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model["noInputTimeoutMs"]).toBe(value);
      });
    });
    describe(".recognitionTimeoutMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model["recognitionTimeoutMs"]).toBe(value);
      });
    });
    describe(".confidenceThreshold", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1.0;
        expect(model["confidenceThreshold"]).toBe(value);
      });
    });
    describe(".sensitivityLevel", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1.0;
        expect(model["sensitivityLevel"]).toBe(value);
      });
    });
    describe(".speechCompleteTimeoutMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model["speechCompleteTimeoutMs"]).toBe(value);
      });
    });
    describe(".speechIncompleteTimeoutMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 1;
        expect(model["speechIncompleteTimeoutMs"]).toBe(value);
      });
    });
    describe(".privacyMode", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model["privacyMode"]).toBe(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.GetSpeech;
    let model: freeclimb.GetSpeech = new freeclimb.GetSpeech({
      ["actionUrl"]: "",

      ["grammarType"]: freeclimb.GrammarType.URL,
      ["grammarFile"]: "",
      ["grammarRule"]: "",
      ["playBeep"]: false,
      ["prompts"]: [],
      ["noInputTimeoutMs"]: 0,
      ["recognitionTimeoutMs"]: 0,
      ["confidenceThreshold"]: 0.0,
      ["sensitivityLevel"]: 0.0,
      ["speechCompleteTimeoutMs"]: 0,
      ["speechIncompleteTimeoutMs"]: 0,
      ["privacyMode"]: false,
    });
    describe("GetSpeech class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.GetSpeech);
      });
    });

    describe(".actionUrl", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["actionUrl"]).toBe(value);
      });
    });
    describe(".grammarType", () => {
      it("resolves to particular value on initialization", () => {
        const value = "URL";
        expect(model["grammarType"]).toBe(value);
      });
    });
    describe(".grammarFile", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["grammarFile"]).toBe(value);
      });
    });
    describe(".grammarRule", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model["grammarRule"]).toBe(value);
      });
    });
    describe(".playBeep", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model["playBeep"]).toBe(value);
      });
    });
    describe(".prompts", () => {
      it("resolves to particular value on initialization", () => {
        const value: freeclimb.PerclCommand[] = [];
        expect(model["prompts"]).toStrictEqual(value);
      });
    });
    describe(".noInputTimeoutMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model["noInputTimeoutMs"]).toBe(value);
      });
    });
    describe(".recognitionTimeoutMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model["recognitionTimeoutMs"]).toBe(value);
      });
    });
    describe(".confidenceThreshold", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0.0;
        expect(model["confidenceThreshold"]).toBe(value);
      });
    });
    describe(".sensitivityLevel", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0.0;
        expect(model["sensitivityLevel"]).toBe(value);
      });
    });
    describe(".speechCompleteTimeoutMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model["speechCompleteTimeoutMs"]).toBe(value);
      });
    });
    describe(".speechIncompleteTimeoutMs", () => {
      it("resolves to particular value on initialization", () => {
        const value = 0;
        expect(model["speechIncompleteTimeoutMs"]).toBe(value);
      });
    });
    describe(".privacyMode", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model["privacyMode"]).toBe(value);
      });
    });
  });
  describe("Test with only required values", () => {
    const Klass = freeclimb.GetSpeech;
    let constructorArguments = {
      ["actionUrl"]: "https://123.abc",
      ["grammarFile"]: "test_grammarFile",
    };
    let model: freeclimb.GetSpeech = new freeclimb.GetSpeech(
      constructorArguments,
    );

    describe("#actionUrl", () => {
      it("resolves to initialization value", () => {
        expect(model["actionUrl"]).toBe(constructorArguments["actionUrl"]);
      });
    });
    describe("#grammarType", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "grammarType",
        )?.defaultValue;
        expect(model["grammarType"]).toBe(value);
      });
    });
    describe("#grammarFile", () => {
      it("resolves to initialization value", () => {
        expect(model["grammarFile"]).toBe(constructorArguments["grammarFile"]);
      });
    });
    describe("#grammarRule", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "grammarRule",
        )?.defaultValue;
        expect(model["grammarRule"]).toBe(value);
      });
    });
    describe("#playBeep", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "playBeep",
        )?.defaultValue;
        expect(model["playBeep"]).toBe(value);
      });
    });
    describe("#prompts", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "prompts",
        )?.defaultValue;
        expect(model["prompts"]).toBe(value);
      });
    });
    describe("#noInputTimeoutMs", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "noInputTimeoutMs",
        )?.defaultValue;
        expect(model["noInputTimeoutMs"]).toBe(value);
      });
    });
    describe("#recognitionTimeoutMs", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "recognitionTimeoutMs",
        )?.defaultValue;
        expect(model["recognitionTimeoutMs"]).toBe(value);
      });
    });
    describe("#confidenceThreshold", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "confidenceThreshold",
        )?.defaultValue;
        expect(model["confidenceThreshold"]).toBe(value);
      });
    });
    describe("#sensitivityLevel", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "sensitivityLevel",
        )?.defaultValue;
        expect(model["sensitivityLevel"]).toBe(value);
      });
    });
    describe("#speechCompleteTimeoutMs", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "speechCompleteTimeoutMs",
        )?.defaultValue;
        expect(model["speechCompleteTimeoutMs"]).toBe(value);
      });
    });
    describe("#speechIncompleteTimeoutMs", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "speechIncompleteTimeoutMs",
        )?.defaultValue;
        expect(model["speechIncompleteTimeoutMs"]).toBe(value);
      });
    });
    describe("#privacyMode", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "privacyMode",
        )?.defaultValue;
        expect(model["privacyMode"]).toBe(value);
      });
    });
  });
});
