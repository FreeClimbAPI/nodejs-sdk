import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SmsAllOf', () => {
    let model: freeclimb.SmsAllOf = new freeclimb.SmsAllOf({
        to: "test_to",
        _from: "test_from",
        text: "test_text",
        notificationUrl: "test_notificationUrl",
    })
    describe(".to", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_to"
            expect(model.to).toBe(value)
        })
    })
    describe(".from", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_from"
            expect(model._from).toStrictEqual(value)
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
})
