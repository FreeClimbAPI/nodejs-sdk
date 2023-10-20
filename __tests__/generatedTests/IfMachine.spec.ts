import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('IfMachine Tests', () => {
    test('REDIRECT_enum_Test', () => {    
        expect(freeclimb.IfMachine.REDIRECT).toBe("redirect")
    })
    test('HANGUP_enum_Test', () => {    
        expect(freeclimb.IfMachine.HANGUP).toBe("hangup")
    })
})
