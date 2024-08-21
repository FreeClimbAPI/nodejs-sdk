import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('HangupAllOf', () => {
    let model: freeclimb.HangupAllOf = new freeclimb.HangupAllOf({
        reason: "test_reason",
    })
describe("HangupAllOf class test", () => {
     it('resolves to the class type upon initialization', () => {
        expect(model).toBeInstanceOf(freeclimb.HangupAllOf)
     })
})
    describe(".reason", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_reason"
            expect(model.reason).toBe(value)
        })
    })
})
