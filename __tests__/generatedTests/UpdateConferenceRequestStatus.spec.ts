import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('UpdateConferenceRequestStatus Tests', () => {
    test('EMPTY_enum_Test', () => {    
        expect(freeclimb.UpdateConferenceRequestStatus.EMPTY).toBe("empty")
    })
    test('TERMINATED_enum_Test', () => {    
        expect(freeclimb.UpdateConferenceRequestStatus.TERMINATED).toBe("terminated")
    })
})
