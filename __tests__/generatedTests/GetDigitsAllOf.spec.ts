import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('GetDigitsAllOf', () => {
    let model: freeclimb.GetDigitsAllOf = new freeclimb.GetDigitsAllOf({
        actionUrl: "https://123.abc",
        digitTimeoutMs: 1,
        finishOnKey: "test_finishOnKey",
        flushBuffer: true,
        initialTimeoutMs: 1,
        maxDigits: 1,
        minDigits: 1,
        prompts: [],
        privacyMode: true,
    })
describe("GetDigitsAllOf class test", () => {
     it('resolves to the class type upon initialization', () => {
        expect(model).toBeInstanceOf(freeclimb.GetDigitsAllOf)
     })
})
    describe(".actionUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "https://123.abc"
            expect(model.actionUrl).toBe(value)
        })
    })
    describe(".digitTimeoutMs", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.digitTimeoutMs).toBe(value)
        })
    })
    describe(".finishOnKey", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_finishOnKey"
            expect(model.finishOnKey).toBe(value)
        })
    })
    describe(".flushBuffer", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.flushBuffer).toBe(value)
        })
    })
    describe(".initialTimeoutMs", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.initialTimeoutMs).toBe(value)
        })
    })
    describe(".maxDigits", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.maxDigits).toBe(value)
        })
    })
    describe(".minDigits", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.minDigits).toBe(value)
        })
    })
    describe(".prompts", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.PerclCommand[] = []
            expect(model.prompts).toStrictEqual(value)
        })
    })
    describe(".privacyMode", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.privacyMode).toBe(value)
        })
    })
})
