import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('RecordingResultAllOf', () => {
    let model: freeclimb.RecordingResultAllOf = new freeclimb.RecordingResultAllOf({
        recordingId: "test_recordingId",
        accountId: "test_accountId",
        callId: "test_callId",
        durationSec: 1,
        conferenceId: "test_conferenceId",
    })
describe("RecordingResultAllOf class test", () => {
     it('resolves to the class type upon initialization', () => {
        expect(model).toBeInstanceOf(freeclimb.RecordingResultAllOf)
     })
})
    describe(".recordingId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_recordingId"
            expect(model.recordingId).toBe(value)
        })
    })
    describe(".accountId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_accountId"
            expect(model.accountId).toBe(value)
        })
    })
    describe(".callId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_callId"
            expect(model.callId).toBe(value)
        })
    })
    describe(".durationSec", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.durationSec).toBe(value)
        })
    })
    describe(".conferenceId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_conferenceId"
            expect(model.conferenceId).toBe(value)
        })
    })
})
