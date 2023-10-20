import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('StartRecordCall Tests', () => {
    let model: freeclimb.StartRecordCall = new freeclimb.StartRecordCall({
    })
    test('Test Property command', () => {
        const value = "string"
        model.command = "string"
        expect(model.command).toBe(value)
                
    })
})
