import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('AccountType Tests', () => {
    test('TRIAL_ENUM_TEST', () => {    
        expect(freeclimb.AccountType.TRIAL).toBe("trial")
    })
    test('FULL_ENUM_TEST', () => {    
        expect(freeclimb.AccountType.FULL).toBe("full")
    })
})
