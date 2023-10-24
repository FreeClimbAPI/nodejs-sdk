import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('MessageDirection Tests', () => {
    test('INBOUND_Enum_Test', () => {    
        expect(freeclimb.MessageDirection.INBOUND).toBe("inbound")
    })
    test('OUTBOUND_Enum_Test', () => {    
        expect(freeclimb.MessageDirection.OUTBOUND).toBe("outbound")
    })
})
