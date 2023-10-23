import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('QueueMember Tests', () => {
    let model: freeclimb.QueueMember = new freeclimb.QueueMember({
    })
    test('Test Property uri', () => {
        const value = "string"
        model.uri = "string"
        expect(model.uri).toBe(value)
                 
    })
    test('Test Property callId', () => {
        const value = "string"
        model.callId = "string"
        expect(model.callId).toBe(value)
                 
    })
    test('Test Property waitTime', () => {
        const value = 1
        model.waitTime = 1
        expect(model.waitTime).toBe(value)
         
    })
    test('Test Property position', () => {
        const value = 1
        model.position = 1
        expect(model.position).toBe(value)
         
    })
    test('Test Property dateEnqueued', () => {
        const value = "string"
        model.dateEnqueued = "string"
        expect(model.dateEnqueued).toBe(value)
                 
    })
})
