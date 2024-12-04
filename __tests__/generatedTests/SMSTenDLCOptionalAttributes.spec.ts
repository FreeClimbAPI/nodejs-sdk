import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SMSTenDLCOptionalAttributes', () => {
    let model: freeclimb.SMSTenDLCOptionalAttributes = new freeclimb.SMSTenDLCOptionalAttributes({
    })
    describe("SMSTenDLCOptionalAttributes class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.SMSTenDLCOptionalAttributes)
        })
    })
})
