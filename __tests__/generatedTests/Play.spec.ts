import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('Play', () => {
    let model: freeclimb.Play = new freeclimb.Play({
        file: "test_file",
        loop: 1,
        privacyMode: true,
    })
    describe(".command", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_command"
            model.command = value
            expect(model.command).toBe(value)
        })
    })
    describe(".file", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_file"
            expect(model.file).toBe(value)
        })
    })
    describe(".loop", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.loop).toBe(value)
        })
    })
    describe(".privacyMode", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.privacyMode).toBe(value)
        })
    })
})
