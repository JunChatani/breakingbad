import { episode } from "../../domain/model/episode";

export type breakingBadEpisodeResponse = {
        title: string;
        season: number;
        characters: string[];
        id: number;
        episode: number;
        air_date: string;
        series: string;
}

export function mapEpisodes(episodes: breakingBadEpisodeResponse[]) : episode[]{
    return episodes.map(it => <episode>{
        title: it.title,
        season: it.season,
        characters: it.characters
    });
}
