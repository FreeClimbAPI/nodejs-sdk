import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('AnsweredBy', () => {
    describe('.HUMAN', () => {
        it('resolves to correct value for HUMAN enum property', () => {
           expect(freeclimb.AnsweredBy.HUMAN).toBe("human")
        })
    })
    describe('.MACHINE', () => {
        it('resolves to correct value for MACHINE enum property', () => {
           expect(freeclimb.AnsweredBy.MACHINE).toBe("machine")
        })
    })
})
