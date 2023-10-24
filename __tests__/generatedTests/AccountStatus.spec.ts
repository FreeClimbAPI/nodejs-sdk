import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('AccountStatus Tests', () => {
    test('CLOSED_Enum_Test', () => {    
        expect(freeclimb.AccountStatus.CLOSED).toBe("closed")
    })
    test('SUSPENDED_Enum_Test', () => {    
        expect(freeclimb.AccountStatus.SUSPENDED).toBe("suspended")
    })
    test('ACTIVE_Enum_Test', () => {    
        expect(freeclimb.AccountStatus.ACTIVE).toBe("active")
    })
})
