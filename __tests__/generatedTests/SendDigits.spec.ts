import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SendDigits', () => {
    let model: freeclimb.SendDigits = new freeclimb.SendDigits({
        digits: "test_digits",
        pauseMs: 1,
        privacyMode: true,
    })
    describe(".command", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_command"
            model.command = value
            expect(model.command).toBe(value)
        })
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
