import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('QueueResultAllOf', () => {
    let model: freeclimb.QueueResultAllOf = new freeclimb.QueueResultAllOf({
        accountId: "test_accountId",
        queueId: "test_queueId",
        alias: "test_alias",
        maxSize: 1,
        currentSize: 1,
        averageQueueRemovalTime: 1,
        subresourceUris: {},
    })
describe("QueueResultAllOf class test", () => {
     it('resolves to the class type upon initialization', () => {
        expect(model).toBeInstanceOf(freeclimb.QueueResultAllOf)
     })
})
    describe(".accountId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_accountId"
            expect(model.accountId).toBe(value)
        })
    })
    describe(".queueId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_queueId"
            expect(model.queueId).toBe(value)
        })
    })
    describe(".alias", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_alias"
            expect(model.alias).toBe(value)
        })
    })
    describe(".maxSize", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.maxSize).toBe(value)
        })
    })
    describe(".currentSize", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.currentSize).toBe(value)
        })
    })
    describe(".averageQueueRemovalTime", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.averageQueueRemovalTime).toBe(value)
        })
    })
    describe(".subresourceUris", () => {
        it('resolves to particular value on initialization', () => {
            const value = {}
            expect(model.subresourceUris).toStrictEqual(value)
        })
    })
})
