import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('HangupAllOf', () => {
    let model: freeclimb.HangupAllOf = new freeclimb.HangupAllOf({
        reason: "test_reason",
    })
    describe(".reason", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_reason"
            expect(model.reason).toBe(value)
        })
    })
})
