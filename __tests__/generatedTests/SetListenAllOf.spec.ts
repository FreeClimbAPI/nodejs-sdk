import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('SetListenAllOf', () => {
    let model: freeclimb.SetListenAllOf = new freeclimb.SetListenAllOf({
        listen: true,
    })
    describe(".listen", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.listen).toBe(value)
        })
    })
})
