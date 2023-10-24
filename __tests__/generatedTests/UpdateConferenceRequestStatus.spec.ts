import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('UpdateConferenceRequestStatus Tests', () => {
    test('EMPTY_ENUM_TEST', () => {    
        expect(freeclimb.UpdateConferenceRequestStatus.EMPTY).toBe("empty")
    })
    test('TERMINATED_ENUM_TEST', () => {    
        expect(freeclimb.UpdateConferenceRequestStatus.TERMINATED).toBe("terminated")
    })
})
