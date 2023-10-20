import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('Capabilities Tests', () => {
    let model: freeclimb.Capabilities = new freeclimb.Capabilities({
        voice: null as any,
        sms: null as any,
        tollFree: null as any,
        tenDLC: null as any,
        shortCode: null as any,
    })
    test('Test Property voice', () => {
        const value = true
        model.voice = true
        expect(model.voice).toBe(value)
    })
    test('Test Property sms', () => {
        const value = true
        model.sms = true
        expect(model.sms).toBe(value)
    })
    test('Test Property tollFree', () => {
        const value = true
        model.tollFree = true
        expect(model.tollFree).toBe(value)
    })
    test('Test Property tenDLC', () => {
        const value = true
        model.tenDLC = true
        expect(model.tenDLC).toBe(value)
    })
    test('Test Property shortCode', () => {
        const value = true
        model.shortCode = true
        expect(model.shortCode).toBe(value)
    })
})
