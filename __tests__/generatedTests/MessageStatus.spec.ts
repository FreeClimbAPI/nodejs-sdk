import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('MessageStatus Tests', () => {
    test('NEW_enum_Test', () => {    
        expect(freeclimb.MessageStatus.NEW).toBe("new")
    })
    test('QUEUED_enum_Test', () => {    
        expect(freeclimb.MessageStatus.QUEUED).toBe("queued")
    })
    test('REJECTED_enum_Test', () => {    
        expect(freeclimb.MessageStatus.REJECTED).toBe("rejected")
    })
    test('SENDING_enum_Test', () => {    
        expect(freeclimb.MessageStatus.SENDING).toBe("sending")
    })
    test('SENT_enum_Test', () => {    
        expect(freeclimb.MessageStatus.SENT).toBe("sent")
    })
    test('FAILED_enum_Test', () => {    
        expect(freeclimb.MessageStatus.FAILED).toBe("failed")
    })
    test('RECEIVED_enum_Test', () => {    
        expect(freeclimb.MessageStatus.RECEIVED).toBe("received")
    })
    test('UNDELIVERED_enum_Test', () => {    
        expect(freeclimb.MessageStatus.UNDELIVERED).toBe("undelivered")
    })
    test('EXPIRED_enum_Test', () => {    
        expect(freeclimb.MessageStatus.EXPIRED).toBe("expired")
    })
    test('DELETED_enum_Test', () => {    
        expect(freeclimb.MessageStatus.DELETED).toBe("deleted")
    })
    test('UNKNOWN_enum_Test', () => {    
        expect(freeclimb.MessageStatus.UNKNOWN).toBe("unknown")
    })
})
