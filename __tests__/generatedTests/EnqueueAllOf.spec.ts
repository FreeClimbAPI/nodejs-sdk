import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('EnqueueAllOf Tests', () => {
    let model: freeclimb.EnqueueAllOf = new freeclimb.EnqueueAllOf({
        queueId: null as any,
        waitUrl: null as any,
        actionUrl: null as any,
    })
    test('Test Property actionUrl', () => {
        const value = "https://123.abc"
        model.actionUrl = value
        expect(model.actionUrl).toBe(value)
    })
    test('Test Property notificationUrl', () => {
        const value = "https://123.abc"
        model.notificationUrl = value
        expect(model.notificationUrl).toBe(value)
    })
    test('Test Property queueId', () => {
        const value = "string"
        model.queueId = "string"
        expect(model.queueId).toBe(value)
            })
    test('Test Property waitUrl', () => {
        const value = "string"
        model.waitUrl = "string"
        expect(model.waitUrl).toBe(value)
            })
})
