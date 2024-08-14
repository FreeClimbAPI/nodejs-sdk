import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SetTalk', () => {
    let model: freeclimb.SetTalk = new freeclimb.SetTalk({
       
        talk: true,
    })

    describe(".talk", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.talk).toBe(value)
        })
    })
})
