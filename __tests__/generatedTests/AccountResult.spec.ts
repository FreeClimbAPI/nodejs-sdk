import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('AccountResult Tests', () => {
    let model: freeclimb.AccountResult = new freeclimb.AccountResult({
    })
    test('Test Property uri', () => {
        const value = "string"
        model.uri = "string"
        expect(model.uri).toBe(value)
                
    })
    test('Test Property dateCreated', () => {
        const value = "string"
        model.dateCreated = "string"
        expect(model.dateCreated).toBe(value)
                
    })
    test('Test Property dateUpdated', () => {
        const value = "string"
        model.dateUpdated = "string"
        expect(model.dateUpdated).toBe(value)
                
    })
    test('Test Property revision', () => {
        const value = 1
        model.revision = 1
        expect(model.revision).toBe(value)
        
    })
    test('Test Property accountId', () => {
        const value = "string"
        model.accountId = "string"
        expect(model.accountId).toBe(value)
        
    })
    test('Test Property apiKey', () => {
        const value = "string"
        model.apiKey = "string"
        expect(model.apiKey).toBe(value)
        
    })
    test('Test Property alias', () => {
        const value = "string"
        model.alias = "string"
        expect(model.alias).toBe(value)
        
    })
    test('Test Property label', () => {
        const value = "string"
        model.label = "string"
        expect(model.label).toBe(value)
        
    })
    test('Test Property type', () => {
        
        const value = "trial"
        model.type = freeclimb.AccountType.TRIAL
        expect(model.type).toBe(value)

    })
    test('Test Property status', () => {
        
        const value = "closed"
        model.status = freeclimb.AccountStatus.CLOSED
        expect(model.status).toBe(value)

    })
    test('Test Property subresourceUris', () => {
        const value = {}
        model.subresourceUris = {}
        expect(model.subresourceUris).toStrictEqual(value)

    })
})
