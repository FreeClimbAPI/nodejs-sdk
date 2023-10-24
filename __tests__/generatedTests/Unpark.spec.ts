import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('Unpark Tests', () => {
    let model: freeclimb.Unpark = new freeclimb.Unpark({
    })
    test('Test Property command', () => {
        const value = "string"
        model.command = "string"
        expect(model.command).toBe(value)
                
    })
})
