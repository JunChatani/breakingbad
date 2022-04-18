import { IDrama } from "./IDrama";
import { episode } from "../model/episode"; 

// Inbound port
export class ShowService {
    client: IDrama;
    constructor(client: IDrama) {
        this.client = client;
    }

    getEpisodes() {
        return this.client.getEpisodes()
            .then(r => r)
            .catch(e => {throw new Error(e)});
    }

    getEpisodeCharacterList(): episode[]{
        return this.getEpisodes();
    }
};

