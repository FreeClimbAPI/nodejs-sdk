import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('SMSTenDLCPartnerCampaignsListResultAllOf Tests', () => {
    let model: freeclimb.SMSTenDLCPartnerCampaignsListResultAllOf = new freeclimb.SMSTenDLCPartnerCampaignsListResultAllOf({
    })
    test('Test Property partnerCampaigns', () => {
        
        const value:freeclimb.SMSTenDLCPartnerCampaign[] = []
        model.partnerCampaigns = value
        expect(model.partnerCampaigns).toStrictEqual(value)
         
    })
})
