import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('RemoveFromConference', () => {
    let model: freeclimb.RemoveFromConference = new freeclimb.RemoveFromConference({
        command: "RemoveFromConference",
    })
    describe(".command", () => {
        it('resolves to particular value on initialization', () => {
            const value = "RemoveFromConference"
            expect(model.command).toBe(value)
        })
    })
})
