import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SMSTenDLCCampaignsListResultAllOf', () => {
    let model: freeclimb.SMSTenDLCCampaignsListResultAllOf = new freeclimb.SMSTenDLCCampaignsListResultAllOf({
        campaigns: [],
    })
    describe(".campaigns", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.SMSTenDLCCampaign[] = []
            expect(model.campaigns).toStrictEqual(value)
        })
    })
})
