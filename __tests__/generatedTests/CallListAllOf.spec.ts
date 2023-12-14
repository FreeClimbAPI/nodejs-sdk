import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('CallListAllOf', () => {
    let model: freeclimb.CallListAllOf = new freeclimb.CallListAllOf({
        calls: [],
    })
    describe(".calls", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.CallResult[] = []
            expect(model.calls).toStrictEqual(value)
        })
    })
})
