import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('UpdateConferenceRequest', () => {
    let model: freeclimb.UpdateConferenceRequest = new freeclimb.UpdateConferenceRequest({
        alias: "test_alias",

        playBeep: freeclimb.PlayBeep.ALWAYS,

        status: freeclimb.UpdateConferenceRequestStatus.EMPTY,
    })
    describe("UpdateConferenceRequest class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.UpdateConferenceRequest)
        })
    })
    describe(".alias", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_alias"
            expect(model.alias).toBe(value)
        })
    })
    describe(".playBeep", () => {
        it('resolves to particular value on initialization', () => {

            const value = "always"
            expect(model.playBeep).toBe(value)
        })
    })
    describe(".status", () => {
        it('resolves to particular value on initialization', () => {

            const value = "empty"
            expect(model.status).toBe(value)
        })
    })
})
