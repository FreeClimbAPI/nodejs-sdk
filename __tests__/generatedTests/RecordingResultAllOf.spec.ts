import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('RecordingResultAllOf Tests', () => {
    let model: freeclimb.RecordingResultAllOf = new freeclimb.RecordingResultAllOf({
    })
    test('Test Property recordingId', () => {
        const value = "string"
        model.recordingId = "string"
        expect(model.recordingId).toBe(value)
            })
    test('Test Property accountId', () => {
        const value = "string"
        model.accountId = "string"
        expect(model.accountId).toBe(value)
            })
    test('Test Property callId', () => {
        const value = "string"
        model.callId = "string"
        expect(model.callId).toBe(value)
            })
    test('Test Property durationSec', () => {
        const value = 1
        model.durationSec = 1
        expect(model.durationSec).toBe(value)
    })
    test('Test Property conferenceId', () => {
        const value = "string"
        model.conferenceId = "string"
        expect(model.conferenceId).toBe(value)
            })
})
