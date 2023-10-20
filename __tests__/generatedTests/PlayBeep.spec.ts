import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('PlayBeep Tests', () => {
    test('ALWAYS_enum_Test', () => {    
        expect(freeclimb.PlayBeep.ALWAYS).toBe("always")
    })
    test('NEVER_enum_Test', () => {    
        expect(freeclimb.PlayBeep.NEVER).toBe("never")
    })
    test('ENTRY_ONLY_enum_Test', () => {    
        expect(freeclimb.PlayBeep.ENTRY_ONLY).toBe("entryOnly")
    })
    test('EXIT_ONLY_enum_Test', () => {    
        expect(freeclimb.PlayBeep.EXIT_ONLY).toBe("exitOnly")
    })
})
