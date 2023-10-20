import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('UpdateCallRequestStatus Tests', () => {
    test('CANCELED_enum_Test', () => {    
        expect(freeclimb.UpdateCallRequestStatus.CANCELED).toBe("canceled")
    })
    test('COMPLETED_enum_Test', () => {    
        expect(freeclimb.UpdateCallRequestStatus.COMPLETED).toBe("completed")
    })
})
