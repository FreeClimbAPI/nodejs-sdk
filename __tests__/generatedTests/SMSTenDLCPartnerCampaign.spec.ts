import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SMSTenDLCPartnerCampaign', () => {
    let model: freeclimb.SMSTenDLCPartnerCampaign = new freeclimb.SMSTenDLCPartnerCampaign({
        accountId: "test_accountId",
        campaignId: "test_campaignId",
        status: freeclimb.SMSTenDLCPartnerCampaignStatusEnum.ACTIVE,
        createDate: new Date('December 17, 1995 03:24:00'),
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
    })
    describe(".accountId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_accountId"
            expect(model.accountId).toBe(value)
        })
    })
    describe(".campaignId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_campaignId"
            expect(model.campaignId).toBe(value)
        })
    })
    describe(".status", () => {
        it('resolves to particular value on initialization', () => {
        const value = freeclimb.SMSTenDLCPartnerCampaignStatusEnum.ACTIVE
        expect(model.status).toBe(value)
        })
    })
    describe(".createDate", () => {
        it('resolves to particular value on initialization', () => {
            const value = new Date('December 17, 1995 03:24:00')
            expect(model.createDate).toStrictEqual(value)
        })
    })
    describe(".brandId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_brandId"
            expect(model.brandId).toBe(value)
        })
    })
    describe(".usecase", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_usecase"
            expect(model.usecase).toBe(value)
        })
    })
    describe(".description", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_description"
            expect(model.description).toBe(value)
        })
    })
    describe(".embeddedLink", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.embeddedLink).toBe(value)
        })
    })
    describe(".embeddedPhone", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.embeddedPhone).toBe(value)
        })
    })
    describe(".affiliateMarketing", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.affiliateMarketing).toBe(value)
        })
    })
    describe(".numberPool", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.numberPool).toBe(value)
        })
    })
    describe(".ageGated", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.ageGated).toBe(value)
        })
    })
    describe(".directLending", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.directLending).toBe(value)
        })
    })
    describe(".subscriberOptin", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.subscriberOptin).toBe(value)
        })
    })
    describe(".subscriberOptout", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.subscriberOptout).toBe(value)
        })
    })
    describe(".subscriberHelp", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.subscriberHelp).toBe(value)
        })
    })
    describe(".sample1", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_sample1"
            expect(model.sample1).toBe(value)
        })
    })
    describe(".sample2", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_sample2"
            expect(model.sample2).toBe(value)
        })
    })
    describe(".sample3", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_sample3"
            expect(model.sample3).toBe(value)
        })
    })
    describe(".sample4", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_sample4"
            expect(model.sample4).toBe(value)
        })
    })
    describe(".sample5", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_sample5"
            expect(model.sample5).toBe(value)
        })
    })
    describe(".messageFlow", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_messageFlow"
            expect(model.messageFlow).toBe(value)
        })
    })
    describe(".helpMessage", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_helpMessage"
            expect(model.helpMessage).toBe(value)
        })
    })
    describe(".optinKeywords", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_optinKeywords"
            expect(model.optinKeywords).toBe(value)
        })
    })
    describe(".optoutKeywords", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_optoutKeywords"
            expect(model.optoutKeywords).toBe(value)
        })
    })
    describe(".helpKeywords", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_helpKeywords"
            expect(model.helpKeywords).toBe(value)
        })
    })
    describe(".optinMessage", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_optinMessage"
            expect(model.optinMessage).toBe(value)
        })
    })
    describe(".optoutMessage", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_optoutMessage"
            expect(model.optoutMessage).toBe(value)
        })
    })
    describe(".brand", () => {
        it('resolves to particular value on initialization', () => {

            const value = new freeclimb.SMSTenDLCPartnerCampaignBrand({
                email: null as any,
                phone: null as any,
            })
            expect(model.brand).toStrictEqual(value)
        })
    })
})
