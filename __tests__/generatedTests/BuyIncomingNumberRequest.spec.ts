import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('BuyIncomingNumberRequest Tests', () => {
    let model: freeclimb.BuyIncomingNumberRequest = new freeclimb.BuyIncomingNumberRequest({
        phoneNumber: null as any,
    })
    test('Test Property phoneNumber', () => {
        const value = "string"
        model.phoneNumber = "string"
        expect(model.phoneNumber).toBe(value)
            })
    test('Test Property alias', () => {
        const value = "string"
        model.alias = "string"
        expect(model.alias).toBe(value)
            })
    test('Test Property applicationId', () => {
        const value = "string"
        model.applicationId = "string"
        expect(model.applicationId).toBe(value)
            })
})
