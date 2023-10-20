import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('QueueListAllOf Tests', () => {
    let model: freeclimb.QueueListAllOf = new freeclimb.QueueListAllOf({
    })
    test('Test Property queues', () => {
        
        const value:freeclimb.QueueResult[] = []
        model.queues = value
        expect(model.queues).toStrictEqual(value)
    })
})
