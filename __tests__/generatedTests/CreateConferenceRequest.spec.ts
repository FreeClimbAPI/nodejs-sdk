import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('CreateConferenceRequest Tests', () => {
    let model: freeclimb.CreateConferenceRequest = new freeclimb.CreateConferenceRequest({
    })
    test('Test Property alias', () => {
        const value = "string"
        model.alias = "string"
        expect(model.alias).toBe(value)
                 
    })
    test('Test Property playBeep', () => {
        
        const value = "always"
        model.playBeep = freeclimb.PlayBeep.ALWAYS
        expect(model.playBeep).toBe(value)
         
    })
    test('Test Property record', () => {
        const value = true
        model.record = true
        expect(model.record).toBe(value)
         
    })
    test('Test Property waitUrl', () => {
        const value = "string"
        model.waitUrl = "string"
        expect(model.waitUrl).toBe(value)
                 
    })
    test('Test Property statusCallbackUrl', () => {
        const value = "string"
        model.statusCallbackUrl = "string"
        expect(model.statusCallbackUrl).toBe(value)
                 
    })
})
