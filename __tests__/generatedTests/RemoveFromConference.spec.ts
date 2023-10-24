import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('RemoveFromConference Tests', () => {
    let model: freeclimb.RemoveFromConference = new freeclimb.RemoveFromConference({
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
})
