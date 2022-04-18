import { IDrama } from "./IDrama";
import { FakeDrama } from "./FakeDrama";
import { ShowService } from "./ShowService";

import { episode } from "../model/episode";

import clientExample from "./ClientMockResponse.json";


// pre-allocate variable.
let showService : ShowService;

describe('Show Service: ', () => {
    beforeAll(() => {
        let clientResponse: Promise<episode[]>;
        clientResponse = clientExample as any;

        const FakeBreakingBadClient: IDrama = new FakeDrama();
        FakeBreakingBadClient.getEpisodes = jest.fn(() => clientResponse);

        showService = new ShowService(FakeBreakingBadClient);
    });
    describe('returns correct format when string() is called with certain episode. ', () => {
        it('with episode number and season less than 10', () => {
            const ep : episode = {
                title: "Kafkaesque",
                season: 3,
                characters: [],
                episodeNumber: 9
            };
            expect(showService.string(ep)).toEqual("S0309 - Kafkaesque");
        });
        it('with episode number greater than 9 and season less than 10', () => {
            const ep : episode = {
                title: "Kafkaesque",
                season: 7,
                characters: [],
                episodeNumber: 12
            }
            expect(showService.string(ep)).toEqual("S0712 - Kafkaesque");
        });
        it('with episode number and season greater than 9', () => {
            const ep : episode = {
                title: "Kafkaesque",
                season: 17,
                characters: [],
                episodeNumber: 12
            }
            expect(showService.string(ep)).toEqual("S1712 - Kafkaesque");
        });
    });
    describe('verify episodes characters are present in with getEpisodeByName. ', () => {
        it('in case a single character is passed as string', async () => {
            expect((await showService.getEpisodesByName("Walter White"))).toEqual(
            [
                {
                    title: "Pilot",
                    season: "1",
                    characters: [
                        "Walter White",
                        "Jesse Pinkman",
                        "Skyler White",
                        "Hank Schrader",
                        "Marie Schrader",
                        "Walter White Jr.",
                        "Krazy-8",
                        "Bogdan Wolynetz"
                    ],
                    episode: "1"
                },
                {
                    title: "Ozymandias",
                    season: "5",
                    characters: [
                        "Walter White",
                        "Jesse Pinkman",
                        "Skyler White",
                        "Hank Schrader",
                        "Marie Schrader",
                        "Walter White Jr.",
                        "Todd Alquist",
                        "Jack Welker",
                        "Steve Gomez"
                    ],
                    episode: "14"
                },
                {
                    title: "Kafkaesque",
                    season: "3",
                    characters: [
                        "Walter White",
                        "Jesse Pinkman",
                        "Skyler White",
                        "Hank Schrader",
                        "Marie Schrader",
                        "Walter White Jr.",
                        "Gustavo Fring",
                        "Saul Goodman",
                        "Ted Beneke"
                    ],
                    episode: "9"
                }
            ]);
        });
        it('in case a single character is passed as a list', async () => {
            expect((await showService.getEpisodesByName(["Walter White"]))).toEqual(
                (await showService.getEpisodesByName("Walter White")))
        });
        it('in case multiple characters are passed as list', async () => {
            expect((await showService.getEpisodesByName(["Skyler White", "Ted Beneke"]))).toEqual(
            [
                {
                    title: "Kafkaesque",
                    season: "3",
                    characters: [
                        "Walter White",
                        "Jesse Pinkman",
                        "Skyler White",
                        "Hank Schrader",
                        "Marie Schrader",
                        "Walter White Jr.",
                        "Gustavo Fring",
                        "Saul Goodman",
                        "Ted Beneke"
                    ],
                    episode: "9"
                }
            ]);
        });
    });
});


