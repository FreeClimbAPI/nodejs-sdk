import * as freeclimb from "../../index";
import { describe, expect, it } from "@jest/globals";

describe("RequestType", () => {
  describe(".INBOUND_CALL", () => {
    it("resolves to correct value for INBOUND_CALL enum property", () => {
      expect(freeclimb.RequestType.INBOUND_CALL).toBe("inboundCall");
    });
  });
  describe(".RECORD", () => {
    it("resolves to correct value for RECORD enum property", () => {
      expect(freeclimb.RequestType.RECORD).toBe("record");
    });
  });
  describe(".GET_DIGITS", () => {
    it("resolves to correct value for GET_DIGITS enum property", () => {
      expect(freeclimb.RequestType.GET_DIGITS).toBe("getDigits");
    });
  });
  describe(".GET_SPEECH", () => {
    it("resolves to correct value for GET_SPEECH enum property", () => {
      expect(freeclimb.RequestType.GET_SPEECH).toBe("getSpeech");
    });
  });
  describe(".REDIRECT", () => {
    it("resolves to correct value for REDIRECT enum property", () => {
      expect(freeclimb.RequestType.REDIRECT).toBe("redirect");
    });
  });
  describe(".PAUSE", () => {
    it("resolves to correct value for PAUSE enum property", () => {
      expect(freeclimb.RequestType.PAUSE).toBe("pause");
    });
  });
  describe(".OUT_DIAL_START", () => {
    it("resolves to correct value for OUT_DIAL_START enum property", () => {
      expect(freeclimb.RequestType.OUT_DIAL_START).toBe("outDialStart");
    });
  });
  describe(".OUT_DIAL_CONNECT", () => {
    it("resolves to correct value for OUT_DIAL_CONNECT enum property", () => {
      expect(freeclimb.RequestType.OUT_DIAL_CONNECT).toBe("outDialConnect");
    });
  });
  describe(".OUT_DIAL_API_CONNECT", () => {
    it("resolves to correct value for OUT_DIAL_API_CONNECT enum property", () => {
      expect(freeclimb.RequestType.OUT_DIAL_API_CONNECT).toBe(
        "outDialApiConnect",
      );
    });
  });
  describe(".MACHINE_DETECTED", () => {
    it("resolves to correct value for MACHINE_DETECTED enum property", () => {
      expect(freeclimb.RequestType.MACHINE_DETECTED).toBe("machineDetected");
    });
  });
  describe(".DEQUEUE", () => {
    it("resolves to correct value for DEQUEUE enum property", () => {
      expect(freeclimb.RequestType.DEQUEUE).toBe("dequeue");
    });
  });
  describe(".QUEUE_WAIT", () => {
    it("resolves to correct value for QUEUE_WAIT enum property", () => {
      expect(freeclimb.RequestType.QUEUE_WAIT).toBe("queueWait");
    });
  });
  describe(".ADD_TO_QUEUE_NOTIFICATION", () => {
    it("resolves to correct value for ADD_TO_QUEUE_NOTIFICATION enum property", () => {
      expect(freeclimb.RequestType.ADD_TO_QUEUE_NOTIFICATION).toBe(
        "addToQueueNotification",
      );
    });
  });
  describe(".REMOVE_FROM_QUEUE_NOTIFICATION", () => {
    it("resolves to correct value for REMOVE_FROM_QUEUE_NOTIFICATION enum property", () => {
      expect(freeclimb.RequestType.REMOVE_FROM_QUEUE_NOTIFICATION).toBe(
        "removeFromQueueNotification",
      );
    });
  });
  describe(".CALL_STATUS", () => {
    it("resolves to correct value for CALL_STATUS enum property", () => {
      expect(freeclimb.RequestType.CALL_STATUS).toBe("callStatus");
    });
  });
  describe(".CREATE_CONFERENCE", () => {
    it("resolves to correct value for CREATE_CONFERENCE enum property", () => {
      expect(freeclimb.RequestType.CREATE_CONFERENCE).toBe("createConference");
    });
  });
  describe(".CONFERENCE_STATUS", () => {
    it("resolves to correct value for CONFERENCE_STATUS enum property", () => {
      expect(freeclimb.RequestType.CONFERENCE_STATUS).toBe("conferenceStatus");
    });
  });
  describe(".LEAVE_CONFERENCE", () => {
    it("resolves to correct value for LEAVE_CONFERENCE enum property", () => {
      expect(freeclimb.RequestType.LEAVE_CONFERENCE).toBe("leaveConference");
    });
  });
  describe(".ADD_TO_CONFERENCE_NOTIFICATION", () => {
    it("resolves to correct value for ADD_TO_CONFERENCE_NOTIFICATION enum property", () => {
      expect(freeclimb.RequestType.ADD_TO_CONFERENCE_NOTIFICATION).toBe(
        "addToConferenceNotification",
      );
    });
  });
  describe(".CONFERENCE_RECORDING_STATUS", () => {
    it("resolves to correct value for CONFERENCE_RECORDING_STATUS enum property", () => {
      expect(freeclimb.RequestType.CONFERENCE_RECORDING_STATUS).toBe(
        "conferenceRecordingStatus",
      );
    });
  });
  describe(".CONFERENCE_CALL_CONTROL", () => {
    it("resolves to correct value for CONFERENCE_CALL_CONTROL enum property", () => {
      expect(freeclimb.RequestType.CONFERENCE_CALL_CONTROL).toBe(
        "conferenceCallControl",
      );
    });
  });
  describe(".MESSAGE_DELIVERY", () => {
    it("resolves to correct value for MESSAGE_DELIVERY enum property", () => {
      expect(freeclimb.RequestType.MESSAGE_DELIVERY).toBe("messageDelivery");
    });
  });
  describe(".MESSAGE_STATUS", () => {
    it("resolves to correct value for MESSAGE_STATUS enum property", () => {
      expect(freeclimb.RequestType.MESSAGE_STATUS).toBe("messageStatus");
    });
  });
});
