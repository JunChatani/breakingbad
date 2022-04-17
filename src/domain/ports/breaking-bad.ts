import axios from 'axios';

const BASE_URL = 'https://www.breakingbadapi.com/api';

export const getOneCharacterById = async (id:number) => {
  try {
    const response = await axios.get(`${BASE_URL}/characters/${id}`);
    const characterInfo = response.data;

    console.log(`GET: return character info associated with Jesse Pinkman`, characterInfo);

    return characterInfo;
  } catch (errors) {
    console.error(errors);
  }
};

export const getQuotesFromOneCharacterByName = async (name:string) => {
    try {
      const response = await axios.get(`${BASE_URL}/quote?author=${name.replace(" ", "+")}`);
      const quoteInfo = response.data;
  
      console.log(`GET: return array of quote info associated with Jesse Pinkman`, quoteInfo);
  
      return quoteInfo;
    } catch (errors) {
      console.error(errors);
    }
  };