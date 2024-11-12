import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('Webhook', () => {
    let model: freeclimb.Webhook = new freeclimb.Webhook({
        requestType: "test_requestType",
    })
    describe("Webhook class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.Webhook)
        })
    })
    describe(".requestType", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_requestType"
            expect(model.requestType).toBe(value)
        })
    })
   describe('.parseFromString', () => {
        it('throws an error if provided an invalid request type', () => {
            expect(() => freeclimb.Webhook.parseFromString('{ "requestType": "invalid" }')).toThrow()
        })
        it('does not throw when provided a valid value', () => {
            expect(() => freeclimb.Webhook.parseFromString('{ "requestType": "transcribe" }')).not.toThrow()
        })
   })
})
