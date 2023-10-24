import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('HangupAllOf Tests', () => {
    let model: freeclimb.HangupAllOf = new freeclimb.HangupAllOf({
    })
    test('Test Property reason', () => {
        const value = "string"
        model.reason = "string"
        expect(model.reason).toBe(value)
                 
    })
})
