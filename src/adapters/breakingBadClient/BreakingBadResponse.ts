export type breakingBadEpisodeResponse = {
    data: {
        title: string;
        season: number;
        characters: string[];
        id: number;
        episode: number;
        air_date: string;
        series: string;
    }[];
}