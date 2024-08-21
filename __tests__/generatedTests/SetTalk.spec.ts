import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SetTalk', () => {
    let model: freeclimb.SetTalk = new freeclimb.SetTalk({
       
        talk: true,
    })
describe("SetTalk class test", () => {
     it('resolves to the class type upon initialization', () => {
        expect(model).toBeInstanceOf(freeclimb.SetTalk)
     })
})

    describe(".talk", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.talk).toBe(value)
        })
    })
})
