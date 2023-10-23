import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('IncomingNumberListAllOf Tests', () => {
    let model: freeclimb.IncomingNumberListAllOf = new freeclimb.IncomingNumberListAllOf({
    })
    test('Test Property incomingPhoneNumbers', () => {
        
        const value:freeclimb.IncomingNumberResult[] = []
        model.incomingPhoneNumbers = value
        expect(model.incomingPhoneNumbers).toStrictEqual(value)
         
    })
})
