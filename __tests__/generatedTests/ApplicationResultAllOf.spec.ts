import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('ApplicationResultAllOf Tests', () => {
    let model: freeclimb.ApplicationResultAllOf = new freeclimb.ApplicationResultAllOf({
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
    test('Test Property alias', () => {
        const value = "string"
        model.alias = "string"
        expect(model.alias).toBe(value)
            })
    test('Test Property voiceUrl', () => {
        const value = "string"
        model.voiceUrl = "string"
        expect(model.voiceUrl).toBe(value)
            })
    test('Test Property voiceFallbackUrl', () => {
        const value = "string"
        model.voiceFallbackUrl = "string"
        expect(model.voiceFallbackUrl).toBe(value)
            })
    test('Test Property callConnectUrl', () => {
        const value = "string"
        model.callConnectUrl = "string"
        expect(model.callConnectUrl).toBe(value)
            })
    test('Test Property statusCallbackUrl', () => {
        const value = "string"
        model.statusCallbackUrl = "string"
        expect(model.statusCallbackUrl).toBe(value)
            })
    test('Test Property smsUrl', () => {
        const value = "string"
        model.smsUrl = "string"
        expect(model.smsUrl).toBe(value)
            })
    test('Test Property smsFallbackUrl', () => {
        const value = "string"
        model.smsFallbackUrl = "string"
        expect(model.smsFallbackUrl).toBe(value)
            })
})
