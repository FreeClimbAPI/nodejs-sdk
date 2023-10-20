import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('MessageDirection Tests', () => {
    test('INBOUND_enum_Test', () => {    
        expect(freeclimb.MessageDirection.INBOUND).toBe("inbound")
    })
    test('OUTBOUND_enum_Test', () => {    
        expect(freeclimb.MessageDirection.OUTBOUND).toBe("outbound")
    })
})
