import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('Park', () => {
    let model: freeclimb.Park = new freeclimb.Park({
       
        waitUrl: "https://123.abc",
        actionUrl: "https://123.abc",
        notificationUrl: "test_notificationUrl",
    })
    describe("Park class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.Park)
        })
    })

    describe(".waitUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "https://123.abc"
            expect(model.waitUrl).toBe(value)
        })
    })
    describe(".actionUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "https://123.abc"
            expect(model.actionUrl).toBe(value)
        })
    })
    describe(".notificationUrl", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_notificationUrl"
            expect(model.notificationUrl).toBe(value)
        })
    })
})
