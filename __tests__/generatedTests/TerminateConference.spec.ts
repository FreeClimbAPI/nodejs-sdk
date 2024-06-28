import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('TerminateConference', () => {
    let model: freeclimb.TerminateConference = new freeclimb.TerminateConference({
        command: "TerminateConference",
    })
    describe(".command", () => {
        it('resolves to particular value on initialization', () => {
            const value = "TerminateConference"
            expect(model.command).toBe(value)
        })
    })
})
