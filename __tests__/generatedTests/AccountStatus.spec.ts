import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('AccountStatus Tests', () => {
    test('CLOSED_ENUM_TEST', () => {    
        expect(freeclimb.AccountStatus.CLOSED).toBe("closed")
    })
    test('SUSPENDED_ENUM_TEST', () => {    
        expect(freeclimb.AccountStatus.SUSPENDED).toBe("suspended")
    })
    test('ACTIVE_ENUM_TEST', () => {    
        expect(freeclimb.AccountStatus.ACTIVE).toBe("active")
    })
})
