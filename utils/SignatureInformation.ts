import * as moment from 'moment';
import * as crypto from 'crypto';

export class SignatureInformation {
    requestTimestamp: number = 0;
    signatures: Array<string> = [];

    constructor(requestHeader: string) {
        const signatureHeaders: Array<string> = requestHeader.split(",")
        signatureHeaders.forEach((signature) => {
            const [header, value] = signature.split("=")
            if (header === "t") {
                this.requestTimestamp = parseInt(value)
            }
            else if (header === "v1") {
                this.signatures.push(value)
            }
        })
    }

    isRequestTimeValid(tolerance: number):boolean {
        const currentUnixTimestamp = this.getCurrentUnixTime();
        return (this.requestTimestamp + tolerance) < currentUnixTimestamp;
    }

    isSignatureSafe(requestBody: string, signingSecret: string ): boolean{
        const hashValue: string = this.computeHash(requestBody, signingSecret);
        return this.signatures.includes(hashValue);
    }

    private computeHash(requestBody: string, signingSecret: string): string {
        const data: string = this.requestTimestamp + '.' + requestBody;
        return crypto.createHmac('sha256', signingSecret).update(data).digest('hex');
    }

    getCurrentUnixTime(): number {
        return moment().unix();
    }
}