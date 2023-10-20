import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('Reject Tests', () => {
    let model: freeclimb.Reject = new freeclimb.Reject({
    })
    test('Test Property command', () => {
        const value = "string"
        model.command = "string"
        expect(model.command).toBe(value)
                
    })
    test('Test Property reason', () => {
        const value = "string"
        model.reason = "string"
        expect(model.reason).toBe(value)
            })
})
