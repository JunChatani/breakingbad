import axios from 'axios';

import {getOneCharacterById} from "./breaking-bad";
import any = jasmine.any;

describe('fetchData', () => {
    it('fetches successfully data from an API', async () => {
        const oneCharacterById = await getOneCharacterById(2);
        expect(oneCharacterById[0].name).toEqual("Jesse Pinkman");
    });


});