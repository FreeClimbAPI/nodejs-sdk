import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('CallResultAllOf Tests', () => {
    let model: freeclimb.CallResultAllOf = new freeclimb.CallResultAllOf({
    })
    test('Test Property callId', () => {
        const value = "string"
        model.callId = "string"
        expect(model.callId).toBe(value)
                 
    })
    test('Test Property parentCallId', () => {
        const value = "string"
        model.parentCallId = "string"
        expect(model.parentCallId).toBe(value)
                 
    })
    test('Test Property accountId', () => {
        const value = "string"
        model.accountId = "string"
        expect(model.accountId).toBe(value)
                 
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
    test('Test Property phoneNumberId', () => {
        const value = "string"
        model.phoneNumberId = "string"
        expect(model.phoneNumberId).toBe(value)
                 
    })
    test('Test Property callStatus', () => {
        
        expect(freeclimb.CallStatus.QUEUED).toBe("queued")
        expect(freeclimb.CallStatus.RINGING).toBe("ringing")
        expect(freeclimb.CallStatus.IN_PROGRESS).toBe("inProgress")
        expect(freeclimb.CallStatus.CANCELED).toBe("canceled")
        expect(freeclimb.CallStatus.COMPLETED).toBe("completed")
        expect(freeclimb.CallStatus.FAILED).toBe("failed")
        expect(freeclimb.CallStatus.BUSY).toBe("busy")
        expect(freeclimb.CallStatus.NO_ANSWER).toBe("noAnswer")
         
    })
    test('Test Property startTime', () => {
        const value = "string"
        model.startTime = "string"
        expect(model.startTime).toBe(value)
                 
    })
    test('Test Property connectTime', () => {
        const value = "string"
        model.connectTime = "string"
        expect(model.connectTime).toBe(value)
                 
    })
    test('Test Property endTime', () => {
        const value = "string"
        model.endTime = "string"
        expect(model.endTime).toBe(value)
                 
    })
    test('Test Property duration', () => {
        const value = 1
        model.duration = 1
        expect(model.duration).toBe(value)
         
    })
    test('Test Property connectDuration', () => {
        const value = 1
        model.connectDuration = 1
        expect(model.connectDuration).toBe(value)
         
    })
    test('Test Property direction', () => {
        
        expect(freeclimb.CallDirection.INBOUND).toBe("inbound")
        expect(freeclimb.CallDirection.OUTBOUND_API).toBe("outboundAPI")
        expect(freeclimb.CallDirection.OUTBOUND_DIAL).toBe("outboundDial")
         
    })
    test('Test Property answeredBy', () => {
        
        expect(freeclimb.AnsweredBy.HUMAN).toBe("human")
        expect(freeclimb.AnsweredBy.MACHINE).toBe("machine")
         
    })
    test('Test Property subresourceUris', () => {
        const value = {}
        model.subresourceUris = {}
        expect(model.subresourceUris).toStrictEqual(value)
         
    })
})
