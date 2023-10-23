import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('RecordingResult Tests', () => {
    let model: freeclimb.RecordingResult = new freeclimb.RecordingResult({
    })
    test('Test Property uri', () => {
        const value = "string"
        model.uri = "string"
        expect(model.uri).toBe(value)
                
    })
    test('Test Property dateCreated', () => {
        const value = "string"
        model.dateCreated = "string"
        expect(model.dateCreated).toBe(value)
                
    })
    test('Test Property dateUpdated', () => {
        const value = "string"
        model.dateUpdated = "string"
        expect(model.dateUpdated).toBe(value)
                
    })
    test('Test Property revision', () => {
        const value = 1
        model.revision = 1
        expect(model.revision).toBe(value)
        
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
