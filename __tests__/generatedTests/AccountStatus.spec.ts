import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('AccountStatus Tests', () => {
    test('CLOSED_enum_Test', () => {    
        expect(freeclimb.AccountStatus.CLOSED).toBe("closed")
    })
    test('SUSPENDED_enum_Test', () => {    
        expect(freeclimb.AccountStatus.SUSPENDED).toBe("suspended")
    })
    test('ACTIVE_enum_Test', () => {    
        expect(freeclimb.AccountStatus.ACTIVE).toBe("active")
    })
})
