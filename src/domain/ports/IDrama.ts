import {episode} from "../model/episode";

export interface IDrama {
    getEpisodes(): Promise<episode[] | null>;
}