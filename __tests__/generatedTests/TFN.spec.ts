import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('TFN', () => {
    let model: freeclimb.TFN = new freeclimb.TFN({
        campaignId: "test_campaignId",
    })
    describe(".campaignId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_campaignId"
            expect(model.campaignId).toBe(value)
        })
    })
})
