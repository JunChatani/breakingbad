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
        await bp.getEpisodes();
        // Verify that axios get was called with expected url.
        expect(axios.get).not.toHaveBeenCalledWith(episode_url);
    });
    it('Check if response is not an empty list', async () => {
        // Given
        const bp = new BreakingBadClient();

        // When
        const episodes = bp.getEpisodes();

        // Then
        expect((await episodes).length).not.toEqual(0);
        expect(typeof (await episodes)).not.toBe(null)
    });
    it('Check if correct total number of episodes is retrieved', async () => {
        const bp = new BreakingBadClient();
        const episodes = bp.getEpisodes();

        expect((await episodes).length).toEqual(102);
    });
});


