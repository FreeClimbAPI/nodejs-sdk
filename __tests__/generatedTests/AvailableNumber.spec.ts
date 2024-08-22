import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('AvailableNumber', () => {
    let model: freeclimb.AvailableNumber = new freeclimb.AvailableNumber({

        capabilities: new freeclimb.Capabilities({
                voice: null as any,
                sms: null as any,
                tollFree: null as any,
                tenDLC: null as any,
                shortCode: null as any,
        }),
        campaignId: "test_campaignId",
        phoneNumber: "test_phoneNumber",
        voiceEnabled: true,
        smsEnabled: true,
        region: "test_region",
        country: "test_country",
    })
    describe("AvailableNumber class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.AvailableNumber)
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
    describe(".phoneNumber", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_phoneNumber"
            expect(model.phoneNumber).toBe(value)
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
})
