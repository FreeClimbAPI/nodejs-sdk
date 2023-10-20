import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('MessageRequest Tests', () => {
    let model: freeclimb.MessageRequest = new freeclimb.MessageRequest({
        _from: null as any,
        to: null as any,
        text: null as any,
    })
    test('Test Property uri', () => {
        const value = "string"
        model.uri = "string"
        expect(model.uri).toBe(value)
                
    })
    test('Test Property dateCreated', () => {
        const value = "string"
        model.dateCreated = "string"
        expect(model.dateCreated).toBe(value)
                
    })
    test('Test Property dateUpdated', () => {
        const value = "string"
        model.dateUpdated = "string"
        expect(model.dateUpdated).toBe(value)
                
    })
    test('Test Property revision', () => {
        const value = 1
        model.revision = 1
        expect(model.revision).toBe(value)
        
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
