import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('RejectAllOf Tests', () => {
    let model: freeclimb.RejectAllOf = new freeclimb.RejectAllOf({
    })
    test('Test Property reason', () => {
        const value = "string"
        model.reason = "string"
        expect(model.reason).toBe(value)
                 
    })
})
