import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('MessagesList', () => {
    let model: freeclimb.MessagesList = new freeclimb.MessagesList({
        total: 1,
        start: 1,
        end: 1,
        page: 1,
        numPages: 1,
        pageSize: 1,
        nextPageUri: "test_nextPageUri",
        messages: [],
    })
    describe("MessagesList class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.MessagesList)
        })
    })
    describe(".total", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.total).toBe(value)
        })
    })
    describe(".start", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.start).toBe(value)
        })
    })
    describe(".end", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.end).toBe(value)
        })
    })
    describe(".page", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.page).toBe(value)
        })
    })
    describe(".numPages", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.numPages).toBe(value)
        })
    })
    describe(".pageSize", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.pageSize).toBe(value)
        })
    })
    describe(".nextPageUri", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_nextPageUri"
            expect(model.nextPageUri).toBe(value)
        })
    })
    describe(".messages", () => {
        it('resolves to particular value on initialization', () => {

            const value:freeclimb.MessageResult[] = []
            expect(model.messages).toStrictEqual(value)
        })
    })
})
