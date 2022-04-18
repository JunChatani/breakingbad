import {ShowService} from "./ShowService";
import { BreakingBadClient } from "../../adapters/breakingBadClient/BreakingBadClient"
// Handler interface

let showservice : ShowService;

function handle(/*list characters/character*/){
        if (showservice === undefined) {
            showservice = new ShowService(new BreakingBadClient());     
        }
//     return showService.getEpisodes();
}