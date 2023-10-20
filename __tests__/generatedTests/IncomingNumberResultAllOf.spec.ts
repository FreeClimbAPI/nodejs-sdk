import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('IncomingNumberResultAllOf Tests', () => {
    let model: freeclimb.IncomingNumberResultAllOf = new freeclimb.IncomingNumberResultAllOf({
    })
    test('Test Property capabilities', () => {
        
        const value = new freeclimb.Capabilities({
        voice: null as any,
        sms: null as any,
        tollFree: null as any,
        tenDLC: null as any,
        shortCode: null as any,
        })
        model.capabilities = value
        expect(model.capabilities).toBe(value)
    })
    test('Test Property campaignId', () => {
        const value = "string"
        model.campaignId = "string"
        expect(model.campaignId).toBe(value)
            })
    test('Test Property phoneNumberId', () => {
        const value = "string"
        model.phoneNumberId = "string"
        expect(model.phoneNumberId).toBe(value)
            })
    test('Test Property accountId', () => {
        const value = "string"
        model.accountId = "string"
        expect(model.accountId).toBe(value)
            })
    test('Test Property applicationId', () => {
        const value = "string"
        model.applicationId = "string"
        expect(model.applicationId).toBe(value)
            })
    test('Test Property phoneNumber', () => {
        const value = "string"
        model.phoneNumber = "string"
        expect(model.phoneNumber).toBe(value)
            })
    test('Test Property alias', () => {
        const value = "string"
        model.alias = "string"
        expect(model.alias).toBe(value)
            })
    test('Test Property region', () => {
        const value = "string"
        model.region = "string"
        expect(model.region).toBe(value)
            })
    test('Test Property country', () => {
        const value = "string"
        model.country = "string"
        expect(model.country).toBe(value)
            })
    test('Test Property voiceEnabled', () => {
        const value = true
        model.voiceEnabled = true
        expect(model.voiceEnabled).toBe(value)
    })
    test('Test Property smsEnabled', () => {
        const value = true
        model.smsEnabled = true
        expect(model.smsEnabled).toBe(value)
    })
    test('Test Property offnet', () => {
        const value = true
        model.offnet = true
        expect(model.offnet).toBe(value)
    })
})
