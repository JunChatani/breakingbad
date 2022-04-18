import axios from 'axios';
import {IDrama} from "../../domain/ports/IDrama"
import {episode} from "../../domain/model/episode";
import {breakingBadEpisodeResponse} from "./BreakingBadResponse";

export class BreakingBadClient implements IDrama {
    BASE_URL = 'https://www.breakingbadapi.com/api';

    getEpisodes = async () => {
        try {
            const response: breakingBadEpisodeResponse = await axios.get(`${this.BASE_URL}/episodes`);
            const episodes: episode[] = response.data

            // console.log(response.data)
            // console.log(`GET: return all episodes`, episodes);

            const mappedEpisodes: episode[] = episodes.map(it => <episode>{
                title: it.title,
                season: it.season,
                characters: it.characters
            });
            console.log(mappedEpisodes)
            return mappedEpisodes;
        } catch (errors) {
            throw new Error(`Error is : ${errors}`);
        }
    };
}