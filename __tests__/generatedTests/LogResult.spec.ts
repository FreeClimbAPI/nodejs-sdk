import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('LogResult Tests', () => {
    let model: freeclimb.LogResult = new freeclimb.LogResult({
    })
    test('Test Property timestamp', () => {
        const value = 1
        model.timestamp = 1
        expect(model.timestamp).toBe(value)
    })
    test('Test Property level', () => {
        
        expect(freeclimb.LogLevel.INFO).toBe("info")
        expect(freeclimb.LogLevel.WARNING).toBe("warning")
        expect(freeclimb.LogLevel.ERROR).toBe("error")
    })
    test('Test Property requestId', () => {
        const value = "string"
        model.requestId = "string"
        expect(model.requestId).toBe(value)
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
    test('Test Property message', () => {
        const value = "string"
        model.message = "string"
        expect(model.message).toBe(value)
            })
    test('Test Property metadata', () => {
        const value = {}
        model.metadata = {}
        expect(model.metadata).toStrictEqual(value)
    })
})
