import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('QueueListAllOf', () => {
    let model: freeclimb.QueueListAllOf = new freeclimb.QueueListAllOf({
        queues: [],
    })
    describe(".queues", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.QueueResult[] = []
            expect(model.queues).toStrictEqual(value)
        })
    })
})
