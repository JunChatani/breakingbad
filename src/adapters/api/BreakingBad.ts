import {IDrama} from "../../domain/ports/IDrama"
import axios from 'axios';
import {episode} from "../../domain/model/episode";

export class BreakingBadClient implements IDrama {
    BASE_URL = 'https://www.breakingbadapi.com/api';

    getEpisodes = async () => {
        try {
            const response: episode[] = await axios.get<episode[]>(`${this.BASE_URL}/episodes`);
            if (response === undefined) {
                return null;
            }
            const episodes = response.data;

            console.log(`GET: return all episodes`, episodes);

            return episodes;
        } catch (errors) {
            console.error(errors);
        }
    };
}