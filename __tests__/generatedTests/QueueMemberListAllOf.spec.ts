import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('QueueMemberListAllOf Tests', () => {
    let model: freeclimb.QueueMemberListAllOf = new freeclimb.QueueMemberListAllOf({
    })
    test('Test Property queueMembers', () => {
        
        const value:freeclimb.QueueMember[] = []
        model.queueMembers = value
        expect(model.queueMembers).toStrictEqual(value)
         
    })
})
