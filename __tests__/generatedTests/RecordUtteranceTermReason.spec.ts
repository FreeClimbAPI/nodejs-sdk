import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('RecordUtteranceTermReason Tests', () => {
    test('FINISH_KEY_Enum_Test', () => {    
        expect(freeclimb.RecordUtteranceTermReason.FINISH_KEY).toBe("finishKey")
    })
    test('TIMEOUT_Enum_Test', () => {    
        expect(freeclimb.RecordUtteranceTermReason.TIMEOUT).toBe("timeout")
    })
    test('HANGUP_Enum_Test', () => {    
        expect(freeclimb.RecordUtteranceTermReason.HANGUP).toBe("hangup")
    })
    test('MAX_LENGTH_Enum_Test', () => {    
        expect(freeclimb.RecordUtteranceTermReason.MAX_LENGTH).toBe("maxLength")
    })
})
