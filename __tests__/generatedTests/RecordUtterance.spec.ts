import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('RecordUtterance Tests', () => {
    let model: freeclimb.RecordUtterance = new freeclimb.RecordUtterance({
        actionUrl: null as any,
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
    test('Test Property silenceTimeoutMs', () => {
        const value = 1
        model.silenceTimeoutMs = 1
        expect(model.silenceTimeoutMs).toBe(value)
    })
    test('Test Property finishOnKey', () => {
        const value = "string"
        model.finishOnKey = "string"
        expect(model.finishOnKey).toBe(value)
            })
    test('Test Property maxLengthSec', () => {
        const value = 1
        model.maxLengthSec = 1
        expect(model.maxLengthSec).toBe(value)
    })
    test('Test Property playBeep', () => {
        const value = true
        model.playBeep = true
        expect(model.playBeep).toBe(value)
    })
    test('Test Property autoStart', () => {
        const value = true
        model.autoStart = true
        expect(model.autoStart).toBe(value)
    })
    test('Test Property privacyMode', () => {
        const value = true
        model.privacyMode = true
        expect(model.privacyMode).toBe(value)
    })
})
