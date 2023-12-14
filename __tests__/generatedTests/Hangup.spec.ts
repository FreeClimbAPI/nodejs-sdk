import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('Hangup', () => {
    let model: freeclimb.Hangup = new freeclimb.Hangup({
        reason: "test_reason",
    })
    describe(".command", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_command"
            model.command = value
            expect(model.command).toBe(value)
        })
    })
    describe(".reason", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_reason"
            expect(model.reason).toBe(value)
        })
    })
})
