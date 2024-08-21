import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('ApplicationResultAllOf', () => {
    let model: freeclimb.ApplicationResultAllOf = new freeclimb.ApplicationResultAllOf({
        accountId: "test_accountId",
        applicationId: "test_applicationId",
        alias: "test_alias",
        voiceUrl: "test_voiceUrl",
        voiceFallbackUrl: "test_voiceFallbackUrl",
        callConnectUrl: "test_callConnectUrl",
        statusCallbackUrl: "test_statusCallbackUrl",
        smsUrl: "test_smsUrl",
        smsFallbackUrl: "test_smsFallbackUrl",
    })
describe("ApplicationResultAllOf class test", () => {
     it('resolves to the class type upon initialization', () => {
        expect(model).toBeInstanceOf(freeclimb.ApplicationResultAllOf)
     })
})
    describe(".accountId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_accountId"
            expect(model.accountId).toBe(value)
        })
    })
    describe(".applicationId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_applicationId"
            expect(model.applicationId).toBe(value)
        })
    })
    describe(".alias", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_alias"
            expect(model.alias).toBe(value)
        })
    })
    describe(".voiceUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_voiceUrl"
            expect(model.voiceUrl).toBe(value)
        })
    })
    describe(".voiceFallbackUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_voiceFallbackUrl"
            expect(model.voiceFallbackUrl).toBe(value)
        })
    })
    describe(".callConnectUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_callConnectUrl"
            expect(model.callConnectUrl).toBe(value)
        })
    })
    describe(".statusCallbackUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_statusCallbackUrl"
            expect(model.statusCallbackUrl).toBe(value)
        })
    })
    describe(".smsUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_smsUrl"
            expect(model.smsUrl).toBe(value)
        })
    })
    describe(".smsFallbackUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_smsFallbackUrl"
            expect(model.smsFallbackUrl).toBe(value)
        })
    })
})
