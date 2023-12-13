import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('QueueMemberListAllOf', () => {
    let model: freeclimb.QueueMemberListAllOf = new freeclimb.QueueMemberListAllOf({
        queueMembers: [],
    })
    describe(".queueMembers", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.QueueMember[] = []
            expect(model.queueMembers).toStrictEqual(value)
        })
    })
})
