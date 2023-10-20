import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('UpdateConferenceParticipantRequest Tests', () => {
    let model: freeclimb.UpdateConferenceParticipantRequest = new freeclimb.UpdateConferenceParticipantRequest({
    })
    test('Test Property talk', () => {
        const value = true
        model.talk = true
        expect(model.talk).toBe(value)
    })
    test('Test Property listen', () => {
        const value = true
        model.listen = true
        expect(model.listen).toBe(value)
    })
})
