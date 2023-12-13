import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SMSTenDLCPartnerCampaignsListResultAllOf', () => {
    let model: freeclimb.SMSTenDLCPartnerCampaignsListResultAllOf = new freeclimb.SMSTenDLCPartnerCampaignsListResultAllOf({
        partnerCampaigns: [],
    })
    describe(".partnerCampaigns", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.SMSTenDLCPartnerCampaign[] = []
            expect(model.partnerCampaigns).toStrictEqual(value)
        })
    })
})
