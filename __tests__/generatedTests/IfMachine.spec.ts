import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('IfMachine Tests', () => {
    test('REDIRECT_ENUM_TEST', () => {    
        expect(freeclimb.IfMachine.REDIRECT).toBe("redirect")
    })
    test('HANGUP_ENUM_TEST', () => {    
        expect(freeclimb.IfMachine.HANGUP).toBe("hangup")
    })
})
