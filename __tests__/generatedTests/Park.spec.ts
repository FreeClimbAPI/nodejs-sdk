import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('Park Tests', () => {
    let model: freeclimb.Park = new freeclimb.Park({
        waitUrl: null as any,
        actionUrl: null as any,
    })
    test('Test Property command', () => {
        const value = "string"
        model.command = "string"
        expect(model.command).toBe(value)
                
    })
    test('Test Property waitUrl', () => {
        const value = "https://123.abc"
        model.waitUrl = value
        expect(model.waitUrl).toBe(value)

    })
    test('Test Property actionUrl', () => {
        const value = "https://123.abc"
        model.actionUrl = value
        expect(model.actionUrl).toBe(value)

    })
    test('Test Property notificationUrl', () => {
        const value = "string"
        model.notificationUrl = "string"
        expect(model.notificationUrl).toBe(value)
        
    })
})
