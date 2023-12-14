import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('RecordingListAllOf', () => {
    let model: freeclimb.RecordingListAllOf = new freeclimb.RecordingListAllOf({
        recordings: [],
    })
    describe(".recordings", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.RecordingResult[] = []
            expect(model.recordings).toStrictEqual(value)
        })
    })
})
