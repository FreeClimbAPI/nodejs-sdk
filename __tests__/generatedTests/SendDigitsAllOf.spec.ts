import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('SendDigitsAllOf Tests', () => {
    let model: freeclimb.SendDigitsAllOf = new freeclimb.SendDigitsAllOf({
        digits: null as any,
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
