import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('TerminateConference', () => {
    let model: freeclimb.TerminateConference = new freeclimb.TerminateConference({
        conferenceId: "test_conferenceId",
    })
    describe(".command", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_command"
            model.command = value
            expect(model.command).toBe(value)
        })
    })
    describe(".conferenceId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_conferenceId"
            expect(model.conferenceId).toBe(value)
        })
    })
})
