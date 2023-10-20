import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('MachineType Tests', () => {
    test('ANSWERING_MACHINE_enum_Test', () => {    
        expect(freeclimb.MachineType.ANSWERING_MACHINE).toBe("answeringMachine")
    })
    test('FAX_MACHINE_enum_Test', () => {    
        expect(freeclimb.MachineType.FAX_MACHINE).toBe("faxMachine")
    })
})
