import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('CallStatus Tests', () => {
    test('QUEUED_ENUM_TEST', () => {    
        expect(freeclimb.CallStatus.QUEUED).toBe("queued")
    })
    test('RINGING_ENUM_TEST', () => {    
        expect(freeclimb.CallStatus.RINGING).toBe("ringing")
    })
    test('IN_PROGRESS_ENUM_TEST', () => {    
        expect(freeclimb.CallStatus.IN_PROGRESS).toBe("inProgress")
    })
    test('CANCELED_ENUM_TEST', () => {    
        expect(freeclimb.CallStatus.CANCELED).toBe("canceled")
    })
    test('COMPLETED_ENUM_TEST', () => {    
        expect(freeclimb.CallStatus.COMPLETED).toBe("completed")
    })
    test('FAILED_ENUM_TEST', () => {    
        expect(freeclimb.CallStatus.FAILED).toBe("failed")
    })
    test('BUSY_ENUM_TEST', () => {    
        expect(freeclimb.CallStatus.BUSY).toBe("busy")
    })
    test('NO_ANSWER_ENUM_TEST', () => {    
        expect(freeclimb.CallStatus.NO_ANSWER).toBe("noAnswer")
    })
})
