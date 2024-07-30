import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('GetSpeech', () => {
    let model: freeclimb.GetSpeech = new freeclimb.GetSpeech({
       
        actionUrl: "https://123.abc",

        grammarType: freeclimb.GrammarType.URL,
        grammarFile: "test_grammarFile",
        grammarRule: "test_grammarRule",
        playBeep: true,
        prompts: [],
        noInputTimeoutMs: 1,
        recognitionTimeoutMs: 1,
        confidenceThreshold: 1.0,
        sensitivityLevel: 1.0,
        speechCompleteTimeoutMs: 1,
        speechIncompleteTimeoutMs: 1,
        privacyMode: true,
    })

    describe(".actionUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "https://123.abc"
            expect(model.actionUrl).toBe(value)
        })
    })
    describe(".grammarType", () => {
        it('resolves to particular value on initialization', () => {

            const value = "URL"
            expect(model.grammarType).toBe(value)
        })
    })
    describe(".grammarFile", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_grammarFile"
            expect(model.grammarFile).toBe(value)
        })
    })
    describe(".grammarRule", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_grammarRule"
            expect(model.grammarRule).toBe(value)
        })
    })
    describe(".playBeep", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.playBeep).toBe(value)
        })
    })
    describe(".prompts", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.PerclCommand[] = []
            expect(model.prompts).toStrictEqual(value)
        })
    })
    describe(".noInputTimeoutMs", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.noInputTimeoutMs).toBe(value)
        })
    })
    describe(".recognitionTimeoutMs", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.recognitionTimeoutMs).toBe(value)
        })
    })
    describe(".confidenceThreshold", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1.0
            expect(model.confidenceThreshold).toBe(value)
        })
    })
    describe(".sensitivityLevel", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1.0
            expect(model.sensitivityLevel).toBe(value)
        })
    })
    describe(".speechCompleteTimeoutMs", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.speechCompleteTimeoutMs).toBe(value)
        })
    })
    describe(".speechIncompleteTimeoutMs", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.speechIncompleteTimeoutMs).toBe(value)
        })
    })
    describe(".privacyMode", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.privacyMode).toBe(value)
        })
    })
})
