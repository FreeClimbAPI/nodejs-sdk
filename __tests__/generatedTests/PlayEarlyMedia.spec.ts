import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('PlayEarlyMedia Tests', () => {
    let model: freeclimb.PlayEarlyMedia = new freeclimb.PlayEarlyMedia({
        file: null as any,
    })
    test('Test Property command', () => {
        const value = "string"
        model.command = "string"
        expect(model.command).toBe(value)
                
    })
    test('Test Property file', () => {
        const value = "string"
        model.file = "string"
        expect(model.file).toBe(value)
            })
})
