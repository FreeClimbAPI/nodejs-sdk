import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('AddToConference Tests', () => {
    let model: freeclimb.AddToConference = new freeclimb.AddToConference({
        conferenceId: null as any,
    })
    test('Test Property command', () => {
        const value = "string"
        model.command = "string"
        expect(model.command).toBe(value)
                
    })
    test('Test Property allowCallControl', () => {
        const value = true
        model.allowCallControl = true
        expect(model.allowCallControl).toBe(value)

    })
    test('Test Property callControlSequence', () => {
        const value = "string"
        model.callControlSequence = "string"
        expect(model.callControlSequence).toBe(value)
        
    })
    test('Test Property callControlUrl', () => {
        const value = "string"
        model.callControlUrl = "string"
        expect(model.callControlUrl).toBe(value)
        
    })
    test('Test Property conferenceId', () => {
        const value = "string"
        model.conferenceId = "string"
        expect(model.conferenceId).toBe(value)
        
    })
    test('Test Property callId', () => {
        const value = "string"
        model.callId = "string"
        expect(model.callId).toBe(value)
        
    })
    test('Test Property leaveConferenceUrl', () => {
        const value = "string"
        model.leaveConferenceUrl = "string"
        expect(model.leaveConferenceUrl).toBe(value)
        
    })
    test('Test Property listen', () => {
        const value = true
        model.listen = true
        expect(model.listen).toBe(value)

    })
    test('Test Property notificationUrl', () => {
        const value = "string"
        model.notificationUrl = "string"
        expect(model.notificationUrl).toBe(value)
        
    })
    test('Test Property startConfOnEnter', () => {
        const value = true
        model.startConfOnEnter = true
        expect(model.startConfOnEnter).toBe(value)

    })
    test('Test Property talk', () => {
        const value = true
        model.talk = true
        expect(model.talk).toBe(value)

    })
})
