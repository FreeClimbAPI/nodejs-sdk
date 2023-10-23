import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('PlayAllOf Tests', () => {
    let model: freeclimb.PlayAllOf = new freeclimb.PlayAllOf({
        file: null as any,
    })
    test('Test Property file', () => {
        const value = "string"
        model.file = "string"
        expect(model.file).toBe(value)
                 
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
