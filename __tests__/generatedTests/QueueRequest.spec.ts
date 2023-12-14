import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('QueueRequest', () => {
    let model: freeclimb.QueueRequest = new freeclimb.QueueRequest({
        alias: "test_alias",
        maxSize: 1,
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
})
