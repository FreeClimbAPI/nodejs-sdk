import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('UpdateCallRequestStatus Tests', () => {
    test('CANCELED_Enum_Test', () => {    
        expect(freeclimb.UpdateCallRequestStatus.CANCELED).toBe("canceled")
    })
    test('COMPLETED_Enum_Test', () => {    
        expect(freeclimb.UpdateCallRequestStatus.COMPLETED).toBe("completed")
    })
})
