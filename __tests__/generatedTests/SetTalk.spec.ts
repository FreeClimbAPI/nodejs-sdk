import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('SetTalk Tests', () => {
    let model: freeclimb.SetTalk = new freeclimb.SetTalk({
        callId: null as any,
    })
    test('Test Property command', () => {
        const value = "string"
        model.command = "string"
        expect(model.command).toBe(value)
                
    })
    test('Test Property callId', () => {
        const value = "string"
        model.callId = "string"
        expect(model.callId).toBe(value)
            })
    test('Test Property talk', () => {
        const value = true
        model.talk = true
        expect(model.talk).toBe(value)
    })
})
