import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('ConferenceResultAllOf Tests', () => {
    let model: freeclimb.ConferenceResultAllOf = new freeclimb.ConferenceResultAllOf({
    })
    test('Test Property conferenceId', () => {
        const value = "string"
        model.conferenceId = "string"
        expect(model.conferenceId).toBe(value)
                 
    })
    test('Test Property accountId', () => {
        const value = "string"
        model.accountId = "string"
        expect(model.accountId).toBe(value)
                 
    })
    test('Test Property alias', () => {
        const value = "string"
        model.alias = "string"
        expect(model.alias).toBe(value)
                 
    })
    test('Test Property playBeep', () => {
        
        const value = "always"
        model.playBeep = freeclimb.PlayBeep.ALWAYS
        expect(model.playBeep).toBe(value)
         
    })
    test('Test Property record', () => {
        const value = true
        model.record = true
        expect(model.record).toBe(value)
         
    })
    test('Test Property status', () => {
        
        const value = "empty"
        model.status = freeclimb.ConferenceStatus.EMPTY
        expect(model.status).toBe(value)
         
    })
    test('Test Property waitUrl', () => {
        const value = "string"
        model.waitUrl = "string"
        expect(model.waitUrl).toBe(value)
                 
    })
    test('Test Property actionUrl', () => {
        const value = "string"
        model.actionUrl = "string"
        expect(model.actionUrl).toBe(value)
                 
    })
    test('Test Property statusCallbackUrl', () => {
        const value = "string"
        model.statusCallbackUrl = "string"
        expect(model.statusCallbackUrl).toBe(value)
                 
    })
    test('Test Property subresourceUris', () => {
        const value = {}
        model.subresourceUris = {}
        expect(model.subresourceUris).toStrictEqual(value)
         
    })
})
