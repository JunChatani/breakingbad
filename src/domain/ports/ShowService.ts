import { IDrama } from "./IDrama";
import { episode } from "../model/episode"; 

// Inbound port
export class ShowService {
    client: IDrama;
    constructor(client: IDrama) {
        this.client = client;
    }

    async getEpisodes() : Promise<episode[]>{
        const episodes = await this.client.getEpisodes()
        if (episodes === null) {
            throw new Error("Episodes is null");
        }
        return episodes;
    }

    async getEpisodeCharacterList() {
        const episodes = await this.getEpisodes();
        return episodes.map(episode => episode.characters);
    }
};
