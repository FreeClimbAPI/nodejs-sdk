import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SetTalkAllOf', () => {
    let model: freeclimb.SetTalkAllOf = new freeclimb.SetTalkAllOf({
        callId: "test_callId",
        talk: true,
    })
    describe(".callId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_callId"
            expect(model.callId).toBe(value)
        })
    })
    describe(".talk", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.talk).toBe(value)
        })
    })
})
