import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('CallList Tests', () => {
    let model: freeclimb.CallList = new freeclimb.CallList({
    })
    test('Test Property total', () => {
        const value = 1
        model.total = 1
        expect(model.total).toBe(value)
        
    })
    test('Test Property start', () => {
        const value = 1
        model.start = 1
        expect(model.start).toBe(value)
        
    })
    test('Test Property end', () => {
        const value = 1
        model.end = 1
        expect(model.end).toBe(value)
        
    })
    test('Test Property page', () => {
        const value = 1
        model.page = 1
        expect(model.page).toBe(value)
        
    })
    test('Test Property numPages', () => {
        const value = 1
        model.numPages = 1
        expect(model.numPages).toBe(value)
        
    })
    test('Test Property pageSize', () => {
        const value = 1
        model.pageSize = 1
        expect(model.pageSize).toBe(value)
        
    })
    test('Test Property nextPageUri', () => {
        const value = "string"
        model.nextPageUri = "string"
        expect(model.nextPageUri).toBe(value)
                
    })
    test('Test Property calls', () => {
        
        const value:freeclimb.CallResult[] = []
        model.calls = value
        expect(model.calls).toStrictEqual(value)

    })
})