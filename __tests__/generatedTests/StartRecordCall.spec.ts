import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('StartRecordCall', () => {
    let model: freeclimb.StartRecordCall = new freeclimb.StartRecordCall({
        command: "StartRecordCall",
    })
    describe(".command", () => {
        it('resolves to particular value on initialization', () => {
            const value = "StartRecordCall"
            expect(model.command).toBe(value)
        })
    })
})
