import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('LogListAllOf', () => {
    let model: freeclimb.LogListAllOf = new freeclimb.LogListAllOf({
        logs: [],
    })
    describe(".logs", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.LogResult[] = []
            expect(model.logs).toStrictEqual(value)
        })
    })
})
