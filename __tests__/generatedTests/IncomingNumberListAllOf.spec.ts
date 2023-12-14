import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('IncomingNumberListAllOf', () => {
    let model: freeclimb.IncomingNumberListAllOf = new freeclimb.IncomingNumberListAllOf({
        incomingPhoneNumbers: [],
    })
    describe(".incomingPhoneNumbers", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.IncomingNumberResult[] = []
            expect(model.incomingPhoneNumbers).toStrictEqual(value)
        })
    })
})
