import { IDrama } from "../../domain/ports/IDrama"
import axios from 'axios';

export class BreakingBadClient implements IDrama {
    BASE_URL = 'https://www.breakingbadapi.com/api';

    getEpisodes = async () => {
        try {
          const response = await axios.get(`${this.BASE_URL}/episodes`);
          const episodeInfo = response.data;
      
          console.log(`GET: return all episodes`, episodeInfo);
      
          return episodeInfo;
        } catch (errors) {
          console.error(errors);
        }
      };
}