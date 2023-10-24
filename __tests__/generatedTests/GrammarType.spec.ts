import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('GrammarType Tests', () => {
    test('URL_ENUM_TEST', () => {    
        expect(freeclimb.GrammarType.URL).toBe("URL")
    })
    test('BUILT_IN_ENUM_TEST', () => {    
        expect(freeclimb.GrammarType.BUILT_IN).toBe("BUILTIN")
    })
})
