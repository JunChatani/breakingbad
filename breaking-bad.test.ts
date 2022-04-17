import axios from 'axios';

import { getTodoItems } from "./breaking-bad";

describe('fetchData', () => {
    it('fetches successfully data from an API', async () => {
        getTodoItems();
    });
});