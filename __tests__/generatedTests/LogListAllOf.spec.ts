import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('LogListAllOf Tests', () => {
    let model: freeclimb.LogListAllOf = new freeclimb.LogListAllOf({
    })
    test('Test Property logs', () => {
        
        const value:freeclimb.LogResult[] = []
        model.logs = value
        expect(model.logs).toStrictEqual(value)
         
    })
})
