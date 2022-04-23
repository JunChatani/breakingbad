import fetch from "node-fetch";
import { App } from "aws-cdk-lib";
import { AwsStack } from "../lib/aws-stack";

test("Verify whether hello world lambda works", async () => {
  const app = new App();
  // WHEN
  new AwsStack(app, "MyTestStack");
  // THEN

  // Verify that curl returns expected string.
  const url: string =
    "https://javuyq7mid.execute-api.eu-west-1.amazonaws.com/prod";

  const path = "/";
  const expectedResponse = `Hello, Alperen! Lambda has changed: ${path}\n`;

  const response = await fetch(url);
  const body = await response.text();

  expect(body).toEqual(expectedResponse);
});
