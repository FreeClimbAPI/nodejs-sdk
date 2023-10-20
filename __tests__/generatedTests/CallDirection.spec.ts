import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('CallDirection Tests', () => {
    test('INBOUND_enum_Test', () => {    
        expect(freeclimb.CallDirection.INBOUND).toBe("inbound")
    })
    test('OUTBOUND_API_enum_Test', () => {    
        expect(freeclimb.CallDirection.OUTBOUND_API).toBe("outboundAPI")
    })
    test('OUTBOUND_DIAL_enum_Test', () => {    
        expect(freeclimb.CallDirection.OUTBOUND_DIAL).toBe("outboundDial")
    })
})
