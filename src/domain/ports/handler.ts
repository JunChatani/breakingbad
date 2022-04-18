import { BreakingBadClient } from "../../adapters/breakingBadClient/BreakingBadClient"
import { ShowService } from "./ShowService";


let showservice : ShowService;

function handle(/*list characters/character*/){
        if (showservice === undefined) {
            showservice = new ShowService(new BreakingBadClient());
        }
}
