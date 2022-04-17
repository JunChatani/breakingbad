import { IDrama } from "./IDrama";
import {episode} from "../model/episode";

export class ShowService {
    client: IDrama;
    constructor(client: IDrama) {
        this.client = client;
    }

    getEpisodes() {
        this.client.getEpisodes()
    }
};

