import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SetTalk', () => {
    let model: freeclimb.SetTalk = new freeclimb.SetTalk({
        talk: true,
    })
    describe(".command", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_command"
            model.command = value
            expect(model.command).toBe(value)
        })
    })
    describe(".talk", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.talk).toBe(value)
        })
    })
})
