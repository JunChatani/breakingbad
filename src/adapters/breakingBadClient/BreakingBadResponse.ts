import { episode } from "../../domain/model/episode";

export type breakingBadEpisodeResponse = {
  title: string;
  season: string;
  characters: string[];
  episode_id: number;
  episode: string;
  air_date: string;
  series: string;
};

export function mapEpisodes(episodes: breakingBadEpisodeResponse[]): episode[] {
  return episodes.map((it) => ({
    title: it.title,
    season: Number(it.season),
    characters: it.characters,
    episodeNumber: Number(it.episode),
  }));
}
