import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('QueueList Tests', () => {
    let model: freeclimb.QueueList = new freeclimb.QueueList({
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
    test('Test Property queues', () => {
        
        const value:freeclimb.QueueResult[] = []
        model.queues = value
        expect(model.queues).toStrictEqual(value)

    })
})