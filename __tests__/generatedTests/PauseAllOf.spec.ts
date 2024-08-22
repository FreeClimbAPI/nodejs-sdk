import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('PauseAllOf', () => {
    let model: freeclimb.PauseAllOf = new freeclimb.PauseAllOf({
        length: 1,
    })
    describe("PauseAllOf class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.PauseAllOf)
        })
    })
    describe(".length", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.length).toBe(value)
        })
    })
})
