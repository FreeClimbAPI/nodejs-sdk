import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('GetDigits Tests', () => {
    let model: freeclimb.GetDigits = new freeclimb.GetDigits({
        actionUrl: null as any,
    })
    test('Test Property command', () => {
        const value = "string"
        model.command = "string"
        expect(model.command).toBe(value)
                
    })
    test('Test Property actionUrl', () => {
        const value = "https://123.abc"
        model.actionUrl = value
        expect(model.actionUrl).toBe(value)

    })
    test('Test Property digitTimeoutMs', () => {
        const value = 1
        model.digitTimeoutMs = 1
        expect(model.digitTimeoutMs).toBe(value)

    })
    test('Test Property finishOnKey', () => {
        const value = "string"
        model.finishOnKey = "string"
        expect(model.finishOnKey).toBe(value)
        
    })
    test('Test Property flushBuffer', () => {
        const value = true
        model.flushBuffer = true
        expect(model.flushBuffer).toBe(value)

    })
    test('Test Property initialTimeoutMs', () => {
        const value = "string"
        model.initialTimeoutMs = "string"
        expect(model.initialTimeoutMs).toBe(value)
        
    })
    test('Test Property maxDigits', () => {
        const value = 1
        model.maxDigits = 1
        expect(model.maxDigits).toBe(value)

    })
    test('Test Property minDigits', () => {
        const value = 1
        model.minDigits = 1
        expect(model.minDigits).toBe(value)

    })
    test('Test Property prompts', () => {
        
        const value:freeclimb.PerclCommand[] = []
        model.prompts = value
        expect(model.prompts).toStrictEqual(value)

    })
    test('Test Property privacyMode', () => {
        const value = true
        model.privacyMode = true
        expect(model.privacyMode).toBe(value)

    })
})
