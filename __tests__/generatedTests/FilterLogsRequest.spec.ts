import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('FilterLogsRequest Tests', () => {
    let model: freeclimb.FilterLogsRequest = new freeclimb.FilterLogsRequest({
        pql: null as any,
    })
    test('Test Property pql', () => {
        const value = "string"
        model.pql = "string"
        expect(model.pql).toBe(value)
            })
})
