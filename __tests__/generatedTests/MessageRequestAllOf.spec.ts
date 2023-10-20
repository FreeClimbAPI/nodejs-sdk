import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('MessageRequestAllOf Tests', () => {
    let model: freeclimb.MessageRequestAllOf = new freeclimb.MessageRequestAllOf({
        _from: null as any,
        to: null as any,
        text: null as any,
    })
    test('Test Property from', () => {
        const value = "string"
        model._from = "string"
        expect(model._from).toBe(value)
            })
    test('Test Property to', () => {
        const value = "string"
        model.to = "string"
        expect(model.to).toBe(value)
            })
    test('Test Property text', () => {
        const value = "string"
        model.text = "string"
        expect(model.text).toBe(value)
            })
    test('Test Property notificationUrl', () => {
        const value = "string"
        model.notificationUrl = "string"
        expect(model.notificationUrl).toBe(value)
            })
    test('Test Property accountId', () => {
        const value = "string"
        model.accountId = "string"
        expect(model.accountId).toBe(value)
            })
})
