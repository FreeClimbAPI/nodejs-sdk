import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('MessageRequestAllOf', () => {
    let model: freeclimb.MessageRequestAllOf = new freeclimb.MessageRequestAllOf({
        _from: "test_from",
        to: "test_to",
        text: "test_text",
        notificationUrl: "test_notificationUrl",
        mediaUrls: [],
    })
    describe(".from", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_from"
            expect(model._from).toStrictEqual(value)
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
    describe(".notificationUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_notificationUrl"
            expect(model.notificationUrl).toBe(value)
        })
    })
    describe(".mediaUrls", () => {
        it('resolves to particular value on initialization', () => {

            const value:any[] = []
            expect(model.mediaUrls).toStrictEqual(value)
        })
    })
})
