import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SMSTollFreeCampaignsListResultAllOf', () => {
    let model: freeclimb.SMSTollFreeCampaignsListResultAllOf = new freeclimb.SMSTollFreeCampaignsListResultAllOf({
        brands: [],
    })
    describe(".brands", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.SMSTollFreeCampaign[] = []
            expect(model.brands).toStrictEqual(value)
        })
    })
})
