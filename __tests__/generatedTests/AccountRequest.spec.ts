import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('AccountRequest Tests', () => {
    let model: freeclimb.AccountRequest = new freeclimb.AccountRequest({
    })
    test('Test Property alias', () => {
        const value = "string"
        model.alias = "string"
        expect(model.alias).toBe(value)
            })
    test('Test Property label', () => {
        const value = "string"
        model.label = "string"
        expect(model.label).toBe(value)
            })
})
