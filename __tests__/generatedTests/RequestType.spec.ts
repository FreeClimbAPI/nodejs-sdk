import * as freeclimb  from '../../index'
import { describe, expect, test, it } from "@jest/globals";
    
describe('RequestType Tests', () => {
    test('INBOUND_CALL_enum_Test', () => {    
        expect(freeclimb.RequestType.INBOUND_CALL).toBe("inboundCall")
    })
    test('RECORD_enum_Test', () => {    
        expect(freeclimb.RequestType.RECORD).toBe("record")
    })
    test('GET_DIGITS_enum_Test', () => {    
        expect(freeclimb.RequestType.GET_DIGITS).toBe("getDigits")
    })
    test('GET_SPEECH_enum_Test', () => {    
        expect(freeclimb.RequestType.GET_SPEECH).toBe("getSpeech")
    })
    test('REDIRECT_enum_Test', () => {    
        expect(freeclimb.RequestType.REDIRECT).toBe("redirect")
    })
    test('PAUSE_enum_Test', () => {    
        expect(freeclimb.RequestType.PAUSE).toBe("pause")
    })
    test('OUT_DIAL_START_enum_Test', () => {    
        expect(freeclimb.RequestType.OUT_DIAL_START).toBe("outDialStart")
    })
    test('OUT_DIAL_CONNECT_enum_Test', () => {    
        expect(freeclimb.RequestType.OUT_DIAL_CONNECT).toBe("outDialConnect")
    })
    test('OUT_DIAL_API_CONNECT_enum_Test', () => {    
        expect(freeclimb.RequestType.OUT_DIAL_API_CONNECT).toBe("outDialApiConnect")
    })
    test('MACHINE_DETECTED_enum_Test', () => {    
        expect(freeclimb.RequestType.MACHINE_DETECTED).toBe("machineDetected")
    })
    test('DEQUEUE_enum_Test', () => {    
        expect(freeclimb.RequestType.DEQUEUE).toBe("dequeue")
    })
    test('QUEUE_WAIT_enum_Test', () => {    
        expect(freeclimb.RequestType.QUEUE_WAIT).toBe("queueWait")
    })
    test('ADD_TO_QUEUE_NOTIFICATION_enum_Test', () => {    
        expect(freeclimb.RequestType.ADD_TO_QUEUE_NOTIFICATION).toBe("addToQueueNotification")
    })
    test('REMOVE_FROM_QUEUE_NOTIFICATION_enum_Test', () => {    
        expect(freeclimb.RequestType.REMOVE_FROM_QUEUE_NOTIFICATION).toBe("removeFromQueueNotification")
    })
    test('CALL_STATUS_enum_Test', () => {    
        expect(freeclimb.RequestType.CALL_STATUS).toBe("callStatus")
    })
    test('CREATE_CONFERENCE_enum_Test', () => {    
        expect(freeclimb.RequestType.CREATE_CONFERENCE).toBe("createConference")
    })
    test('CONFERENCE_STATUS_enum_Test', () => {    
        expect(freeclimb.RequestType.CONFERENCE_STATUS).toBe("conferenceStatus")
    })
    test('LEAVE_CONFERENCE_enum_Test', () => {    
        expect(freeclimb.RequestType.LEAVE_CONFERENCE).toBe("leaveConference")
    })
    test('ADD_TO_CONFERENCE_NOTIFICATION_enum_Test', () => {    
        expect(freeclimb.RequestType.ADD_TO_CONFERENCE_NOTIFICATION).toBe("addToConferenceNotification")
    })
    test('CONFERENCE_RECORDING_STATUS_enum_Test', () => {    
        expect(freeclimb.RequestType.CONFERENCE_RECORDING_STATUS).toBe("conferenceRecordingStatus")
    })
    test('CONFERENCE_CALL_CONTROL_enum_Test', () => {    
        expect(freeclimb.RequestType.CONFERENCE_CALL_CONTROL).toBe("conferenceCallControl")
    })
    test('MESSAGE_DELIVERY_enum_Test', () => {    
        expect(freeclimb.RequestType.MESSAGE_DELIVERY).toBe("messageDelivery")
    })
    test('MESSAGE_STATUS_enum_Test', () => {    
        expect(freeclimb.RequestType.MESSAGE_STATUS).toBe("messageStatus")
    })
})
