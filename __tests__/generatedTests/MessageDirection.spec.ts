import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('MessageDirection Tests', () => {
    test('INBOUND_ENUM_TEST', () => {    
        expect(freeclimb.MessageDirection.INBOUND).toBe("inbound")
    })
    test('OUTBOUND_ENUM_TEST', () => {    
        expect(freeclimb.MessageDirection.OUTBOUND).toBe("outbound")
    })
})
