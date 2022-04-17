import axios from 'axios';

const BASE_URL = 'https://www.breakingbadapi.com/api';

export const getTodoItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/quote?author=Jesse+Pinkman`);

    const todoItems = response.data;

    console.log(`GET: Here's the list of todos`, todoItems);

    return todoItems;
  } catch (errors) {
    console.error(errors);
  }
};