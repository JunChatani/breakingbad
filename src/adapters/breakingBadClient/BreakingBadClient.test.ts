import axios from 'axios';

import { BreakingBadClient } from "./BreakingBadClient";

import { breakingBadEpisodeResponse } from './BreakingBadResponse';
import { episode } from '../../domain/model/episode';

import breakingBadResponseExample from "./BreakingBadMockResponse.json";


// Mock axios module.
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Read in example response from JSON file.
const bbResponse : breakingBadEpisodeResponse[] = breakingBadResponseExample;

// pre-allocate variables used all tests.
let bbClient : BreakingBadClient;
let bbEpisodes : Promise<episode[]>;

describe('Breaking Bad client: ', () => {
    beforeAll(() => {
        // Use same response JSON in tests instead of REST endpoint.
        mockedAxios.get.mockResolvedValue({ data: bbResponse });

        // Spy on call and response to axios get method when it is called.
        jest.spyOn(axios, 'get');

        // Initialize Breaking Bad client.
        bbClient = new BreakingBadClient();
        bbEpisodes = bbClient.getEpisodes();
    });
    it('format of requested fields in episodes verified', async () => {
        // Verify that not all fields in bbResponse are present in bbEpisodes.
        expect((await bbEpisodes)[0]).not.toBe(bbResponse);

        // Verify that requested field are present.
        expect((await bbEpisodes)[0].title).toEqual('Pilot');
        expect((await bbEpisodes)[0].season).toEqual(1);
        expect((await bbEpisodes)[0].characters).toEqual([
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
    it('REST URL is the one expected', async () => {
        // URL which axios get method should call.
        const episodeURL = 'https://www.breakingbadapi.com/api/episodes';

        // Verify that axios get was called with expected url.
        expect(axios.get).toHaveBeenCalledWith(episodeURL);
    });
    it('response list has correct size and type', async () => {
        expect(typeof (await bbEpisodes)).not.toBe(null);
        expect((await bbEpisodes).length).toEqual(1);
    });
});
