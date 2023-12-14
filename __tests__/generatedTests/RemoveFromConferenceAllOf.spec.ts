import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('RemoveFromConferenceAllOf', () => {
    let model: freeclimb.RemoveFromConferenceAllOf = new freeclimb.RemoveFromConferenceAllOf({
        callId: "test_callId",
    })
    describe(".callId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_callId"
            expect(model.callId).toBe(value)
        })
    })
})
