import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('PerclCommand Tests', () => {
    let model: freeclimb.PerclCommand = new freeclimb.PerclCommand({
    })
    test('Test Property command', () => {
        const value = "string"
        model.command = "string"
        expect(model.command).toBe(value)
            })
})
