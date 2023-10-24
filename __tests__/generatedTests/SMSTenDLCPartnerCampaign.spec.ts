import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('SMSTenDLCPartnerCampaign Tests', () => {
    let model: freeclimb.SMSTenDLCPartnerCampaign = new freeclimb.SMSTenDLCPartnerCampaign({
        brandId: null as any,
        campaignId: null as any,
        description: null as any,
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
    test('Test Property status', () => {
        const value = freeclimb.SMSTenDLCPartnerCampaignStatusEnum.ACTIVE
        model.status = freeclimb.SMSTenDLCPartnerCampaignStatusEnum.ACTIVE
        expect(model.status).toBe(value)
                 
    })
    test('Test Property createDate', () => {
        const value = new Date('December 17, 1995 03:24:00')
        model.createDate = value
        expect(model.createDate).toBe(value)
         
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
    test('Test Property optinKeywords', () => {
        const value = "string"
        model.optinKeywords = "string"
        expect(model.optinKeywords).toBe(value)
                 
    })
    test('Test Property optoutKeywords', () => {
        const value = "string"
        model.optoutKeywords = "string"
        expect(model.optoutKeywords).toBe(value)
                 
    })
    test('Test Property helpKeywords', () => {
        const value = "string"
        model.helpKeywords = "string"
        expect(model.helpKeywords).toBe(value)
                 
    })
    test('Test Property optinMessage', () => {
        const value = "string"
        model.optinMessage = "string"
        expect(model.optinMessage).toBe(value)
                 
    })
    test('Test Property optoutMessage', () => {
        const value = "string"
        model.optoutMessage = "string"
        expect(model.optoutMessage).toBe(value)
                 
    })
    test('Test Property brand', () => {
        
        const value = new freeclimb.SMSTenDLCPartnerCampaignBrand({
        email: null as any,
        phone: null as any,
        })
        model.brand = value
        expect(model.brand).toBe(value)
         
    })
})
