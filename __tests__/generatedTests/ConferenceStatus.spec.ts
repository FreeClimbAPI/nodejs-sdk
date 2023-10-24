import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('ConferenceStatus Tests', () => {
    test('EMPTY_ENUM_TEST', () => {    
        expect(freeclimb.ConferenceStatus.EMPTY).toBe("empty")
    })
    test('POPULATED_ENUM_TEST', () => {    
        expect(freeclimb.ConferenceStatus.POPULATED).toBe("populated")
    })
    test('IN_PROGRESS_ENUM_TEST', () => {    
        expect(freeclimb.ConferenceStatus.IN_PROGRESS).toBe("inProgress")
    })
    test('TERMINATED_ENUM_TEST', () => {    
        expect(freeclimb.ConferenceStatus.TERMINATED).toBe("terminated")
    })
})
