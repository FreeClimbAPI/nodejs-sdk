import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('GetSpeechReason Tests', () => {
    test('ERROR_enum_Test', () => {    
        expect(freeclimb.GetSpeechReason.ERROR).toBe("error")
    })
    test('HANGUP_enum_Test', () => {    
        expect(freeclimb.GetSpeechReason.HANGUP).toBe("hangup")
    })
    test('DIGIT_enum_Test', () => {    
        expect(freeclimb.GetSpeechReason.DIGIT).toBe("digit")
    })
    test('NO_INPUT_enum_Test', () => {    
        expect(freeclimb.GetSpeechReason.NO_INPUT).toBe("noInput")
    })
    test('NO_MATCH_enum_Test', () => {    
        expect(freeclimb.GetSpeechReason.NO_MATCH).toBe("noMatch")
    })
    test('RECOGNITION_enum_Test', () => {    
        expect(freeclimb.GetSpeechReason.RECOGNITION).toBe("recognition")
    })
})
