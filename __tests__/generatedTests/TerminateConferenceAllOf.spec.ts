import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('TerminateConferenceAllOf Tests', () => {
    let model: freeclimb.TerminateConferenceAllOf = new freeclimb.TerminateConferenceAllOf({
        conferenceId: null as any,
    })
    test('Test Property conferenceId', () => {
        const value = "string"
        model.conferenceId = "string"
        expect(model.conferenceId).toBe(value)
                 
    })
})
