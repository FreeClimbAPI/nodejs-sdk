import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SayAllOf', () => {
    let model: freeclimb.SayAllOf = new freeclimb.SayAllOf({
        text: "test_text",
        language: "test_language",
        loop: 1,
        conferenceId: "test_conferenceId",
        privacyMode: true,
    })
    describe(".text", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_text"
            expect(model.text).toBe(value)
        })
    })
    describe(".language", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_language"
            expect(model.language).toBe(value)
        })
    })
    describe(".loop", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.loop).toBe(value)
        })
    })
    describe(".conferenceId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_conferenceId"
            expect(model.conferenceId).toBe(value)
        })
    })
    describe(".privacyMode", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.privacyMode).toBe(value)
        })
    })
})
