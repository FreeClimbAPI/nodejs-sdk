import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('MessagesListAllOf Tests', () => {
    let model: freeclimb.MessagesListAllOf = new freeclimb.MessagesListAllOf({
    })
    test('Test Property messages', () => {
        
        const value:freeclimb.MessageResult[] = []
        model.messages = value
        expect(model.messages).toStrictEqual(value)
         
    })
})
