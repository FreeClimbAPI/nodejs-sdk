import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('AvailableNumberListAllOf', () => {
    let model: freeclimb.AvailableNumberListAllOf = new freeclimb.AvailableNumberListAllOf({
        availablePhoneNumbers: [],
    })
    describe(".availablePhoneNumbers", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.AvailableNumber[] = []
            expect(model.availablePhoneNumbers).toStrictEqual(value)
        })
    })
})
