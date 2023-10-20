import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('ConferenceParticipantResultAllOf Tests', () => {
    let model: freeclimb.ConferenceParticipantResultAllOf = new freeclimb.ConferenceParticipantResultAllOf({
    })
    test('Test Property accountId', () => {
        const value = "string"
        model.accountId = "string"
        expect(model.accountId).toBe(value)
            })
    test('Test Property conferenceId', () => {
        const value = "string"
        model.conferenceId = "string"
        expect(model.conferenceId).toBe(value)
            })
    test('Test Property callId', () => {
        const value = "string"
        model.callId = "string"
        expect(model.callId).toBe(value)
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
    test('Test Property startConfOnEnter', () => {
        const value = true
        model.startConfOnEnter = true
        expect(model.startConfOnEnter).toBe(value)
    })
})
