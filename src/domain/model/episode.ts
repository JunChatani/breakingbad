import { character } from "./character";


export type episode = {
    title : string;
    season : number;
    characters : character[];
    episodeNumber : number;
}
