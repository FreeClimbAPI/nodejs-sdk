import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SetListen', () => {
    let model: freeclimb.SetListen = new freeclimb.SetListen({
       
        listen: true,
    })

    describe(".listen", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.listen).toBe(value)
        })
    })
})
