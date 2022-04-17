import axios from 'axios';

import {getOneCharacterById, getQuotesFromOneCharacterByName} from "./breaking-bad";
import any = jasmine.any;

describe('fetchData', () => {
    it('fetches character info by id', async () => {
        const oneCharacterById = await getOneCharacterById(2);
        expect(oneCharacterById[0].name).toEqual("Jesse Pinkman");
    });
    it('fetches all quotes from character by name', async () => {
        const allQuotesById = await getQuotesFromOneCharacterByName("Jesse Pinkman");
        expect(allQuotesById.length).toEqual(20);
    });
});