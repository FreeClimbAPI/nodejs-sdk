import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('Dequeue', () => {
    let model: freeclimb.Dequeue = new freeclimb.Dequeue({
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
