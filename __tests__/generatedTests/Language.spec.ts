import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('Language Tests', () => {
    test('CATALAN_ENUM_TEST', () => {    
        expect(freeclimb.Language.CATALAN).toBe("ca-ES")
    })
    test('DANISH_ENUM_TEST', () => {    
        expect(freeclimb.Language.DANISH).toBe("da-DK")
    })
    test('GERMAN_ENUM_TEST', () => {    
        expect(freeclimb.Language.GERMAN).toBe("de-DE")
    })
    test('ENGLISH_AU_ENUM_TEST', () => {    
        expect(freeclimb.Language.ENGLISH_AU).toBe("en-AU")
    })
    test('ENGLISH_CA_ENUM_TEST', () => {    
        expect(freeclimb.Language.ENGLISH_CA).toBe("en-CA")
    })
    test('ENGLISH_UK_ENUM_TEST', () => {    
        expect(freeclimb.Language.ENGLISH_UK).toBe("en-GB")
    })
    test('ENGLISH_IN_ENUM_TEST', () => {    
        expect(freeclimb.Language.ENGLISH_IN).toBe("en-IN")
    })
    test('ENGLISH_US_ENUM_TEST', () => {    
        expect(freeclimb.Language.ENGLISH_US).toBe("en-US")
    })
    test('ENGLISH_ES_ENUM_TEST', () => {    
        expect(freeclimb.Language.ENGLISH_ES).toBe("es-ES")
    })
    test('ENGLISH_MX_ENUM_TEST', () => {    
        expect(freeclimb.Language.ENGLISH_MX).toBe("es-MX")
    })
    test('FINNISH_ENUM_TEST', () => {    
        expect(freeclimb.Language.FINNISH).toBe("fi-FI")
    })
    test('FRENCH_CA_ENUM_TEST', () => {    
        expect(freeclimb.Language.FRENCH_CA).toBe("fr-CA")
    })
    test('FRENCH_FR_ENUM_TEST', () => {    
        expect(freeclimb.Language.FRENCH_FR).toBe("fr-FR")
    })
    test('ITALIAN_ENUM_TEST', () => {    
        expect(freeclimb.Language.ITALIAN).toBe("it-IT")
    })
    test('JAPANESE_ENUM_TEST', () => {    
        expect(freeclimb.Language.JAPANESE).toBe("ja-JP")
    })
    test('KOREAN_ENUM_TEST', () => {    
        expect(freeclimb.Language.KOREAN).toBe("ko-KR")
    })
    test('NORWEGIAN_ENUM_TEST', () => {    
        expect(freeclimb.Language.NORWEGIAN).toBe("nb-NO")
    })
    test('DUTCH_ENUM_TEST', () => {    
        expect(freeclimb.Language.DUTCH).toBe("nl-NL")
    })
    test('POLISH_ENUM_TEST', () => {    
        expect(freeclimb.Language.POLISH).toBe("pl-PL")
    })
    test('PORTUGESE_BR_ENUM_TEST', () => {    
        expect(freeclimb.Language.PORTUGESE_BR).toBe("pt-BR")
    })
    test('PORTUGESE_PT_ENUM_TEST', () => {    
        expect(freeclimb.Language.PORTUGESE_PT).toBe("pt-PT")
    })
    test('RUSSIAN_ENUM_TEST', () => {    
        expect(freeclimb.Language.RUSSIAN).toBe("ru-RU")
    })
    test('SWEDISH_ENUM_TEST', () => {    
        expect(freeclimb.Language.SWEDISH).toBe("sv-SE")
    })
    test('CHINESE_CN_ENUM_TEST', () => {    
        expect(freeclimb.Language.CHINESE_CN).toBe("zh-CN")
    })
    test('CHINESE_HK_ENUM_TEST', () => {    
        expect(freeclimb.Language.CHINESE_HK).toBe("zh-HK")
    })
    test('CHINESE_TW_ENUM_TEST', () => {    
        expect(freeclimb.Language.CHINESE_TW).toBe("zh-TW")
    })
})
