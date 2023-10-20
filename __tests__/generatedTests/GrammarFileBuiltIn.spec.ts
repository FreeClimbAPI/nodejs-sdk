import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('GrammarFileBuiltIn Tests', () => {
    test('ALPHNUM6_enum_Test', () => {    
        expect(freeclimb.GrammarFileBuiltIn.ALPHNUM6).toBe("ALPHNUM6")
    })
    test('ANY_DIG_enum_Test', () => {    
        expect(freeclimb.GrammarFileBuiltIn.ANY_DIG).toBe("ANY_DIG")
    })
    test('DIG1_enum_Test', () => {    
        expect(freeclimb.GrammarFileBuiltIn.DIG1).toBe("DIG1")
    })
    test('DIG2_enum_Test', () => {    
        expect(freeclimb.GrammarFileBuiltIn.DIG2).toBe("DIG2")
    })
    test('DIG3_enum_Test', () => {    
        expect(freeclimb.GrammarFileBuiltIn.DIG3).toBe("DIG3")
    })
    test('DIG4_enum_Test', () => {    
        expect(freeclimb.GrammarFileBuiltIn.DIG4).toBe("DIG4")
    })
    test('DIG5_enum_Test', () => {    
        expect(freeclimb.GrammarFileBuiltIn.DIG5).toBe("DIG5")
    })
    test('DIG6_enum_Test', () => {    
        expect(freeclimb.GrammarFileBuiltIn.DIG6).toBe("DIG6")
    })
    test('DIG7_enum_Test', () => {    
        expect(freeclimb.GrammarFileBuiltIn.DIG7).toBe("DIG7")
    })
    test('DIG8_enum_Test', () => {    
        expect(freeclimb.GrammarFileBuiltIn.DIG8).toBe("DIG8")
    })
    test('DIG9_enum_Test', () => {    
        expect(freeclimb.GrammarFileBuiltIn.DIG9).toBe("DIG9")
    })
    test('DIG10_enum_Test', () => {    
        expect(freeclimb.GrammarFileBuiltIn.DIG10).toBe("DIG10")
    })
    test('DIG11_enum_Test', () => {    
        expect(freeclimb.GrammarFileBuiltIn.DIG11).toBe("DIG11")
    })
    test('UP_TO_20_DIGIT_SEQUENCE_enum_Test', () => {    
        expect(freeclimb.GrammarFileBuiltIn.UP_TO_20_DIGIT_SEQUENCE).toBe("UP_TO_20_DIGIT_SEQUENCE")
    })
    test('VERSAY_YESNO_enum_Test', () => {    
        expect(freeclimb.GrammarFileBuiltIn.VERSAY_YESNO).toBe("VERSAY_YESNO")
    })
})
