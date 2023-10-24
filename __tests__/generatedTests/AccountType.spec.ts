import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('AccountType Tests', () => {
    test('TRIAL_Enum_Test', () => {    
        expect(freeclimb.AccountType.TRIAL).toBe("trial")
    })
    test('FULL_Enum_Test', () => {    
        expect(freeclimb.AccountType.FULL).toBe("full")
    })
})
