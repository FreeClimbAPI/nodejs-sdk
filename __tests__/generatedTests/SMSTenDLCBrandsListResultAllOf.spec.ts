import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('SMSTenDLCBrandsListResultAllOf Tests', () => {
    let model: freeclimb.SMSTenDLCBrandsListResultAllOf = new freeclimb.SMSTenDLCBrandsListResultAllOf({
    })
    test('Test Property brands', () => {
        
        const value:freeclimb.SMSTenDLCBrand[] = []
        model.brands = value
        expect(model.brands).toStrictEqual(value)
         
    })
})
