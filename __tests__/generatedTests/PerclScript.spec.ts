import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('PerclScript', () => {
    let model: freeclimb.PerclScript = new freeclimb.PerclScript({
        commands: [],
    })
    describe(".commands", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.PerclCommand[] = []
            expect(model.commands).toStrictEqual(value)
        })
    })
})
