import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('Unpark', () => {
    let model: freeclimb.Unpark = new freeclimb.Unpark({
       
    })
    describe("Unpark class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.Unpark)
        })
    })

})
