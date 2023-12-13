import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('TerminateConferenceAllOf', () => {
    let model: freeclimb.TerminateConferenceAllOf = new freeclimb.TerminateConferenceAllOf({
        conferenceId: "test_conferenceId",
    })
    describe(".conferenceId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_conferenceId"
            expect(model.conferenceId).toBe(value)
        })
    })
})
