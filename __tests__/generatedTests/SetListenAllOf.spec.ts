import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SetListenAllOf', () => {
    let model: freeclimb.SetListenAllOf = new freeclimb.SetListenAllOf({
        callId: "test_callId",
        listen: true,
    })
    describe(".callId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_callId"
            expect(model.callId).toBe(value)
        })
    })
    describe(".listen", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.listen).toBe(value)
        })
    })
})
