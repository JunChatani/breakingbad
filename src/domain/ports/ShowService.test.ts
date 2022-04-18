import {ShowService} from "./ShowService";
import {BreakingBadClient} from "../../adapters/breakingBadClient/BreakingBadClient";

describe('ShowService', () => {
    let showService: ShowService;

    beforeAll(() => {
        showService = new ShowService(new BreakingBadClient())
    })
    it('getEpisodes for a single character by name as string', async () => {
        expect((await showService.getEpisodesByName("Walter White")).length).toEqual(12);
    });
    // it('getEpisodes for a single character by name as list', async () => {
    //     expect((await showService.getEpisodes(["Walter White"])).length).toEqual(12);
    // });
    // it('getEpisodes for a multiple character by name as list', async () => {
    //     expect((await showService.getEpisodes(["Walter White", "Jesse Pinkman"])).length).toEqual(12);
    // });
});


