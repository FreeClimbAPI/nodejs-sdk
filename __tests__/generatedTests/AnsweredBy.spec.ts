import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('AnsweredBy Tests', () => {
    test('HUMAN_enum_Test', () => {    
        expect(freeclimb.AnsweredBy.HUMAN).toBe("human")
    })
    test('MACHINE_enum_Test', () => {    
        expect(freeclimb.AnsweredBy.MACHINE).toBe("machine")
    })
})
