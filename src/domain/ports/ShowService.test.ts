import {ShowService} from "./ShowService";
import {BreakingBadClient} from "../../adapters/breakingBadClient/BreakingBadClient";

describe('ShowService', () => {
    let showService: ShowService;

    beforeAll(() => {
        showService = new ShowService(new BreakingBadClient())
    })
    // it('getEpisodes for a single character by name as string', async () => {
    //     expect((await showService.getEpisodesByName("Walter White")).length).toEqual(62);
    // });
    // it('getEpisodes for a single character by name as list', async () => {
    //     expect((await showService.getEpisodesByName(["Skyler White"])).length).toEqual(62);
    // });
    it('getEpisodes for a multiple character by name as list', async () => {
        expect((await showService.getEpisodesByName(["Walter White", "Skyler White"])).length).toEqual(12);
    });
});


