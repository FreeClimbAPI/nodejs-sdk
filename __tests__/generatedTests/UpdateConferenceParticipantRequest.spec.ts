import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('UpdateConferenceParticipantRequest', () => {
    let model: freeclimb.UpdateConferenceParticipantRequest = new freeclimb.UpdateConferenceParticipantRequest({
        talk: true,
        listen: true,
        dtmfPassThrough: true,
    })
    describe("UpdateConferenceParticipantRequest class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.UpdateConferenceParticipantRequest)
        })
    })
    describe(".talk", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.talk).toBe(value)
        })
    })
    describe(".listen", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.listen).toBe(value)
        })
    })
    describe(".dtmfPassThrough", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.dtmfPassThrough).toBe(value)
        })
    })
})
