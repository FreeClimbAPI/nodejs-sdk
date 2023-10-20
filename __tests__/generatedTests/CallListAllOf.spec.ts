import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('CallListAllOf Tests', () => {
    let model: freeclimb.CallListAllOf = new freeclimb.CallListAllOf({
    })
    test('Test Property calls', () => {
        
        const value:freeclimb.CallResult[] = []
        model.calls = value
        expect(model.calls).toStrictEqual(value)
    })
})
