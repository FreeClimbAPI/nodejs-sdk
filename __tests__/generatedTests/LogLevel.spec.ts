import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('LogLevel Tests', () => {
    test('INFO_ENUM_TEST', () => {    
        expect(freeclimb.LogLevel.INFO).toBe("info")
    })
    test('WARNING_ENUM_TEST', () => {    
        expect(freeclimb.LogLevel.WARNING).toBe("warning")
    })
    test('ERROR_ENUM_TEST', () => {    
        expect(freeclimb.LogLevel.ERROR).toBe("error")
    })
})
