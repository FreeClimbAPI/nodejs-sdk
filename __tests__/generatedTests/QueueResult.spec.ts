import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('QueueResult Tests', () => {
    let model: freeclimb.QueueResult = new freeclimb.QueueResult({
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
