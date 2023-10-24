import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('MessageResultAllOf Tests', () => {
    let model: freeclimb.MessageResultAllOf = new freeclimb.MessageResultAllOf({
    })
    test('Test Property accountId', () => {
        const value = "string"
        model.accountId = "string"
        expect(model.accountId).toBe(value)
                 
    })
    test('Test Property messageId', () => {
        const value = "string"
        model.messageId = "string"
        expect(model.messageId).toBe(value)
                 
    })
    test('Test Property status', () => {
        
        const value = "new"
        model.status = freeclimb.MessageStatus.NEW
        expect(model.status).toBe(value)
         
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
    test('Test Property direction', () => {
        const value = "string"
        model.direction = "string"
        expect(model.direction).toBe(value)
                 
    })
    test('Test Property notificationUrl', () => {
        const value = "string"
        model.notificationUrl = "string"
        expect(model.notificationUrl).toBe(value)
                 
    })
    test('Test Property brandId', () => {
        const value = "string"
        model.brandId = "string"
        expect(model.brandId).toBe(value)
                 
    })
    test('Test Property campaignId', () => {
        const value = "string"
        model.campaignId = "string"
        expect(model.campaignId).toBe(value)
                 
    })
    test('Test Property segmentCount', () => {
        const value = 1.0
        model.segmentCount = 1.0
        expect(model.segmentCount).toBe(value)
         
    })
})
