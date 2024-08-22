import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('ConferenceParticipantResult', () => {
    let model: freeclimb.ConferenceParticipantResult = new freeclimb.ConferenceParticipantResult({
        uri: "test_uri",
        dateCreated: "test_dateCreated",
        dateUpdated: "test_dateUpdated",
        revision: 1,
        accountId: "test_accountId",
        conferenceId: "test_conferenceId",
        callId: "test_callId",
        talk: true,
        listen: true,
        startConfOnEnter: true,
    })
    describe("ConferenceParticipantResult class test", () => {
        it('resolves to the class type upon initialization', () => {
           expect(model).toBeInstanceOf(freeclimb.ConferenceParticipantResult)
        })
    })
    describe(".uri", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_uri"
            expect(model.uri).toBe(value)
        })
    })
    describe(".dateCreated", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_dateCreated"
            expect(model.dateCreated).toBe(value)
        })
    })
    describe(".dateUpdated", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_dateUpdated"
            expect(model.dateUpdated).toBe(value)
        })
    })
    describe(".revision", () => {
        it('resolves to particular value on initialization', () => {
            const value = 1
            expect(model.revision).toBe(value)
        })
    })
    describe(".accountId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_accountId"
            expect(model.accountId).toBe(value)
        })
    })
    describe(".conferenceId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_conferenceId"
            expect(model.conferenceId).toBe(value)
        })
    })
    describe(".callId", () => {
        it('resolves to particular value on initialization', () => {
            const value = "test_callId"
            expect(model.callId).toBe(value)
        })
    })
    describe(".talk", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.talk).toBe(value)
        })
    })
    describe(".listen", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.listen).toBe(value)
        })
    })
    describe(".startConfOnEnter", () => {
        it('resolves to particular value on initialization', () => {
            const value = true
            expect(model.startConfOnEnter).toBe(value)
        })
    })
})
