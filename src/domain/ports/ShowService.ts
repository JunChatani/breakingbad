import { IDrama } from "./IDrama";

import { episode } from "../model/episode";


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
            return episodes.filter(ep => (ep.characters).some(character => (character === names)));
        } else {
            return episodes.filter(ep => (names.every(name => (ep.characters.includes(name)))))
        }
    }

    async getEpisodeCharacterList() {
        const episodes = await this.getEpisodes();
        return episodes.map(ep => ep.characters);
    }

    string(ep: episode) : string {
        let preSeason : string = "S" + ep.season;
        let preEpisode : string = `${ep.episodeNumber}`;

        if (ep.season < 10) {
            preSeason = "S0" + ep.season;
        }

        if (ep.episodeNumber < 10) {
            preEpisode = "0" + ep.episodeNumber;
        }

        return preSeason + preEpisode + " - " + ep.title;
    }
};
