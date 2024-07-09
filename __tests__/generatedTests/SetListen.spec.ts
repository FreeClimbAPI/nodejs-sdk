import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SetListen', () => {
    let model: freeclimb.SetListen = new freeclimb.SetListen({
        listen: true,
    })
    describe(".command", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_command"
            model.command = value
            expect(model.command).toBe(value)
        })
    })
    describe(".listen", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.listen).toBe(value)
        })
    })
})
