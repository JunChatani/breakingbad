import {IDrama} from "../../domain/ports/IDrama"
import axios from 'axios';
import {episode} from "../../domain/model/episode";

export class BreakingBadClient implements IDrama {
    BASE_URL = 'https://www.breakingbadapi.com/api';

    getEpisodes = async () => {
        try {
            const response = await axios.get(`${this.BASE_URL}/episodes`);
            const episodes : episode[] = response.data;

            console.log(`GET: return all episodes`, episodes);

            return episodes;
        } catch (errors) {
            throw new Error(`Error is : ${errors}`);
        }
    };
}