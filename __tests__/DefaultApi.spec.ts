import { describe, expect, test } from "@jest/globals";
import * as freeclimb from '../index'
import { AccountResult, ServerConfiguration } from "../index";

describe('Default API tests', () => {
    
    let apiInstance: freeclimb.DefaultApi
    beforeAll(() => {
        const configuration = freeclimb.createConfiguration({
            baseServer: new ServerConfiguration<{  }>("http://127.0.0.1:4010", {  }),
            accountId: 'YOUR_ACCOUNT_ID',
            apiKey: 'YOUR_API_KEY'
        });
        apiInstance = new freeclimb.DefaultApi(configuration);
    });

    test('works with async/await', async () => {
        expect.assertions(1);
        //From https://jestjs.io/docs/tutorial-async
        //return user.getUserName(4).then(data => expect(data).toBe('Mark'));
        return apiInstance.getAnAccount().then((data:AccountResult) => expect(data).toBeInstanceOf(AccountResult))
    });
})

