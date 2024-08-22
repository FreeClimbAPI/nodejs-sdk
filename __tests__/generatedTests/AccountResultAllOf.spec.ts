import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('AccountResultAllOf', () => {
    let model: freeclimb.AccountResultAllOf = new freeclimb.AccountResultAllOf({
        accountId: "test_accountId",
        apiKey: "test_apiKey",
        alias: "test_alias",
        label: "test_label",

        type: freeclimb.AccountType.TRIAL,

        status: freeclimb.AccountStatus.CLOSED,
        subresourceUris: {},
    })
    describe("AccountResultAllOf class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.AccountResultAllOf)
        })
    })
    describe(".accountId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_accountId"
            expect(model.accountId).toBe(value)
        })
    })
    describe(".apiKey", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_apiKey"
            expect(model.apiKey).toBe(value)
        })
    })
    describe(".alias", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_alias"
            expect(model.alias).toBe(value)
        })
    })
    describe(".label", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_label"
            expect(model.label).toBe(value)
        })
    })
    describe(".type", () => {
        it('resolves to particular value on initialization', () => {

            const value = "trial"
            expect(model.type).toBe(value)
        })
    })
    describe(".status", () => {
        it('resolves to particular value on initialization', () => {

            const value = "closed"
            expect(model.status).toBe(value)
        })
    })
    describe(".subresourceUris", () => {
        it('resolves to particular value on initialization', () => {
            const value = {}
            expect(model.subresourceUris).toStrictEqual(value)
        })
    })
})
