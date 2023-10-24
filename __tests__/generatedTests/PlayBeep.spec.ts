import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('PlayBeep Tests', () => {
    test('ALWAYS_ENUM_TEST', () => {    
        expect(freeclimb.PlayBeep.ALWAYS).toBe("always")
    })
    test('NEVER_ENUM_TEST', () => {    
        expect(freeclimb.PlayBeep.NEVER).toBe("never")
    })
    test('ENTRY_ONLY_ENUM_TEST', () => {    
        expect(freeclimb.PlayBeep.ENTRY_ONLY).toBe("entryOnly")
    })
    test('EXIT_ONLY_ENUM_TEST', () => {    
        expect(freeclimb.PlayBeep.EXIT_ONLY).toBe("exitOnly")
    })
})
