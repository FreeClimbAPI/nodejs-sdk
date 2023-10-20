import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('QueueResultStatus Tests', () => {
    test('QUEUE_FULL_enum_Test', () => {    
        expect(freeclimb.QueueResultStatus.QUEUE_FULL).toBe("queueFull")
    })
    test('DEQUEUED_enum_Test', () => {    
        expect(freeclimb.QueueResultStatus.DEQUEUED).toBe("dequeued")
    })
    test('HANGUP_enum_Test', () => {    
        expect(freeclimb.QueueResultStatus.HANGUP).toBe("hangup")
    })
    test('SYSTEM_ERROR_enum_Test', () => {    
        expect(freeclimb.QueueResultStatus.SYSTEM_ERROR).toBe("systemError")
    })
})
