import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('PerclScript Tests', () => {
    let model: freeclimb.PerclScript = new freeclimb.PerclScript({
    })
    test('Test Property commands', () => {
        
        const value:freeclimb.PerclCommand[] = []
        model.commands = value
        expect(model.commands).toStrictEqual(value)
         
    })
})
