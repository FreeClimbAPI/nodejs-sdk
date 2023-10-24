import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('MessageStatus Tests', () => {
    test('NEW_Enum_Test', () => {    
        expect(freeclimb.MessageStatus.NEW).toBe("new")
    })
    test('QUEUED_Enum_Test', () => {    
        expect(freeclimb.MessageStatus.QUEUED).toBe("queued")
    })
    test('REJECTED_Enum_Test', () => {    
        expect(freeclimb.MessageStatus.REJECTED).toBe("rejected")
    })
    test('SENDING_Enum_Test', () => {    
        expect(freeclimb.MessageStatus.SENDING).toBe("sending")
    })
    test('SENT_Enum_Test', () => {    
        expect(freeclimb.MessageStatus.SENT).toBe("sent")
    })
    test('FAILED_Enum_Test', () => {    
        expect(freeclimb.MessageStatus.FAILED).toBe("failed")
    })
    test('RECEIVED_Enum_Test', () => {    
        expect(freeclimb.MessageStatus.RECEIVED).toBe("received")
    })
    test('UNDELIVERED_Enum_Test', () => {    
        expect(freeclimb.MessageStatus.UNDELIVERED).toBe("undelivered")
    })
    test('EXPIRED_Enum_Test', () => {    
        expect(freeclimb.MessageStatus.EXPIRED).toBe("expired")
    })
    test('DELETED_Enum_Test', () => {    
        expect(freeclimb.MessageStatus.DELETED).toBe("deleted")
    })
    test('UNKNOWN_Enum_Test', () => {    
        expect(freeclimb.MessageStatus.UNKNOWN).toBe("unknown")
    })
})
