import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('Pause', () => {
    let model: freeclimb.Pause = new freeclimb.Pause({
        length: 1,
    })
    describe(".command", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_command"
            model.command = value
            expect(model.command).toBe(value)
        })
    })
    describe(".length", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.length).toBe(value)
        })
    })
})
