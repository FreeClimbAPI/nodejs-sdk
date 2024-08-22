import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('TerminateConference', () => {
    let model: freeclimb.TerminateConference = new freeclimb.TerminateConference({
       
    })
    describe("TerminateConference class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.TerminateConference)
        })
    })

})
