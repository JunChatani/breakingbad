import { IDrama } from "./IDrama";

import { episode } from "../model/episode";

export class FakeDrama implements IDrama {
  getEpisodes(): Promise<episode[] | null> {
    // @ts-ignore
    return Promise.resolve(undefined);
  }
}
