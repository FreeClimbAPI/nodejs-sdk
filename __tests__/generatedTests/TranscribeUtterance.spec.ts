import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('TranscribeUtterance Tests', () => {
    let model: freeclimb.TranscribeUtterance = new freeclimb.TranscribeUtterance({
        actionUrl: null as any,
    })
    test('Test Property actionUrl', () => {
        const value = "string"
        model.actionUrl = "string"
        expect(model.actionUrl).toBe(value)
                 
    })
    test('Test Property playBeep', () => {
        const value = true
        model.playBeep = true
        expect(model.playBeep).toBe(value)
         
    })
    test('Test Property record', () => {
        const value = {}
        model.record = {}
        expect(model.record).toStrictEqual(value)
         
    })
    test('Test Property privacyForLogging', () => {
        const value = true
        model.privacyForLogging = true
        expect(model.privacyForLogging).toBe(value)
         
    })
    test('Test Property privacyForRecording', () => {
        const value = true
        model.privacyForRecording = true
        expect(model.privacyForRecording).toBe(value)
         
    })
    test('Test Property prompts', () => {
        
        const value:any[] = []
        model.prompts = value
        expect(model.prompts).toStrictEqual(value)
         
    })
})
