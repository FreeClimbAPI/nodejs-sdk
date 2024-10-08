import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('PlayEarlyMediaAllOf', () => {
    let model: freeclimb.PlayEarlyMediaAllOf = new freeclimb.PlayEarlyMediaAllOf({
        file: "test_file",
    })
    describe("PlayEarlyMediaAllOf class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.PlayEarlyMediaAllOf)
        })
    })
    describe(".file", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_file"
            expect(model.file).toBe(value)
        })
    })
})
