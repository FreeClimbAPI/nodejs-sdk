import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('IncomingNumberRequest Tests', () => {
    let model: freeclimb.IncomingNumberRequest = new freeclimb.IncomingNumberRequest({
    })
    test('Test Property applicationId', () => {
        const value = "string"
        model.applicationId = "string"
        expect(model.applicationId).toBe(value)
                 
    })
    test('Test Property alias', () => {
        const value = "string"
        model.alias = "string"
        expect(model.alias).toBe(value)
                 
    })
    test('Test Property campaignId', () => {
        const value = "string"
        model.campaignId = "string"
        expect(model.campaignId).toBe(value)
                 
    })
})
