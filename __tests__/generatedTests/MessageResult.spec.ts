import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('MessageResult', () => {
    let model: freeclimb.MessageResult = new freeclimb.MessageResult({
        uri: "test_uri",
        dateCreated: "test_dateCreated",
        dateUpdated: "test_dateUpdated",
        revision: 1,
        accountId: "test_accountId",
        messageId: "test_messageId",

        status: freeclimb.MessageStatus.NEW,
        from: "test_from",
        to: "test_to",
        text: "test_text",
        direction: "test_direction",
        notificationUrl: "test_notificationUrl",
        brandId: "test_brandId",
        campaignId: "test_campaignId",
        segmentCount: 1.0,
        mediaUrls: [],
    })
    describe("MessageResult class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.MessageResult)
        })
    })
    describe(".uri", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_uri"
            expect(model.uri).toBe(value)
        })
    })
    describe(".dateCreated", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_dateCreated"
            expect(model.dateCreated).toBe(value)
        })
    })
    describe(".dateUpdated", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_dateUpdated"
            expect(model.dateUpdated).toBe(value)
        })
    })
    describe(".revision", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.revision).toBe(value)
        })
    })
    describe(".accountId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_accountId"
            expect(model.accountId).toBe(value)
        })
    })
    describe(".messageId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_messageId"
            expect(model.messageId).toBe(value)
        })
    })
    describe(".status", () => {
        it('resolves to particular value on initialization', () => {

            const value = "new"
            expect(model.status).toBe(value)
        })
    })
    describe(".from", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_from"
            expect(model.from).toBe(value)
        })
    })
    describe(".to", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_to"
            expect(model.to).toBe(value)
        })
    })
    describe(".text", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_text"
            expect(model.text).toBe(value)
        })
    })
    describe(".direction", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_direction"
            expect(model.direction).toBe(value)
        })
    })
    describe(".notificationUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_notificationUrl"
            expect(model.notificationUrl).toBe(value)
        })
    })
    describe(".brandId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_brandId"
            expect(model.brandId).toBe(value)
        })
    })
    describe(".campaignId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_campaignId"
            expect(model.campaignId).toBe(value)
        })
    })
    describe(".segmentCount", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1.0
            expect(model.segmentCount).toBe(value)
        })
    })
    describe(".mediaUrls", () => {
        it('resolves to particular value on initialization', () => {

            const value:any[] = []
            expect(model.mediaUrls).toStrictEqual(value)
        })
    })
})
