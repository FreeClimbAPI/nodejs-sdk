import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('Unpark', () => {
    let model: freeclimb.Unpark = new freeclimb.Unpark({
        command: "Unpark",
    })
    describe(".command", () => {
        it('resolves to particular value on initialization', () => {
            const value = "Unpark"
            expect(model.command).toBe(value)
        })
    })
})
