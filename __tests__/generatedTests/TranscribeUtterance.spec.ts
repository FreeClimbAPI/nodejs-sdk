import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('TranscribeUtterance', () => {
    let model: freeclimb.TranscribeUtterance = new freeclimb.TranscribeUtterance({
        actionUrl: "test_actionUrl",
        playBeep: true,
        record: new freeclimb.TranscribeUtteranceRecord({
            saveRecording: true,
            maxLengthSec: 1,
            rcrdTerminationSilenceTimeMs: 1
        }),
        privacyForLogging: true,
        privacyForRecording: true,
        prompts: [],
    })
    describe(".actionUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_actionUrl"
            expect(model.actionUrl).toBe(value)
        })
    })
    describe(".playBeep", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.playBeep).toBe(value)
        })
    })
    describe(".record", () => {
        it('resolves to particular value on initialization', () => {
            const value: freeclimb.TranscribeUtteranceRecord  = new freeclimb.TranscribeUtteranceRecord({
                saveRecording: true,
                maxLengthSec: 1,
                rcrdTerminationSilenceTimeMs: 1
            })
            expect(model.record).toStrictEqual(value)
        })
    })
    describe(".privacyForLogging", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.privacyForLogging).toBe(value)
        })
    })
    describe(".privacyForRecording", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.privacyForRecording).toBe(value)
        })
    })
    describe(".prompts", () => {
        it('resolves to particular value on initialization', () => {

            const value:any[] = []
            expect(model.prompts).toStrictEqual(value)
        })
    })
})
