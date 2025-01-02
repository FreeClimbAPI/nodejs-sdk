import { describe, expect, test } from "@jest/globals";
import { Say, GetDigits, PerclScript, Pause, Redirect } from "../../dist";

describe("PerCL Smoke Test", () => {
  test("generates valid percl", () => {
    const script = new PerclScript({
      commands: [
        new GetDigits({
          actionUrl: "path/to/action/url",
          prompts: [
            new Say({ text: "This is a test" }),
            new Pause({ length: 100 }),
            new Redirect({ actionUrl: "path/to/action/url" }),
          ],
          maxDigits: 1,
          minDigits: 1,
          flushBuffer: true,
        }),
      ],
    });
    expect(script.toJSON()).toEqual(
      JSON.stringify([
        {
          GetDigits: {
            actionUrl: "path/to/action/url",
            flushBuffer: true,
            maxDigits: 1,
            minDigits: 1,
            prompts: [
              {
                Say: {
                  text: "This is a test",
                  loop: 1,
                },
              },
              {
                Pause: {
                  length: 100,
                },
              },
              {
                Redirect: {
                  actionUrl: "path/to/action/url",
                },
              },
            ],
          },
        },
      ]),
    );
  });
});
