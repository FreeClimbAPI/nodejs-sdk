import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('TranscribeUtteranceAllOf', () => {
    let model: freeclimb.TranscribeUtteranceAllOf = new freeclimb.TranscribeUtteranceAllOf({
        actionUrl: "test_actionUrl",
        playBeep: true,
        record: {},
        privacyForLogging: true,
        privacyForRecording: true,
        prompts: [],
    })
describe("TranscribeUtteranceAllOf class test", () => {
     it('resolves to the class type upon initialization', () => {
        expect(model).toBeInstanceOf(freeclimb.TranscribeUtteranceAllOf)
     })
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
            const value = {}
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
