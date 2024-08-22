import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('CreateConferenceRequest', () => {
    let model: freeclimb.CreateConferenceRequest = new freeclimb.CreateConferenceRequest({
        alias: "test_alias",

        playBeep: freeclimb.PlayBeep.ALWAYS,
        record: true,
        waitUrl: "test_waitUrl",
        statusCallbackUrl: "test_statusCallbackUrl",
    })
    describe("CreateConferenceRequest class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.CreateConferenceRequest)
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
    describe(".record", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.record).toBe(value)
        })
    })
    describe(".waitUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_waitUrl"
            expect(model.waitUrl).toBe(value)
        })
    })
    describe(".statusCallbackUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_statusCallbackUrl"
            expect(model.statusCallbackUrl).toBe(value)
        })
    })
})
