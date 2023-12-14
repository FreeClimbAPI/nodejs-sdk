import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('PerclCommand', () => {
    let model: freeclimb.PerclCommand = new freeclimb.PerclCommand({
        command: "test_command",
    })
    describe(".command", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_command"
            expect(model.command).toBe(value)
        })
    })
})
