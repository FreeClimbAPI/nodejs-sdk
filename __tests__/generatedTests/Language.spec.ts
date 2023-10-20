import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('Language Tests', () => {
    test('CATALAN_enum_Test', () => {    
        expect(freeclimb.Language.CATALAN).toBe("ca-ES")
    })
    test('DANISH_enum_Test', () => {    
        expect(freeclimb.Language.DANISH).toBe("da-DK")
    })
    test('GERMAN_enum_Test', () => {    
        expect(freeclimb.Language.GERMAN).toBe("de-DE")
    })
    test('ENGLISH_AU_enum_Test', () => {    
        expect(freeclimb.Language.ENGLISH_AU).toBe("en-AU")
    })
    test('ENGLISH_CA_enum_Test', () => {    
        expect(freeclimb.Language.ENGLISH_CA).toBe("en-CA")
    })
    test('ENGLISH_UK_enum_Test', () => {    
        expect(freeclimb.Language.ENGLISH_UK).toBe("en-GB")
    })
    test('ENGLISH_IN_enum_Test', () => {    
        expect(freeclimb.Language.ENGLISH_IN).toBe("en-IN")
    })
    test('ENGLISH_US_enum_Test', () => {    
        expect(freeclimb.Language.ENGLISH_US).toBe("en-US")
    })
    test('ENGLISH_ES_enum_Test', () => {    
        expect(freeclimb.Language.ENGLISH_ES).toBe("es-ES")
    })
    test('ENGLISH_MX_enum_Test', () => {    
        expect(freeclimb.Language.ENGLISH_MX).toBe("es-MX")
    })
    test('FINNISH_enum_Test', () => {    
        expect(freeclimb.Language.FINNISH).toBe("fi-FI")
    })
    test('FRENCH_CA_enum_Test', () => {    
        expect(freeclimb.Language.FRENCH_CA).toBe("fr-CA")
    })
    test('FRENCH_FR_enum_Test', () => {    
        expect(freeclimb.Language.FRENCH_FR).toBe("fr-FR")
    })
    test('ITALIAN_enum_Test', () => {    
        expect(freeclimb.Language.ITALIAN).toBe("it-IT")
    })
    test('JAPANESE_enum_Test', () => {    
        expect(freeclimb.Language.JAPANESE).toBe("ja-JP")
    })
    test('KOREAN_enum_Test', () => {    
        expect(freeclimb.Language.KOREAN).toBe("ko-KR")
    })
    test('NORWEGIAN_enum_Test', () => {    
        expect(freeclimb.Language.NORWEGIAN).toBe("nb-NO")
    })
    test('DUTCH_enum_Test', () => {    
        expect(freeclimb.Language.DUTCH).toBe("nl-NL")
    })
    test('POLISH_enum_Test', () => {    
        expect(freeclimb.Language.POLISH).toBe("pl-PL")
    })
    test('PORTUGESE_BR_enum_Test', () => {    
        expect(freeclimb.Language.PORTUGESE_BR).toBe("pt-BR")
    })
    test('PORTUGESE_PT_enum_Test', () => {    
        expect(freeclimb.Language.PORTUGESE_PT).toBe("pt-PT")
    })
    test('RUSSIAN_enum_Test', () => {    
        expect(freeclimb.Language.RUSSIAN).toBe("ru-RU")
    })
    test('SWEDISH_enum_Test', () => {    
        expect(freeclimb.Language.SWEDISH).toBe("sv-SE")
    })
    test('CHINESE_CN_enum_Test', () => {    
        expect(freeclimb.Language.CHINESE_CN).toBe("zh-CN")
    })
    test('CHINESE_HK_enum_Test', () => {    
        expect(freeclimb.Language.CHINESE_HK).toBe("zh-HK")
    })
    test('CHINESE_TW_enum_Test', () => {    
        expect(freeclimb.Language.CHINESE_TW).toBe("zh-TW")
    })
})
