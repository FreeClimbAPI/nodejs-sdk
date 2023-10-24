import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('QueueResultStatus Tests', () => {
    test('QUEUE_FULL_ENUM_TEST', () => {    
        expect(freeclimb.QueueResultStatus.QUEUE_FULL).toBe("queueFull")
    })
    test('DEQUEUED_ENUM_TEST', () => {    
        expect(freeclimb.QueueResultStatus.DEQUEUED).toBe("dequeued")
    })
    test('HANGUP_ENUM_TEST', () => {    
        expect(freeclimb.QueueResultStatus.HANGUP).toBe("hangup")
    })
    test('SYSTEM_ERROR_ENUM_TEST', () => {    
        expect(freeclimb.QueueResultStatus.SYSTEM_ERROR).toBe("systemError")
    })
})
