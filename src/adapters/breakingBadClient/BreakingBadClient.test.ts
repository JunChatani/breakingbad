import axios from 'axios';

import {BreakingBadClient} from "./BreakingBadClient"

describe('fetchData', () => {
    it('Check if correct client call', async () => {
        // axios get method should be called.
        jest.spyOn(axios, 'get')

        // url which axios get method should call.
        const episode_url = 'https://www.breakingbadapi.com/api/episodes';

        const bp = new BreakingBadClient();
        const episodes = bp.getEpisodes();

        // Verify that axios get was called with expected url.
        expect(axios.get).toHaveBeenCalledWith(episode_url);
    });
    it('Check if incorrect client call', async () => {
        // axios get method should be called.
        jest.spyOn(axios, 'get')

        // url which axios get method should call.
        const episode_url = 'https://wrong_endpoint';

        const bp = new BreakingBadClient();
        const episodes = bp.getEpisodes();

        // Verify that axios get was called with expected url.
        expect(axios.get).not.toHaveBeenCalledWith(episode_url);
    });
    it('fetches character info by id', async () => {
        const bp = new BreakingBadClient();
        const episodes = bp.getEpisodes();

        expect((await episodes).length).toEqual(102);
    });
});


