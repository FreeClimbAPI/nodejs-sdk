import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('ConferenceStatus Tests', () => {
    test('EMPTY_Enum_Test', () => {    
        expect(freeclimb.ConferenceStatus.EMPTY).toBe("empty")
    })
    test('POPULATED_Enum_Test', () => {    
        expect(freeclimb.ConferenceStatus.POPULATED).toBe("populated")
    })
    test('IN_PROGRESS_Enum_Test', () => {    
        expect(freeclimb.ConferenceStatus.IN_PROGRESS).toBe("inProgress")
    })
    test('TERMINATED_Enum_Test', () => {    
        expect(freeclimb.ConferenceStatus.TERMINATED).toBe("terminated")
    })
})
