export interface IDrama {
    getEpisodes(): Promise<string | null>;
}