import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('CreateConferenceAllOf Tests', () => {
    let model: freeclimb.CreateConferenceAllOf = new freeclimb.CreateConferenceAllOf({
        actionUrl: null as any,
    })
    test('Test Property actionUrl', () => {
        const value = "https://123.abc"
        model.actionUrl = value
        expect(model.actionUrl).toBe(value)
         
    })
    test('Test Property alias', () => {
        const value = true
        model.alias = true
        expect(model.alias).toBe(value)
         
    })
    test('Test Property playBeep', () => {
        
        expect(freeclimb.PlayBeep.ALWAYS).toBe("always")
        expect(freeclimb.PlayBeep.NEVER).toBe("never")
        expect(freeclimb.PlayBeep.ENTRY_ONLY).toBe("entryOnly")
        expect(freeclimb.PlayBeep.EXIT_ONLY).toBe("exitOnly")
         
    })
    test('Test Property record', () => {
        const value = true
        model.record = true
        expect(model.record).toBe(value)
         
    })
    test('Test Property statusCallbackUrl', () => {
        const value = "string"
        model.statusCallbackUrl = "string"
        expect(model.statusCallbackUrl).toBe(value)
                 
    })
    test('Test Property waitUrl', () => {
        const value = "string"
        model.waitUrl = "string"
        expect(model.waitUrl).toBe(value)
                 
    })
})
