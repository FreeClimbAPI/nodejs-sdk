import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("SMSTenDLCPartnerCampaign", () => {
  describe("Test with truthy values", () => {
    const Klass = freeclimb.SMSTenDLCPartnerCampaign;
    let model: freeclimb.SMSTenDLCPartnerCampaign =
      new freeclimb.SMSTenDLCPartnerCampaign({
        accountId: "test_accountId",
        campaignId: "test_campaignId",

        status: freeclimb.SMSTenDLCPartnerCampaignStatus.ACTIVE,
        createDate: new Date("December 17, 1995 03:24:00"),
        brandId: "test_brandId",
        usecase: "test_usecase",
        description: "test_description",
        embeddedLink: true,
        embeddedPhone: true,
        affiliateMarketing: true,
        numberPool: true,
        ageGated: true,
        directLending: true,
        subscriberOptin: true,
        subscriberOptout: true,
        subscriberHelp: true,
        sample1: "test_sample1",
        sample2: "test_sample2",
        sample3: "test_sample3",
        sample4: "test_sample4",
        sample5: "test_sample5",
        messageFlow: "test_messageFlow",
        helpMessage: "test_helpMessage",
        optinKeywords: "test_optinKeywords",
        optoutKeywords: "test_optoutKeywords",
        helpKeywords: "test_helpKeywords",
        optinMessage: "test_optinMessage",
        optoutMessage: "test_optoutMessage",

        brand: new freeclimb.SMSTenDLCPartnerCampaignBrand({
          email: null as any,
          phone: null as any,
        }),
      });
    describe("SMSTenDLCPartnerCampaign class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.SMSTenDLCPartnerCampaign);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_accountId";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".campaignId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_campaignId";
        expect(model.campaignId).toBe(value);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "ACTIVE";
        expect(model.status).toBe(value);
      });
    });
    describe(".createDate", () => {
      it("resolves to particular value on initialization", () => {
        const value = new Date("December 17, 1995 03:24:00");
        expect(model.createDate).toStrictEqual(value);
      });
    });
    describe(".brandId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_brandId";
        expect(model.brandId).toBe(value);
      });
    });
    describe(".usecase", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_usecase";
        expect(model.usecase).toBe(value);
      });
    });
    describe(".description", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_description";
        expect(model.description).toBe(value);
      });
    });
    describe(".embeddedLink", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.embeddedLink).toBe(value);
      });
    });
    describe(".embeddedPhone", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.embeddedPhone).toBe(value);
      });
    });
    describe(".affiliateMarketing", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.affiliateMarketing).toBe(value);
      });
    });
    describe(".numberPool", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.numberPool).toBe(value);
      });
    });
    describe(".ageGated", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.ageGated).toBe(value);
      });
    });
    describe(".directLending", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.directLending).toBe(value);
      });
    });
    describe(".subscriberOptin", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.subscriberOptin).toBe(value);
      });
    });
    describe(".subscriberOptout", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.subscriberOptout).toBe(value);
      });
    });
    describe(".subscriberHelp", () => {
      it("resolves to particular value on initialization", () => {
        const value = true;
        expect(model.subscriberHelp).toBe(value);
      });
    });
    describe(".sample1", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_sample1";
        expect(model.sample1).toBe(value);
      });
    });
    describe(".sample2", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_sample2";
        expect(model.sample2).toBe(value);
      });
    });
    describe(".sample3", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_sample3";
        expect(model.sample3).toBe(value);
      });
    });
    describe(".sample4", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_sample4";
        expect(model.sample4).toBe(value);
      });
    });
    describe(".sample5", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_sample5";
        expect(model.sample5).toBe(value);
      });
    });
    describe(".messageFlow", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_messageFlow";
        expect(model.messageFlow).toBe(value);
      });
    });
    describe(".helpMessage", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_helpMessage";
        expect(model.helpMessage).toBe(value);
      });
    });
    describe(".optinKeywords", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_optinKeywords";
        expect(model.optinKeywords).toBe(value);
      });
    });
    describe(".optoutKeywords", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_optoutKeywords";
        expect(model.optoutKeywords).toBe(value);
      });
    });
    describe(".helpKeywords", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_helpKeywords";
        expect(model.helpKeywords).toBe(value);
      });
    });
    describe(".optinMessage", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_optinMessage";
        expect(model.optinMessage).toBe(value);
      });
    });
    describe(".optoutMessage", () => {
      it("resolves to particular value on initialization", () => {
        const value = "test_optoutMessage";
        expect(model.optoutMessage).toBe(value);
      });
    });
    describe(".brand", () => {
      it("resolves to particular value on initialization", () => {
        const value = new freeclimb.SMSTenDLCPartnerCampaignBrand({
          email: null as any,
          phone: null as any,
        });
        expect(model.brand).toStrictEqual(value);
      });
    });
  });
  describe("Test with falsy values", () => {
    const Klass = freeclimb.SMSTenDLCPartnerCampaign;
    let model: freeclimb.SMSTenDLCPartnerCampaign =
      new freeclimb.SMSTenDLCPartnerCampaign({
        accountId: "",
        campaignId: "",

        status: freeclimb.SMSTenDLCPartnerCampaignStatus.ACTIVE,
        createDate: undefined,
        brandId: "",
        usecase: "",
        description: "",
        embeddedLink: false,
        embeddedPhone: false,
        affiliateMarketing: false,
        numberPool: false,
        ageGated: false,
        directLending: false,
        subscriberOptin: false,
        subscriberOptout: false,
        subscriberHelp: false,
        sample1: "",
        sample2: "",
        sample3: "",
        sample4: "",
        sample5: "",
        messageFlow: "",
        helpMessage: "",
        optinKeywords: "",
        optoutKeywords: "",
        helpKeywords: "",
        optinMessage: "",
        optoutMessage: "",

        brand: new freeclimb.SMSTenDLCPartnerCampaignBrand({
          email: null as any,
          phone: null as any,
        }),
      });
    describe("SMSTenDLCPartnerCampaign class test", () => {
      it("resolves to the class type upon initialization", () => {
        expect(model).toBeInstanceOf(freeclimb.SMSTenDLCPartnerCampaign);
      });
    });
    describe(".accountId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.accountId).toBe(value);
      });
    });
    describe(".campaignId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.campaignId).toBe(value);
      });
    });
    describe(".status", () => {
      it("resolves to particular value on initialization", () => {
        const value = "ACTIVE";
        expect(model.status).toBe(value);
      });
    });
    describe(".createDate", () => {
      it("resolves to particular value on initialization", () => {
        const value = undefined;
        expect(model.createDate).toStrictEqual(value);
      });
    });
    describe(".brandId", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.brandId).toBe(value);
      });
    });
    describe(".usecase", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.usecase).toBe(value);
      });
    });
    describe(".description", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.description).toBe(value);
      });
    });
    describe(".embeddedLink", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.embeddedLink).toBe(value);
      });
    });
    describe(".embeddedPhone", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.embeddedPhone).toBe(value);
      });
    });
    describe(".affiliateMarketing", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.affiliateMarketing).toBe(value);
      });
    });
    describe(".numberPool", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.numberPool).toBe(value);
      });
    });
    describe(".ageGated", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.ageGated).toBe(value);
      });
    });
    describe(".directLending", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.directLending).toBe(value);
      });
    });
    describe(".subscriberOptin", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.subscriberOptin).toBe(value);
      });
    });
    describe(".subscriberOptout", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.subscriberOptout).toBe(value);
      });
    });
    describe(".subscriberHelp", () => {
      it("resolves to particular value on initialization", () => {
        const value = false;
        expect(model.subscriberHelp).toBe(value);
      });
    });
    describe(".sample1", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.sample1).toBe(value);
      });
    });
    describe(".sample2", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.sample2).toBe(value);
      });
    });
    describe(".sample3", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.sample3).toBe(value);
      });
    });
    describe(".sample4", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.sample4).toBe(value);
      });
    });
    describe(".sample5", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.sample5).toBe(value);
      });
    });
    describe(".messageFlow", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.messageFlow).toBe(value);
      });
    });
    describe(".helpMessage", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.helpMessage).toBe(value);
      });
    });
    describe(".optinKeywords", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.optinKeywords).toBe(value);
      });
    });
    describe(".optoutKeywords", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.optoutKeywords).toBe(value);
      });
    });
    describe(".helpKeywords", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.helpKeywords).toBe(value);
      });
    });
    describe(".optinMessage", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.optinMessage).toBe(value);
      });
    });
    describe(".optoutMessage", () => {
      it("resolves to particular value on initialization", () => {
        const value = "";
        expect(model.optoutMessage).toBe(value);
      });
    });
    describe(".brand", () => {
      it("resolves to particular value on initialization", () => {
        const value = new freeclimb.SMSTenDLCPartnerCampaignBrand({
          email: null as any,
          phone: null as any,
        });
        expect(model.brand).toStrictEqual(value);
      });
    });
  });
  describe("Test with only required values", () => {
    let constructorArguments = {
      campaignId: "test_campaignId",
      brandId: "test_brandId",
      usecase: "test_usecase",
      description: "test_description",
    };
    let model: freeclimb.SMSTenDLCPartnerCampaign =
      new freeclimb.SMSTenDLCPartnerCampaign(constructorArguments);

    describe("#accountId", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "accountId",
        )?.defaultValue;
        expect(model.accountId).toBe(value);
      });
    });
    describe("#campaignId", () => {
      it("resolves to initialization value", () => {
        expect(model.campaignId).toBe(constructorArguments["campaignId"]);
      });
    });
    describe("#status", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "status",
        )?.defaultValue;
        expect(model.status).toBe(value);
      });
    });
    describe("#createDate", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "createDate",
        )?.defaultValue;
        expect(model.createDate).toBe(value);
      });
    });
    describe("#brandId", () => {
      it("resolves to initialization value", () => {
        expect(model.brandId).toBe(constructorArguments["brandId"]);
      });
    });
    describe("#usecase", () => {
      it("resolves to initialization value", () => {
        expect(model.usecase).toBe(constructorArguments["usecase"]);
      });
    });
    describe("#description", () => {
      it("resolves to initialization value", () => {
        expect(model.description).toBe(constructorArguments["description"]);
      });
    });
    describe("#embeddedLink", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "embeddedLink",
        )?.defaultValue;
        expect(model.embeddedLink).toBe(value);
      });
    });
    describe("#embeddedPhone", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "embeddedPhone",
        )?.defaultValue;
        expect(model.embeddedPhone).toBe(value);
      });
    });
    describe("#affiliateMarketing", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "affiliateMarketing",
        )?.defaultValue;
        expect(model.affiliateMarketing).toBe(value);
      });
    });
    describe("#numberPool", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "numberPool",
        )?.defaultValue;
        expect(model.numberPool).toBe(value);
      });
    });
    describe("#ageGated", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "ageGated",
        )?.defaultValue;
        expect(model.ageGated).toBe(value);
      });
    });
    describe("#directLending", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "directLending",
        )?.defaultValue;
        expect(model.directLending).toBe(value);
      });
    });
    describe("#subscriberOptin", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "subscriberOptin",
        )?.defaultValue;
        expect(model.subscriberOptin).toBe(value);
      });
    });
    describe("#subscriberOptout", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "subscriberOptout",
        )?.defaultValue;
        expect(model.subscriberOptout).toBe(value);
      });
    });
    describe("#subscriberHelp", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "subscriberHelp",
        )?.defaultValue;
        expect(model.subscriberHelp).toBe(value);
      });
    });
    describe("#sample1", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "sample1",
        )?.defaultValue;
        expect(model.sample1).toBe(value);
      });
    });
    describe("#sample2", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "sample2",
        )?.defaultValue;
        expect(model.sample2).toBe(value);
      });
    });
    describe("#sample3", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "sample3",
        )?.defaultValue;
        expect(model.sample3).toBe(value);
      });
    });
    describe("#sample4", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "sample4",
        )?.defaultValue;
        expect(model.sample4).toBe(value);
      });
    });
    describe("#sample5", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "sample5",
        )?.defaultValue;
        expect(model.sample5).toBe(value);
      });
    });
    describe("#messageFlow", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "messageFlow",
        )?.defaultValue;
        expect(model.messageFlow).toBe(value);
      });
    });
    describe("#helpMessage", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "helpMessage",
        )?.defaultValue;
        expect(model.helpMessage).toBe(value);
      });
    });
    describe("#optinKeywords", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "optinKeywords",
        )?.defaultValue;
        expect(model.optinKeywords).toBe(value);
      });
    });
    describe("#optoutKeywords", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "optoutKeywords",
        )?.defaultValue;
        expect(model.optoutKeywords).toBe(value);
      });
    });
    describe("#helpKeywords", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "helpKeywords",
        )?.defaultValue;
        expect(model.helpKeywords).toBe(value);
      });
    });
    describe("#optinMessage", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "optinMessage",
        )?.defaultValue;
        expect(model.optinMessage).toBe(value);
      });
    });
    describe("#optoutMessage", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "optoutMessage",
        )?.defaultValue;
        expect(model.optoutMessage).toBe(value);
      });
    });
    describe("#brand", () => {
      it("resolves to default value on initialization if no value is provided", () => {
        const value = Klass.attributeTypeMap.find(
          (attribute) => attribute.name === "brand",
        )?.defaultValue;
        expect(model.brand).toBe(value);
      });
    });
  });
});
