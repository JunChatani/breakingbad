import { IDrama } from "./IDrama";
import { episode } from "../model/episode"; 

// Inbound port
export class ShowService {
    client: IDrama;
    constructor(client: IDrama) {
        this.client = client;
    }

    getEpisodes() {
        this.client.getEpisodes();
    }
    getEpisodeCharacterList(): episode[]{
        return this.client.getEpisodes();
    }
};

