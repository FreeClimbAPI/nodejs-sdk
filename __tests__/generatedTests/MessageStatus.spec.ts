import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('MessageStatus Tests', () => {
    test('NEW_ENUM_TEST', () => {    
        expect(freeclimb.MessageStatus.NEW).toBe("new")
    })
    test('QUEUED_ENUM_TEST', () => {    
        expect(freeclimb.MessageStatus.QUEUED).toBe("queued")
    })
    test('REJECTED_ENUM_TEST', () => {    
        expect(freeclimb.MessageStatus.REJECTED).toBe("rejected")
    })
    test('SENDING_ENUM_TEST', () => {    
        expect(freeclimb.MessageStatus.SENDING).toBe("sending")
    })
    test('SENT_ENUM_TEST', () => {    
        expect(freeclimb.MessageStatus.SENT).toBe("sent")
    })
    test('FAILED_ENUM_TEST', () => {    
        expect(freeclimb.MessageStatus.FAILED).toBe("failed")
    })
    test('RECEIVED_ENUM_TEST', () => {    
        expect(freeclimb.MessageStatus.RECEIVED).toBe("received")
    })
    test('UNDELIVERED_ENUM_TEST', () => {    
        expect(freeclimb.MessageStatus.UNDELIVERED).toBe("undelivered")
    })
    test('EXPIRED_ENUM_TEST', () => {    
        expect(freeclimb.MessageStatus.EXPIRED).toBe("expired")
    })
    test('DELETED_ENUM_TEST', () => {    
        expect(freeclimb.MessageStatus.DELETED).toBe("deleted")
    })
    test('UNKNOWN_ENUM_TEST', () => {    
        expect(freeclimb.MessageStatus.UNKNOWN).toBe("unknown")
    })
})
