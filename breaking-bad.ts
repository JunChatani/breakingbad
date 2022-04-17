import axios from 'axios';

const BASE_URL = 'https://www.breakingbadapi.com/api';

export const getOneCharacterById = async () => {
  try {
    // Jesse Pinkman.
    const id = "2";

    const response = await axios.get(`${BASE_URL}/characters/${id}`);
    const characterInfo = response.data;

    console.log(`GET: return character info associated with Jesse Pinkman`, characterInfo);

    return characterInfo;
  } catch (errors) {
    console.error(errors);
  }
};