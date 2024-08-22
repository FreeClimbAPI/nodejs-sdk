import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('MessagesListAllOf', () => {
    let model: freeclimb.MessagesListAllOf = new freeclimb.MessagesListAllOf({
        messages: [],
    })
    describe("MessagesListAllOf class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.MessagesListAllOf)
        })
    })
    describe(".messages", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.MessageResult[] = []
            expect(model.messages).toStrictEqual(value)
        })
    })
})
