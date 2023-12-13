import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('Unpark', () => {
    let model: freeclimb.Unpark = new freeclimb.Unpark({
        command: "test_command",
    })
    describe(".command", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_command"
            model.command = value
            expect(model.command).toBe(value)
        })
    })
})
