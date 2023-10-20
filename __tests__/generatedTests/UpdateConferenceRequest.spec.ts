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
        
        expect(freeclimb.PlayBeep.ALWAYS).toBe("always")
        expect(freeclimb.PlayBeep.NEVER).toBe("never")
        expect(freeclimb.PlayBeep.ENTRY_ONLY).toBe("entryOnly")
        expect(freeclimb.PlayBeep.EXIT_ONLY).toBe("exitOnly")
    })
    test('Test Property status', () => {
        
        expect(freeclimb.UpdateConferenceRequestStatus.EMPTY).toBe("empty")
        expect(freeclimb.UpdateConferenceRequestStatus.TERMINATED).toBe("terminated")
    })
})
