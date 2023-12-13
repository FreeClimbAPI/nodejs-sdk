import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('QueueResultStatus', () => {
    describe('.QUEUE_FULL', () => {
        it('resolves to correct value for QUEUE_FULL enum property', () => {
           expect(freeclimb.QueueResultStatus.QUEUE_FULL).toBe("queueFull")
        })
    })
    describe('.DEQUEUED', () => {
        it('resolves to correct value for DEQUEUED enum property', () => {
           expect(freeclimb.QueueResultStatus.DEQUEUED).toBe("dequeued")
        })
    })
    describe('.HANGUP', () => {
        it('resolves to correct value for HANGUP enum property', () => {
           expect(freeclimb.QueueResultStatus.HANGUP).toBe("hangup")
        })
    })
    describe('.SYSTEM_ERROR', () => {
        it('resolves to correct value for SYSTEM_ERROR enum property', () => {
           expect(freeclimb.QueueResultStatus.SYSTEM_ERROR).toBe("systemError")
        })
    })
})
