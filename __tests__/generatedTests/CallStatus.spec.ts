import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('CallStatus Tests', () => {
    test('QUEUED_enum_Test', () => {    
        expect(freeclimb.CallStatus.QUEUED).toBe("queued")
    })
    test('RINGING_enum_Test', () => {    
        expect(freeclimb.CallStatus.RINGING).toBe("ringing")
    })
    test('IN_PROGRESS_enum_Test', () => {    
        expect(freeclimb.CallStatus.IN_PROGRESS).toBe("inProgress")
    })
    test('CANCELED_enum_Test', () => {    
        expect(freeclimb.CallStatus.CANCELED).toBe("canceled")
    })
    test('COMPLETED_enum_Test', () => {    
        expect(freeclimb.CallStatus.COMPLETED).toBe("completed")
    })
    test('FAILED_enum_Test', () => {    
        expect(freeclimb.CallStatus.FAILED).toBe("failed")
    })
    test('BUSY_enum_Test', () => {    
        expect(freeclimb.CallStatus.BUSY).toBe("busy")
    })
    test('NO_ANSWER_enum_Test', () => {    
        expect(freeclimb.CallStatus.NO_ANSWER).toBe("noAnswer")
    })
})
