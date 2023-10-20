import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('PauseAllOf Tests', () => {
    let model: freeclimb.PauseAllOf = new freeclimb.PauseAllOf({
        length: null as any,
    })
    test('Test Property length', () => {
        const value = 1
        model.length = 1
        expect(model.length).toBe(value)
    })
})
