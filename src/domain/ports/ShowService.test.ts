import {ShowService} from "./ShowService";

// Mocking should simplify this import.
import {BreakingBadClient} from "../../adapters/breakingBadClient/BreakingBadClient";
import clientExample from "./ClientMockResponse.json";
import { episode } from "../model/episode";
import { when } from "jest-when"


// jest.mock("./../../adapters/breakingBadClient/BreakingBadClient", () => {
    // const originalModule = jest.requireActual('./../../adapters/breakingBadClient/BreakingBadClient');
    // let clientResponse : episode[];
    // clientResponse = clientExample as any;
    // return {
        // __esModule: true,
        // ...originalModule,
        // getEpisodes: clientResponse
    // };
    // return {
    //     default:  jest.fn( () => clientResponse)
    // }
// });

describe('ShowService', () => {
    let showService: ShowService;
    // const clientResponse : episode[] = clientExample as any
    let clientResponse : Promise<episode[]>;
    clientResponse = clientExample as any;
    beforeAll(() => {
        let FakeBreakingBadClient  = new BreakingBadClient();
        FakeBreakingBadClient.getEpisodes = jest.fn(() => clientResponse);
        showService = new ShowService(FakeBreakingBadClient);
    })
    it('getEpisodes for a single character by name as string', async () => {
        // when().called().mockResolvedValue(clientResponse);
        expect((await showService.getEpisodesByName("Walter White")).length).toEqual(3);
    });
    it('getEpisodes for a single character by name as list', async () => {
        expect((await showService.getEpisodesByName(["Skyler White", "Ted Beneke"])).length).toEqual(2);
    });
    // it('getEpisodes for a multiple character by name as list', async () => {
    //     expect((await showService.getEpisodesByName(["Walter White", "Skyler White"]))[0]).toEqual([
    //         {
    //             "title": "Ozymandias",
    //             "season": "5",
    //             "characters": [
    //                 "Walter White",
    //                 "Jesse Pinkman",
    //                 "Skyler White",
    //                 "Hank Schrader",
    //                 "Marie Schrader",
    //                 "Walter White Jr.",
    //                 "Todd Alquist",
    //                 "Jack Welker",
    //                 "Steve Gomez"
    //             ],
    //         }
    //     ]);
    // });
});


