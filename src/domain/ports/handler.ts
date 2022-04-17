import {ShowService} from "./ShowService";
import { BreakingBadClient } from "../../adapters/api/BreakingBad"
// Handler interface


handle(list characters/character){
    ShowService showservice = new ShowService(new BreakingBadClient)
    return showService.getEpisodes();
}