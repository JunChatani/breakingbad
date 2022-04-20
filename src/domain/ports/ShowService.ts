import {IDrama} from "./IDrama";

import {episode, formatEpisode} from "../model/episode";


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

    async getEpisodesByName(names?: string | string[]): Promise<episode[]> {
        const episodes = await this.getEpisodes();
        if (typeof names === "string") {
            return episodes.filter(ep => (ep.characters).some(character => (character === names)));
        } else if (Array.isArray(names) && names.length > 0) {
            return episodes.filter(ep => (names.every(name => (ep.characters.includes(name)))));
        } else {
            return Promise.resolve([]);
        }
    }

    async getEpisodeCharacterList() {
        const episodes = await this.getEpisodes();
        return episodes.map(ep => ep.characters);
    }

    async getFormattedEpisodesByName(names?: string | string[]): Promise<string[]> {
        const episodes = await this.getEpisodesByName(names);
        return episodes.map((ep) => formatEpisode(ep));
    }
}
