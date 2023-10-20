import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('RedirectAllOf Tests', () => {
    let model: freeclimb.RedirectAllOf = new freeclimb.RedirectAllOf({
        actionUrl: null as any,
    })
    test('Test Property actionUrl', () => {
        const value = "https://123.abc"
        model.actionUrl = value
        expect(model.actionUrl).toBe(value)
    })
})
