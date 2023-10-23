import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('SetListen Tests', () => {
    let model: freeclimb.SetListen = new freeclimb.SetListen({
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
    test('Test Property listen', () => {
        const value = true
        model.listen = true
        expect(model.listen).toBe(value)

    })
})
