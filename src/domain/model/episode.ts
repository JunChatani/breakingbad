import { character } from "./character";

const MAX_FORMAT_NUMBER = 10;

export type episode = {
    title : string;
    season : number;
    characters : character[];
    episodeNumber : number;
}

export function formatEpisode(episode: episode): string {
    const formattedSeason: string = episode.season < MAX_FORMAT_NUMBER ? `S0${episode.season}` : `S${episode.season}`;
    const formattedEpisode: string = episode.episodeNumber < MAX_FORMAT_NUMBER ? `0${episode.episodeNumber}` : `${episode.episodeNumber}`;
    return formattedSeason + formattedEpisode + " - " + episode.title;
}