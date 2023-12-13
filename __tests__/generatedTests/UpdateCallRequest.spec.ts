import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('UpdateCallRequest', () => {
    let model: freeclimb.UpdateCallRequest = new freeclimb.UpdateCallRequest({

        status: freeclimb.UpdateCallRequestStatus.CANCELED,
    })
    describe(".status", () => {
        it('resolves to particular value on initialization', () => {

            const value = "canceled"
            expect(model.status).toBe(value)
        })
    })
})
