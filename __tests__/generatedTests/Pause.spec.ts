import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('Pause', () => {
    let model: freeclimb.Pause = new freeclimb.Pause({
       
        length: 1,
    })
    describe("Pause class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.Pause)
        })
    })

    describe(".length", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.length).toBe(value)
        })
    })
})
