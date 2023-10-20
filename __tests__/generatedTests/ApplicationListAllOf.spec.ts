import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('ApplicationListAllOf Tests', () => {
    let model: freeclimb.ApplicationListAllOf = new freeclimb.ApplicationListAllOf({
    })
    test('Test Property applications', () => {
        
        const value:freeclimb.ApplicationResult[] = []
        model.applications = value
        expect(model.applications).toStrictEqual(value)
    })
})
