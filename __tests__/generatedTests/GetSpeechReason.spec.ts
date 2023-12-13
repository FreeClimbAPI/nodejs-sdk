import * as freeclimb  from '../../index'
import { describe, expect, it } from "@jest/globals";
    
describe('GetSpeechReason', () => {
    describe('.ERROR', () => {
        it('resolves to correct value for ERROR enum property', () => {
           expect(freeclimb.GetSpeechReason.ERROR).toBe("error")
        })
    })
    describe('.HANGUP', () => {
        it('resolves to correct value for HANGUP enum property', () => {
           expect(freeclimb.GetSpeechReason.HANGUP).toBe("hangup")
        })
    })
    describe('.DIGIT', () => {
        it('resolves to correct value for DIGIT enum property', () => {
           expect(freeclimb.GetSpeechReason.DIGIT).toBe("digit")
        })
    })
    describe('.NO_INPUT', () => {
        it('resolves to correct value for NO_INPUT enum property', () => {
           expect(freeclimb.GetSpeechReason.NO_INPUT).toBe("noInput")
        })
    })
    describe('.NO_MATCH', () => {
        it('resolves to correct value for NO_MATCH enum property', () => {
           expect(freeclimb.GetSpeechReason.NO_MATCH).toBe("noMatch")
        })
    })
    describe('.RECOGNITION', () => {
        it('resolves to correct value for RECOGNITION enum property', () => {
           expect(freeclimb.GetSpeechReason.RECOGNITION).toBe("recognition")
        })
    })
})
