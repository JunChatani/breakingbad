import axios from 'axios';

import {BreakingBadClient} from "./BreakingBad"
import {IDrama} from "./../../domain/ports/IDrama"

describe('fetchData', () => {
    it('fetches character info by id', async () => {
        const bp = new BreakingBadClient();
        const episodes = bp.getEpisodes();

        expect((await episodes).length).toEqual(102);
    });
});