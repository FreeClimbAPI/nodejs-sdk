import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('ConferenceListAllOf Tests', () => {
    let model: freeclimb.ConferenceListAllOf = new freeclimb.ConferenceListAllOf({
    })
    test('Test Property conferences', () => {
        
        const value:freeclimb.ConferenceResult[] = []
        model.conferences = value
        expect(model.conferences).toStrictEqual(value)
    })
})
