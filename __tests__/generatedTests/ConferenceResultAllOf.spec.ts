import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('ConferenceResultAllOf', () => {
    let model: freeclimb.ConferenceResultAllOf = new freeclimb.ConferenceResultAllOf({
        conferenceId: "test_conferenceId",
        accountId: "test_accountId",
        alias: "test_alias",

        playBeep: freeclimb.PlayBeep.ALWAYS,
        record: true,

        status: freeclimb.ConferenceStatus.EMPTY,
        waitUrl: "test_waitUrl",
        actionUrl: "test_actionUrl",
        statusCallbackUrl: "test_statusCallbackUrl",
        subresourceUris: {},
    })
    describe(".conferenceId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_conferenceId"
            expect(model.conferenceId).toBe(value)
        })
    })
    describe(".accountId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_accountId"
            expect(model.accountId).toBe(value)
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
    describe(".status", () => {
        it('resolves to particular value on initialization', () => {

            const value = "empty"
            expect(model.status).toBe(value)
        })
    })
    describe(".waitUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_waitUrl"
            expect(model.waitUrl).toBe(value)
        })
    })
    describe(".actionUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_actionUrl"
            expect(model.actionUrl).toBe(value)
        })
    })
    describe(".statusCallbackUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_statusCallbackUrl"
            expect(model.statusCallbackUrl).toBe(value)
        })
    })
    describe(".subresourceUris", () => {
        it('resolves to particular value on initialization', () => {
            const value = {}
            expect(model.subresourceUris).toStrictEqual(value)
        })
    })
})
