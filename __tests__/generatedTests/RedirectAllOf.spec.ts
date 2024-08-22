import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('RedirectAllOf', () => {
    let model: freeclimb.RedirectAllOf = new freeclimb.RedirectAllOf({
        actionUrl: "https://123.abc",
    })
    describe("RedirectAllOf class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.RedirectAllOf)
        })
    })
    describe(".actionUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "https://123.abc"
            expect(model.actionUrl).toBe(value)
        })
    })
})
