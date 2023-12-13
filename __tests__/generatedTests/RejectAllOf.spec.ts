import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('RejectAllOf', () => {
    let model: freeclimb.RejectAllOf = new freeclimb.RejectAllOf({
        reason: "test_reason",
    })
    describe(".reason", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_reason"
            expect(model.reason).toBe(value)
        })
    })
})
