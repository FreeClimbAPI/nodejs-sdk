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
        
        const value = "queued"
        model.callStatus = freeclimb.CallStatus.QUEUED
        expect(model.callStatus).toBe(value)
         
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
        
        const value = "inbound"
        model.direction = freeclimb.CallDirection.INBOUND
        expect(model.direction).toBe(value)
         
    })
    test('Test Property answeredBy', () => {
        
        const value = "human"
        model.answeredBy = freeclimb.AnsweredBy.HUMAN
        expect(model.answeredBy).toBe(value)
         
    })
    test('Test Property subresourceUris', () => {
        const value = {}
        model.subresourceUris = {}
        expect(model.subresourceUris).toStrictEqual(value)
         
    })
})
