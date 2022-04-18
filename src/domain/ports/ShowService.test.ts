import {ShowService} from "./ShowService";

// Mocking should simplify this import.
import clientExample from "./ClientMockResponse.json";
import {episode} from "../model/episode";
import {IDrama} from "./IDrama";
import {FakeDrama} from "./FakeDrama";

describe('ShowService', () => {
    let showService: ShowService;
    let clientResponse: Promise<episode[]>;
    clientResponse = clientExample as any;

    beforeAll(() => {
        let FakeBreakingBadClient: IDrama = new FakeDrama();
        FakeBreakingBadClient.getEpisodes = jest.fn(() => clientResponse);
        showService = new ShowService(FakeBreakingBadClient);
    })

    it('Verify format of all episodes corresponding to single character is correct. Episode number and season are less than 9 ', () => {
        const episode : episode = {
            title: "Kafkaesque",
            season: 3,
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
            episodeNumber: 9
        }
        expect(showService.format(episode)).toEqual("S0309 - Kafkaesque");
    });

    it('Verify format of all episodes corresponding to single character is correct. Episode number is greater than 9 ', () => {
        const episode : episode = {
            title: "Kafkaesque",
            season: 7,
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
            episodeNumber: 12
        }
        expect(showService.format(episode)).toEqual("S0712 - Kafkaesque");
    });

    it('Verify format of all episodes corresponding to single character is correct. Episode number and season are greater than 9 ', () => {
        const episode : episode = {
            title: "Kafkaesque",
            season: 17,
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
            episodeNumber: 12
        }
        expect(showService.format(episode)).toEqual("S1712 - Kafkaesque");
    });


    it('getEpisodes for a single character by name as string', async () => {
        expect((await showService.getEpisodesByName("Walter White")).length).toEqual(3);
    });

    it('getEpisodes for a multiple character by name as list', async () => {
        expect((await showService.getEpisodesByName(["Walter White"]))).toEqual([
            {
                "title": "Pilot",
                "season": "1",
                "characters": [
                    "Walter White",
                    "Jesse Pinkman",
                    "Skyler White",
                    "Hank Schrader",
                    "Marie Schrader",
                    "Walter White Jr.",
                    "Krazy-8",
                    "Bogdan Wolynetz"
                ],
                "episode": "1"
            },
            {
                "title": "Ozymandias",
                "season": "5",
                "characters": [
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
                "episode": "14"
            },
            {
                "title": "Kafkaesque",
                "season": "3",
                "characters": [
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
                "episode": "9"
            }
        ]);
    });

    it('getEpisodes for a single character by name as list', async () => {
        expect((await showService.getEpisodesByName(["Skyler White", "Ted Beneke"]))).toEqual([
            {
                "title": "Kafkaesque",
                "season": "3",
                "characters": [
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
                "episode": "9"
            }
        ]);
    });
});


