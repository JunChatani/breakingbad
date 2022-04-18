import {ShowService} from "./ShowService";

// Mocking should simplify this import.
import {BreakingBadClient} from "../../adapters/breakingBadClient/BreakingBadClient";

describe('ShowService', () => {
    let showService: ShowService;

    beforeAll(() => {
        showService = new ShowService(new BreakingBadClient())
    })
    it('getEpisodes for a single character by name as string', async () => {
        expect((await showService.getEpisodesByName("Walter White")).length).toEqual(62);
    });
    // it('getEpisodes for a single character by name as list', async () => {
    //     expect((await showService.getEpisodesByName(["Skyler White"])).length).toEqual(62);
    // });
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


