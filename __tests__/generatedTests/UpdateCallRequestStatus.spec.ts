import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('UpdateCallRequestStatus Tests', () => {
    test('CANCELED_ENUM_TEST', () => {    
        expect(freeclimb.UpdateCallRequestStatus.CANCELED).toBe("canceled")
    })
    test('COMPLETED_ENUM_TEST', () => {    
        expect(freeclimb.UpdateCallRequestStatus.COMPLETED).toBe("completed")
    })
})
