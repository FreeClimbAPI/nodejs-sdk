import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('ApplicationRequest Tests', () => {
    let model: freeclimb.ApplicationRequest = new freeclimb.ApplicationRequest({
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
