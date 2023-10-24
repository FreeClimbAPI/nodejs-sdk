import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('GetSpeechReason Tests', () => {
    test('ERROR_Enum_Test', () => {    
        expect(freeclimb.GetSpeechReason.ERROR).toBe("error")
    })
    test('HANGUP_Enum_Test', () => {    
        expect(freeclimb.GetSpeechReason.HANGUP).toBe("hangup")
    })
    test('DIGIT_Enum_Test', () => {    
        expect(freeclimb.GetSpeechReason.DIGIT).toBe("digit")
    })
    test('NO_INPUT_Enum_Test', () => {    
        expect(freeclimb.GetSpeechReason.NO_INPUT).toBe("noInput")
    })
    test('NO_MATCH_Enum_Test', () => {    
        expect(freeclimb.GetSpeechReason.NO_MATCH).toBe("noMatch")
    })
    test('RECOGNITION_Enum_Test', () => {    
        expect(freeclimb.GetSpeechReason.RECOGNITION).toBe("recognition")
    })
})
