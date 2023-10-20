import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('RecordingListAllOf Tests', () => {
    let model: freeclimb.RecordingListAllOf = new freeclimb.RecordingListAllOf({
    })
    test('Test Property recordings', () => {
        
        const value:freeclimb.RecordingResult[] = []
        model.recordings = value
        expect(model.recordings).toStrictEqual(value)
    })
})
