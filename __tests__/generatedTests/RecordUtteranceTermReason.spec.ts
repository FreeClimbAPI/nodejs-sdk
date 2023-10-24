import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('RecordUtteranceTermReason Tests', () => {
    test('FINISH_KEY_ENUM_TEST', () => {    
        expect(freeclimb.RecordUtteranceTermReason.FINISH_KEY).toBe("finishKey")
    })
    test('TIMEOUT_ENUM_TEST', () => {    
        expect(freeclimb.RecordUtteranceTermReason.TIMEOUT).toBe("timeout")
    })
    test('HANGUP_ENUM_TEST', () => {    
        expect(freeclimb.RecordUtteranceTermReason.HANGUP).toBe("hangup")
    })
    test('MAX_LENGTH_ENUM_TEST', () => {    
        expect(freeclimb.RecordUtteranceTermReason.MAX_LENGTH).toBe("maxLength")
    })
})
