import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('PlayEarlyMedia', () => {
    let model: freeclimb.PlayEarlyMedia = new freeclimb.PlayEarlyMedia({
        file: "test_file",
    })
    describe(".command", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_command"
            model.command = value
            expect(model.command).toBe(value)
        })
    })
    describe(".file", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_file"
            expect(model.file).toBe(value)
        })
    })
})
