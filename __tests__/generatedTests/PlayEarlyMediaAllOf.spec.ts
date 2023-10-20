import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('PlayEarlyMediaAllOf Tests', () => {
    let model: freeclimb.PlayEarlyMediaAllOf = new freeclimb.PlayEarlyMediaAllOf({
        file: null as any,
    })
    test('Test Property file', () => {
        const value = "string"
        model.file = "string"
        expect(model.file).toBe(value)
            })
})
