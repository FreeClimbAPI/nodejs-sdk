import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('Say Tests', () => {
    let model: freeclimb.Say = new freeclimb.Say({
        text: null as any,
    })
    test('Test Property command', () => {
        const value = "string"
        model.command = "string"
        expect(model.command).toBe(value)
                
    })
    test('Test Property text', () => {
        const value = "string"
        model.text = "string"
        expect(model.text).toBe(value)
        
    })
    test('Test Property language', () => {
        const value = "string"
        model.language = "string"
        expect(model.language).toBe(value)
        
    })
    test('Test Property loop', () => {
        const value = 1
        model.loop = 1
        expect(model.loop).toBe(value)

    })
    test('Test Property conferenceId', () => {
        const value = "string"
        model.conferenceId = "string"
        expect(model.conferenceId).toBe(value)
        
    })
    test('Test Property privacyMode', () => {
        const value = true
        model.privacyMode = true
        expect(model.privacyMode).toBe(value)

    })
})
