import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('MutableResourceModel Tests', () => {
    let model: freeclimb.MutableResourceModel = new freeclimb.MutableResourceModel({
    })
    test('Test Property uri', () => {
        const value = "string"
        model.uri = "string"
        expect(model.uri).toBe(value)
                 
    })
    test('Test Property dateCreated', () => {
        const value = "string"
        model.dateCreated = "string"
        expect(model.dateCreated).toBe(value)
                 
    })
    test('Test Property dateUpdated', () => {
        const value = "string"
        model.dateUpdated = "string"
        expect(model.dateUpdated).toBe(value)
                 
    })
    test('Test Property revision', () => {
        const value = 1
        model.revision = 1
        expect(model.revision).toBe(value)
         
    })
})
