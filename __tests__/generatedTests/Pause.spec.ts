import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('Pause Tests', () => {
    let model: freeclimb.Pause = new freeclimb.Pause({
        length: null as any,
    })
    test('Test Property command', () => {
        const value = "string"
        model.command = "string"
        expect(model.command).toBe(value)
                
    })
    test('Test Property length', () => {
        const value = 1
        model.length = 1
        expect(model.length).toBe(value)
    })
})
