import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('CreateWebRTCToken', () => {
    let model: freeclimb.CreateWebRTCToken = new freeclimb.CreateWebRTCToken({
        to: "test_to",
        _from: "test_from",
        uses: 1,
    })
    describe(".to", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_to"
            expect(model.to).toBe(value)
        })
    })
    describe(".from", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_from"
            expect(model._from).toStrictEqual(value)
        })
    })
    describe(".uses", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.uses).toBe(value)
        })
    })
})