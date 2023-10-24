import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('AnsweredBy Tests', () => {
    test('HUMAN_ENUM_TEST', () => {    
        expect(freeclimb.AnsweredBy.HUMAN).toBe("human")
    })
    test('MACHINE_ENUM_TEST', () => {    
        expect(freeclimb.AnsweredBy.MACHINE).toBe("machine")
    })
})
