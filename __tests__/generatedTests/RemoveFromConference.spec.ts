import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('RemoveFromConference', () => {
    let model: freeclimb.RemoveFromConference = new freeclimb.RemoveFromConference({
        callId: "test_callId",
    })
    describe(".command", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_command"
            model.command = value
            expect(model.command).toBe(value)
        })
    })
    describe(".callId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_callId"
            expect(model.callId).toBe(value)
        })
    })
})
