import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('TerminateConference Tests', () => {
    let model: freeclimb.TerminateConference = new freeclimb.TerminateConference({
        conferenceId: null as any,
    })
    test('Test Property command', () => {
        const value = "string"
        model.command = "string"
        expect(model.command).toBe(value)
                
    })
    test('Test Property conferenceId', () => {
        const value = "string"
        model.conferenceId = "string"
        expect(model.conferenceId).toBe(value)
            })
})
