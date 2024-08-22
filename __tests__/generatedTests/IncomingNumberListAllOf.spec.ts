import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('IncomingNumberListAllOf', () => {
    let model: freeclimb.IncomingNumberListAllOf = new freeclimb.IncomingNumberListAllOf({
        incomingPhoneNumbers: [],
    })
    describe("IncomingNumberListAllOf class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.IncomingNumberListAllOf)
        })
    })
    describe(".incomingPhoneNumbers", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.IncomingNumberResult[] = []
            expect(model.incomingPhoneNumbers).toStrictEqual(value)
        })
    })
})
