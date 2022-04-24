import { episode } from "./../model/episode";

// Port which defines what methods or types should be implemented by external REST client.
export interface IDrama {
  getEpisodes(): Promise<episode[] | null>;
}
