import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('SMSTenDLCBrand Tests', () => {
    let model: freeclimb.SMSTenDLCBrand = new freeclimb.SMSTenDLCBrand({
        brandRelationship: null as any,
        country: null as any,
        displayName: null as any,
        email: null as any,
        entityType: null as any,
        identityStatus: null as any,
        mock: null as any,
        phone: null as any,
        vertical: null as any,
    })
    test('Test Property accountId', () => {
        const value = "string"
        model.accountId = "string"
        expect(model.accountId).toBe(value)
                 
    })
    test('Test Property entityType', () => {
        const value = freeclimb.SMSTenDLCBrandEntityTypeEnum.GOVERNMENT
        model.entityType = freeclimb.SMSTenDLCBrandEntityTypeEnum.GOVERNMENT
        expect(model.entityType).toBe(value)
                 
    })
    test('Test Property cspId', () => {
        const value = "string"
        model.cspId = "string"
        expect(model.cspId).toBe(value)
                 
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
    test('Test Property ein', () => {
        const value = "string"
        model.ein = "string"
        expect(model.ein).toBe(value)
                 
    })
    test('Test Property einIssuingCountry', () => {
        const value = "string"
        model.einIssuingCountry = "string"
        expect(model.einIssuingCountry).toBe(value)
                 
    })
    test('Test Property phone', () => {
        const value = "string"
        model.phone = "string"
        expect(model.phone).toBe(value)
                 
    })
    test('Test Property street', () => {
        const value = "string"
        model.street = "string"
        expect(model.street).toBe(value)
                 
    })
    test('Test Property city', () => {
        const value = "string"
        model.city = "string"
        expect(model.city).toBe(value)
                 
    })
    test('Test Property state', () => {
        const value = "string"
        model.state = "string"
        expect(model.state).toBe(value)
                 
    })
    test('Test Property postalCode', () => {
        const value = "string"
        model.postalCode = "string"
        expect(model.postalCode).toBe(value)
                 
    })
    test('Test Property country', () => {
        const value = "string"
        model.country = "string"
        expect(model.country).toBe(value)
                 
    })
    test('Test Property email', () => {
        const value = "string"
        model.email = "string"
        expect(model.email).toBe(value)
                 
    })
    test('Test Property stockSymbol', () => {
        const value = "string"
        model.stockSymbol = "string"
        expect(model.stockSymbol).toBe(value)
                 
    })
    test('Test Property stockExchange', () => {
        const value = freeclimb.SMSTenDLCBrandStockExchangeEnum.AMEX
        model.stockExchange = freeclimb.SMSTenDLCBrandStockExchangeEnum.AMEX
        expect(model.stockExchange).toBe(value)
                 
    })
    test('Test Property ipAddress', () => {
        const value = "string"
        model.ipAddress = "string"
        expect(model.ipAddress).toBe(value)
                 
    })
    test('Test Property website', () => {
        const value = "string"
        model.website = "string"
        expect(model.website).toBe(value)
                 
    })
    test('Test Property brandRelationship', () => {
        const value = freeclimb.SMSTenDLCBrandBrandRelationshipEnum.BASIC_ACCOUNT
        model.brandRelationship = freeclimb.SMSTenDLCBrandBrandRelationshipEnum.BASIC_ACCOUNT
        expect(model.brandRelationship).toBe(value)
                 
    })
    test('Test Property vertical', () => {
        const value = "string"
        model.vertical = "string"
        expect(model.vertical).toBe(value)
                 
    })
    test('Test Property altBusinessId', () => {
        const value = "string"
        model.altBusinessId = "string"
        expect(model.altBusinessId).toBe(value)
                 
    })
    test('Test Property altBusinessIdType', () => {
        const value = freeclimb.SMSTenDLCBrandAltBusinessIdTypeEnum.DUNS
        model.altBusinessIdType = freeclimb.SMSTenDLCBrandAltBusinessIdTypeEnum.DUNS
        expect(model.altBusinessIdType).toBe(value)
                 
    })
    test('Test Property universalEin', () => {
        const value = "string"
        model.universalEin = "string"
        expect(model.universalEin).toBe(value)
                 
    })
    test('Test Property referenceId', () => {
        const value = "string"
        model.referenceId = "string"
        expect(model.referenceId).toBe(value)
                 
    })
    test('Test Property optionalAttributes', () => {
        const value = {}
        model.optionalAttributes = {}
        expect(model.optionalAttributes).toStrictEqual(value)
         
    })
    test('Test Property mock', () => {
        const value = true
        model.mock = true
        expect(model.mock).toBe(value)
         
    })
    test('Test Property identityStatus', () => {
        const value = freeclimb.SMSTenDLCBrandIdentityStatusEnum.SELF_DECLARED
        model.identityStatus = freeclimb.SMSTenDLCBrandIdentityStatusEnum.SELF_DECLARED
        expect(model.identityStatus).toBe(value)
                 
    })
    test('Test Property createDate', () => {
        const value = new Date('December 17, 1995 03:24:00')
        model.createDate = value
        expect(model.createDate).toBe(value)
         
    })
})
