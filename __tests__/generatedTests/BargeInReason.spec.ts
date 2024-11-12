import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('BargeInReason', () => {
    describe('.NO_BARGE_IN', () => {
        it('resolves to correct value for NO_BARGE_IN enum property', () => {
           expect(freeclimb.BargeInReason.NO_BARGE_IN).toBe("noBargeIn")
        })
    })
    describe('.BARGE_IN_BY_DTMF', () => {
        it('resolves to correct value for BARGE_IN_BY_DTMF enum property', () => {
           expect(freeclimb.BargeInReason.BARGE_IN_BY_DTMF).toBe("bargeInByDTMF")
        })
    })
    describe('.bargeInByEnergy', () => {
        it('resolves to correct value for bargeInByEnergy enum property', () => {
           expect(freeclimb.BargeInReason.bargeInByEnergy).toBe("bargeInByEnergy")
        })
    })
})
