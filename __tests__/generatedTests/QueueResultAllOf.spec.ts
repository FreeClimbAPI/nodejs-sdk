import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('QueueResultAllOf Tests', () => {
    let model: freeclimb.QueueResultAllOf = new freeclimb.QueueResultAllOf({
    })
    test('Test Property accountId', () => {
        const value = "string"
        model.accountId = "string"
        expect(model.accountId).toBe(value)
                 
    })
    test('Test Property queueId', () => {
        const value = "string"
        model.queueId = "string"
        expect(model.queueId).toBe(value)
                 
    })
    test('Test Property alias', () => {
        const value = "string"
        model.alias = "string"
        expect(model.alias).toBe(value)
                 
    })
    test('Test Property maxSize', () => {
        const value = 1
        model.maxSize = 1
        expect(model.maxSize).toBe(value)
         
    })
    test('Test Property currentSize', () => {
        const value = 1
        model.currentSize = 1
        expect(model.currentSize).toBe(value)
         
    })
    test('Test Property averageQueueRemovalTime', () => {
        const value = 1
        model.averageQueueRemovalTime = 1
        expect(model.averageQueueRemovalTime).toBe(value)
         
    })
    test('Test Property subresourceUris', () => {
        const value = {}
        model.subresourceUris = {}
        expect(model.subresourceUris).toStrictEqual(value)
         
    })
})
