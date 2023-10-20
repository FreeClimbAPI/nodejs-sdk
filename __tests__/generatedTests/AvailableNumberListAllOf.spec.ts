import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('AvailableNumberListAllOf Tests', () => {
    let model: freeclimb.AvailableNumberListAllOf = new freeclimb.AvailableNumberListAllOf({
    })
    test('Test Property availablePhoneNumbers', () => {
        
        const value:freeclimb.AvailableNumber[] = []
        model.availablePhoneNumbers = value
        expect(model.availablePhoneNumbers).toStrictEqual(value)
    })
})
