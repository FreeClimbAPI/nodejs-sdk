import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SMSTenDLCBrandsListResultAllOf', () => {
    let model: freeclimb.SMSTenDLCBrandsListResultAllOf = new freeclimb.SMSTenDLCBrandsListResultAllOf({
        brands: [],
    })
describe("SMSTenDLCBrandsListResultAllOf class test", () => {
     it('resolves to the class type upon initialization', () => {
        expect(model).toBeInstanceOf(freeclimb.SMSTenDLCBrandsListResultAllOf)
     })
})
    describe(".brands", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.SMSTenDLCBrand[] = []
            expect(model.brands).toStrictEqual(value)
        })
    })
})
