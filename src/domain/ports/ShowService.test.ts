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


