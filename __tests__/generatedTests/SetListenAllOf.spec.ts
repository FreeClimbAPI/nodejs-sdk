import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('SetListenAllOf Tests', () => {
    let model: freeclimb.SetListenAllOf = new freeclimb.SetListenAllOf({
        callId: null as any,
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
