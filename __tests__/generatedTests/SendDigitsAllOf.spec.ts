import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SendDigitsAllOf', () => {
    let model: freeclimb.SendDigitsAllOf = new freeclimb.SendDigitsAllOf({
        digits: "test_digits",
        pauseMs: 1,
        privacyMode: true,
    })
    describe(".digits", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_digits"
            expect(model.digits).toBe(value)
        })
    })
    describe(".pauseMs", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.pauseMs).toBe(value)
        })
    })
    describe(".privacyMode", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.privacyMode).toBe(value)
        })
    })
})
