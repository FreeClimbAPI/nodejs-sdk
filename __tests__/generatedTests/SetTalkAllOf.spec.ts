import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('SetTalkAllOf Tests', () => {
    let model: freeclimb.SetTalkAllOf = new freeclimb.SetTalkAllOf({
        callId: null as any,
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
