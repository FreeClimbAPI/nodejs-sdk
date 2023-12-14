import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('FilterLogsRequest', () => {
    let model: freeclimb.FilterLogsRequest = new freeclimb.FilterLogsRequest({
        pql: "test_pql",
    })
    describe(".pql", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_pql"
            expect(model.pql).toBe(value)
        })
    })
})
