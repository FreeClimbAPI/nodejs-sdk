import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('ConferenceListAllOf', () => {
    let model: freeclimb.ConferenceListAllOf = new freeclimb.ConferenceListAllOf({
        conferences: [],
    })
describe("ConferenceListAllOf class test", () => {
     it('resolves to the class type upon initialization', () => {
        expect(model).toBeInstanceOf(freeclimb.ConferenceListAllOf)
     })
})
    describe(".conferences", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.ConferenceResult[] = []
            expect(model.conferences).toStrictEqual(value)
        })
    })
})
