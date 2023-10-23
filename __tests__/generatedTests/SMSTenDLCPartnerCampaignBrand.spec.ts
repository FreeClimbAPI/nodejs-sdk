import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('SMSTenDLCPartnerCampaignBrand Tests', () => {
    let model: freeclimb.SMSTenDLCPartnerCampaignBrand = new freeclimb.SMSTenDLCPartnerCampaignBrand({
        email: null as any,
        phone: null as any,
    })
    test('Test Property accountId', () => {
        const value = "string"
        model.accountId = "string"
        expect(model.accountId).toBe(value)
                 
    })
    test('Test Property brandId', () => {
        const value = "string"
        model.brandId = "string"
        expect(model.brandId).toBe(value)
                 
    })
    test('Test Property firstName', () => {
        const value = "string"
        model.firstName = "string"
        expect(model.firstName).toBe(value)
                 
    })
    test('Test Property lastName', () => {
        const value = "string"
        model.lastName = "string"
        expect(model.lastName).toBe(value)
                 
    })
    test('Test Property displayName', () => {
        const value = "string"
        model.displayName = "string"
        expect(model.displayName).toBe(value)
                 
    })
    test('Test Property companyName', () => {
        const value = "string"
        model.companyName = "string"
        expect(model.companyName).toBe(value)
                 
    })
    test('Test Property phone', () => {
        const value = "string"
        model.phone = "string"
        expect(model.phone).toBe(value)
                 
    })
    test('Test Property email', () => {
        const value = "string"
        model.email = "string"
        expect(model.email).toBe(value)
                 
    })
    test('Test Property website', () => {
        const value = "string"
        model.website = "string"
        expect(model.website).toBe(value)
                 
    })
    test('Test Property optionalAttributes', () => {
        const value = {}
        model.optionalAttributes = {}
        expect(model.optionalAttributes).toStrictEqual(value)
         
    })
    test('Test Property evpVettingScore', () => {
        const value = 1
        model.evpVettingScore = 1
        expect(model.evpVettingScore).toBe(value)
         
    })
})
