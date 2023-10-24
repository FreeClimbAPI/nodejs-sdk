import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('LogLevel Tests', () => {
    test('INFO_Enum_Test', () => {    
        expect(freeclimb.LogLevel.INFO).toBe("info")
    })
    test('WARNING_Enum_Test', () => {    
        expect(freeclimb.LogLevel.WARNING).toBe("warning")
    })
    test('ERROR_Enum_Test', () => {    
        expect(freeclimb.LogLevel.ERROR).toBe("error")
    })
})
