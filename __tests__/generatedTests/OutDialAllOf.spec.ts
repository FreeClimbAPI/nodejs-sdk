import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('OutDialAllOf Tests', () => {
    let model: freeclimb.OutDialAllOf = new freeclimb.OutDialAllOf({
        actionUrl: null as any,
        callConnectUrl: null as any,
        callingNumber: null as any,
        destination: null as any,
    })
    test('Test Property actionUrl', () => {
        const value = "https://123.abc"
        model.actionUrl = value
        expect(model.actionUrl).toBe(value)
         
    })
    test('Test Property callConnectUrl', () => {
        const value = "https://123.abc"
        model.callConnectUrl = value
        expect(model.callConnectUrl).toBe(value)
         
    })
    test('Test Property callingNumber', () => {
        const value = "string"
        model.callingNumber = "string"
        expect(model.callingNumber).toBe(value)
                 
    })
    test('Test Property destination', () => {
        const value = "string"
        model.destination = "string"
        expect(model.destination).toBe(value)
                 
    })
    test('Test Property ifMachine', () => {
        
        expect(freeclimb.IfMachine.REDIRECT).toBe("redirect")
        expect(freeclimb.IfMachine.HANGUP).toBe("hangup")
         
    })
    test('Test Property ifMachineUrl', () => {
        const value = "string"
        model.ifMachineUrl = "string"
        expect(model.ifMachineUrl).toBe(value)
                 
    })
    test('Test Property sendDigits', () => {
        const value = "string"
        model.sendDigits = "string"
        expect(model.sendDigits).toBe(value)
                 
    })
    test('Test Property statusCallbackUrl', () => {
        const value = "string"
        model.statusCallbackUrl = "string"
        expect(model.statusCallbackUrl).toBe(value)
                 
    })
    test('Test Property timeout', () => {
        const value = 1
        model.timeout = 1
        expect(model.timeout).toBe(value)
         
    })
    test('Test Property privacyMode', () => {
        const value = true
        model.privacyMode = true
        expect(model.privacyMode).toBe(value)
         
    })
})
