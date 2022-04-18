import {IDrama} from "./IDrama";
import {episode} from "../model/episode";

// Inbound port
export class ShowService {
    client: IDrama;

    constructor(client: IDrama) {
        this.client = client;
    }

    async getEpisodes(): Promise<episode[]> {
        const episodes = await this.client.getEpisodes()
        if (episodes === null) {
            throw new Error("Episodes is null");
        }
        return episodes;
    }

    async getEpisodesByName(names: string | string[]): Promise<episode[]> {
        const episodes = await this.getEpisodes();
        if (typeof names === "string") {
            return episodes.filter(episode => (episode.characters).some(character => character === names))
        } else {
            return episodes.filter(episode => (episode.characters).some(character => names.includes(character)))
        }
    }

    async getEpisodeCharacterList() {
        const episodes = await this.getEpisodes();
        return episodes.map(episode => episode.characters);
    }
};
