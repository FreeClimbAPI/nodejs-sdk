import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('MessagesListAllOf', () => {
    let model: freeclimb.MessagesListAllOf = new freeclimb.MessagesListAllOf({
        messages: [],
    })
    describe(".messages", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.MessageResult[] = []
            expect(model.messages).toStrictEqual(value)
        })
    })
})
