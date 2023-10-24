import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('UpdateConferenceRequest Tests', () => {
    let model: freeclimb.UpdateConferenceRequest = new freeclimb.UpdateConferenceRequest({
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
    test('Test Property status', () => {
        
        const value = "empty"
        model.status = freeclimb.UpdateConferenceRequestStatus.EMPTY
        expect(model.status).toBe(value)
         
    })
})
