import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('RemoveFromConferenceAllOf Tests', () => {
    let model: freeclimb.RemoveFromConferenceAllOf = new freeclimb.RemoveFromConferenceAllOf({
        callId: null as any,
    })
    test('Test Property callId', () => {
        const value = "string"
        model.callId = "string"
        expect(model.callId).toBe(value)
            })
})
