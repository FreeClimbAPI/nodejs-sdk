import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('Redirect', () => {
    let model: freeclimb.Redirect = new freeclimb.Redirect({
        actionUrl: "https://123.abc",
    })
    describe(".command", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_command"
            model.command = value
            expect(model.command).toBe(value)
        })
    })
    describe(".actionUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "https://123.abc"
            expect(model.actionUrl).toBe(value)
        })
    })
})
