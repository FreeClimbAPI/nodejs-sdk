import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('IncomingNumberResultAllOf', () => {
    let model: freeclimb.IncomingNumberResultAllOf = new freeclimb.IncomingNumberResultAllOf({

        capabilities: new freeclimb.Capabilities({
                voice: null as any,
                sms: null as any,
                tollFree: null as any,
                tenDLC: null as any,
                shortCode: null as any,
        }),
        campaignId: "test_campaignId",
        phoneNumberId: "test_phoneNumberId",
        accountId: "test_accountId",
        applicationId: "test_applicationId",
        phoneNumber: "test_phoneNumber",
        alias: "test_alias",
        region: "test_region",
        country: "test_country",
        voiceEnabled: true,
        smsEnabled: true,
        offnet: true,

        tfn: new freeclimb.TFN({
                campaignId: null as any,
        }),
    })
describe("IncomingNumberResultAllOf class test", () => {
     it('resolves to the class type upon initialization', () => {
        expect(model).toBeInstanceOf(freeclimb.IncomingNumberResultAllOf)
     })
})
    describe(".capabilities", () => {
        it('resolves to particular value on initialization', () => {

            const value = new freeclimb.Capabilities({
                voice: null as any,
                sms: null as any,
                tollFree: null as any,
                tenDLC: null as any,
                shortCode: null as any,
            })
            expect(model.capabilities).toStrictEqual(value)
        })
    })
    describe(".campaignId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_campaignId"
            expect(model.campaignId).toBe(value)
        })
    })
    describe(".phoneNumberId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_phoneNumberId"
            expect(model.phoneNumberId).toBe(value)
        })
    })
    describe(".accountId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_accountId"
            expect(model.accountId).toBe(value)
        })
    })
    describe(".applicationId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_applicationId"
            expect(model.applicationId).toBe(value)
        })
    })
    describe(".phoneNumber", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_phoneNumber"
            expect(model.phoneNumber).toBe(value)
        })
    })
    describe(".alias", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_alias"
            expect(model.alias).toBe(value)
        })
    })
    describe(".region", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_region"
            expect(model.region).toBe(value)
        })
    })
    describe(".country", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_country"
            expect(model.country).toBe(value)
        })
    })
    describe(".voiceEnabled", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.voiceEnabled).toBe(value)
        })
    })
    describe(".smsEnabled", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.smsEnabled).toBe(value)
        })
    })
    describe(".offnet", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.offnet).toBe(value)
        })
    })
    describe(".tfn", () => {
        it('resolves to particular value on initialization', () => {

            const value = new freeclimb.TFN({
                campaignId: null as any,
            })
            expect(model.tfn).toStrictEqual(value)
        })
    })
})
