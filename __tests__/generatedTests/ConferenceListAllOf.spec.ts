import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('ConferenceListAllOf', () => {
    let model: freeclimb.ConferenceListAllOf = new freeclimb.ConferenceListAllOf({
        conferences: [],
    })
    describe(".conferences", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.ConferenceResult[] = []
            expect(model.conferences).toStrictEqual(value)
        })
    })
})
