import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('SMSTenDLCCampaignsListResultAllOf Tests', () => {
    let model: freeclimb.SMSTenDLCCampaignsListResultAllOf = new freeclimb.SMSTenDLCCampaignsListResultAllOf({
    })
    test('Test Property campaigns', () => {
        
        const value:freeclimb.SMSTenDLCCampaign[] = []
        model.campaigns = value
        expect(model.campaigns).toStrictEqual(value)
    })
})
