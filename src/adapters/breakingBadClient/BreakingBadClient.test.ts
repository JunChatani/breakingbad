import axios from 'axios';

import {BreakingBadClient} from "./BreakingBadClient"
import breakingBadExample from "./BreakingBadMockResponse.json";
import { breakingBadEpisodeResponse } from './BreakingBadResponse';

jest.mock("axios")

const mockedAxios = axios as jest.Mocked<typeof axios>;


describe('fetchData', () => {
    let bbResponse : breakingBadEpisodeResponse[]
    beforeAll(() => {
        bbResponse = breakingBadExample as any
        mockedAxios.get.mockResolvedValue({ data: bbResponse});
    })

    it('Check if getEpisodes returns only requested fields', async () => {
        const bp = new BreakingBadClient();
        const episodes = bp.getEpisodes();


        
        expect((await episodes)[0]).not.toBe(bbResponse);
        expect((await episodes)[0].title).toEqual('Pilot');
        expect((await episodes)[0].season).toEqual('1');
        expect((await episodes)[0].characters).toEqual([
            'Walter White',
            'Jesse Pinkman',
            'Skyler White',
            'Hank Schrader',
            'Marie Schrader',
            'Walter White Jr.',
            'Krazy-8',
            'Bogdan Wolynetz'
          ]);
    });
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

        expect((await episodes).length).toEqual(1);
    });
});


