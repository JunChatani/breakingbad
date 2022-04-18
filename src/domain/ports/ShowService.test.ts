import {ShowService} from "./ShowService";
import {BreakingBadClient} from "../../adapters/breakingBadClient/BreakingBadClient";

describe('ShowService', () => {
    let showService: ShowService;

    beforeAll(() => {
        showService = new ShowService(new BreakingBadClient())
    })

    it('getEpisodes', async () => {
        expect((await showService.getEpisodes("Walter White")).length).toEqual(12);
    });
});


