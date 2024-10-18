import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('CompletionResult', () => {
    let model: freeclimb.CompletionResult = new freeclimb.CompletionResult({
        response: "test_response",
        status: freeclimb.CompletionResultStatusEnum.SUCCESS,
    })
    describe("CompletionResult class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.CompletionResult)
        })
    })
    describe(".response", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_response"
            expect(model.response).toBe(value)
        })
    })
    describe(".status", () => {
        it('resolves to particular value on initialization', () => {
        const value = freeclimb.CompletionResultStatusEnum.SUCCESS
        expect(model.status).toBe(value)
        })
    })
})
