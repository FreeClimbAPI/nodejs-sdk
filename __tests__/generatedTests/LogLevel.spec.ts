import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('LogLevel Tests', () => {
    test('INFO_enum_Test', () => {    
        expect(freeclimb.LogLevel.INFO).toBe("info")
    })
    test('WARNING_enum_Test', () => {    
        expect(freeclimb.LogLevel.WARNING).toBe("warning")
    })
    test('ERROR_enum_Test', () => {    
        expect(freeclimb.LogLevel.ERROR).toBe("error")
    })
})
