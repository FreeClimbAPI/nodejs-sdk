import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('SMSTenDLCCampaign Tests', () => {
    let model: freeclimb.SMSTenDLCCampaign = new freeclimb.SMSTenDLCCampaign({
        brandId: null as any,
        campaignId: null as any,
        cspId: null as any,
        description: null as any,
        mock: null as any,
        subUsecases: null as any,
        usecase: null as any,
    })
    test('Test Property accountId', () => {
        const value = "string"
        model.accountId = "string"
        expect(model.accountId).toBe(value)
            })
    test('Test Property campaignId', () => {
        const value = "string"
        model.campaignId = "string"
        expect(model.campaignId).toBe(value)
            })
    test('Test Property cspId', () => {
        const value = "string"
        model.cspId = "string"
        expect(model.cspId).toBe(value)
            })
    test('Test Property resellerId', () => {
        const value = "string"
        model.resellerId = "string"
        expect(model.resellerId).toBe(value)
            })
    test('Test Property status', () => {
        const value = freeclimb.SMSTenDLCCampaignStatusEnum.ACTIVE
        model.status = freeclimb.SMSTenDLCCampaignStatusEnum.ACTIVE
        expect(model.status).toBe(value)
            })
    test('Test Property createDate', () => {
        const value = new Date('December 17, 1995 03:24:00')
        model.createDate = value
        expect(model.createDate).toBe(value)
    })
    test('Test Property autoRenewal', () => {
        const value = true
        model.autoRenewal = true
        expect(model.autoRenewal).toBe(value)
    })
    test('Test Property billedDate', () => {
        const value = new Date('December 17, 1995 03:24:00')
        model.billedDate = value
        expect(model.billedDate).toBe(value)
    })
    test('Test Property brandId', () => {
        const value = "string"
        model.brandId = "string"
        expect(model.brandId).toBe(value)
            })
    test('Test Property usecase', () => {
        const value = "string"
        model.usecase = "string"
        expect(model.usecase).toBe(value)
            })
    test('Test Property subUsecases', () => {
        const value = new Set([])
        model.subUsecases = new Set([])
        expect(model.subUsecases).toStrictEqual(value)
    })
    test('Test Property description', () => {
        const value = "string"
        model.description = "string"
        expect(model.description).toBe(value)
            })
    test('Test Property embeddedLink', () => {
        const value = true
        model.embeddedLink = true
        expect(model.embeddedLink).toBe(value)
    })
    test('Test Property embeddedPhone', () => {
        const value = true
        model.embeddedPhone = true
        expect(model.embeddedPhone).toBe(value)
    })
    test('Test Property affiliateMarketing', () => {
        const value = true
        model.affiliateMarketing = true
        expect(model.affiliateMarketing).toBe(value)
    })
    test('Test Property numberPool', () => {
        const value = true
        model.numberPool = true
        expect(model.numberPool).toBe(value)
    })
    test('Test Property ageGated', () => {
        const value = true
        model.ageGated = true
        expect(model.ageGated).toBe(value)
    })
    test('Test Property directLending', () => {
        const value = true
        model.directLending = true
        expect(model.directLending).toBe(value)
    })
    test('Test Property subscriberOptin', () => {
        const value = true
        model.subscriberOptin = true
        expect(model.subscriberOptin).toBe(value)
    })
    test('Test Property subscriberOptout', () => {
        const value = true
        model.subscriberOptout = true
        expect(model.subscriberOptout).toBe(value)
    })
    test('Test Property subscriberHelp', () => {
        const value = true
        model.subscriberHelp = true
        expect(model.subscriberHelp).toBe(value)
    })
    test('Test Property sample1', () => {
        const value = "string"
        model.sample1 = "string"
        expect(model.sample1).toBe(value)
            })
    test('Test Property sample2', () => {
        const value = "string"
        model.sample2 = "string"
        expect(model.sample2).toBe(value)
            })
    test('Test Property sample3', () => {
        const value = "string"
        model.sample3 = "string"
        expect(model.sample3).toBe(value)
            })
    test('Test Property sample4', () => {
        const value = "string"
        model.sample4 = "string"
        expect(model.sample4).toBe(value)
            })
    test('Test Property sample5', () => {
        const value = "string"
        model.sample5 = "string"
        expect(model.sample5).toBe(value)
            })
    test('Test Property messageFlow', () => {
        const value = "string"
        model.messageFlow = "string"
        expect(model.messageFlow).toBe(value)
            })
    test('Test Property helpMessage', () => {
        const value = "string"
        model.helpMessage = "string"
        expect(model.helpMessage).toBe(value)
            })
    test('Test Property referenceId', () => {
        const value = "string"
        model.referenceId = "string"
        expect(model.referenceId).toBe(value)
            })
    test('Test Property mock', () => {
        const value = true
        model.mock = true
        expect(model.mock).toBe(value)
    })
    test('Test Property nextRenewalOrExpirationDate', () => {
        const value = "string"
        model.nextRenewalOrExpirationDate = "string"
        expect(model.nextRenewalOrExpirationDate).toBe(value)
            })
})
