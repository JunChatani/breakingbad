import axios from 'axios';

import {IDrama} from "../../domain/ports/IDrama"

import {breakingBadEpisodeResponse, mapEpisodes} from "./BreakingBadResponse";


export class BreakingBadClient implements IDrama {
    BASE_URL = 'https://www.breakingbadapi.com/api';

    getEpisodes = async () => {
        try {
            const episodes : breakingBadEpisodeResponse[] = await axios.get(`${this.BASE_URL}/episodes`).then(resp => resp.data);
            return mapEpisodes(episodes);
        } catch (errors) {
            throw new Error(`Error is : ${errors}`);
        }
    };
}
