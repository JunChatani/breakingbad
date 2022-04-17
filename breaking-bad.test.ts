import axios from 'axios';

import { getOneCharacterById } from "./breaking-bad";

describe('fetchData', () => {
    it('fetches successfully data from an API', async () => {
        expect(getOneCharacterById()).toBe(Any);
    });
});