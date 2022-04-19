import {IDrama} from "./IDrama";

import {episode} from "../model/episode";


const MAX_FORMAT_NUMBER = 10;

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

    async getFormattedEpisodeListByName(names?: string | string[]): Promise<string[]> {
        const episodes = await this.getEpisodesByName(names);
        return episodes.map((ep) => this.formatEpisode(ep));
    }

    formatEpisode(episode: episode): string {
        const formattedSeason: string = episode.season < MAX_FORMAT_NUMBER ? `S0${episode.season}` : `S${episode.season}`;
        const formattedEpisode: string = episode.episodeNumber < MAX_FORMAT_NUMBER ? `0${episode.episodeNumber}` : `${episode.episodeNumber}`;

        return formattedSeason + formattedEpisode + " - " + episode.title;
    }
};
