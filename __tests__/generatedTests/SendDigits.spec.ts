import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('SendDigits Tests', () => {
    let model: freeclimb.SendDigits = new freeclimb.SendDigits({
        digits: null as any,
    })
    test('Test Property command', () => {
        const value = "string"
        model.command = "string"
        expect(model.command).toBe(value)
                
    })
    test('Test Property digits', () => {
        const value = "string"
        model.digits = "string"
        expect(model.digits).toBe(value)
            })
    test('Test Property pauseMs', () => {
        const value = 1
        model.pauseMs = 1
        expect(model.pauseMs).toBe(value)
    })
    test('Test Property privacyMode', () => {
        const value = true
        model.privacyMode = true
        expect(model.privacyMode).toBe(value)
    })
})
