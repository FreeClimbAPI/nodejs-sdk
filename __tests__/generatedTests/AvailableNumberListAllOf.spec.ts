import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('AvailableNumberListAllOf', () => {
    let model: freeclimb.AvailableNumberListAllOf = new freeclimb.AvailableNumberListAllOf({
        availablePhoneNumbers: [],
    })
describe("AvailableNumberListAllOf class test", () => {
     it('resolves to the class type upon initialization', () => {
        expect(model).toBeInstanceOf(freeclimb.AvailableNumberListAllOf)
     })
})
    describe(".availablePhoneNumbers", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.AvailableNumber[] = []
            expect(model.availablePhoneNumbers).toStrictEqual(value)
        })
    })
})
