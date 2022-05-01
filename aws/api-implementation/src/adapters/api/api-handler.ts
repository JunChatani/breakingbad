import { ShowService } from "./../../domain/ports/ShowService";
import { BreakingBadClient } from "./../breakingBadClient/BreakingBadClient";

exports.handler = async function (event: any) {
  console.log("request:", JSON.stringify(event, undefined, 2));
  console.log("Heyy");
  console.log(event);

  const showService = new ShowService(new BreakingBadClient());
  console.log("Reached ?");

  try {
    const something = await showService.getFormattedEpisodesByName(
      event.characters
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

exports.copyHandlers = async function (event: any) {
  console.log("request:", JSON.stringify(event, undefined, 2));
  console.log(event);

  const showService = new ShowService(new BreakingBadClient());
  console.log("Copy Handler ?");

  try {
    const something = await showService.getFormattedEpisodesByName(
      event.characters
    );
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify("Hallo"),
    };
  } catch (errors) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "text/plain" },
      body: `Something failed internally: ${errors}`,
    };
  }
};
