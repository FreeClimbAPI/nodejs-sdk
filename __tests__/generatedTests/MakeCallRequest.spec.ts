import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('MakeCallRequest Tests', () => {
    let model: freeclimb.MakeCallRequest = new freeclimb.MakeCallRequest({
        _from: null as any,
        to: null as any,
    })
    test('Test Property from', () => {
        const value = "string"
        model._from = "string"
        expect(model._from).toBe(value)
                 
    })
    test('Test Property to', () => {
        const value = "string"
        model.to = "string"
        expect(model.to).toBe(value)
                 
    })
    test('Test Property applicationId', () => {
        const value = "string"
        model.applicationId = "string"
        expect(model.applicationId).toBe(value)
                 
    })
    test('Test Property sendDigits', () => {
        const value = "string"
        model.sendDigits = "string"
        expect(model.sendDigits).toBe(value)
                 
    })
    test('Test Property ifMachine', () => {
        const value = "string"
        model.ifMachine = "string"
        expect(model.ifMachine).toBe(value)
                 
    })
    test('Test Property ifMachineUrl', () => {
        const value = "string"
        model.ifMachineUrl = "string"
        expect(model.ifMachineUrl).toBe(value)
                 
    })
    test('Test Property timeout', () => {
        const value = 1
        model.timeout = 1
        expect(model.timeout).toBe(value)
         
    })
    test('Test Property parentCallId', () => {
        const value = "string"
        model.parentCallId = "string"
        expect(model.parentCallId).toBe(value)
                 
    })
    test('Test Property privacyMode', () => {
        const value = true
        model.privacyMode = true
        expect(model.privacyMode).toBe(value)
         
    })
    test('Test Property callConnectUrl', () => {
        const value = "string"
        model.callConnectUrl = "string"
        expect(model.callConnectUrl).toBe(value)
                 
    })
})
