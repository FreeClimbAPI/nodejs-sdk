import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('ApplicationListAllOf', () => {
    let model: freeclimb.ApplicationListAllOf = new freeclimb.ApplicationListAllOf({
        applications: [],
    })
    describe(".applications", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.ApplicationResult[] = []
            expect(model.applications).toStrictEqual(value)
        })
    })
})
