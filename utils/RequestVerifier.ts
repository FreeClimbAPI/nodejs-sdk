import { SignatureInformation } from "./SignatureInformation";

export class RequestVerifier {
    public static readonly DEFAULT_TOLERANCE: number = 5 * 60 * 1000;

    static verifyRequestSignature(requestBody: string, requestHeader: string, signingSecret: string, tolerance: number = RequestVerifier.DEFAULT_TOLERANCE) {
        const verifier: RequestVerifier = new RequestVerifier();
        verifier.checkRequestBody(requestBody);
        verifier.checkRequestHeader(requestHeader);
        verifier.checkSigningSecret(signingSecret);
        verifier.checkTolerance(tolerance);
        const info: SignatureInformation = new SignatureInformation(requestHeader);
        verifier.verifyTolerance(info, tolerance);
        verifier.verifySignature(info, requestBody, signingSecret);
    }

    checkRequestBody(requestBody: string) {
        if (requestBody === "" || requestBody === null) {
            throw new Error("Request Body cannot be empty or null");
        }
    }

    checkRequestHeader(requestHeader: string) {
        if (requestHeader === "" || requestHeader === null) {
            throw new Error("Error with request header, Request header is empty");
        }
        else if (!requestHeader.includes("t=")) {
            throw new Error("Error with request header, timestamp is not present");
        }
        else if (!requestHeader.includes("v1=")) {
            throw new Error("Error with request header, signatures are not present");
        }
    }

    checkSigningSecret(signingSecret: string) {
        if (signingSecret === "" || signingSecret === null) {
            throw new Error("Signing secret cannot be empty or null");
        }
    }

    checkTolerance(tolerance: number) {
        if (tolerance <= 0 || Number.isNaN(tolerance) || tolerance >= Number.MAX_SAFE_INTEGER) {
            throw new Error("Tolerance value must be a positive integer");
        }
    }

    verifyTolerance(info: SignatureInformation, tolerance: number) {
        const currentTime: number = info.getCurrentUnixTime()
        if (!info.isRequestTimeValid(tolerance)) {
            throw new Error("Request time exceeded tolerance threshold. Request: " + info.requestTimestamp
            + ", CurrentTime: " + String(currentTime) + ", tolerance: " + tolerance);
        }
    }

    verifySignature(info: SignatureInformation, requestBody: string, signingSecret: string) {
        if (!info.isSignatureSafe(requestBody, signingSecret)) {
            throw new Error("Unverified signature request, If this request was unexpected, it may be from a bad actor. Please proceed with caution. If the request was exepected, please check any typos or issues with the signingSecret");
        }
    }
}