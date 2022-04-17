interface IDrama {
    set(key: string, value: string): Promise<string | null>;
    getEpisodes(key: string): Promise<string | null>;
}