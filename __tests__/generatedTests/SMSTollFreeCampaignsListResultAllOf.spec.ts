import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SMSTollFreeCampaignsListResultAllOf', () => {
    let model: freeclimb.SMSTollFreeCampaignsListResultAllOf = new freeclimb.SMSTollFreeCampaignsListResultAllOf({
        brands: [],
    })
    describe("SMSTollFreeCampaignsListResultAllOf class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.SMSTollFreeCampaignsListResultAllOf)
        })
    })
    describe(".brands", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.SMSTollFreeCampaign[] = []
            expect(model.brands).toStrictEqual(value)
        })
    })
})
