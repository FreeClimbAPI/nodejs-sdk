import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('ConferenceParticipantListAllOf Tests', () => {
    let model: freeclimb.ConferenceParticipantListAllOf = new freeclimb.ConferenceParticipantListAllOf({
    })
    test('Test Property participants', () => {
        
        const value:freeclimb.ConferenceParticipantResult[] = []
        model.participants = value
        expect(model.participants).toStrictEqual(value)
    })
})
