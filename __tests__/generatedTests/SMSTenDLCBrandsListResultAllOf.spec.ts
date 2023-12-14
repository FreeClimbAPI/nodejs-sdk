import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SMSTenDLCBrandsListResultAllOf', () => {
    let model: freeclimb.SMSTenDLCBrandsListResultAllOf = new freeclimb.SMSTenDLCBrandsListResultAllOf({
        brands: [],
    })
    describe(".brands", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.SMSTenDLCBrand[] = []
            expect(model.brands).toStrictEqual(value)
        })
    })
})
