import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('UpdateCallRequest Tests', () => {
    let model: freeclimb.UpdateCallRequest = new freeclimb.UpdateCallRequest({
        status: null as any,
    })
    test('Test Property status', () => {
        
        expect(freeclimb.UpdateCallRequestStatus.CANCELED).toBe("canceled")
        expect(freeclimb.UpdateCallRequestStatus.COMPLETED).toBe("completed")
         
    })
})
