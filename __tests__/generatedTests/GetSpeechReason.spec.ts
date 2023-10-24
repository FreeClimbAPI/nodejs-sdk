import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('GetSpeechReason Tests', () => {
    test('ERROR_ENUM_TEST', () => {    
        expect(freeclimb.GetSpeechReason.ERROR).toBe("error")
    })
    test('HANGUP_ENUM_TEST', () => {    
        expect(freeclimb.GetSpeechReason.HANGUP).toBe("hangup")
    })
    test('DIGIT_ENUM_TEST', () => {    
        expect(freeclimb.GetSpeechReason.DIGIT).toBe("digit")
    })
    test('NO_INPUT_ENUM_TEST', () => {    
        expect(freeclimb.GetSpeechReason.NO_INPUT).toBe("noInput")
    })
    test('NO_MATCH_ENUM_TEST', () => {    
        expect(freeclimb.GetSpeechReason.NO_MATCH).toBe("noMatch")
    })
    test('RECOGNITION_ENUM_TEST', () => {    
        expect(freeclimb.GetSpeechReason.RECOGNITION).toBe("recognition")
    })
})
