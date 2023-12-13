import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('MachineType', () => {
    describe('.ANSWERING_MACHINE', () => {
        it('resolves to correct value for ANSWERING_MACHINE enum property', () => {
           expect(freeclimb.MachineType.ANSWERING_MACHINE).toBe("answeringMachine")
        })
    })
    describe('.FAX_MACHINE', () => {
        it('resolves to correct value for FAX_MACHINE enum property', () => {
           expect(freeclimb.MachineType.FAX_MACHINE).toBe("faxMachine")
        })
    })
})
