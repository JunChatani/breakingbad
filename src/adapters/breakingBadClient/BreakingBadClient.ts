import axios from 'axios';
import {IDrama} from "../../domain/ports/IDrama"
import {breakingBadEpisodeResponse, mapEpisodes} from "./BreakingBadResponse";

export class BreakingBadClient implements IDrama {
    BASE_URL = 'https://www.breakingbadapi.com/api';

    getEpisodes = async () => {
        try {
            const response = await axios.get(`${this.BASE_URL}/episodes`);
            const episodes: breakingBadEpisodeResponse[] = response.data

            // console.log(response.data[0])
            // console.log(`GET: return all episodes`, episodes);

            // console.log(mappedEpisodes)
            return mapEpisodes(episodes);
        } catch (errors) {
            throw new Error(`Error is : ${errors}`);
        }
    };
}       
