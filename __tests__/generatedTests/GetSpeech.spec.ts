import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('GetSpeech Tests', () => {
    let model: freeclimb.GetSpeech = new freeclimb.GetSpeech({
        actionUrl: null as any,
        grammarFile: null as any,
    })
    test('Test Property command', () => {
        const value = "string"
        model.command = "string"
        expect(model.command).toBe(value)
                
    })
    test('Test Property actionUrl', () => {
        const value = "https://123.abc"
        model.actionUrl = value
        expect(model.actionUrl).toBe(value)

    })
    test('Test Property grammarType', () => {
        
        const value = "URL"
        model.grammarType = freeclimb.GrammarType.URL
        expect(model.grammarType).toBe(value)

    })
    test('Test Property grammarFile', () => {
        const value = "string"
        model.grammarFile = "string"
        expect(model.grammarFile).toBe(value)
        
    })
    test('Test Property grammarRule', () => {
        const value = "string"
        model.grammarRule = "string"
        expect(model.grammarRule).toBe(value)
        
    })
    test('Test Property playBeep', () => {
        const value = true
        model.playBeep = true
        expect(model.playBeep).toBe(value)

    })
    test('Test Property prompts', () => {
        
        const value:freeclimb.PerclCommand[] = []
        model.prompts = value
        expect(model.prompts).toStrictEqual(value)

    })
    test('Test Property noInputTimeoutMs', () => {
        const value = 1
        model.noInputTimeoutMs = 1
        expect(model.noInputTimeoutMs).toBe(value)

    })
    test('Test Property recognitionTimeoutMs', () => {
        const value = 1
        model.recognitionTimeoutMs = 1
        expect(model.recognitionTimeoutMs).toBe(value)

    })
    test('Test Property confidenceThreshold', () => {
        const value = 1.0
        model.confidenceThreshold = 1.0
        expect(model.confidenceThreshold).toBe(value)

    })
    test('Test Property sensitivityLevel', () => {
        const value = 1.0
        model.sensitivityLevel = 1.0
        expect(model.sensitivityLevel).toBe(value)

    })
    test('Test Property speechCompleteTimeoutMs', () => {
        const value = 1
        model.speechCompleteTimeoutMs = 1
        expect(model.speechCompleteTimeoutMs).toBe(value)

    })
    test('Test Property speechIncompleteTimeoutMs', () => {
        const value = 1
        model.speechIncompleteTimeoutMs = 1
        expect(model.speechIncompleteTimeoutMs).toBe(value)

    })
    test('Test Property privacyMode', () => {
        const value = true
        model.privacyMode = true
        expect(model.privacyMode).toBe(value)

    })
})
