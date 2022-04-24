import { ShowService } from "./../../domain/ports/ShowService";
import { BreakingBadClient } from "./../breakingBadClient/BreakingBadClient";

exports.handler = async function (event: any) {
  console.log("request:", JSON.stringify(event, undefined, 2));

  const request = JSON.parse(event.body);
  console.log(request);

  const showService = new ShowService(new BreakingBadClient());

  try {
    const something = await showService.getFormattedEpisodesByName(
      request.characters
    );
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(something),
    };
  } catch (errors) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "text/plain" },
      body: `Something failed internally: ${errors}`,
    };
  }
};
