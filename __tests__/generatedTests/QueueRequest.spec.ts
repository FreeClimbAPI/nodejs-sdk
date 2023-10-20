import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('QueueRequest Tests', () => {
    let model: freeclimb.QueueRequest = new freeclimb.QueueRequest({
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
})
